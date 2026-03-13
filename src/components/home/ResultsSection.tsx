import CaseResultCard from "../CaseResultCard";
import CTAButton from "../CTAButton";
import { caseResults } from "@/data/caseResults";

const ResultsSection = () => {
  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary-foreground mb-3">
          Millions Won. <span className="text-gold">Lives Restored.</span>
        </h2>
        <p className="text-center text-primary-foreground/60 mb-12 max-w-xl mx-auto">
          We don't just accept the first offer. We fight for what you truly deserve.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {caseResults.map((r, i) => (
            <CaseResultCard key={i} {...r} />
          ))}
        </div>
        <div className="text-center">
          <CTAButton text="See All Case Results →" href="/results" variant="secondary" />
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
