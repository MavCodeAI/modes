import { Layout } from "@/components/Layout";
import { useStore } from "@/contexts/StoreContext";
import { Button } from "@/components/ui/button";
import { Trash, Minus, Plus, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Cart() {
  const { cart, removeFromCart, updateCartQuantity } = useStore();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-serif mb-6">Your Cart is Empty</h1>
            <Link href="/shop">
                <Button size="lg" className="rounded-none">Continue Shopping</Button>
            </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold mb-12">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
            {/* Cart Items */}
            <div className="flex-1 space-y-8">
                <div className="hidden md:grid grid-cols-12 gap-4 border-b border-border pb-4 text-sm text-muted-foreground uppercase tracking-wider">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-2 text-center">Price</div>
                    <div className="col-span-2 text-center">Quantity</div>
                    <div className="col-span-2 text-right">Total</div>
                </div>

                {cart.map((item) => (
                    <div key={`${item.id}-${item.selectedSize}`} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-border pb-6">
                        <div className="col-span-6 flex gap-4">
                            <div className="h-32 w-24 bg-secondary/10 overflow-hidden shrink-0">
                                <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="font-serif font-medium text-lg">{item.name}</h3>
                                <p className="text-muted-foreground text-sm mt-1">Size: {item.selectedSize}</p>
                                <button 
                                    className="text-xs text-destructive mt-4 flex items-center hover:underline"
                                    onClick={() => removeFromCart(item.id, item.selectedSize)}
                                >
                                    <Trash className="h-3 w-3 mr-1" /> Remove
                                </button>
                            </div>
                        </div>
                        <div className="col-span-2 text-center font-medium">
                            AED {item.price}
                        </div>
                        <div className="col-span-2 flex justify-center">
                            <div className="flex items-center border border-border">
                                <button 
                                    className="p-2 hover:bg-secondary"
                                    onClick={() => updateCartQuantity(item.id, item.selectedSize, item.quantity - 1)}
                                >
                                    <Minus className="h-4 w-4" />
                                </button>
                                <span className="px-4 w-12 text-center">{item.quantity}</span>
                                <button 
                                    className="p-2 hover:bg-secondary"
                                    onClick={() => updateCartQuantity(item.id, item.selectedSize, item.quantity + 1)}
                                >
                                    <Plus className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                        <div className="col-span-2 text-right font-bold">
                            AED {item.price * item.quantity}
                        </div>
                    </div>
                ))}
            </div>

            {/* Summary */}
            <div className="w-full lg:w-96 shrink-0">
                <div className="bg-secondary/10 p-8">
                    <h2 className="text-xl font-serif font-bold mb-6">Order Summary</h2>
                    <div className="space-y-4 mb-6">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>AED {total}</span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                            <span>Shipping</span>
                            <span>Calculated at checkout</span>
                        </div>
                    </div>
                    <div className="flex justify-between text-xl font-bold border-t border-border pt-6 mb-8">
                        <span>Total</span>
                        <span>AED {total}</span>
                    </div>
                    <Link href="/checkout">
                        <Button className="w-full h-14 text-lg rounded-none uppercase tracking-widest">
                            Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
}
