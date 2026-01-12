import { Layout } from "@/components/Layout";
import { useStore } from "@/contexts/StoreContext";
import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function WholesaleCatalog() {
  const { products } = useStore();
  const wholesaleProducts = products.filter(p => p.wholesaleAvailable);

  return (
    <Layout>
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-serif font-bold mb-4">Wholesale Catalog</h1>
            <p className="max-w-2xl mx-auto opacity-90">
                Browse our exclusive wholesale collection. Prices are hidden for retail protection.
                Select items to request a custom quote.
            </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {wholesaleProducts.map((product) => (
            <ProductCard key={product.id} product={product} hidePrice={true} />
          ))}
        </div>
        
        <div className="mt-16 text-center border-t border-border pt-12">
            <h2 className="text-2xl font-serif mb-4">Ready to Order?</h2>
            <Link href="/wholesale/request-quote">
                <Button size="lg" className="rounded-none px-8">
                    Proceed to Quote Request
                </Button>
            </Link>
        </div>
      </div>
    </Layout>
  );
}
