import { TrendingUp, TrendingDown } from 'lucide-react';

interface StockRowProps {
  stock: {
    symbol: string;
    name: string;
    price: number;
    change: number;
    changePercent: number;
  };
  index: number;
}

export default function StockRow({ stock, index }: StockRowProps) {
  const isPositive = stock.change >= 0;
  const changeColor = isPositive ? 'text-emerald-600' : 'text-crimson-600';
  const bgColor = isPositive ? 'bg-emerald-50' : 'bg-crimson-50';

  return (
    <tr className="group hover:bg-gradient-to-r from-gulf-50/50 to-transparent transition-all duration-300 border-b border-neutral-100">
      <td className="px-6 py-4">
        <div className="flex items-center space-x-3 space-x-reverse">
          <div className={`w-10 h-10 rounded-lg ${bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <span className="text-sm font-bold text-neutral-700">{stock.symbol.slice(0, 2)}</span>
          </div>
          <div>
            <div className="text-sm font-bold text-neutral-900 group-hover:text-gulf-700 transition-colors duration-300">
              {stock.symbol}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900 transition-colors duration-300">
          {stock.name}
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-lg font-bold text-neutral-900">
          {stock.price.toFixed(2)} ر.س
        </div>
      </td>
      <td className="px-6 py-4">
        <div className={`flex items-center space-x-2 space-x-reverse ${changeColor}`}>
          {isPositive ? (
            <TrendingUp className="h-4 w-4 animate-bounce" />
          ) : (
            <TrendingDown className="h-4 w-4 animate-bounce" />
          )}
          <span className="text-sm font-medium">
            {isPositive ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent >= 0 ? '+' : ''}{stock.changePercent}%)
          </span>
        </div>
      </td>
    </tr>
  );
}