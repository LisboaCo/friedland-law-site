import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { locations } from "@/data/locations";
import { MapPin, Phone } from "lucide-react";
import CTAButton from "@/components/CTAButton";

const LocationsPage = () => {
  return (
    <>
      <Helmet>
        <title>Office Locations | Friedland Law - FL, NY, NJ</title>
        <meta name="description" content="Friedland Law has offices in Jacksonville, Ft. Lauderdale, West Palm Beach, New York, and River Edge, NJ." />
      </Helmet>
      <Header />
      <main>
        <section className="bg-navy py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-primary-foreground mb-4">Our Locations</h1>
            <p className="text-primary-foreground/70">Serving clients across Florida, New York & New Jersey</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map(loc => (
                <div key={loc.slug} className="border border-border rounded-xl p-8 hover:border-gold transition-all">
                  <MapPin className="text-gold mb-4" size={32} />
                  <h2 className="text-xl font-bold text-navy mb-2">{loc.city}, {loc.state}</h2>
                  <p className="text-muted-foreground mb-1">{loc.address}</p>
                  <p className="text-muted-foreground mb-4">{loc.city}, {loc.state} {loc.zip}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <Phone size={16} className="text-gold" />
                    <a href="tel:800-210-4878" className="font-semibold text-navy hover:text-gold transition-colors">{loc.phone}</a>
                  </div>
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(loc.address + " " + loc.city + " " + loc.state + " " + loc.zip)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="text-sm font-semibold text-gold hover:text-gold-dark transition-colors">
                    Get Directions →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-navy text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">Injured? We're Near You.</h2>
            <CTAButton text="Get Your Free Case Review" href="/contact" variant="primary" />
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
};

export default LocationsPage;
