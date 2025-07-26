import { useState } from "react";
import { Link } from "wouter";
import { Building, CheckCircle, Zap, TrendingUp, FileText, Calculator, Copyright, BarChart3, Gavel, Star, User, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Brain, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#282A2E] text-[#F5F6FA]">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#F5F6FA] mb-6 leading-tight">
            Register Your Startup with Expert CA Services
          </h1>
          <p className="text-xl md:text-2xl text-[#DCDEE1] mb-8 max-w-3xl mx-auto">
            Your trusted partner for business registration, GST, trademark, tax filing, and compliance. Start your entrepreneurial journey with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={scrollToServices}>
              Get Started
            </Button>
            <Link href="/ai-recommendations">
              <Button variant="outline" className="flex items-center">
                <Brain className="h-4 w-4 mr-2" />
                AI Service Recommendations
              </Button>
            </Link>
            <Button
              onClick={() => setIsBookingModalOpen(true)}
              variant="ghost"
              className="text-gray-300 hover:text-white"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F6FA] mb-4">Why Choose Us</h2>
            <p className="text-xl text-[#DCDEE1] max-w-3xl mx-auto">
              We provide comprehensive CA services with a focus on startups and growing businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#313338] rounded-xl p-8 hover:bg-[#363940] transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-[#5b91e1] rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-[#F5F6FA]" />
              </div>
              <h3 className="text-xl font-semibold text-[#F5F6FA] mb-4">Expert CA Services</h3>
              <p className="text-[#DCDEE1]">
                Qualified chartered accountants with years of experience in startup registrations and compliance
              </p>
            </div>
            
            <div className="bg-[#313338] rounded-xl p-8 hover:bg-[#363940] transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-[#5b91e1] rounded-full flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-[#F5F6FA]" />
              </div>
              <h3 className="text-xl font-semibold text-[#F5F6FA] mb-4">Quick Turnaround</h3>
              <p className="text-[#DCDEE1]">
                Fast processing times with regular updates on your application status and document preparation
              </p>
            </div>
            
            <div className="bg-[#313338] rounded-xl p-8 hover:bg-[#363940] transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-[#5b91e1] rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-[#F5F6FA]" />
              </div>
              <h3 className="text-xl font-semibold text-[#F5F6FA] mb-4">Business Growth Support</h3>
              <p className="text-[#DCDEE1]">
                Ongoing support for scaling your business with compliance, taxation, and financial planning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#313338]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F6FA] mb-4">Our Services</h2>
            <p className="text-xl text-[#DCDEE1] max-w-3xl mx-auto">
              Comprehensive CA services to help you start, manage, and grow your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Business Registration */}
            <div className="bg-[#282A2E] rounded-xl p-8 border border-[#45474D] hover:border-[#5b91e1] transition-all duration-300 transform hover:scale-105">
              <div className="mb-6">
                <Building className="h-12 w-12 text-[#5b91e1] mb-4" />
                <h2 className="text-xl font-semibold text-[#F5F6FA] mb-2">Business Registration</h2>
                <p className="text-[#DCDEE1] mb-4">Complete business setup services for all types of company structures with expert CA guidance</p>
                <ul className="text-sm text-[#AEB0B8] mb-4 space-y-1">
                  <li>• Private Limited Company Registration</li>
                  <li>• Public Limited Company Registration</li>
                  <li>• LLP Registration</li>
                  <li>• One Person Company Registration</li>
                </ul>
                <Link
                  href="/services/business-registration"
                  className="text-[#F5F6FA] hover:text-[#5b91e1] font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* 2. GST & Indirect Taxes */}
            <div className="bg-dark-primary rounded-xl p-8 border border-dark-border hover:border-accent-grey transition-all duration-300 transform hover:scale-105">
              <div className="mb-6">
                <FileText className="h-12 w-12 text-accent-grey mb-4" />
                <h2 className="text-xl font-semibold text-white mb-2">GST & Indirect Taxes</h2>
                <p className="text-gray-300 mb-4">Comprehensive GST registration, filing, compliance, and indirect tax consulting services</p>
                <ul className="text-sm text-gray-400 mb-4 space-y-1">
                  <li>• GST Registration</li>
                  <li>• GST Filing</li>
                  <li>• GST Portal Login Assistance</li>
                  <li>• HSN Code Finder</li>
                </ul>
                <Link
                  href="/services/gst-tax-services"
                  className="text-white hover:text-accent-grey font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* 3. Licenses & Registrations */}
            <div className="bg-dark-primary rounded-xl p-8 border border-dark-border hover:border-accent-grey transition-all duration-300 transform hover:scale-105">
              <div className="mb-6">
                <Gavel className="h-12 w-12 text-accent-grey mb-4" />
                <h2 className="text-xl font-semibold text-white mb-2">Licenses & Registrations</h2>
                <p className="text-gray-300 mb-4">Essential business licenses and regulatory registrations for legal compliance and smooth operations</p>
                <ul className="text-sm text-gray-400 mb-4 space-y-1">
                  <li>• Udyam Registration</li>
                  <li>• MSME Registration</li>
                  <li>• Trade Licenses</li>
                  <li>• FSSAI (Food License)</li>
                </ul>
                <Link
                  href="/services/licenses-registrations"
                  className="text-white hover:text-accent-grey font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* 4. NGO Services */}
            <div className="bg-dark-primary rounded-xl p-8 border border-dark-border hover:border-accent-grey transition-all duration-300 transform hover:scale-105">
              <div className="mb-6">
                <CheckCircle className="h-12 w-12 text-accent-grey mb-4" />
                <h2 className="text-xl font-semibold text-white mb-2">NGO Services</h2>
                <p className="text-gray-300 mb-4">Non-profit organization registration services for charitable trusts, NGOs, and Section 8 companies</p>
                <ul className="text-sm text-gray-400 mb-4 space-y-1">
                  <li>• Section 8 Company Registration</li>
                  <li>• Trust Registration</li>
                  <li>• NGO Registration</li>
                </ul>
                <Link
                  href="/services/ngo-services"
                  className="text-white hover:text-accent-grey font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* 5. Accounting & Taxing */}
            <div className="bg-dark-primary rounded-xl p-8 border border-dark-border hover:border-accent-grey transition-all duration-300 transform hover:scale-105">
              <div className="mb-6">
                <Calculator className="h-12 w-12 text-accent-grey mb-4" />
                <h2 className="text-xl font-semibold text-white mb-2">Accounting & Taxing</h2>
                <p className="text-gray-300 mb-4">Complete accounting, bookkeeping, and tax filing services for individuals, partnerships, and corporations</p>
                <ul className="text-sm text-gray-400 mb-4 space-y-1">
                  <li>• Accounting and Bookkeeping</li>
                  <li>• TDS Return Filing</li>
                  <li>• Individual Income Tax Filing</li>
                  <li>• Proprietorship Tax Return Filing</li>
                </ul>
                <Link
                  href="/services/accounting-taxing"
                  className="text-white hover:text-accent-grey font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* 6. Mandatory Annual Filings */}
            <div className="bg-dark-primary rounded-xl p-8 border border-dark-border hover:border-accent-grey transition-all duration-300 transform hover:scale-105">
              <div className="mb-6">
                <BarChart3 className="h-12 w-12 text-accent-grey mb-4" />
                <h2 className="text-xl font-semibold text-white mb-2">Mandatory Annual Filings</h2>
                <p className="text-gray-300 mb-4">Essential annual compliance services for companies and LLPs to maintain legal standing</p>
                <ul className="text-sm text-gray-400 mb-4 space-y-1">
                  <li>• Annual Compliance Services</li>
                  <li>• LLP Annual Filings</li>
                </ul>
                <Link
                  href="/services/mandatory-annual-filings"
                  className="text-white hover:text-accent-grey font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* 7. Changes in Private Limited Company */}
            <div className="bg-dark-primary rounded-xl p-8 border border-dark-border hover:border-accent-grey transition-all duration-300 transform hover:scale-105">
              <div className="mb-6">
                <TrendingUp className="h-12 w-12 text-accent-grey mb-4" />
                <h2 className="text-xl font-semibold text-white mb-2">Changes in Private Limited Company</h2>
                <p className="text-gray-300 mb-4">Comprehensive company modification services for director changes, capital alterations, and business updates</p>
                <ul className="text-sm text-gray-400 mb-4 space-y-1">
                  <li>• Add a Director</li>
                  <li>• Remove a Director</li>
                  <li>• Increase Authorized Capital</li>
                  <li>• Close the Pvt Ltd Company</li>
                </ul>
                <Link
                  href="/services/private-company-changes"
                  className="text-white hover:text-accent-grey font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* 8. Changes in Limited Liability Partnership */}
            <div className="bg-dark-primary rounded-xl p-8 border border-dark-border hover:border-accent-grey transition-all duration-300 transform hover:scale-105">
              <div className="mb-6">
                <Building className="h-12 w-12 text-accent-grey mb-4" />
                <h2 className="text-xl font-semibold text-white mb-2">Changes in Limited Liability Partnership</h2>
                <p className="text-gray-300 mb-4">LLP modification services for partner changes, agreement amendments, and business closure</p>
                <ul className="text-sm text-gray-400 mb-4 space-y-1">
                  <li>• Add Designated Partner</li>
                  <li>• Amend LLP Agreement</li>
                  <li>• Close LLP</li>
                </ul>
                <Link
                  href="/services/llp-changes"
                  className="text-white hover:text-accent-grey font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* 9. Employee Benefits */}
            <div className="bg-dark-primary rounded-xl p-8 border border-dark-border hover:border-accent-grey transition-all duration-300 transform hover:scale-105">
              <div className="mb-6">
                <User className="h-12 w-12 text-accent-grey mb-4" />
                <h2 className="text-xl font-semibold text-white mb-2">Employee Benefits</h2>
                <p className="text-gray-300 mb-4">Employee welfare and statutory compliance services including PF, ESI, and payroll management</p>
                <ul className="text-sm text-gray-400 mb-4 space-y-1">
                  <li>• PF Registration</li>
                  <li>• ESI Registration</li>
                  <li>• TDS Returns (Form 24QB)</li>
                  <li>• Payroll Register</li>
                </ul>
                <Link
                  href="/services/employee-benefits"
                  className="text-white hover:text-accent-grey font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">Trusted by hundreds of startups and growing businesses</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dark-secondary rounded-xl p-8 hover:bg-dark-tertiary transition-all duration-300">
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Excellent service for our startup registration. The team was professional and guided us through every step of the process."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-accent-grey rounded-full flex items-center justify-center mr-3">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Rajesh Kumar</p>
                    <p className="text-gray-400 text-sm">CEO, TechStart Solutions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-secondary rounded-xl p-8 hover:bg-dark-tertiary transition-all duration-300">
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Quick turnaround time and transparent pricing. They handled our GST registration seamlessly without any delays."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-accent-grey rounded-full flex items-center justify-center mr-3">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Priya Sharma</p>
                    <p className="text-gray-400 text-sm">Founder, EcoFriendly Products</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-secondary rounded-xl p-8 hover:bg-dark-tertiary transition-all duration-300">
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Their ongoing compliance support has been invaluable. Professional team with deep expertise in startup requirements."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-accent-grey rounded-full flex items-center justify-center mr-3">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Amit Patel</p>
                    <p className="text-gray-400 text-sm">Director, Innovation Labs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get expert guidance from our chartered accountants and start your entrepreneurial journey today.
          </p>
          <Button
            onClick={() => setIsBookingModalOpen(true)}
          >
            Book Free Consultation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-primary border-t border-dark-border py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Building className="h-8 w-8 text-white" />
                <span className="text-xl font-bold text-white">Registerstartup</span>
              </div>
              <p className="text-gray-300 mb-6">
                Your trusted partner for all CA services, helping startups and businesses grow with confidence.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Our Services</a></li>
                <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/service/private-limited-company" className="text-gray-300 hover:text-white transition-colors">Company Registration</Link></li>
                <li><Link href="/service/gst-registration" className="text-gray-300 hover:text-white transition-colors">GST Registration</Link></li>
                <li><Link href="/service/income-tax-filing" className="text-gray-300 hover:text-white transition-colors">Tax Filing</Link></li>
                <li><Link href="/service/copyright-registration" className="text-gray-300 hover:text-white transition-colors">Copyright</Link></li>
                <li><Link href="/service/accounting-bookkeeping" className="text-gray-300 hover:text-white transition-colors">Accounting</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 mr-3 text-accent-grey" />
                  contact@registerstartup.com
                </li>
                <li className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 mr-3 text-accent-grey" />
                  +91 98765 43210
                </li>
                <li className="flex items-start text-gray-300">
                  <MapPin className="h-5 w-5 mr-3 text-accent-grey mt-1" />
                  123 Business District, Mumbai, Maharashtra 400001
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-dark-border mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Registerstartup. All rights reserved. | 
              <a href="#" className="hover:text-white transition-colors"> Privacy Policy</a> | 
              <a href="#" className="hover:text-white transition-colors"> Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
}
