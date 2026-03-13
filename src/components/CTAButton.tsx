import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  text: string;
  href?: string;
  variant?: "primary" | "secondary" | "dark" | "hero-outline";
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

const CTAButton = ({ text, href, variant = "primary", icon, onClick, className, type = "button" }: CTAButtonProps) => {
  const base = "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 cursor-pointer text-center";
  
  const variants = {
    primary: "bg-gold text-navy px-8 py-4 text-base hover:bg-gold-dark shadow-lg hover:shadow-xl",
    secondary: "border-2 border-gold text-gold px-8 py-4 text-base hover:bg-gold hover:text-navy",
    dark: "bg-navy text-primary-foreground px-8 py-4 text-base hover:bg-navy-light",
    "hero-outline": "border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 text-base hover:bg-primary-foreground/10",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    if (href.startsWith("tel:") || href.startsWith("http")) {
      return (
        <a href={href} className={classes}>
          {icon} {text}
        </a>
      );
    }
    return (
      <Link to={href} className={classes}>
        {icon} {text}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {icon} {text}
    </button>
  );
};

export default CTAButton;
