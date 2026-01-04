import { motion } from "framer-motion";
import { Check, Sofa, Square, Layers, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingServices = [
  {
    icon: Sofa,
    title: "Sofa Rens",
    price: "795,-",
    subtitle: "uanset størrelsen på din sofa",
    description: "Vi renser alle siddeflader og puder som sofaen er produceret med.",
    features: [
      "Tørretid ca 6-8 timer",
      "Svanemærket produkter",
    ],
    note: "*Bemærk at sofaen skal være et sammenhængemøbel. Løse moduler har en tillægspris",
    note2: "*Bemærk, at rens af designmøbler ikke er omfattet af vores standardpriser",
  },
  {
    icon: Square,
    title: "Stole Rens",
    price: "FRA 185,-",
    subtitle: "SPISEBORDSTOL FRA 185,- /stk.",
    subtitle2: "Lænestol fra 685,-",
    description: "Vi kan rense alle typer tekstil stole.",
    features: [
      "Tørretid ca 2-4 timer",
      "Svanemærket produkter",
    ],
  },
  {
    icon: Layers,
    title: "Tæpperens",
    price: "fra 495,-",
    description: "Vi er de eneste i Danmark, der tilbyder SteamClean tæpperens hjemme hos dig.",
    features: [
      "Ingen besvær – vi kører ud",
      "Svanemærket produkter",
      "Hurtig tørretid: 2–4 timer",
    ],
  },
  {
    icon: Shield,
    title: "Rens af læder",
    price: "FRA 995,-",
    description: "Vi renser alle typer af lædermøbler.",
    description2: "Vi afrenser dit møbel, efterfølgende giver vi den optimale pleje.",
    note: "Prisen på dit møbel afhænger af størrelsen, type på læderet mm.",
  },
  {
    icon: Shield,
    title: "Imprægnering",
    price: "fra 295,-",
    subtitle: "Imprægnering af møbler",
    subtitle2: "Forlæng levetiden på dine møbler med effektiv imprægnering. Sofaer fra 295,- | Stole fra 85,-",
    description: "Vi bruger en langtidsholdbar imprægnering, der beskytter i op til 2 år.",
    note: "Prisen varierer efter møblets størrelse",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Priser
          </h2>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {pricingServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="mb-6">
                <service.icon className="w-10 h-10 text-foreground mb-4" />
                <h3
                  className="text-2xl font-bold text-foreground mb-2"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {service.title}
                </h3>
                {service.subtitle && (
                  <p className="text-sm text-foreground/70 mb-1">{service.subtitle}</p>
                )}
                {service.subtitle2 && (
                  <p className="text-sm text-foreground/70 mb-1">{service.subtitle2}</p>
                )}
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-foreground" style={{ fontFamily: "'Fraunces', serif" }}>
                    {service.price}
                  </span>
                </div>
                {service.description && (
                  <p className="text-sm text-foreground/70 mb-4">{service.description}</p>
                )}
                {service.description2 && (
                  <p className="text-sm text-foreground/70 mb-4">{service.description2}</p>
                )}
              </div>

              {service.features && (
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {service.note && (
                <p className="text-xs text-foreground/60 mb-2 italic">{service.note}</p>
              )}
              {service.note2 && (
                <p className="text-xs text-foreground/60 mb-4 italic">{service.note2}</p>
              )}

              <Button
                className="w-full bg-foreground hover:bg-foreground/90 text-background py-6 text-base font-semibold rounded-none transition-all duration-300"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book tid
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
