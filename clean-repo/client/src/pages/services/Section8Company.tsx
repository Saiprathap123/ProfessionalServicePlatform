import { useState } from "react";
import { Link } from "wouter";
import { Heart, CheckCircle, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function Section8Company() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const benefits = [
    {
      title: "Tax Exemptions Under 12AA and 80G",
      description: "Income tax exemptions and donors can claim deductions under 80G"
    },
    {
      title: "No Minimum Capital Requirement",
      description: "Can be formed without any minimum capital investment"
    },
    {
      title: "Separate Legal Entity",
      description: "Perpetual existence independent of members with legal recognition"
    },
    {
      title: "Enhanced Credibility",
      description: "Better trust and credibility due to regulatory compliance"
    },
    {
      title: "No 'Limited' Suffix Required",
      description: "Can operate without 'Private Limited' or 'Limited' in the name"
    },
    {
      title: "Increased Donor Confidence",
      description: "Transparency and governance build donor trust and attract funding"
    }
  ];

  const documentsRequired = [
    "Memorandum of Association (MoA) and Articles of Association (AoA)",
    "Declaration by directors and subscribers",
    "Proof of office address (utility bills, rent agreement, NOC)",
    "Digital Signature Certificate (DSC) of proposed directors",
    "Director Identification Number (DIN) for all directors",
    "Identity and address proof of all members",
    "Consent of Nominee (Form INC-3)",
    "Resolution from promoter company (if applicable)"
  ];

  const applicability = [
    "Organizations engaged in charitable, educational, and social welfare activities",
    "Non-profits seeking a structured legal identity",
    "Entities aiming to receive tax-deductible donations",
    "Groups involved in cultural, scientific, or environmental initiatives",
    "Startups or foundations focused on public good and community service",
    "Religious or spiritual organizations"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Name Approval",
      description: "Get company name approved reflecting charitable objectives"
    },
    {
      step: "2", 
      title: "Object Approval",
      description: "Obtain approval for charitable objects from MCA"
    },
    {
      step: "3",
      title: "Document Filing",
      description: "File incorporation documents with special provisions"
    },
    {
      step: "4",
      title: "Section 8 License",
      description: "Receive Section 8 Company license and commence operations"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="h-16 w-16 text-accent-grey mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Section 8 Company Registration in India
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Make a difference with purpose! Register a Section 8 Company for charitable, educational, or social welfare activities with tax benefits and enhanced credibility.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)}>
            Register Section 8 Company Today
          </Button>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What is a Section 8 Company?</h2>
          <div className="bg-dark-tertiary rounded-xl p-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              A Section 8 Company is a non-profit organization registered under the Companies Act, 2013. Its primary objective is to promote charitable activities, art, science, education, social welfare, and other similar purposes. The profits earned by a Section 8 Company are reinvested in furthering its objectives and not distributed among its members. This structure provides the benefits of a company while maintaining the charitable nature of the organization.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Merits of Section 8 Company</h2>
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Documents Required for Section 8 Company Registration</h2>
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Who Should Choose Section 8 Company?</h2>
          <p className="text-lg text-gray-300 mb-8 text-center">
            A Section 8 Company is suitable for various charitable and social initiatives:
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Section 8 Company Registration Process</h2>
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

      {/* Key Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Features of Section 8 Company</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-dark-secondary rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Charitable Objectives</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Promotion of education, art, science
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Social welfare and charitable activities
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Environmental protection and conservation
                </li>
              </ul>
            </div>
            
            <div className="bg-dark-secondary rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Compliance Requirements</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Annual filing with MCA
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Audit by chartered accountant
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  No profit distribution to members
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-tertiary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Make a Social Impact?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your charitable organization with Section 8 Company registration. Get tax benefits, legal recognition, and enhanced credibility for your social mission.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)}>
            Book Free Consultation
          </Button>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultService="section-8-company"
      />
    </div>
  );
}