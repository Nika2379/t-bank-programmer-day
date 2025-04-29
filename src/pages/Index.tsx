
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { AboutEvent } from "@/components/AboutEvent";
import { EventSchedule } from "@/components/EventSchedule";
import { TeamSection } from "@/components/TeamSection";
import { TechnicalEquipment } from "@/components/TechnicalEquipment";
import { SpaceDecoration } from "@/components/SpaceDecoration";
import { VenueLocation } from "@/components/VenueLocation";
import { RegistrationSection } from "@/components/RegistrationSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [showRegistration, setShowRegistration] = useState(false);

  const handleScrollToRegistration = () => {
    setShowRegistration(true);
    setTimeout(() => {
      document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero onRegisterClick={handleScrollToRegistration} />
      <AboutEvent />
      <EventSchedule />
      <TeamSection />
      <TechnicalEquipment />
      <SpaceDecoration />
      <VenueLocation />
      <RegistrationSection 
        showRegistration={showRegistration} 
        onShowRegistration={() => setShowRegistration(true)} 
      />
      <Footer />
    </div>
  );
};

export default Index;
