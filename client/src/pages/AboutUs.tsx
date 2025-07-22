import { useState } from "react";
import { Building, Users, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function AboutUs() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Registerstartup
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We're a dedicated team of Chartered Accountants helping startups and businesses with registration, compliance, GST, and more. 
            Our mission is to simplify legal processes so you focus on growth.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                To empower entrepreneurs and businesses by providing comprehensive, reliable, and efficient chartered accountancy services. 
                We believe that every business deserves expert guidance without the complexity and high costs traditionally associated with legal and compliance services.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our goal is to be your trusted partner throughout your business journey, from initial registration to ongoing compliance and growth strategies.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-dark-primary rounded-xl p-6 text-center">
                <Building className="h-12 w-12 text-accent-grey mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">500+</h3>
                <p className="text-gray-300">Companies Registered</p>
              </div>
              <div className="bg-dark-primary rounded-xl p-6 text-center">
                <Users className="h-12 w-12 text-accent-grey mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">1000+</h3>
                <p className="text-gray-300">Happy Clients</p>
              </div>
              <div className="bg-dark-primary rounded-xl p-6 text-center">
                <Award className="h-12 w-12 text-accent-grey mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">5+</h3>
                <p className="text-gray-300">Years Experience</p>
              </div>
              <div className="bg-dark-primary rounded-xl p-6 text-center">
                <Target className="h-12 w-12 text-accent-grey mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">98%</h3>
                <p className="text-gray-300">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dark-secondary rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Transparency</h3>
              <p className="text-gray-300">
                Clear communication, upfront pricing, and honest guidance throughout your business journey.
              </p>
            </div>
            <div className="bg-dark-secondary rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Expertise</h3>
              <p className="text-gray-300">
                Deep knowledge of Indian business laws, regulations, and best practices backed by years of experience.
              </p>
            </div>
            <div className="bg-dark-secondary rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Reliability</h3>
              <p className="text-gray-300">
                Consistent, timely delivery of services with ongoing support for your business compliance needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Expert Team</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Our team consists of qualified Chartered Accountants, legal experts, and business consultants with extensive experience 
            in startup ecosystems and business registrations. We stay updated with the latest regulatory changes to provide you 
            with accurate and current guidance.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-grey rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Qualified CAs</h3>
              <p className="text-gray-300">Experienced chartered accountants</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-grey rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Legal Experts</h3>
              <p className="text-gray-300">Specialized in business law</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-grey rounded-full mx-auto mb-4 flex items-center justify-center">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Business Consultants</h3>
              <p className="text-gray-300">Growth and strategy advisors</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help your business succeed with expert CA services and ongoing support.
          </p>
          <Button
            onClick={() => setIsBookingModalOpen(true)}
            className="bg-white text-dark-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
          >
            Get in Touch
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