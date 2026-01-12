import { Truck, Clock, MapPin } from "lucide-react";

export function ExpressStrip() {
  return (
    <div className="bg-secondary py-4 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-sm text-muted-foreground uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Dispatch from Dubai, UAE</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="h-4 w-4" />
            <span>Express Worldwide Shipping</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>24/7 Customer Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}
