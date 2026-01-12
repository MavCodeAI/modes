import { Layout } from "@/components/Layout";
import { useRoute, Link } from "wouter";
import { useStore } from "@/contexts/StoreContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function WholesaleProduct() {
  const [, params] = useRoute("/wholesale/product/:id");
  const { products } = useStore();
  
  const product = products.find(p => p.id === params?.id);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-2xl font-bold">Product Not Found</h1>
            <Link href="/wholesale/catalog">
                <Button variant="link">Back to Catalog</Button>
            </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Link href="/wholesale/catalog">
            <Button variant="ghost" className="mb-6 pl-0 hover:pl-2 transition-all">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Catalog
            </Button>
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image */}
            <div className="aspect-[3/4] bg-secondary/10 overflow-hidden">
                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
            </div>

            {/* Info */}
            <div>
                <Badge variant="outline" className="mb-4 rounded-none uppercase tracking-widest text-xs">
                    Wholesale Item
                </Badge>
                <h1 className="text-4xl font-serif font-bold mb-4">{product.name}</h1>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                    {product.description}
                </p>

                <div className="space-y-6 border-t border-b border-border py-8 mb-8">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <span className="block text-sm text-muted-foreground uppercase tracking-widest mb-1">Category</span>
                            <span className="font-medium">{product.category}</span>
                        </div>
                        <div>
                            <span className="block text-sm text-muted-foreground uppercase tracking-widest mb-1">MOQ</span>
                            <span className="font-medium">{product.moq || 10} Pieces</span>
                        </div>
                        <div>
                             <span className="block text-sm text-muted-foreground uppercase tracking-widest mb-1">Available Sizes</span>
                             <span className="font-medium">{product.sizes.join(", ")}</span>
                        </div>
                         <div>
                             <span className="block text-sm text-muted-foreground uppercase tracking-widest mb-1">Colors</span>
                             <span className="font-medium">{product.colors?.join(", ") || "Standard"}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-primary/5 p-6 rounded-sm mb-8">
                    <h3 className="font-bold flex items-center mb-2">
                        <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                        Bulk Pricing Available
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        Request a quote to get our tiered pricing sheet. Discounts available for orders over 100 units.
                    </p>
                </div>

                <Link href="/wholesale/request-quote">
                    <Button size="lg" className="w-full rounded-none h-14 uppercase tracking-widest">
                        Request Quote for this Item
                    </Button>
                </Link>
            </div>
        </div>
      </div>
    </Layout>
  );
}
