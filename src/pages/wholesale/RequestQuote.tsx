import { Layout } from "@/components/Layout";
import { WholesaleForm } from "@/components/forms/WholesaleForm";

export default function RequestQuote() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-serif font-bold mb-8 text-center">Request a Quote</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Please fill out the form below with your business details and requirements. Our team will review your request and provide a custom quote within 24-48 hours.
        </p>
        <WholesaleForm />
      </div>
    </Layout>
  );
}
