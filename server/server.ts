import nodemailer from "nodemailer";

import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { insertBookingSchema } from "@shared/schema";
import { getServiceRecommendations, analyzeBusinessNeeds } from "./ai-service";

export async function registerRoutes(app: Express): Promise<Server> {
  // SMTP Configuration for Brevo with updated credentials
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
      user: "9284b3002@smtp-brevo.com",
      pass: "C9QhvHxbLpTn865P",
    },
    tls: {
      ciphers: 'SSLv3'
    }
  });

  // Optional: verify connection at app startup for easier debugging
  transporter.verify(function (error, success) {
    if (error) {
      console.error("❌ Brevo SMTP connection failed:", error);
    } else {
      console.log("✅ Brevo SMTP server is ready to send messages");
    }
  });

  app.post("/api/book-consultation", async (req, res) => {
    try {
      const bookingData = insertBookingSchema.parse(req.body);

      const meetLink = `https://meet.jit.si/${Math.random().toString(36).substring(2, 10)}`;

      console.log("📅 NEW CONSULTATION BOOKING:");
      console.log("════════════════════════════════════");
      console.log(`👤 Name: ${bookingData.fullName}`);
      console.log(`📧 Email: ${bookingData.email}`);
      console.log(`📱 Phone: ${bookingData.phone}`);
      console.log(`🏢 Service: ${bookingData.service}`);
      console.log(`📅 Date: ${bookingData.preferredDate}`);
      console.log(`⏰ Time: ${bookingData.preferredTime}`);
      console.log(`💬 Message: ${bookingData.message || 'No message provided'}`);
      console.log(`🔗 Meeting Link: ${meetLink}`);
      console.log("════════════════════════════════════");

      const mailOptionsUser = {
        from: "recruitment@dynish.com",
        to: bookingData.email,
        subject: "Appointment Confirmation - Your Booking Details",
        html: `
          <h2>Hi ${bookingData.fullName}, your appointment is confirmed!</h2>
          <p><b>Service:</b> ${bookingData.service}</p>
          <p><b>Date:</b> ${bookingData.preferredDate}</p>
          <p><b>Time:</b> ${bookingData.preferredTime}</p>
          <p><b>Your message:</b> ${bookingData.message || 'N/A'}</p>
          <p><b>Meet Link:</b> <a href="${meetLink}">${meetLink}</a></p>
          <br>
          <p>Thank you for choosing Register A Startup CA!</p>
        `,
      };

      const mailOptionsAdmin = {
        from: "recruitment@dynish.com",
        to: "pottipatisaiprathap1234@gmail.com",
        subject: "New Appointment Booking (Client)",
        html: `
          <h2>New appointment booked</h2>
          <p><b>Name:</b> ${bookingData.fullName}</p>
          <p><b>Email:</b> ${bookingData.email}</p>
          <p><b>Phone:</b> ${bookingData.phone}</p>
          <p><b>Service:</b> ${bookingData.service}</p>
          <p><b>Date:</b> ${bookingData.preferredDate}</p>
          <p><b>Time:</b> ${bookingData.preferredTime}</p>
          <p><b>Message:</b> ${bookingData.message || 'N/A'}</p>
          <p><b>Meet Link:</b> <a href="${meetLink}">${meetLink}</a></p>
        `,
      };

      // Send email
      try {
        const userInfo = await transporter.sendMail(mailOptionsUser);
        const adminInfo = await transporter.sendMail(mailOptionsAdmin);
        console.log("✅ Emails sent (user):", userInfo.messageId);
        console.log("✅ Emails sent (admin):", adminInfo.messageId);
      } catch (mailError) {
        console.error("❌ Failed to send notification emails:", mailError);
      }

      res.json({
        success: true,
        message: "Consultation booked successfully! We'll contact you soon.",
        meetLink,
        details: {
          name: bookingData.fullName,
          service: bookingData.service,
          date: bookingData.preferredDate,
          time: bookingData.preferredTime,
          meetLink: meetLink,
        },
      });

    } catch (error) {
      console.error("❌ Booking error:", error);

      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: "Invalid booking data",
          errors: error.errors,
        });
      }

      res.status(500).json({
        message: "Failed to book consultation. Please try again.",
      });
    }
  });

  // AI Service Recommendation API
  app.post("/api/ai-recommendations", async (req, res) => {
    try {
      const { businessType, businessStage, currentChallenges, timeframe, budget, specificNeeds } = req.body;

      if (!businessType || !businessStage || !currentChallenges) {
        return res.status(400).json({
          message: "Missing required fields: businessType, businessStage, and currentChallenges are required",
        });
      }

      console.log("🤖 AI RECOMMENDATION REQUEST:");
      console.log("═══════════════════════════════");
      console.log(`🏢 Business Type: ${businessType}`);
      console.log(`📊 Business Stage: ${businessStage}`);
      console.log(`🎯 Challenges: ${currentChallenges}`);
      console.log(`⏰ Timeframe: ${timeframe || 'Not specified'}`);
      console.log(`💰 Budget: ${budget || 'Not specified'}`);
      console.log("═══════════════════════════════");

      const recommendations = await getServiceRecommendations({
        businessType,
        businessStage,
        currentChallenges,
        timeframe: timeframe || "flexible",
        budget: budget || "flexible",
        specificNeeds,
      });

      console.log(`✅ Generated ${recommendations.recommendations.length} recommendations`);

      res.json(recommendations);
    } catch (error) {
      console.error("❌ AI Recommendation Error:", error);
      res.status(500).json({
        message: "Failed to generate AI recommendations. Please try again.",
      });
    }
  });

  // Business Analysis API
  app.post("/api/analyze-business", async (req, res) => {
    try {
      const { description } = req.body;

      if (!description || description.trim().length < 10) {
        return res.status(400).json({
          message: "Please provide a meaningful business description (at least 10 characters)",
        });
      }

      console.log("🔍 BUSINESS ANALYSIS REQUEST:");
      console.log("════════════════════════════");
      console.log(`📝 Description: ${description.substring(0, 100)}...`);
      console.log("════════════════════════════");

      const analysis = await analyzeBusinessNeeds(description);

      console.log(`✅ Business analyzed: ${analysis.businessType} - ${analysis.suggestedStage}`);

      res.json(analysis);
    } catch (error) {
      console.error("❌ Business Analysis Error:", error);
      res.status(500).json({
        message: "Failed to analyze business description. Please try again.",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
