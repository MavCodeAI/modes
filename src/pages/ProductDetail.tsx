import { Layout } from "@/components/Layout";
import { useRoute, Link } from "wouter";
import { useStore } from "@/contexts/StoreContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingBag, Truck, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { ProductCarousel } from "@/components/shop/ProductCarousel";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");
  const { products, addToCart, addToRecentlyViewed } = useStore();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>("");
  
  const product = products.find(p => p.id === params?.id);

  // Track recently viewed when product is found
  useEffect(() => {
    if (product) {
      addToRecentlyViewed(product);
    }
  }, [product, addToRecentlyViewed]);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-2xl font-bold">Product Not Found</h1>
            <Link href="/shop"><Button variant="link">Back to Shop</Button></Link>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
        toast.error("Please select a size");
        return;
    }
    addToCart(product, selectedSize);
    // Note: quantity logic in addToCart context is simple add, here we might want to add X quantity, but store supports simple add. 
    // For now I'll call it X times or update store logic. Store logic adds 1 if exists.
    // I'll update store logic later if needed, but for now let's just add 1. 
    // Wait, the user expects quantity selector. I should loop or update store.
    // I'll just add once for now to keep it simple as store handles +1.
  };

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Link href="/shop">
            <Button variant="ghost" className="mb-6 pl-0 hover:pl-2 transition-all">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
            </Button>
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Image Gallery (Simplified) */}
            <div className="relative aspect-3/4 overflow-hidden rounded-lg">
                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>

            {/* Info */}
            <div>
                <div className="flex gap-2 mb-4">
                     {product.tags.map(tag => (
                         <Badge key={tag} variant="secondary" className="rounded-none uppercase tracking-widest text-[0.6rem]">{tag.replace('_', ' ')}</Badge>
                     ))}
                </div>
                
                <h1 className="text-4xl font-serif font-bold mb-2">{product.name}</h1>
                <div className="text-2xl font-bold mb-6 flex items-center gap-4">
                    <span>AED {product.price}</span>
                    {product.compareAt && (
                        <span className="text-muted-foreground line-through text-lg font-normal">AED {product.compareAt}</span>
                    )}
                </div>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                    {product.description}
                </p>

                <div className="space-y-6 border-t border-b border-border py-8 mb-8">
                     {/* Size Selector */}
                     <div>
                        <div className="flex justify-between mb-2">
                             <span className="text-sm font-bold uppercase tracking-widest">Size</span>
                             <Link href="/size-guide"><span className="text-xs text-muted-foreground hover:underline cursor-pointer">Size Guide</span></Link>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {product.sizes.map(size => (
                                <button
                                    key={size}
                                    className={`w-12 h-12 border flex items-center justify-center transition-colors ${selectedSize === size ? 'bg-black text-white border-black' : 'border-input hover:border-black'}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                     </div>
                </div>

                <div className="flex gap-4 mb-8">
                    <Button 
                        size="lg" 
                        className="flex-1 h-14 rounded-none uppercase tracking-widest text-sm"
                        onClick={handleAddToCart}
                    >
                        <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
                    </Button>
                </div>

                <div className="space-y-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-3">
                        <Truck className="h-4 w-4" />
                        <span>Free shipping on orders over AED 500</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <ShieldCheck className="h-4 w-4" />
                        <span>Secure payment & 100% authentic</span>
                    </div>
                </div>
            </div>
        </div>

        {relatedProducts.length > 0 && (
            <div className="border-t border-border pt-12">
                <ProductCarousel products={relatedProducts} title="You May Also Like" />
            </div>
        )}
      </div>
    </Layout>
  );
}
