import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Trash, Minus, Plus } from "lucide-react";
import { useStore } from "@/contexts/StoreContext";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export function CartDrawer() {
  const { cart, removeFromCart, updateCartQuantity } = useStore();
  
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-accent/10 relative">
          <ShoppingBag className="h-5 w-5" />
          {itemCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-destructive text-destructive-foreground text-[0.6rem] rounded-full border-2 border-background">
              {itemCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-serif text-2xl">Shopping Cart ({itemCount})</SheetTitle>
        </SheetHeader>
        
        <ScrollArea className="flex-1 -mx-6 px-6 my-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[50vh] text-center space-y-4">
              <ShoppingBag className="h-12 w-12 text-muted-foreground/50" />
              <p className="text-muted-foreground">Your cart is empty</p>
              <Link href="/shop">
                <Button variant="outline">Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4">
                  <div className="h-24 w-20 bg-secondary/10 overflow-hidden rounded-sm shrink-0">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif font-medium line-clamp-1">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">Size: {item.selectedSize}</p>
                      <p className="text-sm font-bold mt-1">AED {item.price}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                       <div className="flex items-center border border-border rounded-sm">
                          <button 
                            className="p-1 hover:bg-secondary"
                            onClick={() => updateCartQuantity(item.id, item.selectedSize, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-xs px-2 w-6 text-center">{item.quantity}</span>
                          <button 
                             className="p-1 hover:bg-secondary"
                             onClick={() => updateCartQuantity(item.id, item.selectedSize, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                       </div>
                       <button 
                          onClick={() => removeFromCart(item.id, item.selectedSize)}
                          className="text-muted-foreground hover:text-destructive"
                       >
                         <Trash className="h-4 w-4" />
                       </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        {cart.length > 0 && (
          <div className="space-y-4 pt-4">
            <Separator />
            <div className="flex justify-between text-lg font-bold font-serif">
              <span>Subtotal</span>
              <span>AED {total}</span>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Shipping & taxes calculated at checkout
            </p>
            <Link href="/checkout">
              <Button className="w-full rounded-none h-12 text-md uppercase tracking-widest">
                Checkout
              </Button>
            </Link>
             <Link href="/cart">
              <Button variant="outline" className="w-full rounded-none">
                View Full Cart
              </Button>
            </Link>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
