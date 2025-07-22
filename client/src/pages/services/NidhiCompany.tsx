import { useState } from "react";
import { Link } from "wouter";
import { Coins, CheckCircle, Users2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function NidhiCompany() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const benefits = [
    {
      title: "Encourages Savings and Self-Reliance",
      description: "Promotes thrift and savings habits among community members"
    },
    {
      title: "Simple and Low-Cost Registration",
      description: "Easy registration process with minimal regulatory burden"
    },
    {
      title: "Limited Liability for Shareholders",
      description: "Personal assets protected from company debts and obligations"
    },
    {
      title: "Exempt from RBI Regulations",
      description: "Limited compliance burden as it operates only among members"
    },
    {
      title: "Low Risk Structure",
      description: "Member-only operations reduce financial risks significantly"
    },
    {
      title: "Enables Financial Inclusion",
      description: "Supports small communities with accessible financial services"
    },
    {
      title: "Better Credit Support",
      description: "Provides members with easier access to loans and credit"
    }
  ];

  const documentsRequired = [
    "PAN and Aadhaar of all directors",
    "Passport-size photographs of directors",
    "Registered office address proof (rent agreement + NOC/utility bill)",
    "Digital Signature Certificate (DSC) of directors",
    "Director Identification Number (DIN) for all directors",
    "Memorandum of Association (MoA) and Articles of Association (AoA)",
    "Bank account details for minimum capital (Rs. 5 lakh)",
    "Declaration and compliance forms (INC-9, DIR-2)"
  ];

  const applicability = [
    "Community-based financial groups",
    "Individuals aiming to promote savings and loans culture",
    "Low-scale financing initiatives for mutual benefits",
    "Organizations focused on cooperative finance among members",
    "Member-centric financial institutions avoiding external investment",
    "Rural and semi-urban communities"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Name Approval",
      description: "Get company name approved with 'Nidhi Limited' suffix"
    },
    {
      step: "2", 
      title: "Capital Arrangement",
      description: "Arrange minimum Rs. 5 lakh paid-up capital"
    },
    {
      step: "3",
      title: "Document Filing",
      description: "File incorporation documents with MCA"
    },
    {
      step: "4",
      title: "Nidhi Declaration",
      description: "File Nidhi declaration after commencement of business"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Coins className="h-16 w-16 text-accent-grey mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nidhi Company Registration in India
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start a member-focused financial institution! Register a Nidhi Company to promote savings, provide loans to members, and build a cooperative financial community.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)}>
            Register Nidhi Company Today
          </Button>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What is a Nidhi Company?</h2>
          <div className="bg-dark-tertiary rounded-xl p-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              A Nidhi Company is a type of Non-Banking Financial Company (NBFC) recognized under Section 406 of the Companies Act, 2013. Its primary objective is to cultivate the habit of thrift and savings among its members. It can only accept deposits and lend money to its members, operating on the principle of mutual benefit. Nidhi companies are exempt from RBI regulations and focus exclusively on member-only financial services.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Merits of Nidhi Company</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-dark-secondary rounded-xl p-6 hover:bg-dark-tertiary transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-grey rounded-full flex items-center justify-center flex-shrink-0">
                    <Users2 className="h-6 w-6 text-white" />
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Documents Required for Nidhi Company Registration</h2>
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Who Should Choose Nidhi Company?</h2>
          <p className="text-lg text-gray-300 mb-8 text-center">
            A Nidhi Company is suitable for various community-focused initiatives:
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Nidhi Company Registration Process</h2>
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Features of Nidhi Company</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-dark-secondary rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Financial Requirements</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Minimum paid-up capital: Rs. 5 lakh
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Minimum 200 members within one year
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Net owned funds of Rs. 10 lakh
                </li>
              </ul>
            </div>
            
            <div className="bg-dark-secondary rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Operating Restrictions</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Only accept deposits from members
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Only lend money to members
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Cannot invest in shares of other companies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-tertiary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Nidhi Company?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Build a member-focused financial institution that promotes savings and provides credit support to your community. Get expert guidance for seamless registration.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)}>
            Book Free Consultation
          </Button>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultService="nidhi-company"
      />
    </div>
  );
}