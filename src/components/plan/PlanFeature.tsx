import { Check, X, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PlanFeatureProps {
  feature: string;
  details: {
    available: boolean;
    limit: string;
    tooltip: string;
  };
}

export function PlanFeature({ feature, details }: PlanFeatureProps) {
  return (
    <li className="flex items-center gap-3 group">
      {details.available ? (
        <Check className="w-5 h-5 text-[#0003ff]" />
      ) : (
        <X className="w-5 h-5 text-red-500" />
      )}
      <span className="flex-1">{feature}</span>
      <span className="text-sm text-gray-500">{details.limit}</span>
    </li>
  );
}