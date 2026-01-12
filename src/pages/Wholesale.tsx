import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { WholesaleForm } from "@/components/forms/WholesaleForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, CheckCircle, PenTool } from "lucide-react";
import wholesaleBg from "@/assets/wholesale-bg.jpeg";

export default function Wholesale() {
  return (
    <Layout>
      <div className="relative h-[400px] w-full bg-slate-900 flex items-center justify-center mb-12 overflow-hidden">
        <img 
          src={wholesaleBg} 
          alt="Wholesale Showroom" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center max-w-2xl px-4">
          <h1 className="text-5xl font-serif font-bold text-white mb-4">Wholesale Partner Program</h1>
          <p className="text-white/90 text-lg mb-8">
            Partner with Modest Way Fashion to bring premium UAE-made Abayas to your customers.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-white/90" onClick={() => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}>
            Apply Now
          </Button>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 mb-24">
            {/* Left Column - Why Partner With Us */}
            <div className="xl:col-span-1 space-y-8">
                <div>
                    <h2 className="text-3xl font-serif font-bold mb-6">Why Partner With Us?</h2>
                    <p className="text-muted-foreground mb-8">Discover the benefits of joining our wholesale network</p>
                </div>
                <div className="space-y-6">
                    <div className="group p-6 rounded-xl border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-card/50">
                        <div className="flex gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                <CheckCircle className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-foreground">Premium Quality Guarantee</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">Hand-picked fabrics and expert stitching from our UAE atelier. Every piece undergoes rigorous quality control.</p>
                            </div>
                        </div>
                    </div>
                    <div className="group p-6 rounded-xl border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-card/50">
                        <div className="flex gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                <Truck className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-foreground">Efficient Logistics</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">Free shipping within UAE for orders over AED 5000. Competitive international rates via DHL and FedEx.</p>
                            </div>
                        </div>
                    </div>
                    <div className="group p-6 rounded-xl border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-card/50">
                        <div className="flex gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                <PenTool className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-foreground">Private Labeling</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">Build your own brand. We offer white-label services including custom tags and packaging for orders above 200 pieces.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column - Inquiry Form */}
            <div className="xl:col-span-2">
                <div className="mb-8">
                    <h2 className="text-3xl font-serif font-bold mb-2">Start Your Partnership</h2>
                    <p className="text-muted-foreground">Fill out the form below and our wholesale manager will reach out within 24 hours.</p>
                </div>
                <WholesaleForm />
            </div>
        </div>

        {/* Policies Section */}
        <div className="bg-secondary/30 rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">Wholesale Policies</h2>
            
            {/* MOQ Section */}
            <div className="mb-12">
                <h3 className="text-2xl font-serif font-bold mb-6 text-center">Minimum Order Quantity (MOQ)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card className="bg-background border-border/50">
                        <CardHeader>
                            <CardTitle className="font-serif">Kimono Abaya</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground text-sm">
                            <p className="text-2xl font-bold text-primary mb-2">12 pieces</p>
                            <p>per color</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-background border-border/50">
                        <CardHeader>
                            <CardTitle className="font-serif">Farasha Abaya</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground text-sm">
                            <p className="text-2xl font-bold text-primary mb-2">10 pieces</p>
                            <p>per color</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-background border-border/50">
                        <CardHeader>
                            <CardTitle className="font-serif">Umbrella Abaya</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground text-sm">
                            <p className="text-2xl font-bold text-primary mb-2">7 pieces</p>
                            <p>per color</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="bg-card/50 rounded-lg p-4 text-center">
                    <p className="text-sm text-muted-foreground">
                        <strong>Fabric Policy:</strong> One fabric roll per color
                    </p>
                </div>
            </div>

            {/* Production & Lead Time */}
            <div className="mb-12">
                <h3 className="text-2xl font-serif font-bold mb-6 text-center">Production & Lead Time</h3>
                <div className="bg-card/50 rounded-xl p-8">
                    <p className="text-muted-foreground text-center mb-6">
                        Production timelines depend on the design complexity and requirements.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-4">
                            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                                <CheckCircle className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground mb-2">Plain Abayas</h4>
                                <p className="text-sm text-muted-foreground">Require less production time with faster turnaround</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                                <PenTool className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground mb-2">Beaded/Hand-worked Designs</h4>
                                <p className="text-sm text-muted-foreground">Require additional time depending on complexity</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Colors & Fabrics */}
            <div className="mb-12">
                <h3 className="text-2xl font-serif font-bold mb-6 text-center">Colors & Fabrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-background border-border/50">
                        <CardHeader>
                            <CardTitle className="font-serif">Color Catalog</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground text-sm">
                            <p>Extensive color catalog available for selection</p>
                            <p className="mt-2">Custom color matching available upon request</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-background border-border/50">
                        <CardHeader>
                            <CardTitle className="font-serif">Fabric Options</CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground text-sm">
                            <p>Multiple premium fabric options available</p>
                            <p className="mt-2">Detailed fabric specifications shared upon request</p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Shipping & Payment */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card className="bg-background border-border/50">
                    <CardHeader>
                        <CardTitle className="font-serif">Shipping Options</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                        <p className="font-semibold mb-3">We ship worldwide through trusted partners:</p>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center gap-2">
                                <Truck className="h-4 w-4 text-primary" />
                                <span>UPS</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Truck className="h-4 w-4 text-primary" />
                                <span>FedEx</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Truck className="h-4 w-4 text-primary" />
                                <span>DHL</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Truck className="h-4 w-4 text-primary" />
                                <span>DPD</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-background border-border/50">
                    <CardHeader>
                        <CardTitle className="font-serif">Payment Methods</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                        <div className="mb-4">
                            <p className="text-red-500 font-semibold mb-2">❌ Credit card payments not available</p>
                        </div>
                        <p className="font-semibold mb-3">Accepted payment methods:</p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 bg-primary rounded-full"></div>
                                <span>Western Union</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 bg-primary rounded-full"></div>
                                <span>Wise Transfer</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8">
                <h3 className="text-2xl font-serif font-bold mb-6 text-center">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-center">
                        <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                            <PenTool className="h-6 w-6 text-primary" />
                        </div>
                        <p className="font-semibold text-foreground mb-1">Email</p>
                        <a href="mailto:modestwayfashion@gmail.com" className="text-primary hover:underline">
                            modestwayfashion@gmail.com
                        </a>
                    </div>
                    <div className="text-center">
                        <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                            <CheckCircle className="h-6 w-6 text-primary" />
                        </div>
                        <p className="font-semibold text-foreground mb-1">WhatsApp</p>
                        <a href="https://wa.me/971556020293" className="text-primary hover:underline">
                            +971 55 602 0293
                        </a>
                    </div>
                </div>
            </div>

                    </div>
      </div>
    </Layout>
  );
}
