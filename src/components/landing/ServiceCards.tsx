import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const sofaService = {
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
  image: "/Couch.1.png",
};

const services = [
  {
    title: "Stole Rens",
    price: "FRA 185,-",
    subtitle: "SPISEBORDSTOL FRA 185,- /stk.",
    subtitle2: "Lænestol fra 685,-",
    description: "Vi kan rense alle typer tekstil stole.",
    features: [
      "Tørretid ca 2-4 timer",
      "Svanemærket produkter",
    ],
    image: "/Chair2.png",
    imagePosition: "right", // Billede til højre
    circleColor: "yellow", // Gul cirkulær baggrund
  },
  {
    title: "Tæpperens",
    price: "fra 495,-",
    description: "Vi er de eneste i Danmark, der tilbyder SteamClean tæpperens hjemme hos dig.",
    features: [
      "Ingen besvær – vi kører ud",
      "Svanemærket produkter",
      "Hurtig tørretid: 2–4 timer",
    ],
    image: "/Carpet.jpg",
    imagePosition: "left", // Billede til venstre
    circleColor: "yellow", // Gul cirkulær baggrund
  },
  {
    title: "Rens af læder",
    price: "FRA 995,-",
    description: "Vi renser alle typer af lædermøbler.",
    description2: "Vi afrenser dit møbel, efterfølgende giver vi den optimale pleje.",
    note: "Prisen på dit møbel afhænger af størrelsen, type på læderet mm.",
    image: "/Leather.png",
    imagePosition: "right", // Billede til højre
    circleColor: "gray", // Grå cirkulær baggrund
  },
];

export default function ServiceCards() {
  return (
    <section className="py-24 lg:py-32 relative bg-blue-50">
      {/* Sofa Rens - Special Layout */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mb-24 lg:mb-32"
      >
        <div className="flex flex-col lg:flex-row items-center relative">
          {/* Sofa Image - Overlapper containeren */}
          <div className="w-full lg:w-1/2 flex justify-start lg:justify-end relative z-20 lg:-mr-16 pl-6 lg:pl-8 lg:pl-16">
            <div className="w-full max-w-2xl lg:max-w-3xl">
              <img
                src={sofaService.image}
                alt={sofaService.title}
                className="w-full h-auto object-contain"
                style={{ borderRadius: "24px" }}
              />
            </div>
          </div>

          {/* Dark Green Container - Fylder helt ud til venstre */}
          <div
            className="w-full lg:w-1/2 relative z-10 rounded-2xl lg:rounded-l-none lg:rounded-r-3xl"
            style={{ backgroundColor: "#2563eb" }}
          >
              <div className="p-8 lg:p-12 lg:pl-16 lg:pr-24">
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {sofaService.title}
                </h2>

                <div className="mb-4">
                  <span
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    {sofaService.price}
                  </span>
                </div>

                {sofaService.subtitle && (
                  <p className="text-lg text-white/90 mb-6">{sofaService.subtitle}</p>
                )}

                {sofaService.description && (
                  <p className="text-base text-white/90 mb-6 leading-relaxed">
                    {sofaService.description}
                  </p>
                )}

                {sofaService.features && (
                  <ul className="space-y-3 mb-6">
                    {sofaService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-white/90">
                        <Check className="w-5 h-5 text-[#00B67A] flex-shrink-0 mt-0.5" />
                        <span className="text-base leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {sofaService.note && (
                  <p className="text-sm text-white/80 italic mb-2">{sofaService.note}</p>
                )}
                {sofaService.note2 && (
                  <p className="text-sm text-white/80 italic mb-6">{sofaService.note2}</p>
                )}

                <Button
                  className="bg-[#10b981] hover:bg-[#059669] text-white px-8 py-6 text-base font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] w-fit"
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Book tid
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Other Services */}
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-col ${
              service.imagePosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-12 lg:gap-16 mb-24 lg:mb-32 last:mb-0`}
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div
                className={`relative w-full max-w-md aspect-square rounded-full flex items-center justify-center ${
                  service.circleColor === "yellow"
                    ? "bg-[#10b981]"
                    : "bg-gray-200"
                }`}
              >
                <div className="w-[80%] h-[80%] relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-contain ${
                      service.image.includes("Carpet") ? "rounded-full" : "rounded-3xl"
                    }`}
                    style={service.image.includes("Carpet") ? { borderRadius: "50%" } : { borderRadius: "24px" }}
                  />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{
                  fontFamily: "'Fraunces', serif",
                  color: "#2563eb", // Blå
                }}
              >
                {service.title}
              </h2>

              {service.subtitle && (
                <p className="text-lg text-foreground/70 mb-2">{service.subtitle}</p>
              )}
              {service.subtitle2 && (
                <p className="text-lg text-foreground/70 mb-4">{service.subtitle2}</p>
              )}

              <div className="mb-6">
                <span
                  className="text-3xl md:text-4xl font-bold"
                  style={{
                    fontFamily: "'Fraunces', serif",
                    color: "#1a3a2a",
                  }}
                >
                  {service.price}
                </span>
              </div>

              {service.description && (
                <p className="text-base text-foreground/70 mb-4 leading-relaxed">
                  {service.description}
                </p>
              )}
              {service.description2 && (
                <p className="text-base text-foreground/70 mb-4 leading-relaxed">
                  {service.description2}
                </p>
              )}

              {service.features && (
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-foreground/80">
                      <Check className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                      <span className="text-base leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {service.note && (
                <p className="text-sm text-foreground/60 italic mb-6">{service.note}</p>
              )}

              <Button
                className="bg-[#10b981] hover:bg-[#059669] text-white px-8 py-6 text-base font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] w-fit"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book tid
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
