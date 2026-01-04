import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Check, Send } from "lucide-react";

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 noise-texture bg-[#F9F7F4]" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden mb-10 shadow-[0_32px_64px_rgba(0,0,0,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                alt="Happy family in clean living room"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white/90 text-lg font-medium" style={{ fontFamily: "'Fraunces', serif" }}>
                  Et rent hjem er et lykkeligt hjem
                </p>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <h3
                className="text-2xl font-bold text-[#2B2B2B] mb-6"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Kontakt os direkte
              </h3>
              
              <a
                href="tel:+4512345678"
                className="flex items-center gap-4 text-[#2B2B2B] hover:text-[#A8B5A0] transition-colors group"
              >
                <div className="w-12 h-12 bg-[#A8B5A0]/20 rounded-xl flex items-center justify-center group-hover:bg-[#A8B5A0]/30 transition-colors">
                  <Phone className="w-5 h-5 text-[#A8B5A0]" />
                </div>
                <div>
                  <p className="text-sm text-[#2B2B2B]/60">Ring til os</p>
                  <p className="font-semibold">+45 12 34 56 78</p>
                </div>
              </a>
              
              <a
                href="mailto:info@danishtextilecare.dk"
                className="flex items-center gap-4 text-[#2B2B2B] hover:text-[#A8B5A0] transition-colors group"
              >
                <div className="w-12 h-12 bg-[#A8B5A0]/20 rounded-xl flex items-center justify-center group-hover:bg-[#A8B5A0]/30 transition-colors">
                  <Mail className="w-5 h-5 text-[#A8B5A0]" />
                </div>
                <div>
                  <p className="text-sm text-[#2B2B2B]/60">Send en email</p>
                  <p className="font-semibold">info@danishtextilecare.dk</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 text-[#2B2B2B]">
                <div className="w-12 h-12 bg-[#A8B5A0]/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#A8B5A0]" />
                </div>
                <div>
                  <p className="text-sm text-[#2B2B2B]/60">Vi servicerer</p>
                  <p className="font-semibold">Hele Sjælland</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_16px_48px_rgba(0,0,0,0.08)]">
              <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-[#A8B5A0] mb-4">
                Book En Tid
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-[#2B2B2B] mb-2"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Få et gratis tilbud
              </h2>
              <p className="text-[#2B2B2B]/70 mb-8">
                Udfyld formularen, så kontakter vi dig inden for 24 timer.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#2B2B2B] mb-2">
                      Navn *
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Dit navn"
                      className="h-12 rounded-xl border-[#E8DFD0] focus:border-[#A8B5A0] focus:ring-[#A8B5A0] bg-[#F9F7F4]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2B2B2B] mb-2">
                      Telefon *
                    </label>
                    <Input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+45 XX XX XX XX"
                      className="h-12 rounded-xl border-[#E8DFD0] focus:border-[#A8B5A0] focus:ring-[#A8B5A0] bg-[#F9F7F4]"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#2B2B2B] mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="din@email.dk"
                    className="h-12 rounded-xl border-[#E8DFD0] focus:border-[#A8B5A0] focus:ring-[#A8B5A0] bg-[#F9F7F4]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#2B2B2B] mb-2">
                    Vælg service *
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full h-12 px-3 rounded-xl border border-[#E8DFD0] focus:border-[#A8B5A0] focus:ring-1 focus:ring-[#A8B5A0] bg-[#F9F7F4] text-[#2B2B2B]"
                  >
                    <option value="">Vælg en service</option>
                    <option value="sofa">Sofarengøring</option>
                    <option value="carpet">Tæpperengøring</option>
                    <option value="impregnation">Tekstilimprægnering</option>
                    <option value="other">Andet</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#2B2B2B] mb-2">
                    Besked
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Fortæl os om din opgave..."
                    rows={4}
                    className="w-full px-3 py-3 rounded-xl border border-[#E8DFD0] focus:border-[#A8B5A0] focus:ring-1 focus:ring-[#A8B5A0] bg-[#F9F7F4] text-[#2B2B2B] resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full h-14 rounded-xl text-base font-semibold transition-all duration-300 ${
                    isSubmitted
                      ? "bg-green-500 hover:bg-green-500"
                      : "bg-[#A8B5A0] hover:bg-[#96A58E]"
                  } text-[#2B2B2B] shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] hover:scale-[1.02]`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sender...
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      Tak! Vi kontakter dig snart
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send forespørgsel
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
