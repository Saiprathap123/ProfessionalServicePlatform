import { useState } from "react";
import { Link } from "wouter";
import { Gavel, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function ComplianceLegal() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const services = [
    {
      name: "FSSAI License",
      slug: "fssai-license",
      description: "Food safety license for food business operations"
    },
    {
      name: "Import Export Code",
      slug: "import-export-code",
      description: "IEC registration for import/export business"
    },
    {
      name: "Copyright Registration",
      slug: "copyright-registration",
      description: "Protect your creative works and intellectual property"
    },
    {
      name: "Trademark Registration",
      slug: "trademark-registration",
      description: "Brand protection through trademark registration"
    },
    {
      name: "MSME Registration",
      slug: "msme-registration",
      description: "Micro, Small & Medium Enterprise registration benefits"
    },
    {
      name: "Shop & Establishment",
      slug: "shop-establishment",
      description: "Shop and establishment license for commercial operations"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Gavel className="h-16 w-16 text-accent-grey mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Compliance & Legal
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ensure your business stays compliant with all legal requirements through our comprehensive licensing and compliance services.
          </p>
          <Button
            onClick={() => setIsBookingModalOpen(true)}
            className="bg-white text-dark-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
          >
            Get Compliance Help
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Stay Legally Compliant</h2>
          <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
            Navigate complex regulatory requirements with confidence. Our expert team ensures your business meets all legal obligations, 
            from licensing to ongoing compliance management. We help you obtain necessary permits, registrations, and maintain 
            regulatory compliance across various industries and business activities.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Compliance Services</h2>
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Compliance Guidance?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our compliance experts help you navigate regulatory requirements and maintain legal compliance.
          </p>
          <Button
            onClick={() => setIsBookingModalOpen(true)}
            className="bg-white text-dark-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
          >
            Book Compliance Consultation
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