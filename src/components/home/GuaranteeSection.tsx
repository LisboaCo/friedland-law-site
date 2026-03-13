import { Handshake, Gavel, Clock } from "lucide-react";

const guarantees = [
  { icon: Handshake, title: "Direct Attorney Access", text: "You speak to the lawyer handling your case. Always." },
  { icon: Gavel, title: "Trial-Ready Preparation", text: "Every case is prepared as if going to jury trial." },
  { icon: Clock, title: "24/7 Availability", text: "Day or night, your attorney is a call away." },
];

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary-foreground mb-12">
          Your Lawyer. Not a Case Manager. <span className="text-gold">Guaranteed.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {guarantees.map(({ icon: Icon, title, text }) => (
            <div key={title} className="text-center border border-primary-foreground/10 rounded-xl p-8">
              <Icon className="text-gold mx-auto mb-4" size={40} />
              <h3 className="text-lg font-bold text-primary-foreground mb-2">{title}</h3>
              <p className="text-sm text-primary-foreground/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
