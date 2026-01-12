import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import type { Product } from "@/lib/types";
import { useStore } from "@/contexts/StoreContext";

interface ProductDialogProps {
  product?: Product;
  trigger?: React.ReactNode;
}

export function ProductDialog({ product, trigger }: ProductDialogProps) {
  const { addProduct, updateProduct } = useStore();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<Product>>(
    product || {
      name: "",
      price: 0,
      category: "Abayas",
      tags: ["new_drop"],
      images: ["/src/assets/silk-texture.jpeg"], // Default image
      description: "",
      sizes: ["52", "54", "56"],
      wholesaleAvailable: false,
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (product) {
        updateProduct({ ...product, ...formData } as Product);
    } else {
        addProduct({
            ...formData,
            id: Math.random().toString(36).substr(2, 9),
            images: formData.images || ["/src/assets/silk-texture.jpeg"],
            tags: formData.tags || [],
            sizes: formData.sizes || ["52", "54", "56"]
        } as Product);
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || <Button>Add Product</Button>}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{product ? "Edit Product" : "Add New Product"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label>Name</Label>
                    <Input 
                        value={formData.name} 
                        onChange={e => setFormData({...formData, name: e.target.value})} 
                        required 
                    />
                </div>
                <div className="space-y-2">
                    <Label>Price (AED)</Label>
                    <Input 
                        type="number"
                        value={formData.price} 
                        onChange={e => setFormData({...formData, price: Number(e.target.value)})} 
                        required 
                    />
                </div>
            </div>
            
            <div className="space-y-2">
                <Label>Category</Label>
                 <Input 
                    value={formData.category} 
                    onChange={e => setFormData({...formData, category: e.target.value})} 
                />
            </div>

            <div className="space-y-2">
                <Label>Tags (comma separated)</Label>
                <Input 
                    placeholder="new_drop, best_seller"
                    value={formData.tags?.join(", ")} 
                    onChange={e => setFormData({...formData, tags: e.target.value.split(",").map(t => t.trim())})} 
                />
            </div>

            <div className="space-y-2">
                <Label>Description</Label>
                <Textarea 
                    value={formData.description} 
                    onChange={e => setFormData({...formData, description: e.target.value})} 
                />
            </div>

            <div className="flex items-center space-x-2">
                <Checkbox 
                    id="wholesale" 
                    checked={formData.wholesaleAvailable}
                    onCheckedChange={(c) => setFormData({...formData, wholesaleAvailable: c as boolean})}
                />
                <Label htmlFor="wholesale">Available for Wholesale</Label>
            </div>

            <Button type="submit" className="w-full">{product ? "Update" : "Create"}</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
