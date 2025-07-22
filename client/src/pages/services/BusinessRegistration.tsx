import { useState } from "react";
import { Link } from "wouter";
import { Building, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function BusinessRegistration() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const registrationTypes = [
    {
      name: "Private Limited Company",
      slug: "private-limited-company",
      description: "Most popular choice for startups and SMEs with limited liability protection"
    },
    {
      name: "One Person Company (OPC)",
      slug: "one-person-company",
      description: "Perfect for solo entrepreneurs with corporate benefits"
    },
    {
      name: "Limited Liability Partnership",
      slug: "limited-liability-partnership",
      description: "Ideal for professional services and partnerships"
    },
    {
      name: "Partnership Firm",
      slug: "partnership-firm",
      description: "Simple structure for business partnerships"
    },
    {
      name: "Sole Proprietorship",
      slug: "sole-proprietorship",
      description: "Easiest form for individual business owners"
    },
    {
      name: "Public Limited Company",
      slug: "public-limited-company",
      description: "For businesses planning to go public or raise large funds"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Building className="h-16 w-16 text-accent-grey mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Business Registration
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start your entrepreneurial journey with our expert CA guidance. We help register your business with the right legal structure, guiding you every step of the way.
          </p>
          <Button
            onClick={() => setIsBookingModalOpen(true)}
            className="bg-white text-dark-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
          >
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Professional Registration?</h2>
          <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
            Ensuring compliance and credibility, we offer seamless registration for various business types tailored to your goals. 
            Our expert chartered accountants guide you through the entire process, ensuring you choose the right structure for your business needs, 
            from startups to established enterprises looking to restructure.
          </p>
        </div>
      </section>

      {/* Types of Registrations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Types of Registrations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {registrationTypes.map((registration) => (
              <div key={registration.slug} className="bg-dark-secondary rounded-xl p-8 border border-dark-border hover:border-accent-grey transition-all duration-300 transform hover:scale-105">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{registration.name}</h3>
                  <p className="text-gray-300 mb-6">{registration.description}</p>
                  <Link
                    href={`/service/${registration.slug}`}
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Register Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our expert CA team help you choose the right business structure and handle the registration process.
          </p>
          <Button
            onClick={() => setIsBookingModalOpen(true)}
            className="bg-white text-dark-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
          >
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