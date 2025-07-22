import { useState } from "react";
import { Link } from "wouter";
import { Building, FileText, CheckCircle, Users, Calendar, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function LicensesRegistrations() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const licenses = [
    {
      name: "Udyam Registration",
      slug: "udyam-registration",
      description: "MSME registration for small and medium enterprises with government benefits",
      isPage: true
    },
    {
      name: "MSME Registration", 
      slug: "msme-registration",
      description: "Micro, Small & Medium Enterprise registration for business growth support"
    },
    {
      name: "Trade Licenses",
      slug: "trade-license", 
      description: "Local authority licenses for business operations and commercial activities",
      isPage: true
    },
    {
      name: "FSSAI (Food License)",
      slug: "fssai-license",
      description: "Food Safety and Standards Authority license for food business operations",
      isPage: true
    },
    {
      name: "IEC (Import/Export Code)",
      slug: "import-export-code",
      description: "Import Export Code for international trade and customs clearance"
    },
    {
      name: "Labour Licenses",
      slug: "labour-licenses", 
      description: "Employment and labor compliance licenses for workforce management"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Licenses & Registrations
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Essential business licenses and regulatory registrations for legal compliance and smooth business operations. Get expert guidance for all government approvals.
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
              <h2 className="text-3xl font-bold text-white mb-6">Why Business Licenses Matter</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Proper licensing ensures your business operates legally and avoids penalties. Our chartered accountants guide you through the complex regulatory landscape to obtain all necessary approvals for your industry.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Legal compliance and risk mitigation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Access to government schemes and benefits</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Enhanced business credibility and trust</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Easier access to loans and funding</p>
                </div>
              </div>
            </div>
            <div className="bg-dark-primary p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Legal Protection</h4>
                  <p className="text-gray-300 text-sm">Full regulatory compliance</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Expert Guidance</h4>
                  <p className="text-gray-300 text-sm">CA-led application process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licenses Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our License & Registration Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive licensing solutions for all business types and industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {licenses.map((license) => (
              <div
                key={license.slug}
                className="bg-dark-secondary rounded-xl p-8 border border-dark-border hover:border-accent-grey transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-6">
                  <Building className="h-12 w-12 text-accent-grey mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{license.name}</h3>
                  <p className="text-gray-300 mb-4">{license.description}</p>
                  <Link
                    href={license.isPage ? `/services/${license.slug}` : `/service/${license.slug}`}
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Your Licenses?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get expert guidance from our chartered accountants for all your licensing needs. Start your application today.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)} size="lg">
            Book Free Consultation
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-dark-secondary rounded-xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Phone className="h-8 w-8 text-accent-grey mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300">+91 9876543210</p>
              </div>
              <div>
                <Mail className="h-8 w-8 text-accent-grey mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">info@registerstartup.com</p>
              </div>
              <div>
                <MapPin className="h-8 w-8 text-accent-grey mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">Mumbai, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
}