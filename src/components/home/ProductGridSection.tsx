import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProductGridSectionProps {
  title: string;
  subtitle?: string; // Optional subtitle
  products: Product[];
  viewAllLink?: string;
}

export function ProductGridSection({ title, subtitle, products, viewAllLink }: ProductGridSectionProps) {
  const { dir } = useLanguage();
  const isRtl = dir === "rtl";

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">{title}</h2>
            {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
          </div>
          {viewAllLink && (
            <Link href={viewAllLink}>
              <Button variant="outline" className="hidden md:flex rounded-none mt-4 md:mt-0">
                View All <ArrowRight className={`ml-2 h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
              </Button>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {viewAllLink && (
          <div className="mt-10 md:hidden text-center">
            <Link href={viewAllLink}>
              <Button variant="outline" className="rounded-none w-full">
                View All <ArrowRight className={`ml-2 h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
