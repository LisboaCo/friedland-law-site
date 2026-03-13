import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import CTAButton from "@/components/CTAButton";
import { ChevronDown } from "lucide-react";

const allFaqs = [
  { q: "How do contingency fees work?", a: "You pay nothing unless we win your case. Our fee comes from the settlement, so there's zero financial risk to you." },
  { q: "How long will my case take?", a: "Every case is different. Simple cases may resolve in months, complex litigation can take longer. We keep you updated at every step." },
  { q: "What should I do right after an accident?", a: "Seek medical attention, document everything, don't give statements to insurance companies, and contact an attorney as soon as possible." },
  { q: "Do I need surgery to have a valid case?", a: "No. We've secured settlements of $500,000+ for clients who didn't require surgery. What matters is the impact on your life." },
  { q: "Will I have to go to court?", a: "Most cases settle before trial. However, we prepare every case for court, which gives us maximum leverage in negotiations." },
  { q: "What types of injuries do you handle?", a: "[PLACEHOLDER] We handle all types of personal injury cases including car accidents, truck accidents, slip & falls, medical malpractice, workplace injuries, wrongful death, and more." },
  { q: "How much is my case worth?", a: "[PLACEHOLDER] Every case is unique. The value depends on factors like severity of injury, medical costs, lost wages, and long-term impact. We can give you a better estimate during your free consultation." },
  { q: "Can I still file a claim if the accident was partially my fault?", a: "[PLACEHOLDER] Yes. Florida follows comparative negligence rules, meaning you may still recover damages even if you share some fault. An attorney can explain how this applies to your situation." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <Helmet>
        <title>FAQ | Friedland Law - Personal Injury Questions Answered</title>
        <meta name="description" content="Get answers to common personal injury questions. How contingency fees work, what to do after an accident, and more." />
      </Helmet>
      <Header />
      <main>
        <section className="bg-navy py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-primary-foreground mb-4">Frequently Asked Questions</h1>
            <p className="text-primary-foreground/70 max-w-xl mx-auto">Answers to common questions about personal injury claims.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="space-y-3">
              {allFaqs.map((faq, i) => (
                <div key={i} className="border border-border rounded-xl bg-background overflow-hidden">
                  <button onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left font-medium text-charcoal hover:text-navy transition-colors">
                    {faq.q}
                    <ChevronDown size={20} className={`shrink-0 ml-2 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
                  </button>
                  {openIndex === i && (
                    <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <CTAButton text="Contact Us Today" href="/contact" variant="primary" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
};

export default FAQ;
