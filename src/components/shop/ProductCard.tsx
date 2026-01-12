import type { Product } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { FileText, Plus, Heart, Eye } from "lucide-react";
import { useStore } from "@/contexts/StoreContext";
import { Link } from "wouter";
import { useState } from "react";
import { QuickViewModal } from "./QuickViewModal";

interface ProductCardProps {
  product: Product;
  hidePrice?: boolean;
}

export function ProductCard({ product, hidePrice = false }: ProductCardProps) {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useStore();
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const inWishlist = isInWishlist(product.id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickViewOpen(true);
  };

  return (
    <Card className="group border-none shadow-none bg-transparent overflow-hidden h-full flex flex-col relative">
      <Link href={hidePrice ? `/wholesale/product/${product.id}` : `/product/${product.id}`}>
        <div className="cursor-pointer block">
          {/* Ratio 4:5 = 0.8 */}
          <CardContent className="p-0 relative aspect-4/5 overflow-hidden">
            <OptimizedImage
              src={product.images[0]}
              alt={product.name}
              className="transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
            />
            
            {/* Minimal Tags */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.tags.includes("new_drop") && (
                <Badge className="bg-white/90 text-black hover:bg-white font-medium uppercase tracking-widest text-[10px] rounded-sm px-2 py-1 border-none shadow-sm backdrop-blur-sm">
                  New
                </Badge>
              )}
              {product.compareAt && !hidePrice && (
                 <Badge className="bg-primary/90 text-white hover:bg-primary font-medium uppercase tracking-widest text-[10px] rounded-sm px-2 py-1 border-none shadow-sm backdrop-blur-sm">
                   Sale
                 </Badge>
              )}
            </div>
            
            {/* Wishlist Button */}
            <button
              onClick={handleWishlistClick}
              className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-110"
            >
              <Heart 
                className={`h-4 w-4 transition-colors ${inWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
              />
            </button>
            
            {/* Quick Add Overlay - Appears on Hover */}
            <div className="absolute inset-x-0 bottom-4 px-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
               {!hidePrice ? (
                 <Button 
                   className="w-full bg-white/95 text-black border border-transparent hover:border-primary hover:text-primary hover:bg-white font-medium uppercase tracking-widest text-[11px] h-10 shadow-lg"
                   onClick={(e) => {
                     e.preventDefault();
                     addToCart(product, product.sizes[0]);
                   }}
                 >
                   <FileText className="h-3 w-3 mr-2" /> Request Quote
                 </Button>
               ) : (
                 <>
                   <Button 
                     className="w-full bg-white/95 text-black border border-transparent hover:border-primary hover:text-primary hover:bg-white font-medium uppercase tracking-widest text-[11px] h-10 shadow-lg mb-2"
                     onClick={(e) => {
                       e.preventDefault();
                       addToCart(product, product.sizes[0]);
                     }}
                   >
                     <Plus className="h-3 w-3 mr-2" /> Quick Add
                   </Button>
                   <Button 
                     variant="outline"
                     className="w-full bg-white/95 text-black border border-gray-200 hover:border-primary hover:text-primary hover:bg-white font-medium uppercase tracking-widest text-[11px] h-10 shadow-lg"
                     onClick={handleQuickView}
                   >
                     <Eye className="h-3 w-3 mr-2" /> Quick View
                   </Button>
                 </>
               )}
            </div>
          </CardContent>
        </div>
      </Link>
      
      {/* Quick View Modal */}
      <QuickViewModal 
        isOpen={quickViewOpen} 
        onClose={() => setQuickViewOpen(false)} 
        product={product} 
      />
      
      {/* Editorial Style Info */}
      <div className="pt-4 pb-2 flex flex-col items-center text-center gap-1">
        <Link href={hidePrice ? `/wholesale/product/${product.id}` : `/product/${product.id}`}>
           <h3 className="font-serif text-[16px] text-foreground/90 hover:text-primary transition-colors cursor-pointer leading-snug">
            {product.name}
          </h3>
        </Link>
        {!hidePrice && (
          <div className="flex items-center gap-3">
             <span className="font-sans font-semibold text-[14px] text-foreground">AED {product.price}</span>
             {product.compareAt && (
               <span className="font-sans text-[12px] text-muted-foreground/60 line-through decoration-1">AED {product.compareAt}</span>
             )}
          </div>
        )}
        {hidePrice && (
           <span className="text-[11px] text-muted-foreground/60 uppercase tracking-widest mt-1">
              Min Order: {product.moq || "Negotiable"}
           </span>
        )}
      </div>
    </Card>
  );
}
