import { useState } from "react";
import { Link } from "wouter";
import { Users, CheckCircle, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function NGORegistration() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const benefits = [
    {
      title: "Promotes Social Welfare",
      description: "Supports community development and addresses social issues"
    },
    {
      title: "Government Grants and FCRA Eligibility",
      description: "Access to government funding and foreign contributions with FCRA registration"
    },
    {
      title: "Tax Exemptions Under 12A and 80G",
      description: "Income tax benefits and donors can claim deductions"
    },
    {
      title: "Enhanced Credibility",
      description: "Legal structure builds public trust and organizational credibility"
    },
    {
      title: "Minimal Capital Investment",
      description: "Can be formed with minimal or no capital requirement"
    },
    {
      title: "Civic Engagement",
      description: "Encourages volunteerism and community participation"
    },
    {
      title: "Partnership Opportunities",
      description: "Access to collaborations with government and international bodies"
    }
  ];

  const documentsRequired = [
    "PAN and Aadhaar of all founding members",
    "Passport-size photographs of members",
    "Address proof and ID proof of members",
    "Proof of registered office address (utility bill + rent agreement/NOC)",
    "Memorandum of Association (MoA) and Rules & Regulations or Trust Deed",
    "Digital Signature Certificate (DSC) (if registering as a Section 8 Company)",
    "Board resolution or consent letter (if applicable)",
    "Covering letter and affidavit/declaration by members",
    "Registration fee and stamp duty receipt (as applicable)"
  ];

  const applicability = [
    "Individuals or groups aiming to work for social justice, education, or healthcare",
    "Philanthropic or volunteer-driven community initiatives",
    "Organizations seeking legal recognition for charitable activities",
    "Institutions involved in environmental conservation and sustainable development",
    "Social enterprises and foundations looking for tax exemptions and funding access",
    "Advocacy groups working on policy and social reform"
  ];

  const registrationTypes = [
    {
      type: "Society Registration",
      description: "Under Societies Registration Act, 1860 for membership-based organizations"
    },
    {
      type: "Trust Registration", 
      description: "Under Indian Trusts Act, 1882 for asset-based charitable organizations"
    },
    {
      type: "Section 8 Company",
      description: "Under Companies Act, 2013 for corporate structure with charitable objectives"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Choose Structure",
      description: "Select appropriate legal structure (Society/Trust/Section 8)"
    },
    {
      step: "2", 
      title: "Document Preparation",
      description: "Prepare governing documents and collect member information"
    },
    {
      step: "3",
      title: "Registration Filing",
      description: "Submit application to appropriate registering authority"
    },
    {
      step: "4",
      title: "Compliance Setup",
      description: "Obtain PAN, 12A, 80G, and FCRA registrations as needed"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Globe className="h-16 w-16 text-accent-grey mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            NGO Registration in India
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create meaningful social impact! Register your NGO for charitable activities, community development, and social welfare with legal recognition and tax benefits.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)}>
            Register NGO Today
          </Button>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What is NGO Registration?</h2>
          <div className="bg-dark-tertiary rounded-xl p-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              An NGO (Non-Governmental Organization) is a legally constituted organization that operates independently from the government, typically aiming to address social, cultural, environmental, or humanitarian issues. NGOs may function on a local, national, or international level and can be registered as a Trust, Society, or Section 8 Company under Indian law, depending on their nature and scope of activities. NGO registration provides legal recognition, tax benefits, and credibility for social impact initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Merits of NGO Registration</h2>
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

      {/* Registration Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Types of NGO Registration</h2>
          <div className="grid gap-8">
            {registrationTypes.map((type, index) => (
              <div key={index} className="bg-dark-tertiary rounded-xl p-8 hover:bg-dark-hover transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-accent-grey rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{type.type}</h3>
                    <p className="text-lg text-gray-300">{type.description}</p>
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Documents Required for NGO Registration</h2>
          <div className="bg-dark-secondary rounded-xl p-8">
            <div className="grid gap-4">
              {documentsRequired.map((document, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-dark-tertiary rounded-lg">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Who Should Choose NGO Registration?</h2>
          <p className="text-lg text-gray-300 mb-8 text-center">
            NGO registration is suitable for various social impact initiatives:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applicability.map((item, index) => (
              <div key={index} className="bg-dark-tertiary rounded-xl p-6 hover:bg-dark-hover transition-all duration-300">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">NGO Registration Process</h2>
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

      {/* Additional Registrations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Additional Registrations for NGOs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-dark-tertiary rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Tax Registrations</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  12A Registration for tax exemption
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  80G Certificate for donor deductions
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  PAN and TAN registration
                </li>
              </ul>
            </div>
            
            <div className="bg-dark-tertiary rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">FCRA Registration</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Foreign Contribution Regulation Act
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Required for receiving foreign funds
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Annual compliance requirements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-tertiary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Create Social Impact?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your NGO journey with proper legal registration. Get expert guidance for choosing the right structure, obtaining tax benefits, and ensuring compliance for your social mission.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)}>
            Book Free Consultation
          </Button>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultService="ngo-registration"
      />
    </div>
  );
}