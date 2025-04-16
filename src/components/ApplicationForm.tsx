
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "El nombre completo debe tener al menos 2 caracteres.",
  }),
  phone: z.string().min(9, {
    message: "El número de teléfono debe tener al menos 9 dígitos.",
  }),
  email: z.string().email({
    message: "Por favor ingresa un email válido.",
  }),
  hasExperience: z.boolean(),
  followsStandards: z.boolean(),
  workAreas: z.string().min(2, {
    message: "Por favor ingresa las áreas/comunas donde puedes trabajar.",
  }),
  hasTransportation: z.boolean(),
  additionalComments: z.string().optional(),
});

const ApplicationForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      hasExperience: false,
      followsStandards: false,
      workAreas: "",
      hasTransportation: false,
      additionalComments: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("¡Gracias por tu postulación! Te contactaremos pronto.");
    form.reset();
  }

  return (
    <div className="py-20 bg-depando-secondary" id="application-form">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-depando-primary mb-4">
            Postula para unirte a nuestro equipo
          </h2>
          <p className="text-lg md:text-xl text-depando-text max-w-2xl mx-auto">
            Completa el siguiente formulario y nos pondremos en contacto contigo a la brevedad.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-depando-accent p-6 md:p-8 rounded-lg shadow-md border border-depando-primary/10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu nombre completo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Número de teléfono</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="+56 9 1234 5678" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo electrónico</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="tu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="hasExperience"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        ¿Tienes experiencia limpiando propiedades de arriendo turístico?
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="followsStandards"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        ¿Estás dispuesto/a a seguir estándares de limpieza de 5 estrellas?
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="workAreas"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>¿En qué áreas/comunas puedes trabajar?</FormLabel>
                    <FormControl>
                      <Input placeholder="Las Condes, Providencia, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="hasTransportation"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        ¿Tienes transporte propio?
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="additionalComments"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Comentarios adicionales</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Cuéntanos más sobre ti y tu experiencia..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="text-center">
                <p className="italic text-depando-text mb-6">
                  "Como parte de nuestro lanzamiento, unirse a la base de datos de profesionales de limpieza de Depando es completamente gratis. ¡Postula ahora y forma parte de nuestro equipo 5 estrellas!"
                </p>
                
                <Button 
                  type="submit" 
                  className="w-full md:w-auto bg-depando-primary text-depando-accent hover:bg-depando-primary/90"
                >
                  Enviar postulación
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
