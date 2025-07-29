import { useState } from "react";
import { FileText, Calendar, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function Blog() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            CA Services Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Expert insights on business registration, tax planning, compliance, and accounting practices to help your business grow.
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-dark-secondary rounded-xl p-12 border border-dark-border">
            <FileText className="h-16 w-16 text-accent-grey mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Blog Coming Soon</h2>
            <p className="text-xl text-gray-300 mb-8">
              We're preparing valuable content on business registration, tax optimization, and compliance best practices. 
              Check back soon for expert insights and industry updates.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-dark-primary p-6 rounded-lg">
                <Calendar className="h-8 w-8 text-accent-grey mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Tax Updates</h3>
                <p className="text-gray-300 text-sm">Latest changes in tax laws and regulations</p>
              </div>
              <div className="bg-dark-primary p-6 rounded-lg">
                <User className="h-8 w-8 text-accent-grey mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Business Tips</h3>
                <p className="text-gray-300 text-sm">Practical advice for entrepreneurs and startups</p>
              </div>
              <div className="bg-dark-primary p-6 rounded-lg">
                <Search className="h-8 w-8 text-accent-grey mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Compliance Guides</h3>
                <p className="text-gray-300 text-sm">Step-by-step compliance and filing guides</p>
              </div>
            </div>

            <Button onClick={() => setIsBookingModalOpen(true)} size="lg">
              Get Expert Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8">
            Be the first to know when we publish new articles and insights
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-dark-primary border border-dark-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-grey"
            />
            <Button>Subscribe</Button>
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