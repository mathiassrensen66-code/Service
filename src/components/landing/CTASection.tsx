import { motion } from "framer-motion";
import { Clock, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ctaItems = [
  {
    icon: Clock,
    title: "Bestil online på 2 minutter",
    description: "Book en tid hos os nemt & hurtigt – kun tre enkle trin. Se pris & start arbejdet med det samme.",
  },
  {
    icon: Shield,
    title: "100% Tilfredshedsgaranti",
    description: "Få retten op, hvis ikke resultatet lever op til forventningerne.",
  },
  {
    icon: Truck,
    title: "Mobil Service",
    description: "Vi kommer til dig – sparer tid og besvær.",
  },
];

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-blue-50">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {ctaItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#2563eb]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-[#2563eb]" />
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{
                    fontFamily: "'Fraunces', serif",
                    color: "#2563eb",
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-base text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button
              className="bg-[#10b981] hover:bg-[#059669] text-white px-10 py-7 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] shadow-lg"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book din tid nu
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
