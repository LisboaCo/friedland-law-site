import { ArrowRight } from "lucide-react";

interface CaseResultCardProps {
  initialOffer: number;
  settlement: number;
  description: string;
  caseType: string;
}

const formatMoney = (n: number) => {
  if (n === 0) return "$0";
  if (n >= 1000000) return `$${(n / 1000000).toFixed(n % 1000000 === 0 ? 0 : 1)}M`;
  return `$${(n / 1000).toFixed(0)}K`;
};

const CaseResultCard = ({ initialOffer, settlement, description }: CaseResultCardProps) => {
  return (
    <div className="bg-navy-light/50 border border-gold/20 rounded-xl p-6 hover:border-gold/50 transition-all duration-300">
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="text-center">
          <p className="text-xs uppercase tracking-wider text-primary-foreground/50 mb-1">Initial Offer</p>
          <p className="text-xl font-bold text-red-alert line-through">
            {initialOffer === 0 ? "DENIED" : formatMoney(initialOffer)}
          </p>
        </div>
        <ArrowRight className="text-gold shrink-0" size={28} />
        <div className="text-center">
          <p className="text-xs uppercase tracking-wider text-primary-foreground/50 mb-1">We Got</p>
          <p className="text-3xl font-bold text-gold">{formatMoney(settlement)}</p>
        </div>
      </div>
      <p className="text-sm text-primary-foreground/70 text-center">{description}</p>
    </div>
  );
};

export default CaseResultCard;
