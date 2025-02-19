import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { PlanFeature } from "./PlanFeature";

interface PlanCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: Record<string, {
    available: boolean;
    limit: string;
    tooltip: string;
  }>;
  buttonText: string;
  buttonLink: string;
  highlighted: boolean;
  badge?: string;
}

export function PlanCard({
  name,
  price,
  period,
  description,
  features,
  buttonText,
  buttonLink,
  highlighted,
  badge
}: PlanCardProps) {
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
            ${badge === 'Popular' ? 'bg-[#40CEB5] text-white' : 'bg-secondary text-white'}
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

      <ul className="space-y-4 mb-8">
        {Object.entries(features).map(([feature, details]) => (
          <PlanFeature
            key={feature}
            feature={feature}
            details={details}
          />
        ))}
      </ul>

      <Button
        className={`
          w-full h-12 transition-all duration-300
          ${highlighted
            ? 'bg-[#40CEB5] hover:bg-[#40CEB5]/90 text-white'
            : 'bg-white border-2 border-[#40CEB5] text-[#40CEB5] hover:bg-[#40CEB5]/10'
          }
          font-medium rounded-lg hover:scale-105
        `}
        onClick={() => window.location.href = buttonLink}
        disabled={buttonText === 'Próximamente'}
      >
        {buttonText}
      </Button>
    </div>
  );
} 