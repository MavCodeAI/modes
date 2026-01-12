import { cn } from "@/lib/utils";
import { Link } from "wouter";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export function Logo({ className, variant = "dark" }: LogoProps) {
  return (
    <Link href="/">
      <div className={cn("flex flex-col items-start cursor-pointer group", className)}>
        <span
          className={cn(
            "font-serif text-2xl font-bold tracking-tighter leading-none transition-colors",
            variant === "light" ? "text-foreground" : "text-primary"
          )}
        >
          Modest Way
        </span>
        <span
          className={cn(
            "text-[0.65rem] uppercase tracking-[0.2em] font-medium ml-0.5",
            variant === "light" ? "text-foreground/80" : "text-primary/80"
          )}
        >
          Fashion
        </span>
      </div>
    </Link>
  );
}
