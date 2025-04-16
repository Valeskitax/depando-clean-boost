
import React from "react";
import { Button } from "@/components/ui/button";
import LandingIcon from "./LandingIcon";

const HeroImageSection = () => {
  return (
    <div className="relative min-h-screen bg-depando-secondary flex items-center">
      <div className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-12">
        <div className="space-y-6 text-depando-text">
          <h1 className="text-4xl md:text-5xl font-bold">
            Más seguro, menos comisiones
          </h1>
          <p className="text-xl md:text-2xl">
            La plataforma ideal para arrendar departamentos completos en Chile.
          </p>
          <div className="flex space-x-4">
            <Button className="bg-depando-primary text-depando-accent">
              ¡Regístrate!
            </Button>
            <Button variant="outline" className="border-depando-primary text-depando-primary">
              Preguntas frecuentes
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
