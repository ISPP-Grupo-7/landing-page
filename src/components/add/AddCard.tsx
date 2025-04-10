import { Check, Sparkles, X } from "lucide-react";

interface AddCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: Record<string, {
    available: boolean;
    more: string;
  }>;
  highlighted: boolean;
  badge?: string;
}

export function AddCard({
  name,
  price,
  period,
  description,
  features,
  highlighted,
  badge
}: AddCardProps) {
  return (
    <div
      className={`
        glass-panel p-8 rounded-xl transition-all duration-300 relative
        hover:transform-gpu hover:scale-[1.02] hover:shadow-lg
        ${highlighted ? 'border-2 border-[#40CEB5]' : ''}
      `}
    >
      {badge && (
        <div className="absolute -top-3 -right-3">
          <span className={`
            px-3 py-1 rounded-full text-sm font-medium
            ${badge === 'Próximamente' ? 'bg-secondary text-white' : 'bg-[#40CEB5] text-white' }
          `}>
            {badge}
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
          {name}
          {highlighted && <Sparkles className="w-5 h-5 text-[#40CEB5]" />}
        </h3>
        <div className="text-4xl font-bold text-[#40CEB5] mb-2">
          {price}
          {period && <span className="text-lg text-gray-600">{period}</span>}
        </div>
        <p className="text-gray-600">{description}</p>
      </div>

      <ul className="space-y-4">
        {Object.entries(features).map(([feature, details]) => (
          <li className="flex items-center gap-3 group">
            {details.available ? (
              <Check className="w-5 h-5 text-[#40CEB5]" />
            ) : (
              <X className="w-5 h-5 text-red-500" />
            )}
            <span className="flex-1">{feature}</span>
            <span className="text-sm text-gray-500">{details.more}</span>
          </li>
        ))}
      </ul>
    </div>
  );
} 