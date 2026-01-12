import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import silkTexture from "@/assets/silk-texture.jpeg";

export function AbayaOfWeek() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 relative aspect-square md:aspect-[4/5] bg-secondary/20">
                 <img 
                    src={silkTexture} 
                    alt="Abaya of the Week" 
                    className="w-full h-full object-cover p-8 md:p-12 mix-blend-multiply" 
                />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Featured Product</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Abaya of the Week</h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
                    Discover the "Royal Velvet Cape", our editors' pick for this season. Hand-embroidered details on premium velvet fabric, perfect for evening elegance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Link href="/product/p11">
                        <Button size="lg" className="rounded-none px-8 py-6 uppercase tracking-widest">
                            Shop This Look
                        </Button>
                    </Link>
                    <Link href="/collections/abayas">
                         <Button size="lg" variant="outline" className="rounded-none px-8 py-6 uppercase tracking-widest">
                            View More
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
