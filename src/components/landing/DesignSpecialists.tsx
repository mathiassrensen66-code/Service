import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const designerBrands = [
  { name: "ARNE JACOBSEN", color: "text-foreground" },
  { name: "HOUSE OF FINN JUHL", color: "text-foreground" },
  { name: "Børge Mogensen", color: "text-[#2563eb]" },
  { name: "Poul Kjærholm", color: "text-[#2563eb]" },
  { name: "vitra.", color: "text-foreground" },
  { name: "Hans J. Wegner", color: "text-[#2563eb]" },
];

export default function DesignSpecialists() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="relative overflow-hidden bg-white py-32 lg:py-40">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#2563eb]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-20"
          >
            <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-[#2563eb] mb-4">
              Vores Ekspertise
            </span>
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
              style={{
                fontFamily: "'Fraunces', serif",
                color: "#2563eb",
              }}
            >
              Specialister i dansk design
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-xl text-foreground/80 leading-relaxed">
                Hos os er møbelrens ikke bare en service – det er et håndværk, vi har forfinet gennem mere end 20 års dedikeret arbejde med danske designklassikere.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Vi er stolte af at være blandt de få i Danmark, der har specialiseret sig i professionel rens og pleje af ikoniske møbler fra:
              </p>
            </div>
          </motion.div>

          {/* Logo Carousel - Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 lg:p-12 border border-[#2563eb]/10">
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: true,
                  slidesToScroll: 1,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4 md:-ml-6">
                  {designerBrands.map((brand, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-4 md:pl-6 basis-1/2 md:basis-1/3 lg:basis-1/5"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center justify-center h-32 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#2563eb]/20 transition-all duration-300"
                      >
                        <p
                          className={`text-lg md:text-xl lg:text-2xl font-bold text-center px-4 ${brand.color}`}
                          style={{
                            fontFamily: "'Fraunces', serif",
                          }}
                        >
                          {brand.name}
                        </p>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 md:-left-16 border-2 border-[#2563eb]/20 bg-white hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb] text-[#2563eb] shadow-lg">
                  <ChevronLeft className="h-6 w-6" />
                </CarouselPrevious>
                <CarouselNext className="right-4 md:-right-16 border-2 border-[#2563eb]/20 bg-white hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb] text-[#2563eb] shadow-lg">
                  <ChevronRight className="h-6 w-6" />
                </CarouselNext>
              </Carousel>

              {/* Enhanced Pagination Dots */}
              <div className="flex justify-center gap-3 mt-8">
                {Array.from({ length: Math.ceil(designerBrands.length / 5) }).map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all ${
                      Math.floor((current - 1) / 5) === index
                        ? "bg-[#2563eb] w-8"
                        : "bg-[#2563eb]/30 hover:bg-[#2563eb]/50"
                    }`}
                    onClick={() => api?.scrollTo(index * 5)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
