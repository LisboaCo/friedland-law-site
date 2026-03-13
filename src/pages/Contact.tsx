import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ContactForm from "@/components/ContactForm";
import { locations } from "@/data/locations";
import { MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Friedland Law - Free Case Evaluation</title>
        <meta name="description" content="Contact Friedland Law for a free case evaluation. Available 24/7. Call 800-210-HURT or fill out our form." />
      </Helmet>
      <Header />
      <main>
        <section className="bg-navy py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-primary-foreground mb-4">Contact Friedland Law</h1>
            <p className="text-primary-foreground/70">Start your free case evaluation today.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 max-w-5xl">
            <div className="bg-background rounded-xl p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-bold text-charcoal mb-6">Free Case Evaluation</h2>
              <ContactForm />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-4">Call Us Directly</h2>
                <a href="tel:800-210-4878" className="text-3xl font-bold text-gold hover:text-gold-dark transition-colors flex items-center gap-3">
                  <Phone size={28} /> 800-210-HURT
                </a>
                <p className="text-muted-foreground mt-2">Available 24/7 — Speak directly with an attorney.</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-4">Our Offices</h2>
                <div className="space-y-4">
                  {locations.map(loc => (
                    <div key={loc.slug} className="flex items-start gap-3 p-4 border border-border rounded-lg">
                      <MapPin className="text-gold shrink-0 mt-1" size={20} />
                      <div>
                        <h3 className="font-bold text-navy">{loc.city}, {loc.state}</h3>
                        <p className="text-sm text-muted-foreground">{loc.address}, {loc.zip}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
};

export default Contact;
