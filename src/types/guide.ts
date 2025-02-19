import { LucideIcon } from "lucide-react";

export interface GuideSection {
  id: string;
  title: string;
  icon: LucideIcon;
  content: {
    title: string;
    description: string;
  }[];
} 