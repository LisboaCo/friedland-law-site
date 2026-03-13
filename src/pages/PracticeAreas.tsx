import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { practiceAreas, megaMenuCategories } from "@/data/practiceAreas";
import { Car, Truck, Bike, Smartphone, AlertTriangle, HardHat, Stethoscope, Heart, Brain, Dog, Footprints, Building, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Car, Truck, Bike, Smartphone, AlertTriangle, HardHat, Stethoscope, Heart, Brain, Dog, Footprints, Building,
};

const PracticeAreas = () => {
  return (
    <>
      <Helmet>
        <title>Practice Areas | Friedland Law - Personal Injury Attorneys</title>
        <meta name="description" content="Friedland Law handles all types of personal injury cases including car accidents, truck accidents, slip & fall, medical malpractice, and more." />
      </Helmet>
      <Header />
      <main>
        <section className="bg-navy py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-primary-foreground mb-4">Practice Areas</h1>
            <p className="text-primary-foreground/70 max-w-xl mx-auto">We fight for injury victims across every type of accident and negligence case.</p>
          </div>
        </section>

        {megaMenuCategories.map(cat => (
          <section key={cat.title} className="py-16 even:bg-gray-light">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-charcoal mb-8">{cat.title}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.areas.map(area => {
                  const Icon = iconMap[area.icon] || Car;
                  return (
                    <Link key={area.slug} to={`/practice-areas/${area.slug}`}
                      className="group flex items-start gap-4 p-6 rounded-xl border border-border bg-background hover:border-gold transition-all">
                      <Icon className="text-gold shrink-0 mt-1" size={28} />
                      <div>
                        <h3 className="font-bold text-navy group-hover:text-gold transition-colors">{area.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{area.description}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
};

export default PracticeAreas;
