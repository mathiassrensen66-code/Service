import { motion } from "framer-motion";
import { Check, MapPin, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 noise-texture bg-background" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Vores Priser
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Transparente priser
            <br />
            uden skjulte omkostninger
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Main Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden"
          >
            {/* Offer Badge */}
            <div className="absolute top-6 right-6 bg-secondary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
              ÅBNINGSTILBUD
            </div>
            
            <div className="mb-6">
              <Tag className="w-12 h-12 mb-4 text-white/80" />
              <h3
                className="text-3xl font-bold mb-2"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Sofarens
              </h3>
              <p className="text-white/80 mb-6">
                Uanset størrelse på sofaen (2-pers., 3-pers. eller hjørnesofa)
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-6xl font-bold" style={{ fontFamily: "'Fraunces', serif" }}>
                  500
                </span>
                <span className="text-2xl">kr</span>
              </div>
              <p className="text-white/70 text-sm mb-6">Tilbudspris</p>
              <div className="pt-6 border-t border-white/20">
                <p className="text-white/80 text-sm mb-2">Efter tilbudsperioden:</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">675 kr,-</span>
                </div>
                <p className="text-white/70 text-sm mt-1">uanset størrelse på sofaen</p>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Fjerner pletter & lugt</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Professionel dybderens</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Effektiv lugtfjerning</span>
              </li>
            </ul>

            <Button
              className="w-full bg-white text-primary hover:bg-white/90 py-6 text-base font-semibold rounded-full"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book din tid nu
            </Button>
          </motion.div>

          {/* Additional Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card rounded-3xl p-8 lg:p-10 border border-border"
          >
            <h3
              className="text-2xl font-bold mb-6 text-foreground"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Praktisk Information
            </h3>

            <div className="space-y-6">
              {/* Travel Info */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Kørsel</h4>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span>Gratis kørsel op til 25 km fra Aarhus</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span>Kørsel over 25 km: fra 300 kroner</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Time Info */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Tider</h4>
                  <p className="text-sm text-foreground/70">
                    Mulighed for aften og weekendtider
                  </p>
                </div>
              </div>

              {/* Other Services */}
              <div className="pt-6 border-t border-border">
                <h4 className="font-semibold text-foreground mb-4">Andre Services</h4>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>• Tæpperens - Ring for pris</li>
                  <li>• Imprægnering - Ring for pris</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

