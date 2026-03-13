import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ContactForm from "../ContactForm";

const faqs = [
  { q: "How do contingency fees work?", a: "You pay nothing unless we win your case. Our fee comes from the settlement, so there's zero financial risk to you." },
  { q: "How long will my case take?", a: "Every case is different. Simple cases may resolve in months, complex litigation can take longer. We keep you updated at every step." },
  { q: "What should I do right after an accident?", a: "Seek medical attention, document everything, don't give statements to insurance companies, and contact an attorney as soon as possible." },
  { q: "Do I need surgery to have a valid case?", a: "No. We've secured settlements of $500,000+ for clients who didn't require surgery. What matters is the impact on your life." },
  { q: "Will I have to go to court?", a: "Most cases settle before trial. However, we prepare every case for court, which gives us maximum leverage in negotiations." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gray-light" id="contact-form">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold text-charcoal mb-8">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-border rounded-xl bg-background overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left font-medium text-charcoal hover:text-navy transition-colors"
                  >
                    {faq.q}
                    <ChevronDown size={20} className={`shrink-0 ml-2 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
                  </button>
                  {openIndex === i && (
                    <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-xl p-8 shadow-sm border border-border h-fit">
            <ContactForm compact />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
