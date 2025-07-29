import { useState } from "react";
import { Link } from "wouter";
import { Building, CheckCircle, ArrowRight, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function PrivateLimitedCompany() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const benefits = [
    {
      title: "Limited Liability Protection",
      description: "Personal assets of shareholders are protected from business debts and liabilities"
    },
    {
      title: "Separate Legal Identity",
      description: "Company exists as a legal entity separate from its owners, ensuring continuity"
    },
    {
      title: "Easy Fundraising",
      description: "Attract investors, venture capital, and bank loans more easily than other structures"
    },
    {
      title: "Enhanced Credibility",
      description: "Build trust with customers, suppliers, and business partners through corporate structure"
    },
    {
      title: "Tax Benefits",
      description: "Access to various tax deductions and benefits available to private companies"
    },
    {
      title: "Perpetual Succession",
      description: "Company continues to exist even if shareholders change or pass away"
    }
  ];

  const documentsRequired = [
    "PAN Card and Aadhaar Card of all directors and shareholders",
    "Passport-size photographs of directors",
    "Address proof and residence proof (bank statement, utility bill)",
    "Proof of registered office address (rent agreement + NOC/ownership proof + utility bill)",
    "Digital Signature Certificate (DSC) for directors",
    "Director Identification Number (DIN) for directors",
    "Memorandum of Association (MoA) and Articles of Association (AoA)",
    "Bank account details for minimum paid-up capital (₹1 lakh)"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Name Reservation",
      description: "Reserve your company name through MCA portal"
    },
    {
      step: "2", 
      title: "Document Preparation",
      description: "Prepare and file incorporation documents including MoA & AoA"
    },
    {
      step: "3",
      title: "Government Filing",
      description: "Submit application with required fees to Registrar of Companies"
    },
    {
      step: "4",
      title: "Certificate Issuance",
      description: "Receive Certificate of Incorporation and commence business operations"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Building className="h-16 w-16 text-accent-grey mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Private Limited Company Registration in India
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start your business with the most popular corporate structure in India. Get limited liability protection, separate legal identity, and easy access to funding with expert CA guidance.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)}>
            Register Your Company Today
          </Button>
        </div>
      </section>

      {/* What is Private Limited Company Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What is a Private Limited Company?</h2>
          <div className="bg-dark-tertiary rounded-xl p-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              A Private Limited Company is the most preferred business structure for startups and SMEs in India. It offers limited liability protection to shareholders, meaning personal assets are protected from business debts. The company has a separate legal identity, can own property, enter contracts, and sue or be sued in its own name. With a minimum of 2 shareholders and 2 directors, it's ideal for businesses looking to scale and attract investment.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Benefits of Private Limited Company Registration</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-dark-secondary rounded-xl p-6 hover:bg-dark-tertiary transition-all duration-300">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Documents Required for Private Limited Company Registration</h2>
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

      {/* Process Steps Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Private Limited Company Registration Process</h2>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-dark-tertiary rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">What is the minimum capital required?</h3>
              <p className="text-gray-300">The minimum paid-up capital required is ₹1 lakh, with authorized capital of ₹1 lakh or more.</p>
            </div>
            <div className="bg-dark-tertiary rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">How long does registration take?</h3>
              <p className="text-gray-300">Typically 15-20 working days from document submission, subject to government processing.</p>
            </div>
            <div className="bg-dark-tertiary rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Can foreign nationals be directors?</h3>
              <p className="text-gray-300">Yes, foreign nationals can be directors but at least one director must be a resident of India.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-tertiary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Private Limited Company?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get expert CA assistance for your Private Limited Company registration. We handle all compliance requirements and ensure smooth incorporation.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)}>
            Book Free Consultation
          </Button>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultService="private-limited-company"
      />
    </div>
  );
}