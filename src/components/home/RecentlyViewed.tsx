import { useStore } from "@/contexts/StoreContext";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { Link } from "wouter";
import { Clock } from "lucide-react";

export function RecentlyViewed() {
  const { getRecentlyViewed } = useStore();
  const recentlyViewed = getRecentlyViewed();

  if (recentlyViewed.length === 0) {
    return null;
  }

  return (
    <div className="bg-secondary py-16">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <Clock className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-serif">Recently Viewed</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {recentlyViewed.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group block"
            >
              <div className="relative aspect-3/4 overflow-hidden rounded-md">
                <OptimizedImage
                  src={product.images[0]}
                  alt={product.name}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="mt-3">
                <h3 className="text-sm font-medium text-foreground/90 group-hover:text-primary transition-colors line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm font-semibold">AED {product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
