import { useState } from "react";
import { Link } from "wouter";
import { Handshake, CheckCircle, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function PartnershipFirm() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const benefits = [
    {
      title: "Simple and Cost-Effective Formation",
      description: "Easy registration process with minimal compliance requirements"
    },
    {
      title: "Diverse Skill Sets and Expertise",
      description: "Pool together different skills and expertise from multiple partners"
    },
    {
      title: "Shared Financial Responsibilities",
      description: "Distribute financial risks and capital requirements among partners"
    },
    {
      title: "Tax Benefits",
      description: "Profits are taxed at individual partner rates, not corporate rates"
    },
    {
      title: "Flexible Decision-Making",
      description: "Quick decisions with mutual consent of partners"
    },
    {
      title: "Increased Access to Capital",
      description: "Multiple partners can contribute capital and resources"
    }
  ];

  const documentsRequired = [
    "Partnership Deed (signed by all partners)",
    "PAN and Aadhaar of all partners",
    "Passport-size photographs of partners",
    "Proof of business address (rent agreement + NOC/utility bill)",
    "Digital Signature Certificate (DSC)",
    "Application form to Registrar of Firms",
    "Address proof of all partners",
    "Bank account opening documents"
  ];

  const applicability = [
    "Small businesses seeking flexibility and low compliance costs",
    "Professionals or family businesses pooling resources",
    "Ventures with shared responsibilities and risk distribution",
    "Businesses where trust among partners is crucial for decision-making",
    "Service-oriented businesses with multiple skill sets",
    "Local businesses with community focus"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Partnership Deed",
      description: "Draft comprehensive partnership deed outlining terms and conditions"
    },
    {
      step: "2", 
      title: "Partner Documentation",
      description: "Collect all required documents from partners"
    },
    {
      step: "3",
      title: "Registration Application",
      description: "File application with Registrar of Firms"
    },
    {
      step: "4",
      title: "Certificate Issuance",
      description: "Receive Certificate of Registration and commence business"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Handshake className="h-16 w-16 text-accent-grey mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Partnership Firm Registration in India
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join forces with trusted partners! Register a Partnership Firm for shared responsibilities, pooled resources, and flexible business operations with minimal compliance.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)}>
            Register Partnership Firm Today
          </Button>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What is a Partnership Firm?</h2>
          <div className="bg-dark-tertiary rounded-xl p-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              A Partnership Firm is a business structure where two or more individuals join together to operate a business and share profits in an agreed ratio. It is governed by the Indian Partnership Act, 1932, and is based on a partnership deed that outlines roles, responsibilities, and profit-sharing terms among partners. This structure offers simplicity, flexibility, and shared expertise while maintaining personal relationships in business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Merits of Partnership Firm</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-dark-secondary rounded-xl p-6 hover:bg-dark-tertiary transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-grey rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Documents Required for Partnership Firm Registration</h2>
          <div className="bg-dark-tertiary rounded-xl p-8">
            <div className="grid gap-4">
              {documentsRequired.map((document, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-dark-hover rounded-lg">
                  <div className="w-8 h-8 bg-accent-grey rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-gray-300">{document}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applicability Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Who Should Choose Partnership Firm?</h2>
          <p className="text-lg text-gray-300 mb-8 text-center">
            A Partnership Firm is ideal for various collaborative business ventures:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applicability.map((item, index) => (
              <div key={index} className="bg-dark-secondary rounded-xl p-6 hover:bg-dark-tertiary transition-all duration-300">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-white">{item}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Partnership Firm Registration Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-dark-secondary rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">What is the minimum number of partners required?</h3>
              <p className="text-gray-300">Minimum 2 partners are required, with a maximum of 20 partners for general business and 10 for banking business.</p>
            </div>
            <div className="bg-dark-secondary rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Is registration mandatory for partnership firms?</h3>
              <p className="text-gray-300">Registration is not mandatory but highly recommended for legal recognition and to avail various benefits.</p>
            </div>
            <div className="bg-dark-secondary rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">What is the liability of partners?</h3>
              <p className="text-gray-300">Partners have unlimited liability, meaning personal assets can be used to settle business debts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-tertiary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Form Your Partnership?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your collaborative business venture with expert CA guidance. We'll help you draft partnership agreements and handle all registration formalities.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)}>
            Book Free Consultation
          </Button>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultService="partnership-firm"
      />
    </div>
  );
}