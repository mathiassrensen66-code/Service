import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/CleaningHero.jpg"
          alt="Professionel møbelrens"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Subtle noise texture */}
        <div className="absolute inset-0 noise-texture opacity-20" />
      </div>
      
      {/* Centered Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-6"
            >
              Premium Tekstilpleje
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-6 drop-shadow-lg"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Giv dit hjem
              <br />
              <span className="text-secondary drop-shadow-md">ny friskhed</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl text-white mb-10 leading-relaxed max-w-3xl mx-auto font-medium"
            >
              Professionel rengøring af sofaer, tæpper og tekstiler. 
              Vi giver dit hjem den kærlige behandling det fortjener.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button
                onClick={onCtaClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
              >
                Book en rengøring
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 px-8 py-6 text-base font-semibold rounded-full transition-all duration-300"
              >
                Se vores services
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
