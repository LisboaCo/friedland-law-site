import { Phone, FileText } from "lucide-react";

const StickyMobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-navy shadow-[0_-4px_20px_rgba(0,0,0,0.3)] p-3 flex gap-3">
      <a
        href="tel:800-210-4878"
        className="flex-1 flex items-center justify-center gap-2 bg-gold text-navy font-semibold py-3 rounded-lg"
      >
        <Phone size={18} /> Call Now
      </a>
      <a
        href="#contact-form"
        className="flex-1 flex items-center justify-center gap-2 border-2 border-gold text-gold font-semibold py-3 rounded-lg"
      >
        <FileText size={18} /> Free Review
      </a>
    </div>
  );
};

export default StickyMobileCTA;
