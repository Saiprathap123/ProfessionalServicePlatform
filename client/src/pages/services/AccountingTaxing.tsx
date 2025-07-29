import { useState } from "react";
import { Link } from "wouter";
import { Calculator, FileText, CheckCircle, Users, TrendingUp, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function AccountingTaxing() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const accountingServices = [
    {
      name: "Accounting and Bookkeeping",
      slug: "accounting-bookkeeping",
      description: "Comprehensive bookkeeping, financial statements, and accounting solutions for businesses"
    },
    {
      name: "TDS Return Filing",
      slug: "tds-return-filing",
      description: "Tax Deducted at Source return filing and compliance management"
    },
    {
      name: "Individual Income Tax Filing",
      slug: "individual-income-tax-filing",
      description: "Personal income tax return filing with maximum refunds and exemptions"
    },
    {
      name: "Proprietorship Tax Return Filing",
      slug: "proprietorship-tax-return-filing",
      description: "Tax return filing for sole proprietorship businesses and freelancers"
    },
    {
      name: "ITR for LLP",
      slug: "itr-llp",
      description: "Income tax return filing specifically for Limited Liability Partnerships"
    },
    {
      name: "Corporate Tax Filing",
      slug: "corporate-tax-filing",
      description: "Company income tax return filing and corporate tax compliance"
    },
    {
      name: "Income Tax Assessment",
      slug: "income-tax-assessment",
      description: "Income tax assessment assistance and scrutiny handling"
    },
    {
      name: "Income Tax Notice Handling",
      slug: "income-tax-notice-handling",
      description: "Professional handling of income tax notices and department correspondence"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Accounting & Taxing
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Complete accounting, bookkeeping, and tax filing services for individuals, partnerships, and corporations. Expert CA services for all your financial needs.
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
              <h2 className="text-3xl font-bold text-white mb-6">Professional Financial Management</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Our chartered accountants provide comprehensive accounting and taxation services to help you manage finances efficiently and ensure full compliance with tax regulations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Maximum tax savings and deductions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Accurate financial statements and reporting</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Timely tax return filing and compliance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent-grey mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Expert handling of tax notices and assessments</p>
                </div>
              </div>
            </div>
            <div className="bg-dark-primary p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Tax Optimization</h4>
                  <p className="text-gray-300 text-sm">Maximum savings</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Compliance</h4>
                  <p className="text-gray-300 text-sm">Full regulatory adherence</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Accounting & Tax Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive financial management solutions for all business types
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accountingServices.map((service) => (
              <div
                key={service.slug}
                className="bg-dark-secondary rounded-xl p-8 border border-dark-border hover:border-accent-grey transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-6">
                  <Calculator className="h-12 w-12 text-accent-grey mb-4" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Optimize Your Finances?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get expert accounting and tax services from qualified chartered accountants. Start saving today.
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