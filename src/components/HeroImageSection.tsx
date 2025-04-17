
import React from "react";
import { Button } from "@/components/ui/button";
import LandingIcon from "./LandingIcon";
import { ArrowDownCircle } from "lucide-react";

const HeroImageSection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("application-form");
    if (formElement) {
      formElement.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  
  return (
    <div className="relative min-h-screen flex items-center bg-zinc-50">
      <div className="absolute top-4 left-4">
        <img 
          src="/lovable-uploads/0dced369-5dda-48ac-85f4-e6ebdb15e770.png" 
          alt="Depando Logo" 
          className="h-10 w-auto" 
        />
      </div>
      <div className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-12 bg-zinc-50">
        <div className="space-y-6 text-depando-text">
          <h1 className="text-4xl md:text-5xl font-bold">Profesionales del aseo que marcan la diferencia</h1>
          <p className="text-xl md:text-2xl">Accede a oportunidades con anfitriones que valoran tu experiencia y compromiso</p>
          <div className="flex space-x-4">
            <Button className="bg-depando-primary text-depando-accent hover:bg-depando-primary/90" onClick={scrollToForm}>
              Postula ahora <ArrowDownCircle className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex justify-center bg-zinc-50">
          <LandingIcon className="max-w-full h-auto rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroImageSection;

