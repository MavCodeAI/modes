import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroBanner from "@/assets/hero-banner.jpeg";
import { useStore } from "@/contexts/StoreContext";
import { ProductGridSection } from "@/components/home/ProductGridSection";
import { PromoTiles } from "@/components/home/PromoTiles";
import { Testimonials } from "@/components/home/Testimonials";
import { EditorialBanner } from "@/components/home/EditorialBanner";
import { AbayaOfWeek } from "@/components/home/AbayaOfWeek";
import { WholesaleStrip } from "@/components/home/WholesaleStrip";
import { RefreshCw, ShieldCheck, Truck } from "lucide-react";
import silkTexture from "@/assets/silk-texture.jpeg";
import wholesaleBg from "@/assets/wholesale-bg.jpeg";

export default function Home() {
  const { products } = useStore();
  
  const newDrops = products.filter(p => p.tags.includes("new_drop")).slice(0, 4);
  const weeklyDrop = products.filter(p => p.tags.includes("weekly_drop")).slice(0, 4);
  const bestSellers = products.filter(p => p.tags.includes("best_seller")).slice(0, 4);

  return (
    <Layout>
      {/* 1) HERO SECTION - Luxury Minimal */}
      {/* Adjusted height to account for sticky header */}
      <section className="relative min-h-[85vh] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroBanner} 
            alt="Luxury Abaya Collection" 
            className="w-full h-full object-cover"
          />
          {/* Soft Overlay Gradient for Readability */}
          <div className="absolute inset-0 bg-linear-to-r from-background/80 via-background/40 to-transparent" />
          <div className="bg-linear-to-b from-background/50 via-background/40 to-transparent h-32 pointer-events-none" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-2xl text-foreground">
            <h1 className="text-6xl md:text-8xl font-serif font-medium mb-6 leading-[0.95] tracking-tight text-white drop-shadow-sm">
              UAE-born.<br/>Culture-inspired.
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 font-light leading-relaxed max-w-lg drop-shadow-sm">
              Handcrafted abayas blending traditional heritage with contemporary luxury. Designed in Dubai for the modern woman.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/shop?sort=newest">
                <Button className="btn-primary">
                  Shop New Drops
                </Button>
              </Link>
              <Link href="/collections/abayas">
                <Button variant="outline" className="btn-secondary border-white text-white hover:bg-white hover:text-black hover:border-white">
                  Explore Collections
                </Button>
              </Link>
            </div>

            {/* Trust Row - Hero Footer */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs font-medium uppercase tracking-widest text-white/80">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-primary" /> Express Delivery
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4 text-primary" /> Easy Returns
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" /> Secure Checkout
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2) New Drops - Clean Background */}
      <ProductGridSection 
        title="New Drops" 
        subtitle="Be the first to wear our latest exclusive designs."
        products={newDrops} 
        viewAllLink="/shop?sort=newest" 
      />

      {/* 3) Promo Tiles - Surface Background */}
      <div className="bg-secondary">
        <PromoTiles />
      </div>

      {/* 4) Editorial Banner - Full Width */}
      <EditorialBanner />

      {/* 5) Weekly Drop - Clean Background */}
      <ProductGridSection 
        title="This Week’s Fashion Drop"
        subtitle="Curated picks for the season."
        products={weeklyDrop} 
        viewAllLink="/shop?tag=weekly_drop" 
      />

      {/* 6) Testimonials - Dark Strip */}
      <Testimonials />

      {/* 7) Favorite Collections - Surface Background */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Curated For You</span>
              <h2 className="text-4xl font-serif">Favorite Collections</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {['Abayas', 'Co-ord Sets', 'Kaftans'].map((col, i) => (
                    <Link key={col} href={`/collections/${col.toLowerCase().replace(' ', '-')}`}>
                        <div className="relative aspect-3/4 overflow-hidden rounded-lg">
                            <img 
                                src={i === 1 ? wholesaleBg : silkTexture} 
                                alt={col} 
                                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                            />
                             <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
                             <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                                 <h3 className="text-3xl font-serif mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{col}</h3>
                                 <span className="text-xs font-bold uppercase tracking-widest border-b border-white pb-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                   View Collection
                                 </span>
                             </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* 8) Best Sellers - Clean Background */}
      <ProductGridSection 
        title="Best Sellers" 
        products={bestSellers} 
        viewAllLink="/shop?tag=best_seller" 
      />

      {/* 9) Abaya of the Week - Featured */}
      <div className="bg-secondary">
        <AbayaOfWeek />
      </div>

      {/* 10) Wholesale Strip */}
      <WholesaleStrip />
      
    </Layout>
  );
}
