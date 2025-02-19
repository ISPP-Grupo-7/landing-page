import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionNavigation } from "@/components/layout/navigation/SectionNavigation";

export interface ResourcePageProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}

export function ResourcePage({
  children,
  title,
  description,
  className,
}: ResourcePageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            {description && <p className="text-xl opacity-90">{description}</p>}
          </motion.div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-6">
          <SectionNavigation />
        </div>
        <div className={cn("max-w-4xl mx-auto py-8", className)}>
          {children}
        </div>
      </div>
    </div>
  );
} 