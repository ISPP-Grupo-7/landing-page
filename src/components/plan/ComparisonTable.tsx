import { Check, X, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Plan {
  name: string;
  price: string;
  period?: string;
  features: Record<string, {
    available: boolean;
    limit: string;
    tooltip: string;
  }>;
}

interface ComparisonTableProps {
  plans: Plan[];
}

export function ComparisonTable({ plans }: ComparisonTableProps) {
  return (
    <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left py-4">Característica</th>
            {plans.map(plan => (
              <th key={plan.name} className="text-center py-4">
                <div className="font-bold text-xl mb-2">{plan.name}</div>
                <div className="text-[#40CEB5] font-bold">
                  {plan.price}
                  {plan.period}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(plans[0].features).map(feature => (
            <tr key={feature} className="border-t">
              <td className="py-4 flex items-center gap-2">
                {feature}
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="w-4 h-4 text-gray-400 hover:text-[#40CEB5] transition-colors" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{plans[0].features[feature].tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </td>
              {plans.map(plan => (
                <td key={`${plan.name}-${feature}`} className="text-center py-4">
                  {plan.features[feature] ? (
                    <div className="flex flex-col items-center gap-1">
                      {plan.features[feature].available ? (
                        <Check className="w-5 h-5 text-[#40CEB5]" />
                      ) : (
                        <X className="w-5 h-5 text-red-500" />
                      )}
                      <span className="text-sm text-gray-500">
                        {plan.features[feature].limit}
                      </span>
                    </div>
                  ) : (
                    <X className="w-5 h-5 text-red-500 mx-auto" />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 