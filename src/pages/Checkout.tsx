import { Layout } from "@/components/Layout";
import { useStore } from "@/contexts/StoreContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";
import { toast } from "sonner";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function Checkout() {
  const { cart, clearCart } = useStore();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const [step, setStep] = useState(1);

  if (cart.length === 0 && step === 1) {
     return (
        <Layout>
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
                <Link href="/shop"><Button>Continue Shopping</Button></Link>
            </div>
        </Layout>
     )
  }

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    clearCart();
    toast.success("Order Placed Successfully!");
  };

  if (step === 2) {
      return (
        <Layout>
            <div className="container mx-auto px-4 py-20 text-center max-w-lg">
                <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
                <h1 className="text-4xl font-serif font-bold mb-4">Thank You!</h1>
                <p className="text-muted-foreground text-lg mb-8">
                    Your order has been placed successfully. You will receive an email confirmation shortly.
                </p>
                <div className="bg-secondary/20 p-6 rounded-sm mb-8">
                    <p className="font-bold">Order #{Math.floor(Math.random() * 100000)}</p>
                </div>
                <Link href="/">
                    <Button size="lg" className="rounded-none uppercase tracking-widest px-8">Return Home</Button>
                </Link>
            </div>
        </Layout>
      );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-serif font-bold mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                <form onSubmit={handlePlaceOrder} className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold border-b pb-2">Contact Information</h2>
                        <div className="space-y-2">
                            <Label>Email</Label>
                            <Input required type="email" placeholder="you@example.com" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold border-b pb-2">Shipping Address</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>First Name</Label>
                                <Input required />
                            </div>
                            <div className="space-y-2">
                                <Label>Last Name</Label>
                                <Input required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>Address</Label>
                            <Input required placeholder="Street address, P.O. Box" />
                        </div>
                        <div className="space-y-2">
                            <Label>Apartment, suite, etc.</Label>
                            <Input placeholder="Apartment, suite, unit, etc. (optional)" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>City</Label>
                                <Input required />
                            </div>
                            <div className="space-y-2">
                                <Label>Country</Label>
                                <Input required defaultValue="United Arab Emirates" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>Phone</Label>
                            <Input required type="tel" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold border-b pb-2">Payment</h2>
                        <div className="bg-secondary/10 p-4 text-sm text-muted-foreground border border-border">
                            This is a mock checkout. No payment is required.
                        </div>
                        <Button type="submit" size="lg" className="w-full h-14 text-lg rounded-none uppercase tracking-widest">
                            Complete Order
                        </Button>
                    </div>
                </form>
            </div>

            <div className="bg-secondary/5 p-8 h-fit border border-border/50">
                 <h2 className="text-xl font-serif font-bold mb-6">Order Summary</h2>
                 <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                        <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 items-center">
                            <div className="h-16 w-16 bg-white overflow-hidden rounded-sm relative border border-border">
                                <span className="absolute -top-2 -right-2 h-5 w-5 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center z-10">
                                    {item.quantity}
                                </span>
                                <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-medium text-sm">{item.name}</h4>
                                <p className="text-xs text-muted-foreground">{item.selectedSize}</p>
                            </div>
                            <div className="text-sm font-medium">AED {item.price * item.quantity}</div>
                        </div>
                    ))}
                 </div>
                 <div className="space-y-2 border-t border-border pt-4">
                    <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span>AED {total}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                 </div>
                 <div className="flex justify-between text-xl font-bold border-t border-border pt-6 mt-4">
                    <span>Total</span>
                    <span>AED {total}</span>
                 </div>
            </div>
        </div>
      </div>
    </Layout>
  );
}
