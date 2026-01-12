import { Layout } from "@/components/Layout";
import { useRoute } from "wouter";
import { useStore } from "@/contexts/StoreContext";
import { ProductCard } from "@/components/shop/ProductCard";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SlidersHorizontal } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { allSizes } from "@/data/seed";
import type { Product } from "@/lib/types";

type SortOption = "featured" | "price-low" | "price-high" | "name-asc" | "name-desc";


export default function Collection() {
  const [, params] = useRoute("/collections/:slug");
  const { products } = useStore();
  const slug = params?.slug;
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const filteredProducts = useMemo(() => {
    if (!slug) return [];
    
    let filtered: Product[] = [];
    switch(slug) {
        case 'abayas': 
          filtered = products.filter(p => p.category === 'Abayas');
          break;
        case 'printed-abayas': 
          filtered = products.filter(p => p.category === 'Printed Abayas');
          break;
        case 'coord-sets': 
          filtered = products.filter(p => p.category === 'Co-ord Sets');
          break;
        case 'kaftans': 
          filtered = products.filter(p => p.category === 'Kaftans');
          break;
        case 'sale': 
          filtered = products.filter(p => p.compareAt && p.compareAt > p.price);
          break;
        default: 
          filtered = [];
    }

    // Apply price filter
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Apply size filter
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(p => 
        p.sizes?.some(size => selectedSizes.includes(size))
      );
    }

    // Apply sorting
    switch(sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price);
      case 'name-asc':
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return filtered.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return filtered;
    }
  }, [slug, products, sortBy, priceRange, selectedSizes]);
  const title = slug ? slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Collection';

  return (
    <Layout>
      <div className="bg-secondary/10 py-12 mb-8">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-serif font-bold mb-2">{title}</h1>
            <p className="text-muted-foreground">
                {filteredProducts.length} Products Found
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="p-6 space-y-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="price">
                      <AccordionTrigger>Price Range</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          <Slider
                            value={priceRange}
                            onValueChange={(range: number[]) => setPriceRange([range[0], range[1]])}
                            max={1000}
                            step={10}
                            className="w-full"
                          />
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span>AED {priceRange[0]}</span>
                            <span>AED {priceRange[1]}</span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="sizes">
                      <AccordionTrigger>Sizes</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {allSizes.map((size) => (
                            <div key={size} className="flex items-center space-x-2">
                              <Checkbox
                                id={size}
                                checked={selectedSizes.includes(size)}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    setSelectedSizes([...selectedSizes, size]);
                                  } else {
                                    setSelectedSizes(selectedSizes.filter(s => s !== size));
                                  }
                                }}
                              />
                              <Label htmlFor={size}>{size}</Label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort:</span>
            <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="name-asc">Name: A-Z</SelectItem>
                <SelectItem value="name-desc">Name: Z-A</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        ) : (
            <div className="text-center py-20">
                <p className="text-lg text-muted-foreground">No products found in this collection.</p>
            </div>
        )}
      </div>
    </Layout>
  );
}
