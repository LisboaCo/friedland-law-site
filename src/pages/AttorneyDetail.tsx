import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import CTAButton from "@/components/CTAButton";
import { attorneys } from "@/data/attorneys";
import { User, Award, BookOpen, Scale } from "lucide-react";

const AttorneyDetail = () => {
  const { slug } = useParams();
  const attorney = attorneys.find(a => a.slug === slug);

  if (!attorney) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-charcoal">Attorney Not Found</h1>
          <CTAButton text="View All Attorneys" href="/attorneys" variant="primary" className="mt-6" />
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{attorney.name}, Esquire | Friedland Law</title>
        <meta name="description" content={`Learn about ${attorney.name}, personal injury attorney at Friedland Law.`} />
      </Helmet>
      <Header />
      <main>
        <section className="bg-navy py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-primary-foreground">{attorney.name}, Esquire</h1>
            <p className="text-gold text-lg mt-2">{attorney.title}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="aspect-[3/4] bg-gray-light rounded-xl flex items-center justify-center mb-6">
                <User className="text-muted-foreground/30" size={120} />
              </div>
              <CTAButton text="Schedule a Consultation" href="/contact" variant="primary" className="w-full" />
            </div>
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-4">About {attorney.name.split(" ")[0]}</h2>
                <p className="text-muted-foreground">{attorney.bio}</p>
              </div>
              {attorney.areas.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-charcoal mb-3 flex items-center gap-2"><Scale size={20} className="text-gold" /> Practice Areas</h3>
                  <div className="flex flex-wrap gap-2">
                    {attorney.areas.map(a => (
                      <span key={a} className="px-3 py-1 text-sm bg-gray-light rounded-full text-charcoal">{a}</span>
                    ))}
                  </div>
                </div>
              )}
              {attorney.education.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-charcoal mb-3 flex items-center gap-2"><BookOpen size={20} className="text-gold" /> Education</h3>
                  <ul className="space-y-1">
                    {attorney.education.map(e => <li key={e} className="text-muted-foreground text-sm">{e}</li>)}
                  </ul>
                </div>
              )}
              {attorney.awards.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-charcoal mb-3 flex items-center gap-2"><Award size={20} className="text-gold" /> Awards & Recognition</h3>
                  <ul className="space-y-1">
                    {attorney.awards.map(a => <li key={a} className="text-muted-foreground text-sm">{a}</li>)}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
};

export default AttorneyDetail;
