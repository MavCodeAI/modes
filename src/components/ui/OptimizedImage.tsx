import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fallbackSrc?: string;
}

export function OptimizedImage({ 
  src, 
  alt, 
  className, 
  width, 
  height,
  priority = false,
  fallbackSrc 
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate WebP version if possible
  const getWebPSrc = (originalSrc: string) => {
    if (originalSrc.includes('.webp')) return originalSrc;
    
    // For demo purposes, we'll assume WebP versions exist
    // In production, you'd have actual WebP conversions
    const webpSrc = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    return webpSrc;
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    if (!hasError && fallbackSrc) {
      setHasError(true);
    }
  };

  const currentSrc = hasError && fallbackSrc ? fallbackSrc : src;
  const webpSrc = getWebPSrc(currentSrc);

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative overflow-hidden bg-secondary/20",
        isLoaded ? "bg-transparent" : "animate-pulse",
        className
      )}
      style={{ 
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto',
        aspectRatio: width && height ? `${width}/${height}` : undefined
      }}
    >
      {isInView && (
        <picture>
          <source 
            srcSet={webpSrc} 
            type="image/webp"
          />
          <img
            ref={imgRef}
            src={currentSrc}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onLoad={handleLoad}
            onError={handleError}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-300",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
          />
        </picture>
      )}
      
      {/* Loading skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-linear-to-br from-secondary/30 to-secondary/10 animate-pulse" />
      )}
    </div>
  );
}
