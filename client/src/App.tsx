import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import ServiceDetail from "@/pages/ServiceDetail";
import BusinessRegistration from "@/pages/services/BusinessRegistration";
import GstTaxServices from "@/pages/services/GstTaxServices";
import ComplianceLegal from "@/pages/services/ComplianceLegal";
import TradeLicense from "@/pages/services/TradeLicense";
import UdyamRegistration from "@/pages/services/UdyamRegistration";
import FssaiLicense from "@/pages/services/FssaiLicense";
import PrivateLimitedCompany from "@/pages/services/PrivateLimitedCompany";
import PublicLimitedCompany from "@/pages/services/PublicLimitedCompany";
import LimitedLiabilityPartnership from "@/pages/services/LimitedLiabilityPartnership";
import OnePersonCompany from "@/pages/services/OnePersonCompany";
import NidhiCompany from "@/pages/services/NidhiCompany";
import PartnershipFirm from "@/pages/services/PartnershipFirm";
import ProducerCompany from "@/pages/services/ProducerCompany";
import StartupIndia from "@/pages/services/StartupIndia";
import Section8Company from "@/pages/services/Section8Company";
import TrustRegistration from "@/pages/services/TrustRegistration";
import NGORegistration from "@/pages/services/NGORegistration";
import LicensesRegistrations from "@/pages/services/LicensesRegistrations";
import NGOServices from "@/pages/services/NGOServices";
import AccountingTaxing from "@/pages/services/AccountingTaxing";
import MandatoryAnnualFilings from "@/pages/services/MandatoryAnnualFilings";
import PrivateCompanyChanges from "@/pages/services/PrivateCompanyChanges";
import LLPChanges from "@/pages/services/LLPChanges";
import EmployeeBenefits from "@/pages/services/EmployeeBenefits";
import AboutUs from "@/pages/AboutUs";
import ContactUs from "@/pages/ContactUs";
import Blog from "@/pages/Blog";
import AIRecommendations from "@/pages/AIRecommendations";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/business-registration" component={BusinessRegistration} />
      <Route path="/services/gst-tax-services" component={GstTaxServices} />
      <Route path="/services/compliance-legal" component={ComplianceLegal} />
      <Route path="/services/trade-license" component={TradeLicense} />
      <Route path="/services/udyam-registration" component={UdyamRegistration} />
      <Route path="/services/fssai-license" component={FssaiLicense} />
      <Route path="/services/private-limited-company" component={PrivateLimitedCompany} />
      <Route path="/services/public-limited-company" component={PublicLimitedCompany} />
      <Route path="/services/limited-liability-partnership" component={LimitedLiabilityPartnership} />
      <Route path="/services/one-person-company" component={OnePersonCompany} />
      <Route path="/services/nidhi-company" component={NidhiCompany} />
      <Route path="/services/partnership-firm" component={PartnershipFirm} />
      <Route path="/services/producer-company" component={ProducerCompany} />
      <Route path="/services/startup-india" component={StartupIndia} />
      <Route path="/services/section-8-company" component={Section8Company} />
      <Route path="/services/trust-registration" component={TrustRegistration} />
      <Route path="/services/ngo-registration" component={NGORegistration} />
      <Route path="/services/licenses-registrations" component={LicensesRegistrations} />
      <Route path="/services/ngo-services" component={NGOServices} />
      <Route path="/services/accounting-taxing" component={AccountingTaxing} />
      <Route path="/services/mandatory-annual-filings" component={MandatoryAnnualFilings} />
      <Route path="/services/private-company-changes" component={PrivateCompanyChanges} />
      <Route path="/services/llp-changes" component={LLPChanges} />
      <Route path="/services/employee-benefits" component={EmployeeBenefits} />
      <Route path="/about" component={AboutUs} />
      <Route path="/contact" component={ContactUs} />
      <Route path="/blog" component={Blog} />
      <Route path="/ai-recommendations" component={AIRecommendations} />
      <Route path="/service/:serviceName" component={ServiceDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
