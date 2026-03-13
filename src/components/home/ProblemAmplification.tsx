import { Factory, Handshake } from "lucide-react";

const ProblemAmplification = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-charcoal mb-12">
          Don't Be Just Another File in a Law Factory.
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Big Firms */}
          <div className="bg-gray-light border border-border rounded-xl p-8">
            <Factory className="text-muted-foreground mb-4" size={40} />
            <h3 className="text-xl font-bold text-charcoal mb-3">At Big Firms</h3>
            <p className="text-muted-foreground">
              Your case is assigned to a case manager handling hundreds of files. You never speak to your attorney.
            </p>
          </div>
          {/* Friedland */}
          <div className="bg-navy rounded-xl p-8 border-l-4 border-gold">
            <Handshake className="text-gold mb-4" size={40} />
            <h3 className="text-xl font-bold text-primary-foreground mb-3">At Friedland Law</h3>
            <p className="text-primary-foreground/80">
              Your attorney answers your call. You get partner-level attention on every case. Always.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemAmplification;
