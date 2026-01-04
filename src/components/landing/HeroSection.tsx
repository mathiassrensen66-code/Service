import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with subtle noise */}
      <div className="absolute inset-0 noise-texture bg-[#F9F7F4]" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-[#A8B5A0] mb-6"
            >
              Premium Tekstilpleje
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2B2B2B] leading-[1.1] mb-6"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Giv dit hjem
              <br />
              <span className="text-[#A8B5A0]">ny friskhed</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-[#2B2B2B]/70 mb-10 leading-relaxed"
            >
              Professionel rengøring af sofaer, tæpper og tekstiler. 
              Vi giver dit hjem den kærlige behandling det fortjener.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={onCtaClick}
                className="bg-[#A8B5A0] hover:bg-[#96A58E] text-[#2B2B2B] px-8 py-6 text-base font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              >
                Book en rengøring
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-[#2B2B2B]/20 text-[#2B2B2B] px-8 py-6 text-base font-semibold rounded-full hover:bg-[#E8DFD0] transition-all duration-300"
              >
                Se vores services
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[55%]"
          >
            <div className="relative rounded-l-3xl overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80"
                alt="Modern Danish living room with clean sofa"
                className="w-full h-[500px] lg:h-[700px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#F9F7F4]/20" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-6 left-6 lg:left-12 bg-white rounded-2xl p-6 shadow-[0_16px_48px_rgba(0,0,0,0.1)]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#A8B5A0]/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <div>
                  <p className="text-sm text-[#2B2B2B]/60 font-medium">Kundetilfredshed</p>
                  <p className="text-2xl font-bold text-[#2B2B2B]" style={{ fontFamily: "'Fraunces', serif" }}>98%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
