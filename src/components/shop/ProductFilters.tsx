import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { categories, allColors, allSizes } from "@/data/seed";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FilterProps {
  selectedCategory: string;
  setSelectedCategory: (c: string) => void;
  selectedColors: string[];
  toggleColor: (c: string) => void;
  priceRange: number[];
  setPriceRange: (r: number[]) => void;
}

export function ProductFilters({
  selectedCategory,
  setSelectedCategory,
  selectedColors,
  toggleColor,
  priceRange,
  setPriceRange,
}: FilterProps) {
  return (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-serif font-bold mb-3">Categories</h3>
        <RadioGroup value={selectedCategory} onValueChange={setSelectedCategory} className="space-y-2">
          {categories.map((cat) => (
            <div key={cat} className="flex items-center space-x-2">
              <RadioGroupItem value={cat} id={`cat-${cat}`} />
              <Label htmlFor={`cat-${cat}`} className="cursor-pointer font-light">{cat}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Colors */}
      <div>
        <h3 className="font-serif font-bold mb-3">Colors</h3>
        <div className="grid grid-cols-2 gap-2">
          {allColors.map((color) => (
            <div key={color} className="flex items-center space-x-2">
              <Checkbox 
                id={`color-${color}`} 
                checked={selectedColors.includes(color)}
                onCheckedChange={() => toggleColor(color)}
              />
              <Label htmlFor={`color-${color}`} className="cursor-pointer font-light">{color}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-serif font-bold mb-3">Price Range (AED)</h3>
        <Slider
          defaultValue={[0, 1000]}
          max={1000}
          step={50}
          value={priceRange}
          onValueChange={setPriceRange}
          className="my-6"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>AED {priceRange[0]}</span>
          <span>AED {priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
}
