import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, User } from "lucide-react";
import { useState, useLayoutEffect } from "react";
import { useStore } from "@/contexts/StoreContext";
import { CartDrawer } from "@/components/shop/CartDrawer";
import { SearchModal } from "@/components/search/SearchModal";

const navItems = [
  { name: "New In", href: "/shop?sort=newest" },
  { name: "Abayas", href: "/collections/abayas" },
  { name: "Printed", href: "/collections/printed-abayas" },
  { name: "Sets", href: "/collections/coord-sets" },
  { name: "Kaftans", href: "/collections/kaftans" },
  { name: "Sale", href: "/collections/sale" },
  { name: "Wholesale", href: "/wholesale" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [location] = useLocation();
  const { cart } = useStore();

  // Use useLayoutEffect to prevent flicker on load
  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    // Set initial state
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        scrolled 
          ? "bg-background/95 backdrop-blur-md border-border/50 shadow-md py-3" 
          : "bg-background/80 backdrop-blur-[2px] border-white/5 py-4"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="-ml-2 hover:bg-secondary/20 text-foreground">
                <Menu className="h-6 w-6 stroke-[1.5]" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-background border-border">
              <div className="mt-8 flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <div className="text-base font-medium px-4 py-3 rounded-lg cursor-pointer text-foreground hover:bg-secondary/50 hover:text-primary transition-all duration-200">
                      {item.name}
                    </div>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <div className="shrink-0 lg:mr-12 transition-transform duration-300 origin-left">
          <div className={cn(scrolled ? "scale-90" : "scale-100")}>
            <Logo variant="light" /> {/* Always use light/foreground variant as bg is dark */}
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center justify-center flex-1 space-x-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={cn(
              "text-[13px] font-medium tracking-widest uppercase transition-all relative group py-2",
              location === item.href ? "text-primary" : "text-foreground/80 hover:text-foreground"
            )}>
              {item.name}
              <span className={cn(
                "absolute bottom-0 left-0 w-full h-px bg-primary transform origin-left transition-transform duration-300 ease-out",
                location === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              )} />
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:bg-secondary/20 hover:text-primary transition-colors text-foreground"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="h-5 w-5 stroke-[1.5]" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="hidden sm:flex hover:bg-secondary/20 hover:text-primary transition-colors text-foreground"
            onClick={() => window.location.href = '/profile'}
          >
            <User className="h-5 w-5 stroke-[1.5]" />
          </Button>
          
          <div className="relative">
             <CartDrawer />
             {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center bg-primary text-primary-foreground text-[10px] rounded-full animate-in zoom-in">
                  {cartCount}
                </span>
              )}
          </div>
        </div>
      </div>
      
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
