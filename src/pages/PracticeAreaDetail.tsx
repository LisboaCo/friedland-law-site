import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ContactForm from "@/components/ContactForm";
import CaseResultCard from "@/components/CaseResultCard";
import CTAButton from "@/components/CTAButton";
import { practiceAreas } from "@/data/practiceAreas";
import { caseResults } from "@/data/caseResults";
import { Shield, Scale, Clock } from "lucide-react";

const PracticeAreaDetail = () => {
  const { slug } = useParams();
  const area = practiceAreas.find(a => a.slug === slug);

  if (!area) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-charcoal">Practice Area Not Found</h1>
          <CTAButton text="View All Practice Areas" href="/practice-areas" variant="primary" className="mt-6" />
        </div>
        <Footer />
      </>
    );
  }

  const relatedResults = caseResults.filter(r => r.caseType === area.name).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{area.name} Attorney | Friedland Law</title>
        <meta name="description" content={`Friedland Law provides expert legal representation for ${area.name} cases. Free consultation. No win, no fee.`} />
      </Helmet>
      <Header />
      <main>
        <section className="bg-navy py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-primary-foreground mb-4">{area.name} Attorney</h1>
            <p className="text-primary-foreground/70 max-w-xl">Expert legal representation when you need it most.</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-4">Understanding {area.name} Cases</h2>
              <p className="text-muted-foreground mb-4">[PLACEHOLDER] If you've been injured in a {area.name.toLowerCase()} incident, you deserve an attorney who will fight for maximum compensation. At Friedland Law, we don't hand your case off to a case manager — your attorney handles your case directly.</p>
              <p className="text-muted-foreground">[PLACEHOLDER] Our team has recovered millions for {area.name.toLowerCase()} victims across Florida, New York, and New Jersey. We prepare every case for trial, which gives us maximum leverage in settlement negotiations.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-6">How We Help</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { icon: Shield, title: "Aggressive Representation", text: "We fight insurance companies so you don't have to." },
                  { icon: Scale, title: "Maximum Compensation", text: "We never accept the first offer. We fight for what you deserve." },
                  { icon: Clock, title: "Fast Resolution", text: "We move quickly to resolve your case while being thorough." },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="text-center p-6 border border-border rounded-xl">
                    <Icon className="text-gold mx-auto mb-3" size={32} />
                    <h3 className="font-bold text-navy text-sm mb-2">{title}</h3>
                    <p className="text-xs text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {relatedResults.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-6">Related Case Results</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {relatedResults.map((r, i) => (
                    <div key={i} className="bg-navy rounded-xl p-4">
                      <CaseResultCard {...r} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-navy rounded-xl p-10 text-center">
              <h2 className="text-2xl font-bold text-primary-foreground mb-4">Injured? Get Your Free Case Review.</h2>
              <CTAButton text="Start Your Free Strategy Session" href="/contact" variant="primary" />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
              <ContactForm compact />
            </div>
            <div className="bg-gray-light rounded-xl p-6">
              <h3 className="font-bold text-navy mb-4">Other Practice Areas</h3>
              <ul className="space-y-2">
                {practiceAreas.filter(a => a.slug !== slug).slice(0, 8).map(a => (
                  <li key={a.slug}>
                    <Link to={`/practice-areas/${a.slug}`} className="text-sm text-charcoal hover:text-gold transition-colors">
                      {a.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
};

export default PracticeAreaDetail;
