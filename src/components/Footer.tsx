import { Logo } from "@/components/ui/Logo";
import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-secondary/30 pt-16 pb-8 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Logo variant="dark" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Defining modern modesty with luxurious fabrics and timeless designs. Based in UAE, shipping worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/shop" className="hover:text-primary transition-colors">New Arrivals</Link></li>
              <li><Link href="/shop?cat=bestsellers" className="hover:text-primary transition-colors">Best Sellers</Link></li>
              <li><Link href="/shop?cat=abayas" className="hover:text-primary transition-colors">Abayas</Link></li>
              <li><Link href="/shop?cat=sheilas" className="hover:text-primary transition-colors">Sheilas</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Customer Care</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link href="/size-guide" className="hover:text-primary transition-colors">Size Guide</Link></li>
              <li><Link href="/wholesale" className="hover:text-primary transition-colors">Wholesale</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>Dubai Design District, Building 7, UAE</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+971 50 123 4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>info@modestway.ae</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-border/60 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Modest Way Fashion. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
