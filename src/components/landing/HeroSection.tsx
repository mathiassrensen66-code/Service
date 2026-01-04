import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

interface HeroSectionProps {
  onCtaClick: () => void;
}

const stats = [
  {
    value: 4011,
    suffix: "+",
    label: "Renset sofaer",
  },
  {
    value: 4737,
    suffix: "+",
    label: "Renset stole",
  },
  {
    value: 2391,
    suffix: "+",
    label: "Kundebesøg i 2024",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString("da-DK")}
      {suffix}
    </span>
  );
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Hero.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img
            src="/CleaningHero.jpg"
            alt="Professionel møbelrens"
            className="w-full h-full object-cover"
          />
        </video>
        {/* Gradient overlay - mindre intens blå/grøn */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/40" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto py-20">
          {/* Main Heading - Gul tekst */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-12"
            style={{ 
              fontFamily: "'Fraunces', serif",
              color: "#10b981" // Grøn farve
            }}
          >
            Professionel møbelrens
            <br />
            i Midtjylland
          </motion.h1>
          
          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 w-full"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <p
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-base md:text-lg text-white/90">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Trustpilot Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-white text-sm font-semibold">Trustpilot</span>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-[#00B67A] text-[#00B67A]" 
                  />
                ))}
              </div>
              <p className="text-white text-sm">
                TrustScore 4.8 | 176 anmeldelser
              </p>
            </div>
          </motion.div>
          
          {/* CTA Button - Gul knap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Button
              onClick={onCtaClick}
              className="bg-[#10b981] hover:bg-[#059669] text-white px-8 py-6 text-base font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] shadow-lg"
            >
              Book tid
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
