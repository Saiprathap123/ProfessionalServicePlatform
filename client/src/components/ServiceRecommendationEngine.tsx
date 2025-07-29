import { useState } from "react";
import { Link } from "wouter";
import { Brain, ChevronRight, Clock, DollarSign, AlertCircle, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ServiceRecommendation {
  serviceName: string;
  serviceRoute: string;
  priority: "high" | "medium" | "low";
  reasoning: string;
  estimatedCost: string;
  timeline: string;
  urgency: string;
}

interface RecommendationResponse {
  recommendations: ServiceRecommendation[];
  summary: string;
  nextSteps: string[];
}

export default function ServiceRecommendationEngine() {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<RecommendationResponse | null>(null);
  const [formData, setFormData] = useState({
    businessType: "",
    businessStage: "",
    currentChallenges: "",
    timeframe: "",
    budget: "",
    specificNeeds: "",
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGetRecommendations = async () => {
    if (!formData.businessType || !formData.businessStage || !formData.currentChallenges) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to get personalized recommendations.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/ai-recommendations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to get recommendations");
      }

      const data = await response.json();
      setRecommendations(data);
      
      toast({
        title: "Recommendations Generated",
        description: "Your business needs have been analyzed and personalized service recommendations are ready.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate recommendations. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAnalysis = async () => {
    if (!formData.currentChallenges.trim()) {
      toast({
        title: "Missing Information",
        description: "Please describe your business or challenges for quick analysis.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/analyze-business", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: formData.currentChallenges }),
      });

      if (!response.ok) {
        throw new Error("Failed to analyze business");
      }

      const analysis = await response.json();
      
      setFormData(prev => ({
        ...prev,
        businessType: analysis.businessType || prev.businessType,
        businessStage: analysis.suggestedStage || prev.businessStage,
      }));

      toast({
        title: "Business Analyzed",
        description: "Your business description has been analyzed and relevant fields pre-filled.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to analyze business description. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "medium": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "low": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Brain className="h-12 w-12 text-accent-grey mr-3" />
          <Sparkles className="h-8 w-8 text-accent-grey" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">AI-Powered Service Recommendations</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Get personalized CA service recommendations based on your business needs and stage. 
          Our intelligent system analyzes your requirements to suggest the most relevant services.
        </p>
      </div>

      {/* Input Form */}
      <Card className="bg-dark-secondary border-dark-border">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Brain className="h-5 w-5 mr-2 text-accent-grey" />
            Tell Us About Your Business
          </CardTitle>
          <CardDescription className="text-gray-300">
            Share your business details to get intelligent service recommendations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="businessType" className="text-white">Business Type *</Label>
              <Select value={formData.businessType} onValueChange={(value) => handleInputChange("businessType", value)}>
                <SelectTrigger className="bg-dark-primary border-dark-border text-white">
                  <SelectValue placeholder="Select your business type" />
                </SelectTrigger>
                <SelectContent className="bg-dark-primary border-dark-border">
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="services">Professional Services</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="food">Food & Beverage</SelectItem>
                  <SelectItem value="tech">Technology/SaaS</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="real-estate">Real Estate</SelectItem>
                  <SelectItem value="ngo">NGO/Non-Profit</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessStage" className="text-white">Business Stage *</Label>
              <Select value={formData.businessStage} onValueChange={(value) => handleInputChange("businessStage", value)}>
                <SelectTrigger className="bg-dark-primary border-dark-border text-white">
                  <SelectValue placeholder="Select your business stage" />
                </SelectTrigger>
                <SelectContent className="bg-dark-primary border-dark-border">
                  <SelectItem value="idea">Idea Stage (Planning)</SelectItem>
                  <SelectItem value="startup">Startup (0-2 years)</SelectItem>
                  <SelectItem value="early">Early Stage (2-5 years)</SelectItem>
                  <SelectItem value="growing">Growing Business (5-10 years)</SelectItem>
                  <SelectItem value="established">Established (10+ years)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeframe" className="text-white">Timeframe</Label>
              <Select value={formData.timeframe} onValueChange={(value) => handleInputChange("timeframe", value)}>
                <SelectTrigger className="bg-dark-primary border-dark-border text-white">
                  <SelectValue placeholder="When do you need this?" />
                </SelectTrigger>
                <SelectContent className="bg-dark-primary border-dark-border">
                  <SelectItem value="immediate">Immediate (This week)</SelectItem>
                  <SelectItem value="month">Within a month</SelectItem>
                  <SelectItem value="quarter">Within 3 months</SelectItem>
                  <SelectItem value="flexible">Flexible timeline</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget" className="text-white">Budget Range</Label>
              <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                <SelectTrigger className="bg-dark-primary border-dark-border text-white">
                  <SelectValue placeholder="Your budget range" />
                </SelectTrigger>
                <SelectContent className="bg-dark-primary border-dark-border">
                  <SelectItem value="under-25k">Under ₹25,000</SelectItem>
                  <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                  <SelectItem value="50k-100k">₹50,000 - ₹1,00,000</SelectItem>
                  <SelectItem value="100k-250k">₹1,00,000 - ₹2,50,000</SelectItem>
                  <SelectItem value="above-250k">Above ₹2,50,000</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="challenges" className="text-white">Business Description & Current Challenges *</Label>
            <Textarea
              id="challenges"
              placeholder="Describe your business, current challenges, and what you're looking to achieve..."
              value={formData.currentChallenges}
              onChange={(e) => handleInputChange("currentChallenges", e.target.value)}
              className="bg-dark-primary border-dark-border text-white min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="specificNeeds" className="text-white">Specific Requirements (Optional)</Label>
            <Textarea
              id="specificNeeds"
              placeholder="Any specific services you're looking for or additional requirements..."
              value={formData.specificNeeds}
              onChange={(e) => handleInputChange("specificNeeds", e.target.value)}
              className="bg-dark-primary border-dark-border text-white"
            />
          </div>

          <div className="flex gap-4">
            <Button
              onClick={handleQuickAnalysis}
              variant="outline"
              disabled={isLoading}
              className="flex-1"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Quick Analysis
            </Button>
            <Button
              onClick={handleGetRecommendations}
              disabled={isLoading}
              className="flex-1"
            >
              {isLoading ? (
                "Analyzing..."
              ) : (
                <>
                  <Brain className="h-4 w-4 mr-2" />
                  Get Recommendations
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recommendations Display */}
      {recommendations && (
        <div className="space-y-6">
          {/* Summary */}
          <Card className="bg-dark-secondary border-dark-border">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-accent-grey" />
                AI Analysis Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-lg leading-relaxed">{recommendations.summary}</p>
            </CardContent>
          </Card>

          {/* Service Recommendations */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Recommended Services</h3>
            <div className="grid gap-6">
              {recommendations.recommendations.map((rec, index) => (
                <Card key={index} className="bg-dark-secondary border-dark-border hover:border-accent-grey transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-xl font-semibold text-white">{rec.serviceName}</h4>
                          <Badge className={getPriorityColor(rec.priority)}>
                            {rec.priority.toUpperCase()} PRIORITY
                          </Badge>
                        </div>
                        <p className="text-gray-300 mb-4">{rec.reasoning}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center text-gray-300">
                        <DollarSign className="h-4 w-4 mr-2 text-accent-grey" />
                        <span className="text-sm">{rec.estimatedCost}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Clock className="h-4 w-4 mr-2 text-accent-grey" />
                        <span className="text-sm">{rec.timeline}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <AlertCircle className="h-4 w-4 mr-2 text-accent-grey" />
                        <span className="text-sm">{rec.urgency}</span>
                      </div>
                    </div>

                    <Link href={rec.serviceRoute}>
                      <Button className="w-full group">
                        Learn More About This Service
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <Card className="bg-dark-secondary border-dark-border">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <ChevronRight className="h-5 w-5 mr-2 text-accent-grey" />
                Recommended Next Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                {recommendations.nextSteps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-accent-grey text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-300">{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}