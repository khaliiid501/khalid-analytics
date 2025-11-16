import { TrendingUp, TrendingDown } from 'lucide-react';
import SmartCard from './SmartCard';

interface MarketIndicatorProps {
  title: string;
  value: string;
  change: number;
  changePercent: number;
  icon?: React.ReactNode;
  color?: 'gulf' | 'success' | 'warning' | 'danger';
}

export default function MarketIndicator({
  title,
  value,
  change,
  changePercent,
  icon,
  color = 'gulf'
}: MarketIndicatorProps) {
  const isPositive = change >= 0;
  const changeColor = isPositive ? 'text-emerald-500' : 'text-crimson-500';
  const bgColor = isPositive ? 'bg-emerald-50' : 'bg-crimson-50';
  
  return (
    <SmartCard hover interactive className="group">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3 space-x-reverse">
          {icon && (
            <div className={`p-3 rounded-lg ${bgColor} transition-colors duration-300 group-hover:scale-110`}>
              {icon}
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold text-neutral-800 group-hover:text-gulf-600 transition-colors duration-300">
              {title}
            </h3>
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="text-3xl font-bold text-neutral-900 group-hover:text-gulf-700 transition-colors duration-300">
          {value}
        </div>
        
        <div className={`flex items-center space-x-2 space-x-reverse ${changeColor}`}>
          {isPositive ? (
            <TrendingUp className="h-4 w-4 animate-bounce" />
          ) : (
            <TrendingDown className="h-4 w-4 animate-bounce" />
          )}
          <span className="text-sm font-medium">
            {isPositive ? '+' : ''}{change.toFixed(2)} ({changePercent >= 0 ? '+' : ''}{changePercent.toFixed(2)}%)
          </span>
        </div>
      </div>
      
      {/* شريط تقدم متحرك */}
      <div className="mt-4 h-1 bg-neutral-200 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-1000 ease-out-expo ${
            isPositive ? 'bg-gradient-success' : 'bg-gradient-danger'
          }`}
          style={{ 
            width: `${Math.min(Math.abs(changePercent) * 10, 100)}%`,
            transform: `translateX(${isPositive ? '0' : 'auto'})`,
          }}
        />
      </div>
    </SmartCard>
  );
}