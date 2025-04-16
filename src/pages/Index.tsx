
import React from "react";
import HeroImageSection from "@/components/HeroImageSection";
import BenefitsSection from "@/components/BenefitsSection";
import ApplicationForm from "@/components/ApplicationForm";

const Index = () => {
  return (
    <div className="bg-depando-secondary min-h-screen">
      <HeroImageSection />
      <BenefitsSection />
      <ApplicationForm />
      <footer className="container mx-auto px-4 py-8 text-center text-depando-text">
        <p className="text-sm">© {new Date().getFullYear()} Depando. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Index;
