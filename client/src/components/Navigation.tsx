import { useState } from "react";
import { Link } from "wouter";
import { Building, ChevronDown, Menu, X, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  onBookingClick: () => void;
}

export default function Navigation({ onBookingClick }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const businessRegistrationServices = [
    { name: "Private Limited Company Registration", slug: "private-limited-company", isPage: true },
    { name: "Public Limited Company Registration", slug: "public-limited-company", isPage: true },
    { name: "Limited Liability Partnership (LLP) Registration", slug: "limited-liability-partnership", isPage: true },
    { name: "One Person Company Registration", slug: "one-person-company", isPage: true },
    { name: "Nidhi Company Registration", slug: "nidhi-company", isPage: true },
    { name: "Producer Company Registration", slug: "producer-company", isPage: true },
    { name: "Partnership Firm Registration", slug: "partnership-firm", isPage: true },
    { name: "Startup India Registration", slug: "startup-india", isPage: true },
  ];

  const gstTaxServices = [
    { name: "GST Registration", slug: "gst-registration", isPage: false },
    { name: "GST Filing", slug: "gst-filing", isPage: false },
    { name: "GST Portal Login Assistance", slug: "gst-portal-login-assistance", isPage: false },
    { name: "HSN Code Finder", slug: "hsn-code-finder", isPage: false },
    { name: "GST Cancellation and Revocation", slug: "gst-cancellation-revocation", isPage: false },
    { name: "Indirect Tax Consulting", slug: "indirect-tax-consulting", isPage: false },
  ];

  const licensesRegistrationsServices = [
    { name: "Udyam Registration", slug: "udyam-registration", isPage: true },
    { name: "MSME Registration", slug: "msme-registration", isPage: false },
    { name: "Trade Licenses", slug: "trade-license", isPage: true },
    { name: "FSSAI (Food License)", slug: "fssai-license", isPage: true },
    { name: "IEC (Import/Export Code)", slug: "import-export-code", isPage: false },
    { name: "Labour Licenses", slug: "labour-licenses", isPage: false },
  ];

  const moreServices = [
    {
      category: "NGO Services",
      items: [
        { name: "Section 8 Company Registration", slug: "section-8-company", isPage: true },
        { name: "Trust Registration", slug: "trust-registration", isPage: true },
        { name: "NGO Registration", slug: "ngo-registration", isPage: true },
      ]
    },
    {
      category: "Changes in Private Limited Company",
      items: [
        { name: "Add a Director", slug: "add-director", isPage: false },
        { name: "Remove a Director", slug: "remove-director", isPage: false },
        { name: "Increase Authorized Capital", slug: "increase-authorized-capital", isPage: false },
        { name: "Close the Pvt Ltd Company", slug: "close-private-company", isPage: false },
        { name: "Strike Off Company", slug: "strike-off-company", isPage: false },
        { name: "Change Objective or Activity", slug: "change-company-objective", isPage: false },
        { name: "Change Address", slug: "change-company-address", isPage: false },
      ]
    },
    {
      category: "Changes in Limited Liability Partnership",
      items: [
        { name: "Add Designated Partner", slug: "add-designated-partner", isPage: false },
        { name: "Amend LLP Agreement", slug: "amend-llp-agreement", isPage: false },
        { name: "Close LLP", slug: "close-llp", isPage: false },
      ]
    },
    {
      category: "Employee Benefits",
      items: [
        { name: "PF Registration", slug: "pf-registration", isPage: false },
        { name: "ESI Registration", slug: "esi-registration", isPage: false },
        { name: "TDS Returns (Form 24QB)", slug: "tds-returns-24qb", isPage: false },
        { name: "Payroll Register", slug: "payroll-register", isPage: false },
        { name: "Professional Tax Registration", slug: "professional-tax-registration", isPage: false },
      ]
    },
    {
      category: "Mandatory Annual Filings",
      items: [
        { name: "Annual Compliance Services", slug: "annual-compliance-services", isPage: false },
        { name: "LLP Annual Filings", slug: "llp-annual-filings", isPage: false },
      ]
    },
    {
      category: "Accounting & Tax",
      items: [
        { name: "Accounting and Bookkeeping", slug: "accounting-bookkeeping", isPage: false },
        { name: "TDS Return Filing", slug: "tds-return-filing", isPage: false },
        { name: "Individual Income Tax Filing", slug: "individual-income-tax-filing", isPage: false },
        { name: "Proprietorship Tax Return Filing", slug: "proprietorship-tax-return-filing", isPage: false },
        { name: "ITR for LLP", slug: "itr-llp", isPage: false },
        { name: "Corporate Tax Filing", slug: "corporate-tax-filing", isPage: false },
        { name: "Income Tax Assessment", slug: "income-tax-assessment", isPage: false },
        { name: "Income Tax Notice Handling", slug: "income-tax-notice-handling", isPage: false },
      ]
    }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#222327]/95 backdrop-blur-sm border-b border-[#45474D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Building className="h-8 w-8 text-[#F5F6FA]" />
            <span className="text-xl font-bold text-[#F5F6FA]">Registerstartup</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Business Registration Dropdown */}
            <div className="relative group">
              <Link 
                href="/services/business-registration"
                className="text-[#DCDEE1] hover:text-[#F5F6FA] px-3 py-2 text-sm font-medium flex items-center"
              >
                Business Registration
                <ChevronDown className="ml-1 h-3 w-3" />
              </Link>
              <div className="absolute left-0 mt-2 w-64 bg-[#363940] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {businessRegistrationServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={service.isPage ? `/services/${service.slug}` : `/service/${service.slug}`}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-dark-tertiary"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* GST & Indirect Tax Dropdown */}
            <div className="relative group">
              <Link 
                href="/services/gst-tax-services"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center"
              >
                GST & Indirect Tax
                <ChevronDown className="ml-1 h-3 w-3" />
              </Link>
              <div className="absolute left-0 mt-2 w-64 bg-dark-secondary rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {gstTaxServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/service/${service.slug}`}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-dark-tertiary"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Licenses & Registrations Dropdown */}
            <div className="relative group">
              <Link 
                href="/services/licenses-registrations"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center"
              >
                Licenses & Registrations
                <ChevronDown className="ml-1 h-3 w-3" />
              </Link>
              <div className="absolute left-0 mt-2 w-64 bg-dark-secondary rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {licensesRegistrationsServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={service.isPage ? `/services/${service.slug}` : `/service/${service.slug}`}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-dark-tertiary"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Recommendations */}
            <Link 
              href="/ai-recommendations"
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center group"
            >
              <Brain className="mr-1 h-4 w-4 text-accent-grey group-hover:text-white transition-colors" />
              AI Recommendations
            </Link>

            {/* More Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center">
                More
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              <div className="absolute right-0 mt-2 w-[800px] bg-dark-secondary rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 max-h-[80vh] overflow-y-auto">
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {moreServices.map((category) => (
                      <div key={category.category} className="space-y-3">
                        <h3 className="text-sm font-semibold text-white border-b border-dark-border pb-2">
                          {category.category}
                        </h3>
                        <div className="space-y-2">
                          {category.items.map((service) => (
                            <Link
                              key={service.slug}
                              href={service.isPage ? `/services/${service.slug}` : `/service/${service.slug}`}
                              className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-dark-tertiary rounded transition-colors duration-150"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button onClick={onBookingClick}>
              Talk to Expert
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-dark-secondary border-t border-dark-border max-h-[80vh] overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="space-y-1">
                <Link 
                  href="/services/business-registration"
                  className="text-gray-300 hover:text-white px-3 py-3 text-base font-medium block hover:bg-dark-tertiary rounded transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Business Registration
                </Link>
                {businessRegistrationServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={service.isPage ? `/services/${service.slug}` : `/service/${service.slug}`}
                    className="text-gray-300 hover:text-white block px-6 py-2 text-sm hover:bg-dark-tertiary rounded transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <div className="space-y-1 border-t border-dark-border pt-2">
                <Link 
                  href="/services/gst-tax-services"
                  className="text-gray-300 hover:text-white px-3 py-3 text-base font-medium block hover:bg-dark-tertiary rounded transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  GST & Indirect Tax
                </Link>
                {gstTaxServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/service/${service.slug}`}
                    className="text-gray-300 hover:text-white block px-6 py-2 text-sm hover:bg-dark-tertiary rounded transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <div className="space-y-1 border-t border-dark-border pt-2">
                <Link 
                  href="/services/licenses-registrations"
                  className="text-gray-300 hover:text-white px-3 py-3 text-base font-medium block hover:bg-dark-tertiary rounded transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Licenses & Registrations
                </Link>
                {licensesRegistrationsServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={service.isPage ? `/services/${service.slug}` : `/service/${service.slug}`}
                    className="text-gray-300 hover:text-white block px-6 py-2 text-sm hover:bg-dark-tertiary rounded transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <div className="space-y-1 border-t border-dark-border pt-2">
                <Link 
                  href="/ai-recommendations"
                  className="text-gray-300 hover:text-white px-3 py-3 text-base font-medium block hover:bg-dark-tertiary rounded transition-colors flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Brain className="mr-2 h-4 w-4 text-accent-grey" />
                  AI Recommendations
                </Link>
              </div>

              <div className="space-y-1 border-t border-dark-border pt-2">
                <div className="text-gray-300 px-3 py-3 text-base font-medium">More Services</div>
                <div className="grid grid-cols-1 gap-4 px-3">
                  {moreServices.map((category) => (
                    <div key={category.category} className="space-y-2">
                      <div className="text-sm font-semibold text-white border-b border-dark-border pb-1">
                        {category.category}
                      </div>
                      <div className="space-y-1">
                        {category.items.map((service) => (
                          <Link
                            key={service.slug}
                            href={service.isPage ? `/services/${service.slug}` : `/service/${service.slug}`}
                            className="text-gray-300 hover:text-white block px-3 py-2 text-sm hover:bg-dark-tertiary rounded transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-dark-border pt-4">
                <Button
                  onClick={() => {
                    onBookingClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-accent-grey hover:bg-white text-white hover:text-dark-primary px-4 py-3 rounded-lg text-base font-medium transition-colors"
                >
                  Talk to Expert
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
