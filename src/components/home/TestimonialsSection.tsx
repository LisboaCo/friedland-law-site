import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent(c => (c + 1) % testimonials.length), []);
  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [paused, next]);

  return (
    <section className="py-20 bg-gray-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-charcoal mb-12">
          What Our Clients Have To Say
        </h2>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
              {testimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 px-4">
                  <div className="bg-background rounded-xl p-8 shadow-sm border border-border text-center">
                    <div className="w-14 h-14 rounded-full bg-navy text-primary-foreground flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {t.initials}
                    </div>
                    <div className="flex justify-center gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} size={18} className="fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="text-charcoal mb-4 italic">"{t.text}"</p>
                    <p className="font-semibold text-navy">{t.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background shadow-md rounded-full p-2 text-charcoal hover:text-gold transition-colors" aria-label="Previous">
            <ChevronLeft size={24} />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background shadow-md rounded-full p-2 text-charcoal hover:text-gold transition-colors" aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Google aggregate */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="font-semibold text-charcoal">4.9</span> based on 200+ reviews
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
