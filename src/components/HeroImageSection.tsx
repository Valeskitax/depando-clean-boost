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
  return <div className="relative min-h-screen flex items-center bg-zinc-50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-12 bg-[t#dcc8fe] bg-zinc-50">
        <div className="space-y-6 text-depando-text">
          <h1 className="text-4xl md:text-5xl font-bold">Profesionales del aseo que marcan la diferencia</h1>
          <p className="text-xl md:text-2xl">Conecta con administradores que valoran tu experiencia y compromiso.

        </p>
          <div className="flex space-x-4">
            <Button className="bg-depando-primary text-depando-accent hover:bg-depando-primary/90" onClick={scrollToForm}>
              Postula ahora <ArrowDownCircle className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex justify-center bg-zinc-50">
          <LandingIcon className="max-w-full h-auto" />
        </div>
      </div>
    </div>;
};
export default HeroImageSection;