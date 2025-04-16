
import React from "react";
import { Button } from "@/components/ui/button";
import LandingIcon from "./LandingIcon";
import { ArrowDownCircle } from "lucide-react";

const HeroImageSection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("application-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-depando-secondary flex items-center">
      <div className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-12">
        <div className="space-y-6 text-depando-text">
          <h1 className="text-4xl md:text-5xl font-bold">
            Sé parte del equipo de limpieza de excelencia
          </h1>
          <p className="text-xl md:text-2xl">
            Únete a Depando y trabaja limpiando propiedades de arriendo turístico con horarios flexibles y remuneración competitiva.
          </p>
          <div className="flex space-x-4">
            <Button 
              className="bg-depando-primary text-depando-accent hover:bg-depando-primary/90"
              onClick={scrollToForm}
            >
              Postula ahora <ArrowDownCircle className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <LandingIcon className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default HeroImageSection;
