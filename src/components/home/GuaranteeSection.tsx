import React, { useRef } from "react";
import { ShieldCheck, BadgeDollarSign, Scale, Clock } from "lucide-react";

// Aqui podes ajustar os textos e os ícones das tuas garantias conforme necessário
const guarantees = [
  {
    title: "Zero Fee Guarantee",
    description: "You pay nothing out of pocket. We only get paid if we win your case.",
    icon: BadgeDollarSign,
  },
  {
    title: "Free Case Evaluation",
    description: "We will review your case for free, with no obligation to hire our team.",
    icon: Clock,
  },
  {
    title: "100% Confidential",
    description: "Your information is completely safe with us. We protect your privacy at every step.",
    icon: ShieldCheck,
  },
  {
    title: "Tireless Advocacy",
    description: "We will fight aggressively against the insurance companies to get you maximum compensation.",
    icon: Scale,
  },
];

// Componente individual do Card com a animação de hover e rastreio do mouse
const GuaranteeCard = ({ title, description, icon: Icon }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Função que rastreia o mouse para criar o efeito de "lanterna"
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      // Mesmos estilos visuais da ProblemAmplification (border, bg-white/5, backdrop-blur)
      className="relative overflow-hidden bg-white/5 border border-white/10 p-8 rounded-xl group transition-colors duration-300 hover:border-gold/50 cursor-default backdrop-blur-sm flex flex-col items-center text-center"
    >
      {/* Efeito de brilho Dourado (Gold Glow) que segue o mouse */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(197, 165, 114, 0.15), transparent 40%)`,
        }}
      />

      {/* Conteúdo do Card (z-10 para ficar por cima do brilho) */}
      <div className="relative z-10">
        <div className="w-16 h-16 mx-auto bg-navy/50 rounded-full flex items-center justify-center mb-6 border border-white/5 group-hover:border-gold/30 transition-colors backdrop-blur-md">
          <Icon className="w-8 h-8 text-gold" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/80 leading-relaxed text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

const GuaranteeSection = () => {
  return (
    <section className="bg-navy py-20 lg:py-28 relative border-t border-white/10">
      <div className="container mx-auto px-4 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Our Ironclad <span className="text-gold">Guarantee</span>
          </h2>
          <p className="text-lg text-white/80">
            We take the financial risk so you don't have to. Our commitment to you is backed by our strict no-win,
            no-fee promise.
          </p>
        </div>

        {/* Grade com os Cards Animados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {guarantees.map((item, index) => (
            <GuaranteeCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
