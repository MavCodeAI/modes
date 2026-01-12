import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useStore } from "@/contexts/StoreContext";
import { PenTool } from "lucide-react";

const formSchema = z.object({
  businessName: z.string().min(2, "Business name must be at least 2 characters."),
  contactName: z.string().min(2, "Contact name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(8, "Phone number must be at least 8 digits."),
  region: z.string().min(1, "Please select a region."),
  volume: z.string().min(1, "Please select an estimated volume."),
  message: z.string().optional(),
});

export function WholesaleForm() {
  const { addQuote } = useStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      message: "",
      region: "",
      volume: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    addQuote(values);
    // toast handled in store
    form.reset();
  }

  return (
    <div className="bg-gradient-to-br from-card via-card/95 to-secondary/30 backdrop-blur-sm rounded-2xl border border-border/50 shadow-xl overflow-hidden">
      {/* Form Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-8 py-6 border-b border-border/30">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
            <PenTool className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground">Wholesale Inquiry</h3>
            <p className="text-muted-foreground text-sm mt-1">Get started with your wholesale partnership</p>
          </div>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-8 space-y-8">
          {/* Business Information Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-1 bg-primary rounded-full"></div>
              <h4 className="text-lg font-semibold text-foreground">Business Information</h4>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="businessName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground/90">Business Name *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Modest Boutique LLC" 
                        {...field} 
                        className="h-12 bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contactName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground/90">Contact Person *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Jane Doe" 
                        {...field} 
                        className="h-12 bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-1 bg-primary rounded-full"></div>
              <h4 className="text-lg font-semibold text-foreground">Contact Information</h4>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground/90">Email Address *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="purchasing@boutique.com" 
                        type="email"
                        {...field} 
                        className="h-12 bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground/90">Phone Number *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="+971 50 000 0000" 
                        {...field} 
                        className="h-12 bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Business Details Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-1 bg-primary rounded-full"></div>
              <h4 className="text-lg font-semibold text-foreground">Business Details</h4>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="region"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground/90">Region *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-300">
                          <SelectValue placeholder="Select your region" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-card border-border/50">
                        <SelectItem value="uae" className="focus:bg-primary/10">United Arab Emirates</SelectItem>
                        <SelectItem value="gcc" className="focus:bg-primary/10">GCC (Saudi, Kuwait, etc.)</SelectItem>
                        <SelectItem value="international" className="focus:bg-primary/10">International</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="volume"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground/90">Est. Monthly Volume *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-300">
                          <SelectValue placeholder="Select volume range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-card border-border/50">
                        <SelectItem value="50-100" className="focus:bg-primary/10">50 - 100 Pieces</SelectItem>
                        <SelectItem value="100-500" className="focus:bg-primary/10">100 - 500 Pieces</SelectItem>
                        <SelectItem value="500+" className="focus:bg-primary/10">500+ Pieces</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-1 bg-primary rounded-full"></div>
              <h4 className="text-lg font-semibold text-foreground">Additional Information</h4>
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-foreground/90">Tell us about your business needs</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Share details about your boutique, target customers, specific product interests, or any special requirements..." 
                      className="min-h-[140px] bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-300 resize-none"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Submit Section */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border/30">
            <Button 
              type="submit" 
              size="lg" 
              className="flex-1 h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              Submit Wholesale Inquiry
            </Button>
            <Button 
              type="button"
              variant="outline" 
              size="lg"
              onClick={() => form.reset()}
              className="h-14 border-border/50 hover:bg-secondary/50 rounded-xl transition-all duration-300"
            >
              Clear Form
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
