import { useState } from "react";
import { Link } from "wouter";
import { Building2, CheckCircle, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function UdyamRegistration() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const enterpriseCriteria = [
    {
      type: "Micro",
      investment: "Up to ₹2.5 Crore",
      turnover: "Not Exceeding ₹10 Crore"
    },
    {
      type: "Small", 
      investment: "Up to ₹25 Crore",
      turnover: "Not Exceeding ₹100 Crore"
    },
    {
      type: "Medium",
      investment: "Up to ₹125 Crore", 
      turnover: "Not Exceeding ₹500 Crore"
    }
  ];

  const benefits = [
    "Special Preference in Government Tenders",
    "Access to Collateral-Free Bank Loans",
    "Interest Rate Exemption",
    "Eligibility for Tax Rebates", 
    "Priority in Licensing and Certification",
    "Tariff and Capital Subsidies",
    "Electricity Bill Discounts",
    "Protection Against Delayed Payments",
    "Trademark and Patent Discounts",
    "Expedited Dispute Resolution"
  ];

  const documentsRequired = [
    "PAN Card",
    "Aadhaar Card", 
    "GST Number (if GST Registration is Applicable)"
  ];

  const additionalDetails = [
    "Bank Details",
    "Turnover and Investment Details",
    "Name, Address and Status of the Enterprise",
    "Nature of Business",
    "Employee Details"
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Building2 className="h-16 w-16 text-accent-grey mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Udyam Registration for MSME in India
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get your MSME registered under Udyam Registration to unlock government benefits, subsidies, and priority lending. Introduced by the Ministry of Micro, Small & Medium Enterprises on July 1, 2020.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)}>
            Register Your MSME Today
          </Button>
        </div>
      </section>

      {/* What is Udyam Registration Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What is Udyam Registration?</h2>
          <div className="bg-dark-tertiary rounded-xl p-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              The Ministry of Micro, Small & Medium Enterprises introduced Udyam Registration on July 1, 2020 to support the growth of MSMEs by formally getting registered and to get benefited from government schemes and initiatives. It replaced the earlier system of MSME registration and provides a unified platform for MSME registration across India.
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">MSME Enterprise Categories</h2>
          <p className="text-lg text-gray-300 mb-12 text-center">
            Udyam Registration can be obtained by any person who wants to start a micro, small or medium enterprise.
          </p>
          <div className="grid lg:grid-cols-3 gap-8">
            {enterpriseCriteria.map((category, index) => (
              <div key={index} className="bg-dark-secondary rounded-xl p-8 hover:bg-dark-tertiary transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.type} Enterprise</h3>
                  <div className="space-y-4">
                    <div className="bg-dark-tertiary rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-accent-grey mb-2">Investment Criteria</h4>
                      <p className="text-lg font-semibold text-white">{category.investment}</p>
                    </div>
                    <div className="bg-dark-tertiary rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-accent-grey mb-2">Annual Turnover Criteria</h4>
                      <p className="text-lg font-semibold text-white">{category.turnover}</p>
                    </div>
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Benefits of Udyam Registration</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-dark-tertiary rounded-xl p-6 hover:bg-dark-hover transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-grey rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                    <p className="text-gray-300 text-sm">
                      {benefit.includes("Government Tenders") && "Get priority in government procurement and tenders"}
                      {benefit.includes("Bank Loans") && "Access to loans without collateral security requirements"}
                      {benefit.includes("Interest Rate") && "Benefit from lower interest rates on business loans"}
                      {benefit.includes("Tax Rebates") && "Qualify for various tax exemptions and rebates"}
                      {benefit.includes("Licensing") && "Fast-track approvals for licenses and certifications"}
                      {benefit.includes("Subsidies") && "Access to capital and tariff subsidies from government"}
                      {benefit.includes("Electricity") && "Get reduced electricity tariffs and bill discounts"}
                      {benefit.includes("Delayed Payments") && "Protection under MSMED Act against payment delays"}
                      {benefit.includes("Patent") && "Reduced fees for trademark and patent registrations"}
                      {benefit.includes("Dispute") && "Faster resolution of payment disputes through MSED Act"}
                    </p>
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Documents Required for Udyam Registration</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-dark-secondary rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Essential Documents</h3>
              <div className="space-y-4">
                {documentsRequired.map((document, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-dark-tertiary rounded-lg">
                    <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                    <p className="text-gray-300">{document}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-dark-secondary rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Additional Details Required</h3>
              <div className="space-y-4">
                {additionalDetails.map((detail, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-dark-tertiary rounded-lg">
                    <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                    <p className="text-gray-300">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-tertiary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Register Your MSME?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our CA experts will help you complete your Udyam Registration quickly and unlock all MSME benefits including government tenders, subsidies, and priority lending.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)}>
            Book Free Consultation
          </Button>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultService="udyam-registration"
      />
    </div>
  );
}