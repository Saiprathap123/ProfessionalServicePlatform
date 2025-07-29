import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function ContactUs() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get in touch with our expert CA team. We're here to help you with all your business registration and compliance needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-accent-grey mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-300">support@registerstartup.com</p>
                    <p className="text-gray-300">info@registerstartup.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-accent-grey mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <p className="text-gray-300">+91 98765 43210</p>
                    <p className="text-gray-300">+91 87654 32109</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-accent-grey mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                    <p className="text-gray-300">
                      123 Business District<br />
                      Hyderabad, Telangana 500001<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-accent-grey mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Business Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-300">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-300">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-dark-secondary rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Quick Consultation</h2>
              <p className="text-gray-300 mb-6">
                Book a free consultation with our expert CA team to discuss your business needs.
              </p>
              <Button
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full bg-white text-dark-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200"
              >
                Book Free Consultation
              </Button>
              
              <div className="mt-8 pt-6 border-t border-dark-border">
                <h3 className="text-lg font-semibold text-white mb-4">Why Choose Us?</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Expert Chartered Accountants</li>
                  <li>• Quick turnaround time</li>
                  <li>• Transparent pricing</li>
                  <li>• Ongoing compliance support</li>
                  <li>• 500+ successful registrations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">How long does company registration take?</h3>
              <p className="text-gray-300 mb-4">Typically 10-15 working days for Private Limited Company registration once all documents are submitted.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Do you provide ongoing compliance support?</h3>
              <p className="text-gray-300 mb-4">Yes, we offer comprehensive ongoing compliance services including annual filings, GST returns, and tax planning.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">What are your service charges?</h3>
              <p className="text-gray-300 mb-4">Our pricing is transparent and competitive. Contact us for detailed quotes based on your specific requirements.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Can you help with funding and investor requirements?</h3>
              <p className="text-gray-300 mb-4">Yes, we assist with investor-ready documentation, due diligence support, and funding compliance requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our expert team today and let us help you navigate your business registration and compliance journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-white text-dark-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200"
            >
              Book Consultation
            </Button>
            <Button
              onClick={() => window.location.href = 'mailto:support@registerstartup.com'}
              variant="outline"
              className="border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-dark-primary transition-all duration-200"
            >
              Send Email
            </Button>
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