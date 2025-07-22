import { useState } from "react";
import { Link } from "wouter";
import { Building2, CheckCircle, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function PublicLimitedCompany() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const benefits = [
    {
      title: "Raise Large Capital from Public",
      description: "Access to public funding through share offerings and IPOs"
    },
    {
      title: "Freely Transferable Shares",
      description: "Shares can be easily bought and sold in the open market"
    },
    {
      title: "Increased Credibility and Transparency",
      description: "Enhanced trust and reputation with stakeholders and investors"
    },
    {
      title: "Better Access to Loans",
      description: "Easier access to bank loans and external funding opportunities"
    },
    {
      title: "Separate Legal Entity",
      description: "Company exists independently with perpetual succession"
    },
    {
      title: "Stock Exchange Listing Eligibility",
      description: "Can be listed on BSE, NSE and other recognized stock exchanges"
    }
  ];

  const documentsRequired = [
    "PAN and Aadhaar of all directors",
    "Passport-size photographs of directors",
    "Proof of registered office address (rent agreement + NOC/utility bill)",
    "Digital Signature Certificate (DSC) of directors",
    "Director Identification Number (DIN) for all directors",
    "Memorandum of Association (MoA) and Articles of Association (AoA)",
    "Board resolutions and consent forms (INC-9, DIR-2)",
    "Capital subscription details and share allocation",
    "Approval from regulatory bodies (if applicable)"
  ];

  const applicability = [
    "Businesses planning large-scale operations",
    "Startups seeking funding through IPO or public investors",
    "Organizations requiring substantial capital investments",
    "Firms aiming to build brand reputation and public trust",
    "Enterprises with a broad base of shareholders",
    "Companies looking to expand internationally"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Name Reservation",
      description: "Reserve company name and obtain approval from MCA"
    },
    {
      step: "2", 
      title: "MOA & AOA Drafting",
      description: "Prepare Memorandum and Articles of Association"
    },
    {
      step: "3",
      title: "Capital Subscription",
      description: "Arrange minimum capital subscription and share allocation"
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
          <Building2 className="h-16 w-16 text-accent-grey mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Public Limited Company Registration in India
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Scale your business to new heights! Register a Public Limited Company to raise capital from the public, get listed on stock exchanges, and build a nationally recognized brand.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)}>
            Register Public Company Today
          </Button>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What is a Public Limited Company?</h2>
          <div className="bg-dark-tertiary rounded-xl p-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              A Public Company is a company that is permitted to issue shares to the general public and may be listed on a stock exchange. It is governed under the Companies Act, 2013, and is required to comply with extensive regulatory obligations to protect investors' interests. Public companies can raise large amounts of capital from the public, making them suitable for businesses planning significant expansion or large-scale operations.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Merits of Public Limited Company</h2>
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Documents Required for Public Company Registration</h2>
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Who Should Choose Public Limited Company?</h2>
          <p className="text-lg text-gray-300 mb-8 text-center">
            A Public Company is suitable for businesses with ambitious growth plans:
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Public Company Registration Process</h2>
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

      {/* Requirements Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Requirements for Public Company</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-dark-secondary rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Minimum Requirements</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Minimum 7 shareholders
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Minimum 3 directors
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Minimum paid-up capital ₹5 lakhs
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Company Secretary (if turnover exceeds ₹5 crores)
                </li>
              </ul>
            </div>
            
            <div className="bg-dark-secondary rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Compliance Requirements</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Annual General Meeting (AGM)
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Board meetings every quarter
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Annual filing with MCA
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Audit by chartered accountant
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-tertiary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Go Public?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your business vision into reality with Public Limited Company registration. Access public capital markets and build a nationally recognized enterprise.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)}>
            Book Free Consultation
          </Button>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultService="public-limited-company"
      />
    </div>
  );
}