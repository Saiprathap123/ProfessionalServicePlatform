import { useState } from "react";
import { Link } from "wouter";
import { Building, FileText, CheckCircle, Users, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function LLPChanges() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const llpServices = [
    {
      name: "Add Designated Partner",
      slug: "add-designated-partner",
      description: "Addition of new designated partners with proper documentation and ROC filing"
    },
    {
      name: "Amend LLP Agreement",
      slug: "amend-llp-agreement",
      description: "Modification of LLP agreement terms, profit sharing, and partnership conditions"
    },
    {
      name: "Close LLP",
      slug: "close-llp",
      description: "LLP closure through voluntary winding up and strike off procedures"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Changes in Limited Liability Partnership
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            LLP modification services for partner changes, agreement amendments, and business closure with expert guidance and compliance.
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
              <h2 className="text-3xl font-bold text-white mb-6">Modify Your LLP Structure</h2>
              <p className="text-gray-300 mb-6 text-lg">
                LLP structures may need modifications as your business evolves. Our chartered accountants ensure all changes are executed legally with proper ROC compliance and documentation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Complete ROC filing and compliance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Legal documentation and agreements</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Expert guidance on partnership law</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Smooth transition and compliance</p>
                </div>
              </div>
            </div>
            <div className="bg-dark-primary p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">LLP Modifications</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-accent-grey pl-4">
                  <h4 className="font-semibold text-white mb-1">Partner Changes</h4>
                  <p className="text-gray-300 text-sm">Addition or removal of designated partners</p>
                </div>
                <div className="border-l-4 border-accent-grey pl-4">
                  <h4 className="font-semibold text-white mb-1">Agreement Updates</h4>
                  <p className="text-gray-300 text-sm">Modification of terms and conditions</p>
                </div>
                <div className="border-l-4 border-accent-grey pl-4">
                  <h4 className="font-semibold text-white mb-1">Business Closure</h4>
                  <p className="text-gray-300 text-sm">Voluntary winding up procedures</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">LLP Modification Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions for all LLP structural changes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {llpServices.map((service) => (
              <div
                key={service.slug}
                className="bg-dark-secondary rounded-xl p-8 border border-dark-border hover:border-accent-grey transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-6">
                  <Building className="h-12 w-12 text-accent-grey mb-4" />
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
            <h2 className="text-3xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-300">Streamlined LLP modification procedure</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Assessment</h3>
              <p className="text-gray-300 text-sm">Review current LLP structure and requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
              <p className="text-gray-300 text-sm">Prepare all legal documents and agreements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">ROC Filing</h3>
              <p className="text-gray-300 text-sm">Submit applications to Registrar of Companies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Completion</h3>
              <p className="text-gray-300 text-sm">Receive approval and updated certificates</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Modify Your LLP?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get expert guidance from our chartered accountants for all your LLP modification needs.
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