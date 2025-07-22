import { useState } from "react";
import { Link } from "wouter";
import { Building, FileText, CheckCircle, Users, TrendingUp, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function PrivateCompanyChanges() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const changeServices = [
    {
      name: "Add a Director",
      slug: "add-director",
      description: "Appointment of new directors with ROC filing and compliance"
    },
    {
      name: "Remove a Director",
      slug: "remove-director",
      description: "Director resignation or removal with proper documentation"
    },
    {
      name: "Increase Authorized Capital",
      slug: "increase-authorized-capital",
      description: "Capital enhancement with shareholder resolutions and ROC filing"
    },
    {
      name: "Close the Pvt Ltd Company",
      slug: "close-private-company",
      description: "Company closure through voluntary winding up process"
    },
    {
      name: "Strike Off Company",
      slug: "strike-off-company",
      description: "Fast track closure through strike off application"
    },
    {
      name: "Change Objective or Activity",
      slug: "change-company-objective",
      description: "Modification of main business objects and activities"
    },
    {
      name: "Change Address",
      slug: "change-company-address",
      description: "Registered office address change with proper compliance"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Changes in Private Limited Company
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive company modification services for director changes, capital alterations, business updates, and closure procedures with expert CA guidance.
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
              <h2 className="text-3xl font-bold text-white mb-6">Evolve Your Business Structure</h2>
              <p className="text-gray-300 mb-6 text-lg">
                As your business grows, you may need to make changes to your company structure. Our chartered accountants ensure all modifications are done legally and efficiently with proper ROC compliance.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Complete ROC compliance and filing</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Board resolutions and documentation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Expert guidance on legal requirements</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Minimal disruption to business operations</p>
                </div>
              </div>
            </div>
            <div className="bg-dark-primary p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Common Changes</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-accent-grey pl-4">
                  <h4 className="font-semibold text-white mb-1">Director Changes</h4>
                  <p className="text-gray-300 text-sm">Addition, removal, or replacement of directors</p>
                </div>
                <div className="border-l-4 border-accent-grey pl-4">
                  <h4 className="font-semibold text-white mb-1">Capital Structure</h4>
                  <p className="text-gray-300 text-sm">Increase in authorized or paid-up capital</p>
                </div>
                <div className="border-l-4 border-accent-grey pl-4">
                  <h4 className="font-semibold text-white mb-1">Business Activities</h4>
                  <p className="text-gray-300 text-sm">Modification of main objects and activities</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Company Modification Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete solutions for all types of private limited company changes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {changeServices.map((service) => (
              <div
                key={service.slug}
                className="bg-dark-secondary rounded-xl p-8 border border-dark-border hover:border-accent-grey transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-6">
                  <TrendingUp className="h-12 w-12 text-accent-grey mb-4" />
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Modify Your Company?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get expert guidance from our chartered accountants for all your company modification needs.
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