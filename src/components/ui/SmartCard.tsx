import { ReactNode } from 'react';

interface SmartCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  gradient?: 'gulf' | 'success' | 'warning' | 'danger' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  onClick?: () => void;
}

export default function SmartCard({
  children,
  className = '',
  hover = true,
  glow = false,
  gradient,
  size = 'md',
  interactive = false,
  onClick,
}: SmartCardProps) {
  const baseClasses = "relative overflow-hidden transition-all duration-400 ease-out-expo";
  
  const sizeClasses = {
    sm: "p-4 rounded-lg",
    md: "p-6 rounded-xl",
    lg: "p-8 rounded-2xl",
  };

  const gradientClasses = {
    gulf: "bg-gradient-gulf text-white",
    success: "bg-gradient-success text-white",
    warning: "bg-gradient-warning text-white",
    danger: "bg-gradient-danger text-white",
    glass: "bg-gradient-glass backdrop-blur-lg border border-white/20",
  };

  const hoverClasses = hover
    ? "hover:scale-[1.02] hover:shadow-xl-colored hover:-translate-y-1"
    : "";

  const glowClasses = glow
    ? "animate-glow"
    : "";

  const interactiveClasses = interactive
    ? "cursor-pointer active:scale-[0.98]"
    : "";

  const shadowClasses = gradient 
    ? {
        gulf: "shadow-gulf",
        success: "shadow-emerald-500/25",
        warning: "shadow-gold",
        danger: "shadow-crimson-500/25",
        glass: "shadow-glass",
      }[gradient]
    : "shadow-lg";

  const combinedClasses = [
    baseClasses,
    sizeClasses[size],
    gradient ? gradientClasses[gradient] : "bg-white",
    shadowClasses,
    hoverClasses,
    glowClasses,
    interactiveClasses,
    className,
  ].join(' ');

  return (
    <div className={combinedClasses} onClick={onClick}>
      {/* خلفية متحركة للبطاقات التفاعلية */}
      {interactive && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      )}
      
      {/* محتوى البطاقة */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* إضاءة ناعمة في الخلفية */}
      {glow && (
        <div className="absolute inset-0 bg-gradient-radial from-gulf-400/20 via-transparent to-transparent blur-xl" />
      )}
    </div>
  );
}