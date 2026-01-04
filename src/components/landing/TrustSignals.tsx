import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, Users, Leaf, Clock } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: 15,
    suffix: "+",
    label: "ÅRS ERFARING",
  },
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "TILFREDSE KUNDER",
  },
  {
    icon: Award,
    value: 98,
    suffix: "%",
    label: "KUNDETILFREDSHED",
  },
  {
    icon: Leaf,
    value: 100,
    suffix: "%",
    label: "MILJØVENLIGE PRODUKTER",
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

export default function TrustSignals() {
  return (
    <section className="py-20 lg:py-24 bg-[#2B2B2B] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#A8B5A0]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A8B5A0]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#A8B5A0]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-[#A8B5A0]" />
              </div>
              
              <p
                className="text-4xl md:text-5xl font-bold text-white mb-2"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              
              <p className="text-xs md:text-sm font-semibold tracking-[0.15em] text-[#A8B5A0]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
