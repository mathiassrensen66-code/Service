import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { GripVertical } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleStart = () => setIsDragging(true);
  const handleEnd = () => setIsDragging(false);

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
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-[#A8B5A0] mb-4">
            Se Forskellen
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2B2B2B] mb-6"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Før og efter
          </h2>
          <p className="text-lg text-[#2B2B2B]/70 leading-relaxed">
            Træk i slideren for at se den dramatiske forvandling vores rengøring kan skabe.
          </p>
        </motion.div>

        {/* Slider Component */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.12)] cursor-ew-resize select-none"
            onMouseMove={handleMouseMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleEnd}
          >
            {/* After Image (Full width, visible through clip) */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80"
                alt="After cleaning - Clean sofa"
                className="w-full h-full object-cover"
                draggable={false}
              />
              {/* After Label */}
              <div className="absolute bottom-6 right-6 bg-[#A8B5A0] text-[#2B2B2B] px-4 py-2 rounded-full text-sm font-semibold">
                Efter
              </div>
            </div>

            {/* Before Image (Clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80"
                alt="Before cleaning - Dirty sofa"
                className="w-full h-full object-cover grayscale brightness-75 contrast-90"
                draggable={false}
              />
              {/* Before Label */}
              <div className="absolute bottom-6 left-6 bg-[#2B2B2B]/80 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Før
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
              onMouseDown={handleStart}
              onTouchStart={handleStart}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.2)] flex items-center justify-center">
                <GripVertical className="w-6 h-6 text-[#2B2B2B]/60" />
              </div>
            </div>
          </div>

          {/* Instructions */}
          <p className="text-center text-[#2B2B2B]/50 mt-6 text-sm">
            ← Træk for at sammenligne →
          </p>
        </motion.div>
      </div>
    </section>
  );
}
