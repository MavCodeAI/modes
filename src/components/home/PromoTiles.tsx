import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import wholesaleBg from "@/assets/wholesale-bg.jpeg";
import silkTexture from "@/assets/silk-texture.jpeg";

export function PromoTiles() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[500px] md:h-[600px]">
          {/* Tile 1 */}
          <div className="relative group overflow-hidden h-full">
            <img 
              src={silkTexture} 
              alt="Printed Velvet Collection" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <div className="absolute bottom-8 left-8 text-white max-w-sm">
              <span className="text-xs uppercase tracking-widest mb-2 block">Limited Edition</span>
              <h3 className="text-3xl md:text-4xl font-serif mb-4 leading-tight">Printed Velvet Collection</h3>
              <Link href="/collections/printed-abayas">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-none">
                  Shop Collection
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Tile 2 */}
          <div className="relative group overflow-hidden h-full">
            <img 
              src={wholesaleBg} 
              alt="Everyday Timeless Casuals" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <div className="absolute bottom-8 left-8 text-white max-w-sm">
               <span className="text-xs uppercase tracking-widest mb-2 block">Essentials</span>
              <h3 className="text-3xl md:text-4xl font-serif mb-4 leading-tight">Everyday Timeless Casuals</h3>
              <Link href="/collections/daily-wear">
                 <span className="inline-flex items-center text-sm uppercase tracking-widest hover:underline decoration-1 underline-offset-4 cursor-pointer">
                    Discover More <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
