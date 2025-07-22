import { useState } from "react";
import { Link } from "wouter";
import { Utensils, CheckCircle, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function FssaiLicense() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const licenseTypes = [
    {
      type: "FSSAI - Basic Registration",
      criteria: "Food Business having turnover up to ₹12 Lakhs",
      icon: "🏪"
    },
    {
      type: "FSSAI - State License", 
      criteria: "Food Business having Turnover above ₹12 Lakhs but not exceeding ₹20 Crores",
      icon: "🏢"
    },
    {
      type: "FSSAI - Central License",
      criteria: "Food Business having Turnover exceeding ₹20 Crores",
      icon: "🏭"
    }
  ];

  const benefits = [
    {
      title: "Legal Compliance",
      description: "Ensures your food business operates within FSSAI Act, 2006 guidelines"
    },
    {
      title: "Consumer Trust", 
      description: "Builds customer confidence in your food products and services"
    },
    {
      title: "Growth and Market Opportunities",
      description: "Opens doors to larger markets and business expansion opportunities"
    },
    {
      title: "Hygiene and Safety Standards",
      description: "Maintains high standards of food safety and hygiene in operations"
    }
  ];

  const documentsRequired = [
    "Aadhaar Card",
    "PAN Card", 
    "Photograph",
    "Bank Account Details",
    "Business Constitution Certificate",
    "Proof of Premises",
    "List of Food Details"
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Utensils className="h-16 w-16 text-accent-grey mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            FSSAI Food License Registration in India
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get your FSSAI Food License to legally operate your food business in India. It's like a permission or certificate that allows small businesses to legally operate in the food sector while ensuring food safety and hygiene compliance.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)}>
            Get Your Food License Today
          </Button>
        </div>
      </section>

      {/* What is FSSAI Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What is FSSAI Food License?</h2>
          <div className="bg-dark-tertiary rounded-xl p-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              FSSAI (Food Safety and Standards Authority of India) License is a permission or certificate that allows businesses to legally operate in the food sector in India. The main purpose is to ensure that the food you sell is safe, hygienic, and complies with the FSSAI Act, 2006. This license is mandatory for all food businesses including manufacturing, processing, distribution, and retail.
            </p>
          </div>
        </div>
      </section>

      {/* License Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Types of FSSAI Food License</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {licenseTypes.map((license, index) => (
              <div key={index} className="bg-dark-secondary rounded-xl p-8 hover:bg-dark-tertiary transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-6">{license.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{license.type}</h3>
                  <div className="bg-dark-tertiary rounded-lg p-4">
                    <p className="text-gray-300">{license.criteria}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Benefits of FSSAI Food License</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-dark-tertiary rounded-xl p-6 hover:bg-dark-hover transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-grey rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Documents Required for FSSAI License</h2>
          <div className="bg-dark-secondary rounded-xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documentsRequired.map((document, index) => (
                <div key={index} className="bg-dark-tertiary rounded-xl p-6 hover:bg-dark-hover transition-all duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{document}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">How We Help You Get FSSAI License</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Document Collection</h3>
              <p className="text-gray-300">We help you gather all required documents and ensure they meet FSSAI standards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Application Filing</h3>
              <p className="text-gray-300">Our experts file your application with the appropriate FSSAI portal based on your business turnover</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">License Approval</h3>
              <p className="text-gray-300">Track application status and receive your FSSAI license certificate for legal food business operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-tertiary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Your FSSAI Food License?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your food business legally with our expert FSSAI license assistance. Ensure food safety compliance and build customer trust from day one.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)}>
            Book Free Consultation
          </Button>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultService="fssai-license"
      />
    </div>
  );
}