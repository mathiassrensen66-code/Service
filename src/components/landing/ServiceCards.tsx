import { motion } from "framer-motion";
import { Sofa, Sparkles, Shield } from "lucide-react";

const services = [
  {
    icon: Sofa,
    title: "Sofarengøring",
    description: "Professionel dybderensning af alle typer sofaer. Vi fjerner pletter, lugt og allergener for et friskere hjem.",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80",
  },
  {
    icon: Sparkles,
    title: "Tæpperengøring",
    description: "Skånsom og effektiv rensning af tæpper og gulvtæpper. Genopliv farverne og forlæng levetiden.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    icon: Shield,
    title: "Tekstilimprægnering",
    description: "Beskyt dine tekstiler mod snavs og væsker. Vores imprægnering forlænger levetiden markant.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ServiceCards() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 noise-texture bg-[#F9F7F4]" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-[#A8B5A0] mb-4">
            Vores Services
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2B2B2B] mb-6"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Professionel pleje
            <br />
            til dit hjem
          </h2>
          <p className="text-lg text-[#2B2B2B]/70 leading-relaxed">
            Vi tilbyder omfattende tekstilpleje med fokus på kvalitet og bæredygtighed.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`group relative bg-[#E8DFD0] rounded-3xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] transition-all duration-500 ${
                index === 1 ? "md:mt-8" : ""
              }`}
            >
              {/* Card Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#E8DFD0] to-transparent" />
              </div>

              {/* Card Content */}
              <div className="p-8 pt-4">
                <div className="w-14 h-14 bg-[#A8B5A0]/20 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#A8B5A0]/30 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-[#A8B5A0]" />
                </div>
                
                <h3
                  className="text-2xl font-bold text-[#2B2B2B] mb-3"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {service.title}
                </h3>
                
                <p className="text-[#2B2B2B]/70 leading-relaxed">
                  {service.description}
                </p>
                
                <button className="mt-6 text-[#A8B5A0] font-semibold flex items-center gap-2 group/btn hover:gap-3 transition-all duration-300">
                  Læs mere
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
