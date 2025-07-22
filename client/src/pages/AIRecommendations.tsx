import { useState } from "react";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";
import ServiceRecommendationEngine from "@/components/ServiceRecommendationEngine";

export default function AIRecommendations() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navigation onBookingClick={() => setIsBookingModalOpen(true)} />
      
      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ServiceRecommendationEngine />
        </div>
      </section>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
}