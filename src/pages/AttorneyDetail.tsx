import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, User, Award, Briefcase } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import CTAButton from "@/components/CTAButton";
import { attorneys, seniorStaff } from "@/data/attorneys";
import NotFound from "./NotFound";

// Atualizado para usar a tipagem explícita do Vite ({ default: string })
// Isso força o empacotador a ler o arquivo físico corretamente, ignorando o cache
const images = import.meta.glob<{ default: string }>('../assets/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', { eager: true });

const getImageForSlug = (slug: string) => {
  // Adicionamos a barra "/" antes do slug para garantir que a busca seja exata
  const matchingKey = Object.keys(images).find(key => 
    key.toLowerCase().includes(`/${slug.toLowerCase()}.`)
  );
  // Puxamos a propriedade .default da imagem
  return matchingKey ? images[matchingKey].default : null;
};

const AttorneyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Procura o membro tanto na lista de advogados quanto na de staff
  const attorney = attorneys.find(a => a.slug === slug) || seniorStaff.find(s => s.slug === slug);

  if (!attorney) {
    return <NotFound />;
  }

  // Puxa a imagem dinâmica baseada no slug
  const imageUrl = getImageForSlug(attorney.slug);

  return (
    <>
      <Helmet>
        <title>{attorney.name} - {attorney.title} | Friedland Law</title>
        <meta name="description" content={attorney.bio ? attorney.bio.substring(0, 160) : `Profile of ${attorney.name}`} />
      </Helmet>
      
      <Header />
      
      <main className="bg-background pt-8 pb-20">
        <div className="container mx-auto px-4">
          <Link to="/attorneys" className="inline-flex items-center text-gold hover:text-gold-dark font-medium mb-8 transition-colors">
            <ArrowLeft size={18} className="mr-2" /> Back to Our Team
          </Link>
          
          <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Seção da Imagem */}
              <div className="md:w-1/3 bg-gray-light relative">
                <div className="aspect-[3/4] md:aspect-auto md:h-full flex items-center justify-center overflow-hidden">
                  {imageUrl ? (
                    <img 
                      src={imageUrl} 
                      alt={attorney.name} 
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <User className="text-muted-foreground/30" size={120} />
                  )}
                </div>
              </div>
              
              {/* Seção de Conteúdo */}
              <div className="md:w-2/3 p-8 md:p-12">
                <h1 className="text-3xl md:text-5xl font-bold text-navy mb-2">{attorney.name}</h1>
                <p className="text-xl text-gold font-medium mb-8 pb-6 border-b border-border">
                  {attorney.isStaff ? attorney.staffTitle : attorney.title}
                </p>
                
                {attorney.bio && (
                  <div className="prose prose-lg max-w-none text-charcoal/80 mb-10">
                    <p>{attorney.bio}</p>
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {attorney.areas && attorney.areas.length > 0 && (
                    <div>
                      <h3 className="flex items-center text-lg font-bold text-navy mb-4">
                        <Briefcase size={20} className="mr-2 text-gold" /> Practice Areas
                      </h3>
                      <ul className="space-y-2">
                        {attorney.areas.map((area, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 mr-2 shrink-0"></span>
                            <span className="text-charcoal/80">{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {attorney.awards && attorney.awards.length > 0 && (
                    <div>
                      <h3 className="flex items-center text-lg font-bold text-navy mb-4">
                        <Award size={20} className="mr-2 text-gold" /> Awards & Recognition
                      </h3>
                      <ul className="space-y-2">
                        {attorney.awards.map((award, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 mr-2 shrink-0"></span>
                            <span className="text-charcoal/80">{award}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="bg-gray-light p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-bold text-navy mb-2">Need to discuss your case?</h3>
                  <p className="text-charcoal/80 mb-4">Contact {attorney.name.split(' ')[0]} today for a free, no-obligation consultation.</p>
                  <CTAButton text="Contact Now" href="/contact" variant="primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <StickyMobileCTA />
    </>
  );
};

export default AttorneyDetail;
