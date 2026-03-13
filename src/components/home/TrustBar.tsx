const logos = ["Top 100 Attorneys", "Super Lawyers", "Million Dollar Advocates", "NBC", "CBS", "FOX"];

const TrustBar = () => {
  return (
    <section className="bg-gray-light py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="mx-10 flex-shrink-0 text-muted-foreground/40 hover:text-charcoal transition-colors duration-300 font-bold text-sm uppercase tracking-widest select-none">
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
