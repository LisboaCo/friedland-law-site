import { Helmet } from "react-helmet-async";
import { MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { locations } from "@/data/locations";
import CTAButton from "@/components/CTAButton";

const Locations = () => {
  return (
    <>
      <Helmet>
        <title>Our Office Locations | Friedland Law</title>
        <meta name="description" content="Find a Friedland Law office near you. We serve clients across Florida, New York, and New Jersey." />
      </Helmet>
      
      <Header />
      
      <main>
        {/* Banner Principal */}
        <section className="bg-navy py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-primary-foreground mb-4">Our Locations</h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
              Proudly serving clients across Florida, New York & New Jersey. Find an office near you or contact us for a free virtual consultation.
            </p>
          </div>
        </section>

        {/* Grid de Endereços com Mapas Interativos */}
        <section className="py-20 bg-gray-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {locations.map((loc) => (
                <div key={loc.slug} className="bg-background rounded-xl overflow-hidden shadow-sm border border-border flex flex-col transition-all hover:shadow-md">
                  
                  {/* Renderização do Iframe do Google Maps (Igual à Home) */}
                  {loc.iframeSrc && (
                    <div className="w-full h-[300px] bg-muted">
                      <iframe 
                        src={loc.iframeSrc} 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  )}
                  
                  {/* Detalhes do Escritório */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h2 className="text-2xl font-bold text-navy mb-4 border-b border-border pb-4">{loc.city} Office</h2>
                    
                    <div className="space-y-4 mb-8 flex-grow">
                      <div className="flex items-start gap-3">
                        <MapPin className="text-gold shrink-0 mt-1" size={20} />
                        <div>
                          <p className="text-charcoal font-medium">{loc.address}</p>
                          <p className="text-muted-foreground">{loc.city}, {loc.state} {loc.zip}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Phone className="text-gold shrink-0" size={20} />
                        <a href="tel:800-210-4878" className="text-charcoal hover:text-gold transition-colors font-medium">
                          {loc.phone}
                        </a>
                      </div>
                    </div>
                    
                    {/* Botões de Ação */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                      <a 
                        href={loc.mapUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 bg-white hover:bg-gold hover:text-white text-navy font-semibold py-3 px-4 rounded transition-colors text-center border border-border hover:border-gold"
                      >
                        Get Directions
                      </a>
                      <CTAButton text="Contact Office" href="/contact" variant="primary" className="flex-1" />
                    </div>
                  </div>
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

export default Locations;
