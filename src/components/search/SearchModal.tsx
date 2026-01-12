import { useState, useMemo } from "react";
import { useStore } from "@/contexts/StoreContext";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Search, X } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const { products } = useStore();

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return products.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.description?.toLowerCase().includes(query) ||
      product.colors?.some(color => color.toLowerCase().includes(query)) ||
      product.tags.some(tag => tag.toLowerCase().includes(query))
    ).slice(0, 8);
  }, [products, searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl bg-background border border-border rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search products, colors, categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-none focus-visible:ring-0 text-lg placeholder:text-muted-foreground/60"
              autoFocus
            />
            <button
              onClick={onClose}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              <X className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {searchQuery && filteredProducts.length > 0 ? (
            <div className="p-2">
              <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground px-3 py-2">
                Products ({filteredProducts.length})
              </div>
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  onClick={onClose}
                  className="block p-3 hover:bg-secondary/50 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-16 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm text-foreground truncate">
                        {product.name}
                      </h4>
                      <p className="text-xs text-muted-foreground capitalize mb-2">
                        {product.category}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm">AED {product.price}</span>
                        {product.tags.includes("new_drop") && (
                          <Badge variant="secondary" className="text-[10px] px-1.5 py-0.5">
                            New
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : searchQuery ? (
            <div className="p-8 text-center">
              <Search className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">No products found for "{searchQuery}"</p>
            </div>
          ) : (
            <div className="p-6">
              <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
                Popular Searches
              </div>
              <div className="flex flex-wrap gap-2">
                {["Abaya", "Black", "Kaftan", "New Arrivals", "Sale"].map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchQuery(term)}
                    className="px-3 py-1.5 bg-secondary/50 hover:bg-secondary text-sm rounded-full transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
