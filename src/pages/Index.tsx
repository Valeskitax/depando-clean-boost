
import { useState } from "react";
import { CheckCircle2, Star, Home, Timer, Award, DollarSign, Users } from "lucide-react";
import CleaningIcon from "@/components/CleaningIcon";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

const Index = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    experience: "",
    standards: false,
    areas: "",
    transportation: "",
    comments: "",
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    // Here you would normally send the data to your backend
  };

  const benefits = [
    { text: "Horarios flexibles que se adaptan a tu disponibilidad", icon: <Timer className="text-depando-accent h-6 w-6 mt-1 flex-shrink-0" /> },
    { text: "Ingresos competitivos por cada servicio realizado", icon: <DollarSign className="text-depando-accent h-6 w-6 mt-1 flex-shrink-0" /> },
    { text: "Capacitación y recursos para brindar servicios de 5 estrellas", icon: <Award className="text-depando-accent h-6 w-6 mt-1 flex-shrink-0" /> },
    { text: "Oportunidades constantes de trabajo en propiedades premium", icon: <Home className="text-depando-accent h-6 w-6 mt-1 flex-shrink-0" /> },
    { text: "Forma parte de una comunidad profesional en crecimiento", icon: <Users className="text-depando-accent h-6 w-6 mt-1 flex-shrink-0" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-depando-light">
      {/* Hero Section */}
      <header className="w-full bg-depando-primary py-4 text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <CleaningIcon className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Depando</h1>
          </div>
          <div className="flex gap-4">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-depando-dark"
              onClick={() => {
                const formElement = document.getElementById("application-form");
                formElement?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Postula Ahora
            </Button>
            <Button className="bg-white text-depando-primary hover:bg-depando-light">
              Contacto
            </Button>
          </div>
        </div>
      </header>

      {/* Main Hero Banner */}
      <section>
        <div className="relative">
          <div className="absolute inset-0 bg-depando-light opacity-30 pattern-grid-lg z-0"></div>
          <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-depando-dark mb-6">
              Únete al equipo de profesionales de limpieza de Depando
            </h1>
            <h2 className="text-xl md:text-2xl text-depando-secondary mb-8 max-w-3xl">
              Convierte tu experiencia en limpieza en una oportunidad de generar ingresos flexibles en propiedades de alquiler de corta estancia
            </h2>
            <div className="flex gap-2 items-center justify-center mb-8">
              {[1, 2, 3, 4, 5].map((num) => (
                <Star key={num} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <Button
              className="bg-depando-accent hover:bg-depando-secondary text-white text-lg px-8 py-6"
              size="lg"
              onClick={() => {
                const formElement = document.getElementById("application-form");
                formElement?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Postula Ahora
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-depando-dark mb-12">
            ¿Por qué unirte a Depando?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-depando-accent shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  {benefit.icon}
                  <p className="text-lg text-gray-700">{benefit.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 bg-depando-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-depando-dark mb-4">
            Aplicación para Profesionales de Limpieza
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Complete el siguiente formulario para unirse a nuestra base de datos de profesionales de limpieza. 
            Te contactaremos a la brevedad.
          </p>

          {formSubmitted ? (
            <Card className="max-w-2xl mx-auto p-8 text-center">
              <CheckCircle2 className="h-16 w-16 mx-auto text-green-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4">¡Gracias por tu aplicación!</h3>
              <p className="text-gray-600 mb-6">
                Hemos recibido tu información y nos pondremos en contacto contigo pronto.
              </p>
              <Button 
                className="bg-depando-primary hover:bg-depando-dark" 
                onClick={() => setFormSubmitted(false)}
              >
                Enviar otra aplicación
              </Button>
            </Card>
          ) : (
            <Card className="max-w-2xl mx-auto p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full name */}
                <div>
                  <Label htmlFor="fullName">Nombre completo</Label>
                  <Input 
                    id="fullName" 
                    name="fullName"
                    placeholder="Tu nombre completo" 
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phone">Número de teléfono</Label>
                  <Input 
                    id="phone" 
                    name="phone"
                    type="tel" 
                    placeholder="+56 9 1234 5678" 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="tucorreo@ejemplo.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Experience */}
                <div>
                  <Label>¿Tienes experiencia limpiando propiedades de alquiler a corto plazo?</Label>
                  <RadioGroup 
                    value={formData.experience} 
                    onValueChange={(value) => handleRadioChange("experience", value)}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="experience-yes" />
                      <Label htmlFor="experience-yes">Sí</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="experience-no" />
                      <Label htmlFor="experience-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* 5-star standards */}
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="standards" 
                    name="standards"
                    checked={formData.standards}
                    onCheckedChange={(checked: boolean) => 
                      setFormData(prev => ({ ...prev, standards: checked }))
                    }
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="standards">
                      ¿Estás dispuesto/a a seguir estándares de limpieza de 5 estrellas?
                    </Label>
                  </div>
                </div>

                {/* Areas/communes */}
                <div>
                  <Label htmlFor="areas">¿En qué áreas/comunas puedes trabajar?</Label>
                  <Textarea 
                    id="areas" 
                    name="areas"
                    placeholder="Por ejemplo: Providencia, Las Condes, Vitacura, etc." 
                    value={formData.areas}
                    onChange={handleChange}
                    className="resize-none"
                  />
                </div>

                {/* Transportation */}
                <div>
                  <Label>¿Tienes transporte propio?</Label>
                  <RadioGroup 
                    value={formData.transportation} 
                    onValueChange={(value) => handleRadioChange("transportation", value)}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="transportation-yes" />
                      <Label htmlFor="transportation-yes">Sí</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="transportation-no" />
                      <Label htmlFor="transportation-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Additional comments */}
                <div>
                  <Label htmlFor="comments">Comentarios adicionales</Label>
                  <Textarea 
                    id="comments" 
                    name="comments"
                    placeholder="Cuéntanos algo más sobre ti" 
                    value={formData.comments}
                    onChange={handleChange}
                    className="resize-none"
                  />
                </div>

                <Button type="submit" className="w-full bg-depando-primary hover:bg-depando-dark">
                  Enviar Aplicación
                </Button>
              </form>
            </Card>
          )}

          <div className="mt-10 bg-depando-primary text-white p-6 rounded-lg max-w-3xl mx-auto shadow-lg">
            <p className="text-center text-lg font-medium">
              "Como parte de nuestro lanzamiento, unirse a la base de datos de profesionales de limpieza de Depando es completamente gratuito. ¡Aplica ahora y forma parte de nuestro equipo 5 estrellas!"
            </p>
            <div className="flex justify-center mt-4">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((num) => (
                  <Star key={num} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-depando-dark text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Depando. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
