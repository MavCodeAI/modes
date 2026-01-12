import { Layout } from "@/components/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would normally send the data to your backend
      console.log('Contact form submitted:', formData);
      
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold mb-8 text-center">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground mb-6">
                    Have a question about your order or want to learn more about our collection? We'd love to hear from you.
                </p>
                <div className="space-y-4">
                    <p><strong>Address:</strong> Dubai Design District, Building 7, UAE</p>
                    <p><strong>Email:</strong> info@modestway.ae</p>
                    <p><strong>Phone:</strong> +971 50 123 4567</p>
                </div>
            </div>
            <div className="bg-secondary/20 p-8 rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input 
                          id="name"
                          name="name"
                          type="text" 
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email"
                          name="email"
                          type="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                    </div>
                    <div>
                        <Label htmlFor="message">Message</Label>
                        <textarea 
                          id="message"
                          name="message"
                          className="w-full p-2 border rounded bg-background h-32 resize-none"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                </form>
            </div>
        </div>
      </div>
    </Layout>
  );
}
