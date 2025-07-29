import { useState } from "react";
import { Link } from "wouter";
import { Shield, CheckCircle, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function TrustRegistration() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const benefits = [
    {
      title: "Legal Protection of Assets",
      description: "Safeguards trust property and assets with legal recognition"
    },
    {
      title: "Income Tax Exemptions",
      description: "Eligible for tax exemptions under sections 12A and 80G"
    },
    {
      title: "Charitable Involvement",
      description: "Supports community development and public welfare activities"
    },
    {
      title: "Family Wealth Management",
      description: "Helps in managing and preserving family wealth across generations"
    },
    {
      title: "Simplified Asset Transfer",
      description: "Avoids probate and simplifies asset transfer processes"
    },
    {
      title: "Public Welfare Support",
      description: "Contributes to education, health, and social sectors"
    },
    {
      title: "Tax-Efficient Planning",
      description: "Facilitates tax-efficient estate and succession planning"
    }
  ];

  const documentsRequired = [
    "Trust Deed with applicable stamp duty",
    "Two passport-size photographs of all parties involved",
    "PAN cards of the trustor, trustees, and beneficiaries",
    "Address proof and identity proof of individuals involved",
    "No Objection Certificate (NOC) for using the premises (if applicable)",
    "Utility bill as proof of trust's registered office address",
    "Authentication from partners (if applicable)",
    "12A and 80G registration certificates (if applying for tax benefits)"
  ];

  const applicability = [
    "Charitable organizations focused on education, health, or public welfare",
    "Individuals aiming to protect and distribute family assets",
    "Non-profits seeking legal recognition and tax benefits",
    "Religious or cultural institutions",
    "Groups establishing legacy foundations or philanthropic initiatives",
    "Estate planning for wealthy families"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Trust Deed Preparation",
      description: "Draft comprehensive trust deed outlining objectives and terms"
    },
    {
      step: "2", 
      title: "Document Collection",
      description: "Gather all required documents from trustees and beneficiaries"
    },
    {
      step: "3",
      title: "Registration Filing",
      description: "File application with Sub-Registrar with stamp duty payment"
    },
    {
      step: "4",
      title: "Trust Certificate",
      description: "Receive Trust Registration Certificate and commence operations"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="h-16 w-16 text-accent-grey mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trust Registration in India
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Protect and preserve your legacy! Register a Trust for charitable activities, family wealth management, and secure asset protection with legal recognition and tax benefits.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)}>
            Register Trust Today
          </Button>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What is Trust Registration?</h2>
          <div className="bg-dark-tertiary rounded-xl p-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              A Trust is a legal arrangement where a person (trustor) transfers property or assets to another (trustee) for the benefit of a third party (beneficiary). Trusts are primarily established for charitable, religious, or private purposes and are governed by the Indian Trusts Act, 1882 for private trusts, and by various state laws for public trusts. Trust registration provides legal recognition and ensures compliance with applicable laws while offering tax benefits and asset protection.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Merits of Trust Registration</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-dark-secondary rounded-xl p-6 hover:bg-dark-tertiary transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-grey rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-white" />
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Documents Required for Trust Registration</h2>
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Who Should Choose Trust Registration?</h2>
          <p className="text-lg text-gray-300 mb-8 text-center">
            Trust registration is suitable for various purposes:
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Trust Registration Process</h2>
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

      {/* Types of Trusts Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Types of Trusts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-dark-secondary rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Public/Charitable Trusts</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Benefit the general public
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Educational, medical, religious purposes
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Eligible for tax exemptions
                </li>
              </ul>
            </div>
            
            <div className="bg-dark-secondary rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Private Trusts</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Benefit specific individuals or families
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Asset protection and wealth management
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Estate planning and succession
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-tertiary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Establish Your Trust?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Secure your assets and create a lasting impact with Trust registration. Get expert guidance for charitable trusts, family wealth management, and legal asset protection.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)}>
            Book Free Consultation
          </Button>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultService="trust-registration"
      />
    </div>
  );
}