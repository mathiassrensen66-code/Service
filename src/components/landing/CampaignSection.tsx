import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, Check } from "lucide-react";

const campaignFeatures = [
  {
    icon: Sparkles,
    title: "Svanemærket produkter",
    description: "Miljøvenlige og sikre rengøringsmidler",
  },
  {
    icon: Shield,
    title: "Garanti på arbejdet",
    description: "Vi står inde for kvaliteten af vores service",
  },
  {
    icon: Check,
    title: "Professionel service",
    description: "Over 20 års erfaring i branchen",
  },
];

export default function CampaignSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb] via-[#3b82f6] to-[#10b981]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Campaign Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-white/80 mb-4">
              Særlig Tilbud
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Giv dine møbler
              <br />
              nyt liv i 2024
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Book nu og få professionel møbelrens med miljøvenlige produkter og garanti på arbejdet
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {campaignFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Fraunces', serif" }}>
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <Button
              className="bg-white text-[#2563eb] hover:bg-white/90 px-10 py-7 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] shadow-2xl"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book din tid nu
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <p className="text-white/70 text-sm mt-6">
              Ring til os på 30 13 50 30 eller udfyld formularen
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
