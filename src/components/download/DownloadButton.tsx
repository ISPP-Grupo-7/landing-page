import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface DownloadButtonProps {
  icon: LucideIcon;
  storeName: string;
  storeDescription: string;
  url: string;
}

export function DownloadButton({ icon: Icon, storeName, storeDescription, url }: DownloadButtonProps) {
  return (
    <div className="flex flex-col items-end">
      <span className="mb-1 text-[10px] font-bold text-red-500">Próximamente</span>
      <Button
        className="h-16 px-8 bg-black hover:bg-black/90 text-white flex items-center gap-3"
        onClick={() => window.open(url, '_blank')}
      >
        <Icon className="w-8 h-8" />
        <div className="text-left">
          <div className="text-xs">{storeDescription}</div>
          <div className="text-xl font-semibold">{storeName}</div>
        </div>
      </Button>
    </div>
  );
} 