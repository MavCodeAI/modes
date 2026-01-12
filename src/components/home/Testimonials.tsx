import { Star } from "lucide-react";

const testimonials = [
  {
    text: "The quality of the fabric is unmatched. I've ordered 3 times and I'm always impressed.",
    author: "Fatima A.",
    location: "Dubai, UAE"
  },
  {
    text: "Beautiful packaging and fast delivery. The abaya fits perfectly.",
    author: "Sarah K.",
    location: "London, UK"
  },
  {
    text: "Modest Way Fashion understands true elegance. Highly recommended for special occasions.",
    author: "Noor H.",
    location: "Riyadh, KSA"
  },
  {
    text: "Excellent customer service and the wholesale process was very smooth.",
    author: "Ayesha M.",
    location: "Boutique Owner"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-12 text-center text-background">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 border border-background/10 rounded-sm hover:border-background/30 transition-colors">
              <div className="flex gap-1 mb-4 text-primary-foreground">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-background/80 mb-6 italic leading-relaxed">"{t.text}"</p>
              <div className="mt-auto">
                <p className="font-serif font-bold">{t.author}</p>
                <p className="text-xs text-background/60 uppercase tracking-widest">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
