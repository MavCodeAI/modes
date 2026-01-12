import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function WholesaleStrip() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Wholesale & Bulk Orders</h2>
        <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
          Partner with us to bring premium UAE modest fashion to your boutique. Exclusive pricing and white-label services available.
        </p>
        <Link href="/wholesale">
          <Button size="lg" variant="secondary" className="rounded-none px-10 py-7 text-lg uppercase tracking-widest bg-background text-foreground hover:bg-background/90">
            Wholesale Inquiry
          </Button>
        </Link>
      </div>
    </section>
  );
}
