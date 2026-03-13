import { useState } from "react";
import CTAButton from "./CTAButton";

interface ContactFormProps {
  compact?: boolean;
}

const caseTypes = ["Car Accident", "Truck Accident", "Slip & Fall", "Medical Malpractice", "Workplace Injury", "Other"];
const timeframes = ["Less than 1 week", "1-4 weeks", "1-6 months", "6-12 months", "Over 1 year"];

const ContactForm = ({ compact = false }: ContactFormProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "",
    caseType: "", timeframe: "",
    description: "", hasDocumentation: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: string) => setFormData(prev => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to Supabase
    console.log("Lead submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-navy mb-2">We've Received Your Case</h3>
        <p className="text-muted-foreground">A Friedland attorney will contact you within 24 hours.</p>
      </div>
    );
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="text-xl font-bold text-navy mb-2">Free Case Evaluation</h3>
        <input type="text" placeholder="Your Name" required value={formData.name} onChange={e => update("name", e.target.value)}
          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none" />
        <input type="tel" placeholder="Phone Number" required value={formData.phone} onChange={e => update("phone", e.target.value)}
          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none" />
        <select value={formData.caseType} onChange={e => update("caseType", e.target.value)} required
          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none bg-background">
          <option value="">What happened?</option>
          {caseTypes.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <textarea placeholder="Tell us about your case" rows={3} value={formData.description} onChange={e => update("description", e.target.value)}
          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none resize-none" />
        <CTAButton text="Start My Recovery" type="submit" variant="primary" className="w-full" />
      </form>
    );
  }

  const totalSteps = 3;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Progress bar */}
      <div className="flex gap-2 mb-6">
        {[1, 2, 3].map(s => (
          <div key={s} className={`h-1.5 flex-1 rounded-full transition-colors ${s <= step ? "bg-gold" : "bg-border"}`} />
        ))}
      </div>
      <p className="text-sm text-muted-foreground mb-4">Step {step} of {totalSteps}</p>

      {step === 1 && (
        <div className="space-y-4">
          <input type="text" placeholder="Full Name" required value={formData.name} onChange={e => update("name", e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none" />
          <input type="tel" placeholder="Phone Number" required value={formData.phone} onChange={e => update("phone", e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none" />
          <input type="email" placeholder="Email Address" required value={formData.email} onChange={e => update("email", e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none" />
          <CTAButton text="Continue" onClick={() => setStep(2)} variant="primary" className="w-full" />
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <select value={formData.caseType} onChange={e => update("caseType", e.target.value)} required
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none bg-background">
            <option value="">What happened?</option>
            {caseTypes.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <select value={formData.timeframe} onChange={e => update("timeframe", e.target.value)} required
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none bg-background">
            <option value="">How long ago?</option>
            {timeframes.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <div className="flex gap-3">
            <CTAButton text="Back" onClick={() => setStep(1)} variant="secondary" className="flex-1" />
            <CTAButton text="Continue" onClick={() => setStep(3)} variant="primary" className="flex-1" />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <textarea placeholder="Describe your case..." rows={4} value={formData.description} onChange={e => update("description", e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none resize-none" />
          <select value={formData.hasDocumentation} onChange={e => update("hasDocumentation", e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none bg-background">
            <option value="">Do you have documentation?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <div className="flex gap-3">
            <CTAButton text="Back" onClick={() => setStep(2)} variant="secondary" className="flex-1" />
            <CTAButton text="Start My Recovery" type="submit" variant="primary" className="flex-1" />
          </div>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
