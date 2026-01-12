import { Layout } from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-serif font-bold mb-8 text-center">Our Story</h1>
        <div className="prose prose-lg mx-auto text-muted-foreground">
          <p className="mb-6">
            Modest Way Fashion was born in the heart of the UAE with a singular vision: to redefine modest fashion through the lens of modern elegance and uncompromising quality.
          </p>
          <p className="mb-6">
            We believe that the Abaya is not just a garment, but a statement of grace, identity, and heritage. Our designs blend traditional silhouettes with contemporary textures, creating pieces that are both timeless and relevant for the modern woman.
          </p>
          <p>
            Every piece in our collection is crafted with meticulous attention to detail, using only the finest fabrics sourced from around the world. From the initial sketch to the final stitch, we ensure that our creations meet the highest standards of luxury.
          </p>
        </div>
      </div>
    </Layout>
  );
}
