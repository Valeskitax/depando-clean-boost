import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign, Calendar, Award } from "lucide-react";
import CleaningIcon from "./CleaningIcon";
const BenefitsSection = () => {
  const benefits = [{
    icon: <Clock className="h-10 w-10 text-depando-primary" />,
    title: "Horarios flexibles",
    description: "Elige cuándo y cuántas horas quieres trabajar. Adaptamos los horarios a tu disponibilidad."
  }, {
    icon: <DollarSign className="h-10 w-10 text-depando-primary" />,
    title: "Pagos competitivos",
    description: "Recibe una remuneración justa por tu trabajo y experiencia en limpieza de propiedades."
  }, {
    icon: <Calendar className="h-10 w-10 text-depando-primary" />,
    title: "Trabajo constante",
    description: "Con nuestra red de propiedades, tendrás oportunidades de trabajo durante todo el año."
  }, {
    icon: <Award className="h-10 w-10 text-depando-primary" />,
    title: "Crecimiento profesional",
    description: "Forma parte de un equipo profesional y desarrolla nuevas habilidades en el sector."
  }];
  return <div className="py-20 bg-depando-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <CleaningIcon className="h-16 w-16 mx-auto mb-4 text-depando-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-depando-primary mb-4">Hazte visible para quienes buscan excelencia en el aseo</h2>
          <p className="text-lg md:text-xl text-depando-text max-w-2xl mx-auto">El aseo es más que una tarea; es una forma de cuidar y transformar espacios. Únete a nuestra comunidad y haz que tu trabajo brille</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => <Card key={index} className="border-depando-primary/20 bg-depando-secondary">
              <CardHeader className="pb-2">
                <div className="mb-2">
                  {benefit.icon}
                </div>
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-depando-text text-base">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </div>;
};
export default BenefitsSection;