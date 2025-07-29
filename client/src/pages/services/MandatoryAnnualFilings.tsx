import { useState } from "react";
import { Link } from "wouter";
import { Calendar, FileText, CheckCircle, Building, Clock, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function MandatoryAnnualFilings() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const filingServices = [
    {
      name: "Annual Compliance Services",
      slug: "annual-compliance-services",
      description: "Complete annual filing services for private limited companies and ROC compliance"
    },
    {
      name: "LLP Annual Filings",
      slug: "llp-annual-filings", 
      description: "Annual return and statement of accounts filing for Limited Liability Partnerships"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Mandatory Annual Filings
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Essential annual compliance services for companies and LLPs to maintain legal standing and avoid penalties. Expert CA guidance for all regulatory requirements.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)} size="lg">
            Get Expert Consultation
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Stay Compliant, Avoid Penalties</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Annual filings are mandatory for all registered companies and LLPs. Our chartered accountants ensure timely submission of all required documents to maintain your business's legal standing.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Avoid heavy penalties and late fees</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Maintain active company status</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Expert preparation of all documents</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Timely reminder and filing services</p>
                </div>
              </div>
            </div>
            <div className="bg-dark-primary p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Filing Deadlines</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-accent-grey pl-4">
                  <h4 className="font-semibold text-white mb-1">Companies</h4>
                  <p className="text-gray-300 text-sm">Annual Return due within 60 days of AGM</p>
                </div>
                <div className="border-l-4 border-accent-grey pl-4">
                  <h4 className="font-semibold text-white mb-1">LLPs</h4>
                  <p className="text-gray-300 text-sm">Annual Return due by 30th May each year</p>
                </div>
                <div className="border-l-4 border-accent-grey pl-4">
                  <h4 className="font-semibold text-white mb-1">Financial Statements</h4>
                  <p className="text-gray-300 text-sm">Must be filed within prescribed timelines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Annual Filing Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete compliance solutions for companies and LLPs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {filingServices.map((service) => (
              <div
                key={service.slug}
                className="bg-dark-secondary rounded-xl p-8 border border-dark-border hover:border-accent-grey transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-6">
                  <Calendar className="h-12 w-12 text-accent-grey mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <Link
                    href={`/service/${service.slug}`}
                    className="text-white hover:text-accent-grey font-medium inline-flex items-center"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Filing Process</h2>
            <p className="text-xl text-gray-300">Simple and efficient annual compliance management</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Document Collection</h3>
              <p className="text-gray-300 text-sm">Gather all required financial and corporate documents</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Review & Preparation</h3>
              <p className="text-gray-300 text-sm">Expert review and preparation of all filings</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">ROC Filing</h3>
              <p className="text-gray-300 text-sm">Submit all documents to Registrar of Companies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Confirmation</h3>
              <p className="text-gray-300 text-sm">Receive filing confirmation and certificates</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Don't Miss Your Filing Deadlines</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get expert help with your annual compliance requirements. Contact our chartered accountants today.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)} size="lg">
            Book Free Consultation
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