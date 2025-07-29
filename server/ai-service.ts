import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

interface RecommendationRequest {
  businessType: string;
  businessStage: string;
  currentChallenges: string;
  timeframe: string;
  budget: string;
  specificNeeds?: string;
}

interface ServiceRecommendation {
  serviceName: string;
  serviceRoute: string;
  priority: "high" | "medium" | "low";
  reasoning: string;
  estimatedCost: string;
  timeline: string;
  urgency: string;
}

interface RecommendationResponse {
  recommendations: ServiceRecommendation[];
  summary: string;
  nextSteps: string[];
}

export async function getServiceRecommendations(
  request: RecommendationRequest
): Promise<RecommendationResponse> {
  try {
    const prompt = `
You are an expert Chartered Accountant advisor helping businesses find the right services. Based on the client information below, recommend the most suitable CA services from this list:

AVAILABLE SERVICES:
1. Business Registration (Private Ltd, LLP, OPC, Partnership, etc.) - /services/business-registration
2. GST & Indirect Taxes (Registration, Filing, Compliance) - /services/gst-indirect-taxes  
3. Licenses & Registrations (Trade License, FSSAI, Udyam, etc.) - /services/licenses-registrations
4. NGO Services (Section 8, Trust, NGO Registration) - /services/ngo-services
5. Accounting & Taxing (Bookkeeping, Tax Filing, TDS) - /services/accounting-taxing
6. Mandatory Annual Filings (ROC Filings, Compliance) - /services/mandatory-annual-filings
7. Changes in Private Limited Company (Director changes, Capital increase) - /services/private-company-changes
8. Changes in LLP (Partner changes, Agreement modifications) - /services/llp-changes
9. Employee Benefits (PF, ESI, Payroll) - /services/employee-benefits

CLIENT DETAILS:
- Business Type: ${request.businessType}
- Business Stage: ${request.businessStage}
- Current Challenges: ${request.currentChallenges}
- Timeframe: ${request.timeframe}
- Budget Range: ${request.budget}
- Specific Needs: ${request.specificNeeds || 'Not specified'}

Provide recommendations in JSON format with this structure:
{
  "recommendations": [
    {
      "serviceName": "Service Name",
      "serviceRoute": "/services/route-name",
      "priority": "high|medium|low",
      "reasoning": "Why this service is recommended for their situation",
      "estimatedCost": "Cost range in INR",
      "timeline": "Expected completion time",
      "urgency": "Immediate/Within 30 days/Can wait"
    }
  ],
  "summary": "Brief overview of their situation and recommended approach",
  "nextSteps": ["Step 1", "Step 2", "Step 3"]
}

Focus on practical, actionable recommendations based on their business stage and challenges. Prioritize compliance and legal requirements first, then growth-enabling services.
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are an expert CA consultant providing personalized service recommendations. Always respond with valid JSON format.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
      max_tokens: 1500,
    });

    const result = JSON.parse(response.choices[0].message.content || "{}");
    
    // Validate and ensure proper structure
    if (!result.recommendations || !Array.isArray(result.recommendations)) {
      throw new Error("Invalid response structure from AI");
    }

    return result as RecommendationResponse;
  } catch (error) {
    console.error("AI Service Recommendation Error:", error);
    
    // If OpenAI API fails, provide rule-based fallback recommendations
    console.log("🔄 Falling back to rule-based recommendations");
    return getFallbackRecommendations(request);
  }
}

export async function analyzeBusinessNeeds(description: string): Promise<{
  businessType: string;
  suggestedStage: string;
  keyAreas: string[];
  urgentNeeds: string[];
}> {
  try {
    const prompt = `
Analyze this business description and extract key information:

"${description}"

Provide analysis in JSON format:
{
  "businessType": "e.g., E-commerce, Manufacturing, Services, SaaS, etc.",
  "suggestedStage": "Idea/Startup/Early Stage/Growing/Established",
  "keyAreas": ["area1", "area2", "area3"],
  "urgentNeeds": ["need1", "need2"]
}

Focus on identifying business structure needs, compliance requirements, and growth stage indicators.
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are a business analyst specializing in Indian business compliance and structure requirements.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      response_format: { type: "json_object" },
      temperature: 0.5,
      max_tokens: 500,
    });

    return JSON.parse(response.choices[0].message.content || "{}");
  } catch (error) {
    console.error("Business Analysis Error:", error);
    
    // Fallback to simple keyword-based analysis
    console.log("🔄 Using fallback business analysis");
    return getFallbackBusinessAnalysis(description);
  }
}

// Fallback recommendation system when AI is unavailable
function getFallbackRecommendations(request: RecommendationRequest): RecommendationResponse {
  const recommendations: ServiceRecommendation[] = [];
  
  // Rule-based recommendations based on business stage and type
  if (request.businessStage === "idea" || request.businessStage === "startup") {
    recommendations.push({
      serviceName: "Business Registration",
      serviceRoute: "/services/business-registration",
      priority: "high",
      reasoning: "Essential first step for any new business - establishes legal entity and enables banking, contracts, and compliance.",
      estimatedCost: "₹15,000 - ₹25,000",
      timeline: "7-15 days",
      urgency: "Immediate - Required before business operations"
    });
  }

  // GST registration for most business types
  if (["ecommerce", "manufacturing", "retail", "services"].includes(request.businessType)) {
    recommendations.push({
      serviceName: "GST & Indirect Taxes",
      serviceRoute: "/services/gst-indirect-taxes",
      priority: "high",
      reasoning: "Mandatory for businesses with turnover above ₹20 lakhs, essential for input tax credit and compliance.",
      estimatedCost: "₹5,000 - ₹10,000",
      timeline: "3-7 days",
      urgency: "Within 30 days of business start"
    });
  }

  // Licenses based on business type
  if (request.businessType === "food") {
    recommendations.push({
      serviceName: "Licenses & Registrations",
      serviceRoute: "/services/licenses-registrations",
      priority: "high",
      reasoning: "FSSAI license is mandatory for food businesses - required before operations and marketing.",
      estimatedCost: "₹3,000 - ₹15,000",
      timeline: "15-30 days",
      urgency: "Immediate - Legal requirement"
    });
  }

  // NGO specific recommendations
  if (request.businessType === "ngo") {
    recommendations.push({
      serviceName: "NGO Services",
      serviceRoute: "/services/ngo-services",
      priority: "high",
      reasoning: "Section 8 company or Trust registration provides tax exemptions and credibility for non-profit activities.",
      estimatedCost: "₹20,000 - ₹40,000",
      timeline: "30-45 days",
      urgency: "Required for legal operations and funding"
    });
  }

  // Accounting for growing businesses
  if (["early", "growing", "established"].includes(request.businessStage)) {
    recommendations.push({
      serviceName: "Accounting & Taxing",
      serviceRoute: "/services/accounting-taxing",
      priority: "medium",
      reasoning: "Professional bookkeeping and tax filing ensures compliance and provides financial clarity for business decisions.",
      estimatedCost: "₹10,000 - ₹25,000 annually",
      timeline: "Ongoing service",
      urgency: "Can start within 3 months"
    });
  }

  // Employee benefits for growing businesses
  if (request.businessStage === "growing" || request.businessStage === "established") {
    recommendations.push({
      serviceName: "Employee Benefits",
      serviceRoute: "/services/employee-benefits",
      priority: "medium",
      reasoning: "PF and ESI registration required when hiring employees - ensures legal compliance and employee satisfaction.",
      estimatedCost: "₹5,000 - ₹15,000",
      timeline: "7-15 days",
      urgency: "Required before hiring employees"
    });
  }

  // Sort by priority
  recommendations.sort((a, b) => {
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    return priorityOrder[b.priority] - priorityOrder[a.priority];
  });

  return {
    recommendations: recommendations.slice(0, 4), // Limit to top 4
    summary: `Based on your ${request.businessType} business in ${request.businessStage} stage, we recommend starting with essential registrations and compliance requirements. These services will establish a strong legal foundation for your business operations.`,
    nextSteps: [
      "Review the recommended services and their priorities",
      "Start with high-priority registrations first",
      "Prepare required documents for applications",
      "Schedule consultation for detailed guidance",
      "Set up ongoing compliance processes"
    ]
  };
}

function getFallbackBusinessAnalysis(description: string): {
  businessType: string;
  suggestedStage: string;
  keyAreas: string[];
  urgentNeeds: string[];
} {
  const lowerDesc = description.toLowerCase();
  
  // Simple keyword-based business type detection
  let businessType = "services";
  if (lowerDesc.includes("ecommerce") || lowerDesc.includes("online store") || lowerDesc.includes("selling online")) {
    businessType = "ecommerce";
  } else if (lowerDesc.includes("manufacturing") || lowerDesc.includes("factory") || lowerDesc.includes("production")) {
    businessType = "manufacturing";
  } else if (lowerDesc.includes("food") || lowerDesc.includes("restaurant") || lowerDesc.includes("catering")) {
    businessType = "food";
  } else if (lowerDesc.includes("ngo") || lowerDesc.includes("non-profit") || lowerDesc.includes("charity")) {
    businessType = "ngo";
  } else if (lowerDesc.includes("retail") || lowerDesc.includes("shop") || lowerDesc.includes("store")) {
    businessType = "retail";
  } else if (lowerDesc.includes("tech") || lowerDesc.includes("software") || lowerDesc.includes("app")) {
    businessType = "tech";
  }

  // Simple stage detection
  let suggestedStage = "startup";
  if (lowerDesc.includes("idea") || lowerDesc.includes("planning") || lowerDesc.includes("want to start")) {
    suggestedStage = "idea";
  } else if (lowerDesc.includes("growing") || lowerDesc.includes("expand") || lowerDesc.includes("scaling")) {
    suggestedStage = "growing";
  } else if (lowerDesc.includes("established") || lowerDesc.includes("years") || lowerDesc.includes("mature")) {
    suggestedStage = "established";
  }

  return {
    businessType,
    suggestedStage,
    keyAreas: ["Business Registration", "Tax Compliance", "Legal Requirements"],
    urgentNeeds: ["Company Formation", "GST Registration"]
  };
}