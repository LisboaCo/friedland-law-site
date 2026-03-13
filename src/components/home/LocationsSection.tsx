import { MapPin } from "lucide-react";
import { locations } from "@/data/locations";

const LocationsSection = () => {
  return (
    <section className="py-20 bg-gray-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-charcoal mb-12">
          Proudly Serving Clients Across Florida, New York & New Jersey
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map(loc => (
            <div key={loc.slug} className="bg-background rounded-xl overflow-hidden shadow-sm border border-border flex flex-col transition-all hover:shadow-md">
              {/* Mini Map Iframe */}
              {loc.iframeSrc && (
                <div className="w-full h-[250px] bg-muted">
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
              
              {/* Location Details */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="text-gold shrink-0" size={20} />
                  <h3 className="font-bold text-navy text-lg leading-tight">{loc.city}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{loc.address}</p>
                <p className="text-sm text-muted-foreground mb-4">{loc.state} {loc.zip}</p>
                
                <a href={loc.mapUrl}
                  target="_blank" rel="noopener noreferrer"
                  className="mt-auto text-sm font-semibold text-gold hover:text-gold-dark transition-colors inline-block">
                  Get Directions →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
