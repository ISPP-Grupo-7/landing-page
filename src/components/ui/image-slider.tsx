import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Crown } from "lucide-react";
import { Button } from "./button";
import { GalleryImage } from "@/types/explore";

interface ImageSliderProps {
  images: GalleryImage[];
  initialIndex: number;
  onClose: () => void;
}

export function ImageSlider({ images, initialIndex, onClose }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTranslateX(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setTranslateX(0);
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX - translateX);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const newTranslateX = clientX - startX;
    setTranslateX(newTranslateX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = window.innerWidth * 0.2;
    if (Math.abs(translateX) > threshold) {
      if (translateX > 0) {
        handlePrevious();
      } else {
        handleNext();
      }
    }
    setTranslateX(0);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const currentImage = images[currentIndex];
  const formattedDate = new Date(currentImage.date).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-6xl mx-4">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-white z-10 hover:bg-white/20"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </Button>

        {/* Author Info - Top */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-3 text-white">
          <img
            src={currentImage.authorAvatar}
            alt={currentImage.author}
            className="w-10 h-10 rounded-full border-2 border-white/20"
          />
          <div>
            <div className="flex items-center gap-2">
              <p className="font-medium">{currentImage.author}</p>
              {currentImage.isPremium && (
                <Crown className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              )}
            </div>
            <p className="text-sm text-white/80">{formattedDate}</p>
          </div>
        </div>

        <div 
          ref={containerRef}
          className="relative aspect-video overflow-hidden touch-none select-none"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(${translateX}px)`,
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
          >
            <img
              src={currentImage.url}
              alt={`Imagen ${currentIndex + 1}`}
              className="w-full h-full object-contain"
              draggable="false"
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={handlePrevious}
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={handleNext}
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          {/* Image Description - Bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            {currentImage.description && (
              <p className="text-white/90 mb-4">{currentImage.description}</p>
            )}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-white scale-125" : "bg-white/50"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
              <p className="text-white/80">
                {currentIndex + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 