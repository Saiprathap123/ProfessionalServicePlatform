import { useState } from "react";
import { Link } from "wouter";
import { Wheat, CheckCircle, Tractor, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

export default function ProducerCompany() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const benefits = [
    {
      title: "Limited Liability for Members",
      description: "Personal assets of farmer-members are protected from business liabilities"
    },
    {
      title: "Combines Company and Cooperative Benefits",
      description: "Professional management framework with cooperative principles"
    },
    {
      title: "Supports Agricultural Growth",
      description: "Promotes farmer welfare and collective agricultural development"
    },
    {
      title: "Low Capital Requirement",
      description: "Minimum Rs. 1 lakh paid-up capital and Rs. 5 lakh authorized capital"
    },
    {
      title: "Farmer Ownership Ensured",
      description: "No government or private equity stake - complete farmer control"
    },
    {
      title: "Nationwide Operational Scope",
      description: "Can operate across India for agricultural activities"
    },
    {
      title: "Value Addition and Market Access",
      description: "Promotes processing, value addition, and better market linkages"
    }
  ];

  const documentsRequired = [
    "PAN and Aadhaar of directors",
    "Passport-size photographs of directors",
    "Proof of registered office address (rent agreement + NOC/utility bill)",
    "Digital Signature Certificate (DSC) for directors",
    "Director Identification Number (DIN) for all directors",
    "Memorandum of Association (MoA) and Articles of Association (AoA)",
    "Proof of farming activity (if applicable)",
    "Declaration forms (INC-9, DIR-2)",
    "Bank account details for capital deposit"
  ];

  const applicability = [
    "Farmer groups aiming for collective business benefits",
    "Agribusiness ventures requiring processing and value addition",
    "Rural development initiatives transitioning to corporate structures",
    "Agricultural cooperatives seeking professional management",
    "Agricultural supply chains including production and marketing",
    "Export-oriented agricultural businesses"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Name Approval",
      description: "Reserve company name with 'Producer Company Limited' suffix"
    },
    {
      step: "2", 
      title: "Capital Arrangement",
      description: "Arrange minimum Rs. 1 lakh paid-up and Rs. 5 lakh authorized capital"
    },
    {
      step: "3",
      title: "Document Filing",
      description: "File incorporation documents with MCA"
    },
    {
      step: "4",
      title: "Registration Complete",
      description: "Receive Certificate of Incorporation and commence operations"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Wheat className="h-16 w-16 text-accent-grey mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Producer Company Registration in India
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Empower farmers with collective strength! Register a Producer Company to promote agricultural growth, value addition, and better market access for farming communities.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)}>
            Register Producer Company Today
          </Button>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What is a Producer Company?</h2>
          <div className="bg-dark-tertiary rounded-xl p-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              A Producer Company is a legally recognized business entity formed by a group of farmers or agriculturists to promote their collective interests. It operates as a hybrid between a private limited company and a cooperative society, offering limited liability protection while supporting cooperative activities like production, harvesting, processing, and marketing of agricultural produce. This structure empowers farmers to achieve better prices, reduce costs, and access modern agricultural technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Merits of Producer Company</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-dark-secondary rounded-xl p-6 hover:bg-dark-tertiary transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-grey rounded-full flex items-center justify-center flex-shrink-0">
                    <Tractor className="h-6 w-6 text-white" />
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Documents Required for Producer Company Registration</h2>
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Who Should Choose Producer Company?</h2>
          <p className="text-lg text-gray-300 mb-8 text-center">
            A Producer Company is suitable for agricultural and farming initiatives:
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Producer Company Registration Process</h2>
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

      {/* Key Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Features of Producer Company</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-dark-secondary rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Membership Requirements</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Minimum 10 members required
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Members must be primary producers
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  At least 2/3rd members should be individual producers
                </li>
              </ul>
            </div>
            
            <div className="bg-dark-secondary rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Business Activities</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Production, harvesting, processing of produce
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Marketing and sale of agricultural products
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-grey flex-shrink-0" />
                  Import of agricultural goods and equipment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-tertiary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Empower Your Farming Community?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Unite farmers for collective growth and better market access. Get expert assistance for Producer Company registration and agricultural business development.
          </p>
          <Button onClick={() => setIsBookingModalOpen(true)}>
            Book Free Consultation
          </Button>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultService="producer-company"
      />
    </div>
  );
}