import { Layout } from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-4xl font-serif font-bold mb-8 text-center">Frequently Asked Questions</h1>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
            <AccordionContent>
              Yes, we ship worldwide via DHL Express. Delivery times vary by location but typically take 3-5 business days.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What fabrics do you use?</AccordionTrigger>
            <AccordionContent>
              We primarily use high-grade Nada, Zoom, and Japanese Crepe fabrics known for their durability, flow, and breathability suited for the UAE climate.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can I customize the length?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer complimentary length customization on all full-priced Abayas. Please specify your required length in the order notes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How do I become a wholesale partner?</AccordionTrigger>
            <AccordionContent>
              Please visit our Wholesale page and fill out the inquiry form. Our team will review your application and get back to you within 48 hours.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Layout>
  );
}
