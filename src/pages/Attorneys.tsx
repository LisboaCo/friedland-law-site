import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { attorneys, seniorStaff } from "@/data/attorneys";
import { User } from "lucide-react";

const AttorneyCard = ({ attorney }: { attorney: typeof attorneys[0] }) => (
  <Link to={`/attorneys/${attorney.slug}`} className="group border border-border rounded-xl overflow-hidden hover:border-gold transition-all">
    <div className="aspect-[3/4] bg-gray-light flex items-center justify-center">
      <User className="text-muted-foreground/30" size={80} />
    </div>
    <div className="p-5">
      <h3 className="font-bold text-navy group-hover:text-gold transition-colors">{attorney.name}</h3>
      <p className="text-sm text-muted-foreground">{attorney.title}</p>
      <span className="text-sm text-gold font-medium mt-2 inline-block">Meet {attorney.name.split(" ")[0]} →</span>
    </div>
  </Link>
);

const Attorneys = () => {
  return (
    <>
      <Helmet>
        <title>Our Attorneys | Friedland Law</title>
        <meta name="description" content="Meet the attorneys at Friedland Law. Direct attorney access on every case." />
      </Helmet>
      <Header />
      <main>
        <section className="bg-navy py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-primary-foreground mb-4">Our Attorneys</h1>
            <p className="text-primary-foreground/70 max-w-xl mx-auto">Every client gets direct access to the attorney handling their case.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {attorneys.map(a => <AttorneyCard key={a.slug} attorney={a} />)}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-charcoal mb-8">Senior Staff</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {seniorStaff.map(s => (
                <div key={s.slug} className="border border-border rounded-xl p-6 bg-background text-center">
                  <div className="w-20 h-20 rounded-full bg-navy text-primary-foreground flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {s.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <h3 className="font-bold text-navy">{s.name}</h3>
                  <p className="text-sm text-muted-foreground">{s.staffTitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
};

export default Attorneys;
