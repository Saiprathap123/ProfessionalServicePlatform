import { useState } from "react";
import { Link } from "wouter";
import { Rocket, CheckCircle, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function StartupIndia() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const benefits = [
    {
      title: "Tax Exemption for Three Years",
      description: "Complete income tax exemption for the first three years of operation"
    },
    {
      title: "Funding Support Through Government Schemes",
      description: "Access to various government funding programs and venture capital support"
    },
    {
      title: "Self-Certification for Compliance",
      description: "Self-certification for certain labour and environmental laws"
    },
    {
      title: "Simplified Compliance and Fast-Track Exit",
      description: "Reduced regulatory burden and streamlined exit procedures"
    },
    {
      title: "Exemption from Angel Tax",
      description: "Relief from angel tax under Section 56 for angel investments"
    },
    {
      title: "Reduced Patent and Trademark Fees",
      description: "80% rebate on patent filing fees and 50% on trademark fees"
    },
    {
      title: "Government Tender Access",
      description: "Access to government tenders without prior turnover requirements"
    }
  ];

  const documentsRequired = [
    "Company Incorporation/Registration Certificate",
    "PAN Card of the company",
    "Proof of funding (if any)",
    "Authorization letter from company representative",
    "Proof of concept (pitch deck, website, video, etc.)",
    "Patent or trademark details (if any)",
    "List of awards or recognitions (if any)",
    "Details of innovative product/service/process"
  ];

  const eligibility = [
    "Private Limited Companies",
    "Limited Liability Partnerships (LLPs)",
    "Registered Partnership Firms",
    "Startups less than 10 years old (15 years for biotech)",
    "Turnover not exceeding ₹100 crores",
    "Must work on innovation, development, or improvement of products/processes/services"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Business Entity Setup",
      description: "Incorporate your company as Pvt Ltd, LLP, or Partnership Firm"
    },
    {
      step: "2", 
      title: "Startup India Application",
      description: "Apply online on Startup India portal with required documents"
    },
    {
      step: "3",
      title: "Verification Process",
      description: "Government verification of your innovative business model"
    },
    {
      step: "4",
      title: "Certificate Issuance",
      description: "Receive Startup India recognition certificate and benefits"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Rocket className="h-16 w-16 text-accent-grey mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Startup India Registration
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Unlock government benefits and support for your innovative startup! Get Startup India recognition for tax exemptions, funding support, and simplified compliance.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)}>
            Register for Startup India Today
          </Button>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What is Startup India?</h2>
          <div className="bg-dark-tertiary rounded-xl p-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              Startup India is a flagship initiative by the Indian Government that promotes entrepreneurship and innovation by supporting eligible startups through tax benefits, funding support, and simplified compliance. The initiative aims to build a strong ecosystem for startups and help India become a global leader in innovation. Recognized startups receive various benefits including tax exemptions, easier access to government tenders, and reduced regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Merits of Startup India Registration</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-dark-secondary rounded-xl p-6 hover:bg-dark-tertiary transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-grey rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-white" />
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Documents Required for Startup India Registration</h2>
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

      {/* Eligibility Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Startup India Applicability</h2>
          <p className="text-lg text-gray-300 mb-8 text-center">
            Startup India registration is applicable to:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eligibility.map((item, index) => (
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Startup India Registration Process</h2>
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

      {/* Key Requirements Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Requirements for Startup India</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-dark-secondary rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Age and Turnover Limits</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Less than 10 years old (15 for biotech)
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Turnover less than ₹100 crores
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Should not be formed by splitting existing business
                </li>
              </ul>
            </div>
            
            <div className="bg-dark-secondary rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Innovation Requirements</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Must work on innovation or improvement
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Should have scalable business model
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Must create or add value to customers/workflow
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-tertiary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Launch Your Startup Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your innovative idea into a recognized startup. Get expert assistance for Startup India registration and unlock government benefits for your entrepreneurial venture.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)}>
            Book Free Consultation
          </Button>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultService="startup-india"
      />
    </div>
  );
}