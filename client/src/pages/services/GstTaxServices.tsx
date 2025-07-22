import { useState } from "react";
import { Link } from "wouter";
import { Calculator, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function GstTaxServices() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const services = [
    {
      name: "GST Registration",
      slug: "gst-registration",
      description: "Complete GST registration and compliance management"
    },
    {
      name: "Income Tax Filing",
      slug: "income-tax-filing",
      description: "Professional income tax return filing and planning"
    },
    {
      name: "TDS Returns",
      slug: "tds-returns",
      description: "TDS return filing and compliance management"
    },
    {
      name: "Tax Planning",
      slug: "tax-planning",
      description: "Strategic tax planning to minimize tax liability"
    },
    {
      name: "GST Returns",
      slug: "gst-returns",
      description: "Monthly and quarterly GST return filing"
    },
    {
      name: "Corporate Tax",
      slug: "corporate-tax",
      description: "Corporate income tax filing and compliance"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Calculator className="h-16 w-16 text-accent-grey mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            GST & Tax Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive tax and GST services to keep your business compliant and optimize your tax liability with expert guidance.
          </p>
          <Button
            onClick={() => setIsBookingModalOpen(true)}
            className="bg-white text-dark-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
          >
            Get Tax Assistance
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Professional Tax Management</h2>
          <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
            Stay compliant with all tax regulations while maximizing your savings. Our expert chartered accountants provide comprehensive 
            GST registration, return filing, income tax planning, and ongoing compliance support to help your business thrive without 
            worrying about tax complexities.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Tax Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.slug} className="bg-dark-secondary rounded-xl p-8 border border-dark-border hover:border-accent-grey transition-all duration-300 transform hover:scale-105">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <Link
                    href={`/service/${service.slug}`}
                    className="inline-flex items-center text-white hover:text-accent-grey font-medium transition-colors duration-200"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Tax Consultation?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our tax experts help you navigate complex tax requirements and optimize your tax strategy.
          </p>
          <Button
            onClick={() => setIsBookingModalOpen(true)}
            className="bg-white text-dark-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
          >
            Book Tax Consultation
          </Button>
        </div>
      </section>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
}