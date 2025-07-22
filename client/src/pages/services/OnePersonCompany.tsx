import { useState } from "react";
import { Link } from "wouter";
import { User, CheckCircle, ArrowRight, Shield, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function OnePersonCompany() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const benefits = [
    {
      title: "Limited Liability Protection",
      description: "Personal assets are protected from business debts and liabilities"
    },
    {
      title: "Separate Legal Identity",
      description: "Company exists as a legal entity distinct from the owner"
    },
    {
      title: "Easy Fundraising Opportunities",
      description: "Attract investors and access funding more easily than sole proprietorship"
    },
    {
      title: "Reduced Compliance Requirements",
      description: "Fewer regulatory obligations compared to private limited companies"
    },
    {
      title: "Single Ownership and Control",
      description: "Complete control over business decisions ensures faster decision-making"
    },
    {
      title: "Perpetual Succession",
      description: "Business continuity maintained even after ownership changes"
    }
  ];

  const documentsRequired = [
    "PAN and Aadhaar Card of the director",
    "Passport-size photograph",
    "Proof of registered office address (Rent Agreement + NOC/utility bill)",
    "Nominee's consent (Form INC-3)",
    "Declaration in Form INC-9 and consent in Form DIR-2",
    "Digital Signature Certificate (DSC)",
    "Director Identification Number (DIN)",
    "Memorandum and Articles of Association"
  ];

  const applicability = [
    "Solo entrepreneurs seeking to formalize their business",
    "Startups and small businesses ineligible for partnership structures", 
    "Professionals and consultants desiring limited liability",
    "Small ventures that don't require multiple directors or investors",
    "Individual business owners wanting corporate benefits",
    "Freelancers looking to scale their operations"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Name Approval",
      description: "Get company name approved through MCA portal"
    },
    {
      step: "2", 
      title: "DIN & DSC",
      description: "Obtain Director Identification Number and Digital Signature Certificate"
    },
    {
      step: "3",
      title: "Document Filing",
      description: "File incorporation documents including MoA, AoA, and nominee consent"
    },
    {
      step: "4",
      title: "Incorporation",
      description: "Receive Certificate of Incorporation and commence operations"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <User className="h-16 w-16 text-accent-grey mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            One Person Company (OPC) Registration in India
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Perfect for solo entrepreneurs! Get the benefits of a company structure with single ownership. Enjoy limited liability protection, separate legal identity, and corporate advantages.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)}>
            Register Your OPC Today
          </Button>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What is a One Person Company (OPC)?</h2>
          <div className="bg-dark-tertiary rounded-xl p-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              A One Person Company (OPC) is a type of company where a single individual can own and manage the entire business while enjoying limited liability protection. It combines the benefits of a sole proprietorship and a private limited company, giving a single person full control over the business while ensuring separate legal identity and limited liability. This structure is ideal for solo entrepreneurs who want to formalize their business without sharing ownership.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Merits of One Person Company</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-dark-secondary rounded-xl p-6 hover:bg-dark-tertiary transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-grey rounded-full flex items-center justify-center flex-shrink-0">
                    <Crown className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Documents Required for OPC Registration</h2>
          <div className="bg-dark-tertiary rounded-xl p-8">
            <div className="grid gap-4">
              {documentsRequired.map((document, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-dark-hover rounded-lg">
                  <div className="w-8 h-8 bg-accent-grey rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-gray-300">{document}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applicability Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Who Should Choose OPC?</h2>
          <p className="text-lg text-gray-300 mb-8 text-center">
            OPC is ideal for various types of solo entrepreneurs and professionals:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applicability.map((item, index) => (
              <div key={index} className="bg-dark-secondary rounded-xl p-6 hover:bg-dark-tertiary transition-all duration-300">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-white">{item}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">OPC Registration Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent-grey rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-dark-secondary rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">What is the minimum capital required for OPC?</h3>
              <p className="text-gray-300">There is no minimum capital requirement for OPC registration under the Companies Act 2013.</p>
            </div>
            <div className="bg-dark-secondary rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Is a nominee mandatory for OPC?</h3>
              <p className="text-gray-300">Yes, every OPC must have a nominee who will become the member in case of death or incapacity of the sole member.</p>
            </div>
            <div className="bg-dark-secondary rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Can OPC be converted to Private Limited Company?</h3>
              <p className="text-gray-300">Yes, OPC can be converted to Private Limited Company when turnover exceeds ₹2 crores or paid-up capital exceeds ₹50 lakhs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-tertiary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your One Person Company?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Take your solo venture to the next level with OPC registration. Get expert CA guidance for seamless incorporation and compliance.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)}>
            Book Free Consultation
          </Button>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultService="one-person-company"
      />
    </div>
  );
}