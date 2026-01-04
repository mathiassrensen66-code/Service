import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function TestimonialBlock() {
  return (
    <section className="py-24 lg:py-32 bg-[#E8DFD0] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 text-[#A8B5A0]/20">
        <Quote className="w-48 h-48" strokeWidth={1} />
      </div>
      <div className="absolute bottom-20 right-20 text-[#A8B5A0]/20 rotate-180">
        <Quote className="w-32 h-32" strokeWidth={1} />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Star Rating */}
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[#A8B5A0] text-[#A8B5A0]" />
            ))}
          </div>
          
          {/* Quote */}
          <blockquote
            className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#2B2B2B] leading-relaxed mb-10"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            "Vi har brugt Danish Textile Care i flere år nu, og hver gang er resultatet imponerende. 
            Vores sofa ser ud som ny, og servicen er altid professionel og venlig. 
            Kan kun anbefales!"
          </blockquote>
          
          {/* Customer Info */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 ring-4 ring-white shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
                alt="Maria Nielsen"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg font-semibold text-[#2B2B2B]">Maria Nielsen</p>
            <p className="text-[#2B2B2B]/60">København</p>
          </div>
        </motion.div>
        
        {/* Additional Mini Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto"
        >
          {[
            {
              quote: "Fantastisk service og et perfekt resultat!",
              name: "Anders Hansen",
              location: "Aarhus",
            },
            {
              quote: "Vores tæppe ser ud som nyt. Tak!",
              name: "Louise Pedersen",
              location: "Odense",
            },
            {
              quote: "Hurtig, effektiv og miljøvenlig rengøring.",
              name: "Thomas Jensen",
              location: "Aalborg",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center"
            >
              <div className="flex justify-center gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#A8B5A0] text-[#A8B5A0]" />
                ))}
              </div>
              <p className="text-[#2B2B2B]/80 mb-4 italic">"{testimonial.quote}"</p>
              <p className="text-sm font-semibold text-[#2B2B2B]">{testimonial.name}</p>
              <p className="text-xs text-[#2B2B2B]/60">{testimonial.location}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
