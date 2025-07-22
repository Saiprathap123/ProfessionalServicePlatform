import { useState } from "react";
import { useParams } from "wouter";
import { ChevronDown, FileText, Clock, DollarSign, CheckCircle, AlertCircle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";

interface ServiceInfo {
  title: string;
  tagline: string;
  overview: string;
  applicability: string[];
  benefits: string[];
  documents: string[];
  faq: { question: string; answer: string; }[];
  pricing: string;
  timeline: string;
}

export default function ServiceDetail() {
  const { serviceName } = useParams<{ serviceName: string }>();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const serviceData: Record<string, ServiceInfo> = {
    "private-limited-company": {
      title: "Private Limited Company Registration",
      tagline: "Start your business with limited liability protection",
      overview: "Private Limited Company is the most popular business structure for startups and SMEs in India. It provides limited liability protection to shareholders while offering credibility and easier access to funding.",
      applicability: [
        "Startups looking for investor funding",
        "Businesses requiring limited liability protection",
        "Companies planning to raise capital",
        "Businesses with multiple founders",
        "Enterprises planning international expansion"
      ],
      benefits: [
        "Limited liability protection for shareholders",
        "Separate legal entity status",
        "Easier access to loans and funding",
        "Credibility with customers and suppliers",
        "Perpetual succession",
        "Tax advantages and exemptions",
        "Professional management structure"
      ],
      documents: [
        "PAN Card of Directors",
        "Aadhaar Card of Directors",
        "Passport size photographs",
        "Address proof of registered office",
        "Electricity bill or rent agreement",
        "No Objection Certificate from landlord",
        "Digital Signature Certificate (DSC)",
        "Director Identification Number (DIN)"
      ],
      faq: [
        {
          question: "What is the minimum capital required for Private Limited Company?",
          answer: "There is no minimum capital requirement for Private Limited Company registration in India. You can start with as low as ₹1,000."
        },
        {
          question: "How many directors are required?",
          answer: "A minimum of 2 directors and maximum of 15 directors are required for a Private Limited Company."
        },
        {
          question: "Can foreigners be directors in an Indian Private Limited Company?",
          answer: "Yes, foreigners can be directors in an Indian Private Limited Company, subject to certain compliance requirements."
        },
        {
          question: "What is the timeline for registration?",
          answer: "Typically, it takes 10-15 working days to complete the registration process once all documents are submitted."
        }
      ],
      pricing: "₹6,999",
      timeline: "10-15 working days"
    },
    "gst-registration": {
      title: "GST Registration",
      tagline: "Get your business GST compliant quickly and efficiently",
      overview: "GST Registration is mandatory for businesses with turnover exceeding ₹20 lakhs (₹10 lakhs for special category states). Our expert CA team ensures hassle-free GST registration with complete compliance.",
      applicability: [
        "Businesses with turnover > ₹20 lakhs",
        "Inter-state supply of goods/services",
        "E-commerce operators",
        "Input Service Distributors",
        "Casual taxable persons",
        "Non-resident taxable persons"
      ],
      benefits: [
        "Legal compliance with GST laws",
        "Input tax credit eligibility",
        "Pan-India business operations",
        "Enhanced business credibility",
        "Simplified tax structure",
        "Digital tax filing system",
        "Reduced tax burden through ITC"
      ],
      documents: [
        "PAN Card of business/proprietor",
        "Aadhaar Card",
        "Address proof of business place",
        "Bank account statement",
        "Partnership deed (for partnership)",
        "MOA & AOA (for companies)",
        "Electricity bill of business place",
        "Rent agreement or property papers"
      ],
      faq: [
        {
          question: "Is GST registration mandatory for all businesses?",
          answer: "GST registration is mandatory for businesses with turnover exceeding ₹20 lakhs in most states and ₹10 lakhs in special category states."
        },
        {
          question: "Can I get GST registration with turnover below the threshold?",
          answer: "Yes, you can opt for voluntary GST registration even if your turnover is below the threshold limit."
        },
        {
          question: "What is GSTIN?",
          answer: "GSTIN (GST Identification Number) is a unique 15-digit number assigned to every GST registered business."
        },
        {
          question: "How long is GST registration valid?",
          answer: "GST registration is valid until it is cancelled. There is no renewal required, but regular filing of returns is mandatory."
        }
      ],
      pricing: "₹2,999",
      timeline: "3-7 working days"
    },
    "copyright-registration": {
      title: "Copyright Registration",
      tagline: "Protect your creative works and intellectual property",
      overview: "Copyright registration provides legal protection for original creative works including literary, artistic, musical, and software works. Get comprehensive protection for your intellectual property.",
      applicability: [
        "Authors and writers",
        "Software developers",
        "Artists and designers",
        "Musicians and composers",
        "Content creators",
        "Publishing companies",
        "Media and entertainment industry"
      ],
      benefits: [
        "Legal protection against infringement",
        "Exclusive rights to reproduce work",
        "Right to distribute and display",
        "Right to create derivative works",
        "Monetary compensation for infringement",
        "Enhanced business value",
        "International protection"
      ],
      documents: [
        "Application form with details",
        "Copy of the work to be copyrighted",
        "Identity proof of applicant",
        "Address proof",
        "Power of attorney (if filed through agent)",
        "Fee payment receipt",
        "Statement of particulars",
        "NOC from employer (if applicable)"
      ],
      faq: [
        {
          question: "What can be copyrighted?",
          answer: "Original literary, dramatic, musical, artistic works, cinematograph films, and sound recordings can be copyrighted."
        },
        {
          question: "How long does copyright protection last?",
          answer: "Copyright protection generally lasts for the lifetime of the author plus 60 years after their death."
        },
        {
          question: "Is copyright registration mandatory?",
          answer: "No, copyright exists automatically upon creation of original work. However, registration provides better legal protection."
        },
        {
          question: "Can I copyright an idea?",
          answer: "No, ideas cannot be copyrighted. Only the expression of ideas in a tangible form can be protected."
        }
      ],
      pricing: "₹4,999",
      timeline: "4-6 months"
    }
  };

  const service = serviceData[serviceName || ""];

  if (!service) {
    return (
      <div className="min-h-screen bg-dark-primary text-white">
        <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="text-gray-300">The requested service could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            {service.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center">
                <DollarSign className="h-4 w-4 mr-1" />
                Starting from {service.pricing}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {service.timeline}
              </div>
            </div>
          </div>
          <Button
            onClick={() => setIsBookingModalOpen(true)}
            className="mt-8 bg-white text-dark-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
          >
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Overview</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {service.overview}
          </p>
        </div>
      </section>

      {/* Applicability Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Who Should Apply?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.applicability.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Required Documents</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.documents.map((document, index) => (
              <div key={index} className="flex items-start space-x-3">
                <FileText className="h-5 w-5 text-accent-grey mt-1 flex-shrink-0" />
                <span className="text-gray-300">{document}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {service.faq.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-dark-primary border border-dark-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-white hover:text-accent-grey">
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="h-5 w-5 text-accent-grey" />
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our expert CA team handle your {service.title.toLowerCase()} process with complete compliance and transparency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-white text-dark-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              Book Free Consultation
            </Button>
            <div className="text-sm text-gray-300">
              Starting from {service.pricing} • {service.timeline}
            </div>
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
