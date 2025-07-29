import { useState } from "react";
import { Link } from "wouter";
import { Users, CheckCircle, ArrowRight, Shield, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function LimitedLiabilityPartnership() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const benefits = [
    {
      title: "Limited Liability Protection",
      description: "Partners enjoy protection from business debts and liabilities of other partners"
    },
    {
      title: "Separate Legal Identity", 
      description: "LLP exists as a distinct legal entity separate from its partners"
    },
    {
      title: "Cost-Effective Formation",
      description: "Lower formation and maintenance costs compared to private companies"
    },
    {
      title: "Fewer Compliance Requirements",
      description: "Reduced regulatory burden with simpler compliance procedures"
    },
    {
      title: "No Minimum Capital Requirement",
      description: "Start your LLP without any mandatory minimum capital investment"
    },
    {
      title: "Operational Flexibility",
      description: "Greater flexibility in operations and decision-making processes"
    }
  ];

  const documentsRequired = [
    "PAN Card and Aadhaar Card of all partners",
    "Address and residence proof (bank statement, utility bill)",
    "Passport-size photographs of partners",
    "Proof of registered office address (rent agreement + NOC/ownership proof + utility bill)",
    "Digital Signature Certificate (DSC) for designated partners",
    "Designated Partner Identification Number (DPIN)",
    "LLP Agreement outlining roles, responsibilities, and profit sharing",
    "Form FiLLiP for LLP incorporation"
  ];

  const applicability = [
    "Professionals (CA, CS, lawyers, consultants)",
    "Small and medium-sized businesses",
    "Startups seeking limited liability with operational flexibility",
    "Joint ventures and collaborative businesses",
    "Service-oriented businesses",
    "Firms transitioning from traditional partnerships"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Name Reservation",
      description: "Reserve your LLP name through MCA portal"
    },
    {
      step: "2", 
      title: "DPIN & DSC",
      description: "Obtain Designated Partner Identification Number and Digital Signature"
    },
    {
      step: "3",
      title: "LLP Agreement",
      description: "Draft and execute comprehensive LLP Agreement"
    },
    {
      step: "4",
      title: "Registration",
      description: "File incorporation documents and receive Certificate of Incorporation"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="h-16 w-16 text-accent-grey mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Limited Liability Partnership (LLP) Registration in India
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Combine the benefits of a partnership and company structure. Get limited liability protection with operational flexibility perfect for professionals and small businesses.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)}>
            Register Your LLP Today
          </Button>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What is a Limited Liability Partnership (LLP)?</h2>
          <div className="bg-dark-tertiary rounded-xl p-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              A Limited Liability Partnership (LLP) is a hybrid business structure that combines the benefits of a partnership and a company. It provides limited liability protection to partners while offering operational flexibility and a separate legal identity. Unlike traditional partnerships, partners in an LLP are not personally liable for the misconduct or negligence of other partners, making it ideal for professional services and small to medium businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Merits of LLP Registration</h2>
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Documents Required for LLP Registration</h2>
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Who Should Choose LLP?</h2>
          <p className="text-lg text-gray-300 mb-8 text-center">
            An LLP is ideal for various types of businesses and professionals:
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">LLP Registration Process</h2>
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
              <p className="text-gray-300">Minimum 2 partners are required, with no maximum limit. At least 2 must be designated partners.</p>
            </div>
            <div className="bg-dark-secondary rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Is there any minimum capital requirement?</h3>
              <p className="text-gray-300">No, there is no minimum capital requirement for LLP formation.</p>
            </div>
            <div className="bg-dark-secondary rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Can an LLP be converted to a company?</h3>
              <p className="text-gray-300">Yes, an LLP can be converted to a private or public limited company as per prescribed procedures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-tertiary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Form Your LLP?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get expert assistance for your Limited Liability Partnership registration. We ensure compliance with all legal requirements and smooth incorporation process.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)}>
            Book Free Consultation
          </Button>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultService="limited-liability-partnership"
      />
    </div>
  );
}