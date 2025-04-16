
import React from "react";
import CleaningIcon from "./CleaningIcon";

const HeroImageSection = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-depando-light to-white" />
        <div className="grid grid-cols-6 grid-rows-6 gap-4 h-full w-full p-8">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center">
              <CleaningIcon className="w-full h-full text-depando-accent opacity-20" />
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center">
        <div className="w-20 h-20 mb-6 text-depando-primary">
          <CleaningIcon className="w-full h-full" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-depando-dark mb-6">
          Únete al equipo de profesionales de limpieza de Depando
        </h1>
        <h2 className="text-xl md:text-2xl text-depando-secondary mb-8 max-w-3xl">
          Convierte tu experiencia en limpieza en una oportunidad de generar ingresos flexibles en propiedades de alquiler de corta estancia
        </h2>
      </div>
    </div>
  );
};

export default HeroImageSection;
