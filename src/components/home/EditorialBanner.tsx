import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import wholesaleBg from "@/assets/wholesale-bg.jpeg";

export function EditorialBanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image with Parallax-like feel or fixed */}
      <div className="absolute inset-0">
        <img 
          src={wholesaleBg} 
          alt="Editorial Fashion" 
          className="w-full h-full object-cover object-center brightness-[0.85]"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col items-center justify-center text-center text-white py-20">
        <span className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-6 opacity-90">
          Editor's Pick
        </span>
        <h2 className="text-4xl md:text-6xl font-serif mb-8 max-w-2xl leading-tight">
          The Perfect Printed Abaya
        </h2>
        <p className="text-lg text-white/90 max-w-lg mb-10 font-light leading-relaxed">
          Exquisite patterns meet modest silhouettes. Designed for the woman who speaks through style.
        </p>
        <Link href="/collections/printed-abayas">
          <Button 
            className="bg-white text-black hover:bg-white/90 border-none rounded-full px-10 h-12 text-xs font-bold uppercase tracking-widest transition-transform hover:scale-105"
          >
            Shop the Edit
          </Button>
        </Link>
      </div>
    </section>
  );
}
