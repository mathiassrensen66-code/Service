import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, Clock, Send, Upload } from "lucide-react";

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    city: "",
    message: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

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
      setFormData({ name: "", email: "", phone: "", address: "", postalCode: "", city: "", message: "" });
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden min-h-screen flex items-center">
      {/* Blurred Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80"
          alt="Modern living room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Form Container - Light Gray */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-100 rounded-3xl p-8 lg:p-12 shadow-2xl"
          >
            {/* Header with Social Icons */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3"
                  style={{
                    fontFamily: "'Fraunces', serif",
                    color: "#8b7355", // Mørk brun
                  }}
                >
                  Book nu
                </h2>
                <p className="text-foreground/70 text-base">
                  Udfyld formularen, så vender vi hurtigt tilbage!
                </p>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#10b981] flex items-center justify-center hover:bg-[#059669] transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#10b981] flex items-center justify-center hover:bg-[#059669] transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex flex-wrap gap-6 mb-8">
              <a
                href="tel:30135030"
                className="flex items-center gap-3 text-foreground hover:text-foreground/70 transition-colors"
              >
                <Phone className="w-5 h-5 text-[#10b981]" />
                <span className="font-medium">30 13 50 30</span>
              </a>
              <a
                href="mailto:kontakt@midtjyskmøbelrens.dk"
                className="flex items-center gap-3 text-foreground hover:text-foreground/70 transition-colors"
              >
                <Mail className="w-5 h-5 text-[#10b981]" />
                <span className="font-medium">kontakt@midtjyskmøbelrens.dk</span>
              </a>
              <div className="flex items-center gap-3 text-foreground">
                <Clock className="w-5 h-5 text-[#10b981]" />
                <span className="font-medium">Mandag til fredag fra 8-16</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* First Row: Navn, E-mail, Telefon */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Navn"
                    className="h-12 bg-white border-gray-300 rounded-lg focus:border-[#10b981] focus:ring-[#10b981]"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="E-mail"
                    className="h-12 bg-white border-gray-300 rounded-lg focus:border-[#10b981] focus:ring-[#10b981]"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Telefon"
                    className="h-12 bg-white border-gray-300 rounded-lg focus:border-[#10b981] focus:ring-[#10b981]"
                  />
                </div>
              </div>

              {/* Second Row: Vejnavn & husnummer */}
              <div>
                <Input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Vejnavn & husnummer"
                  className="h-12 bg-white border-gray-300 rounded-lg focus:border-[#10b981] focus:ring-[#10b981]"
                />
              </div>

              {/* Third Row: Postnummer, By */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    placeholder="Postnummer"
                    className="h-12 bg-white border-gray-300 rounded-lg focus:border-[#10b981] focus:ring-[#10b981]"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="By"
                    className="h-12 bg-white border-gray-300 rounded-lg focus:border-[#10b981] focus:ring-[#10b981]"
                  />
                </div>
              </div>

              {/* Fourth Row: Besked */}
              <div>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Besked"
                  rows={5}
                  className="w-full px-3 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] text-foreground resize-none"
                />
              </div>

              {/* File Upload */}
              <div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground cursor-pointer"
                >
                  <Upload className="w-5 h-5" />
                  <span>Vælg filer</span>
                </label>
                {selectedFile ? (
                  <p className="text-sm text-foreground/60 mt-2">{selectedFile.name}</p>
                ) : (
                  <p className="text-sm text-foreground/60 mt-2">Der er ikke valgt nogen fil</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full h-14 rounded-full text-base font-semibold transition-all duration-300 ${
                  isSubmitted
                    ? "bg-[#10b981]/80 hover:bg-[#10b981]/80"
                    : "bg-[#10b981] hover:bg-[#059669]"
                } text-white`}
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
                    <Send className="w-5 h-5" />
                    Sendt!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Send
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
