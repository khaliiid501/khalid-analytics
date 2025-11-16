import { TrendingUp, TrendingDown } from 'lucide-react';

interface SectorCardProps {
  sector: {
    name: string;
    change: number;
    companies: number;
  };
  index: number;
}

export default function SectorCard({ sector, index }: SectorCardProps) {
  const isPositive = sector.change >= 0;
  const changeColor = isPositive ? 'text-emerald-600' : 'text-crimson-600';
  const gradientColor = isPositive ? 'from-emerald-500/10 to-emerald-600/10' : 'from-crimson-500/10 to-crimson-600/10';
  const borderColor = isPositive ? 'border-emerald-200' : 'border-crimson-200';

  return (
    <div className={`group relative overflow-hidden rounded-xl border ${borderColor} bg-gradient-to-br ${gradientColor} p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1`}>
      {/* خلفية متحركة */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      
      <div className="relative z-10 flex items-center justify-between">
        <div className="space-y-2">
          <h4 className="font-bold text-neutral-900 group-hover:text-gulf-700 transition-colors duration-300">
            {sector.name}
          </h4>
          <p className="text-sm text-neutral-600">
            {sector.companies} شركة
          </p>
        </div>
        
        <div className={`flex items-center space-x-2 space-x-reverse ${changeColor}`}>
          {isPositive ? (
            <TrendingUp className="h-5 w-5 group-hover:animate-bounce" />
          ) : (
            <TrendingDown className="h-5 w-5 group-hover:animate-bounce" />
          )}
          <span className="text-lg font-bold">
            {isPositive ? '+' : ''}{sector.change}%
          </span>
        </div>
      </div>
      
      {/* شريط تقدم في الأسفل */}
      <div className="mt-4 h-2 bg-neutral-200 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-1000 ease-out-expo ${
            isPositive ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' : 'bg-gradient-to-r from-crimson-400 to-crimson-600'
          }`}
          style={{ 
            width: `${Math.min(Math.abs(sector.change) * 15, 100)}%`,
          }}
        />
      </div>
    </div>
  );
}