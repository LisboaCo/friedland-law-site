import { MapPin } from "lucide-react";
import { locations } from "@/data/locations";

const LocationsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-charcoal mb-12">
          Proudly Serving Clients Across Florida, New York & New Jersey
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
          {locations.map(loc => (
            <div key={loc.slug} className="min-w-[260px] flex-shrink-0 snap-start border border-border rounded-xl p-6 bg-background">
              <MapPin className="text-gold mb-3" size={24} />
              <h3 className="font-bold text-navy text-lg mb-1">{loc.city}, {loc.state}</h3>
              <p className="text-sm text-muted-foreground mb-1">{loc.address}</p>
              <p className="text-sm text-muted-foreground mb-3">{loc.zip}</p>
              <a href={`https://maps.google.com/?q=${encodeURIComponent(loc.address + " " + loc.city + " " + loc.state)}`}
                target="_blank" rel="noopener noreferrer"
                className="text-sm font-semibold text-gold hover:text-gold-dark transition-colors">
                Get Directions →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
