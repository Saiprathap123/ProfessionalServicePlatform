import { useState } from "react";
import { Link } from "wouter";
import { FileText, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function TradeLicense() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const applicableBusinesses = [
    "Shops and Establishments",
    "Food Establishments", 
    "Manufacturing Units",
    "Healthcare Facilities",
    "Entertainment and Leisure Activities",
    "Transport Services",
    "Construction and Real Estate",
    "Fireworks and Explosives",
    "Liquor Establishments",
    "Street Vendors and Hawkers"
  ];

  const benefits = [
    "Legal Compliance",
    "Public Safety",
    "Business Credibility", 
    "Regulatory Compliance",
    "Access to Government Support",
    "Establishing Business Legitimacy",
    "Facilitates Expansion"
  ];

  const documentsRequired = [
    "Address proof of the business",
    "ID proof of the applicant",
    "Aadhaar card",
    "PAN of the individual in case of proprietorship, PAN of the partners in case of a firm or PAN of the company or Limited Liability Partnership (LLP)",
    "Memorandum of Association (MOA), Articles of Association (AOA) and Certificate of Incorporation in case of companies",
    "Certificate of registration in case of a partnership firm and LLP",
    "A latest municipal property tax receipt in case the premises are owned, else lease document or consent letter of the owner of the property (NOC) where the business is registered",
    "NOC from the pollution control board and fire department, if applicable",
    "NOC of the neighbors (nearby property owners)",
    "Certified layout plan of the office"
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FileText className="h-16 w-16 text-accent-grey mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trade License Registration in India
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get your Trade License quickly with expert CA guidance. A Trade License is a permission or permit issued by a local municipal corporation or governing body that allows an individual or business to conduct a specific trade or business in a designated area.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)}>
            Get Started Today
          </Button>
        </div>
      </section>

      {/* What is Trade License Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What is Trade License?</h2>
          <div className="bg-dark-tertiary rounded-xl p-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              Trade License is a permission or permit issued by a local municipal corporation or governing body that allows an individual or business to conduct a specific trade or business in a designated area. It is governed by State Municipal Corporation Acts and ensures that your business operations comply with local regulations and safety standards.
            </p>
          </div>
        </div>
      </section>

      {/* Applicability Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Who Needs Trade License?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applicableBusinesses.map((business, index) => (
              <div key={index} className="bg-dark-secondary rounded-xl p-6 hover:bg-dark-tertiary transition-all duration-300">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-white">{business}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Benefits of Trade License</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-dark-tertiary rounded-xl p-6 hover:bg-dark-hover transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-grey rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                    <p className="text-gray-300 text-sm">
                      {benefit === "Legal Compliance" && "Ensures your business operates within the legal framework"}
                      {benefit === "Public Safety" && "Maintains safety standards for public welfare"}
                      {benefit === "Business Credibility" && "Enhances trust and credibility with customers and partners"}
                      {benefit === "Regulatory Compliance" && "Meets all local municipal and regulatory requirements"}
                      {benefit === "Access to Government Support" && "Enables access to government schemes and support programs"}
                      {benefit === "Establishing Business Legitimacy" && "Provides official recognition of your business operations"}
                      {benefit === "Facilitates Expansion" && "Simplifies process for business expansion and scaling"}
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Documents Required for Trade License Application</h2>
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

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-tertiary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Your Trade License?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our expert CA team will guide you through the entire Trade License application process, ensuring compliance and quick approval.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)}>
            Book Free Consultation
          </Button>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultService="trade-license"
      />
    </div>
  );
}