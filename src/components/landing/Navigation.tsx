import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Square } from "lucide-react";

interface NavigationProps {
  onCtaClick: () => void;
}

export default function Navigation({ onCtaClick }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);

  const pricingLinks = [
    { label: "Sofa", href: "#pricing" },
    { label: "Spisestol", href: "#pricing" },
    { label: "Læder møbler", href: "#pricing" },
  ];

  const navLinks = [
    { label: "Før dit besøg", href: "#before-visit" },
    { label: "Kontakt os", href: "#contact" },
    { label: "Erhverv", href: "#business" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: "#2563eb" }}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Gul stol ikon + tekst */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <Square className="w-8 h-8" style={{ color: "#10b981" }} fill="#10b981" />
            </div>
            <span
              className="text-lg font-bold text-white uppercase tracking-wide"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Midtjysk Møbelrens
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Pricing Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsPricingOpen(true)}
              onMouseLeave={() => setIsPricingOpen(false)}
            >
              <button className="flex items-center gap-1 text-white hover:text-white/80 font-medium transition-colors uppercase text-sm tracking-wide">
                Priser
                <ChevronDown className={`w-4 h-4 transition-transform ${isPricingOpen ? 'rotate-180' : ''}`} />
              </button>
              {isPricingOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-border py-2 min-w-[180px]"
                >
                  {pricingLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>
            
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white hover:text-white/80 font-medium transition-colors uppercase text-sm tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button - Gul knap */}
          <div className="hidden md:block">
            <Button
              onClick={onCtaClick}
              className="bg-[#10b981] hover:bg-[#059669] text-white px-6 py-5 font-semibold rounded-full transition-all duration-300"
            >
              BOOK NU
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#2563eb] border-t border-white/20"
        >
          <div className="container mx-auto px-6 py-6 space-y-4">
            <div>
              <button
                onClick={() => setIsPricingOpen(!isPricingOpen)}
                className="flex items-center justify-between w-full text-white font-medium py-2 uppercase text-sm"
              >
                Priser
                <ChevronDown className={`w-4 h-4 transition-transform ${isPricingOpen ? 'rotate-180' : ''}`} />
              </button>
              {isPricingOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {pricingLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-white/70 font-medium py-2"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white font-medium py-2 uppercase text-sm"
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onCtaClick();
              }}
              className="w-full bg-[#10b981] hover:bg-[#059669] text-white py-5 font-semibold rounded-full"
            >
              BOOK NU
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
