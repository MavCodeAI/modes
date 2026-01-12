import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function LoadingSpinner({ className, size = "md" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6", 
    lg: "h-8 w-8"
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-primary/20 border-t-primary",
        sizeClasses[size],
        className
      )}
      role="status"
      aria-label="Loading..."
    />
  );
}

interface SkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

export function Skeleton({ className, children }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse bg-secondary rounded-md",
        className
      )}
    >
      {children}
    </div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="border-none shadow-none bg-transparent overflow-hidden h-full flex flex-col">
      <div className="relative aspect-4/5 overflow-hidden">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="pt-4 pb-2 flex flex-col items-center text-center gap-1">
        <Skeleton className="h-5 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}
