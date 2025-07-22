import { useState } from "react";
import { Link } from "wouter";
import { Users, FileText, CheckCircle, Calculator, Shield, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function EmployeeBenefits() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const benefitServices = [
    {
      name: "PF Registration",
      slug: "pf-registration",
      description: "Provident Fund registration and compliance for employee retirement benefits"
    },
    {
      name: "ESI Registration",
      slug: "esi-registration",
      description: "Employee State Insurance registration for medical and cash benefits"
    },
    {
      name: "TDS Returns (Form 24QB)",
      slug: "tds-returns-24qb",
      description: "Quarterly TDS return filing for salary and wage payments"
    },
    {
      name: "Payroll Register",
      slug: "payroll-register",
      description: "Complete payroll management and employee salary processing"
    },
    {
      name: "Professional Tax Registration",
      slug: "professional-tax-registration",
      description: "Professional tax registration and compliance for state regulations"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Employee Benefits
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Employee welfare and statutory compliance services including PF, ESI, payroll management, and professional tax registration with expert CA guidance.
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
              <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Employee Welfare</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Ensure employee satisfaction and statutory compliance with our comprehensive employee benefits management services. Our chartered accountants handle all aspects of employee welfare regulations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Complete statutory compliance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Employee satisfaction and retention</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Automated payroll processing</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Risk mitigation and legal protection</p>
                </div>
              </div>
            </div>
            <div className="bg-dark-primary p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Legal Protection</h4>
                  <p className="text-gray-300 text-sm">Full compliance assurance</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Employee Welfare</h4>
                  <p className="text-gray-300 text-sm">Comprehensive benefits</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Employee Benefit Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete employee welfare and statutory compliance solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitServices.map((service) => (
              <div
                key={service.slug}
                className="bg-dark-secondary rounded-xl p-8 border border-dark-border hover:border-accent-grey transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-6">
                  <Users className="h-12 w-12 text-accent-grey mb-4" />
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

      {/* Compliance Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Statutory Requirements</h2>
            <p className="text-xl text-gray-300">Essential compliance for employee welfare</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">PF Compliance</h3>
              <p className="text-gray-300 text-sm">20+ employees require PF registration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">ESI Registration</h3>
              <p className="text-gray-300 text-sm">10+ employees in most states</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Professional Tax</h3>
              <p className="text-gray-300 text-sm">State-specific requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">TDS on Salary</h3>
              <p className="text-gray-300 text-sm">Monthly deduction and quarterly filing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Enhance Employee Benefits?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get expert guidance from our chartered accountants for all your employee welfare and compliance needs.
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