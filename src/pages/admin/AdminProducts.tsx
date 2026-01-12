import { Layout } from "@/components/Layout";
import { useStore } from "@/contexts/StoreContext";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProductDialog } from "@/components/admin/ProductDialog";
import { Trash, Edit, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function AdminProducts() {
  const { products, deleteProduct } = useStore();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
                <Link href="/admin">
                    <Button variant="ghost" size="icon"><ArrowLeft className="h-4 w-4" /></Button>
                </Link>
                <h1 className="text-3xl font-serif font-bold">Manage Products</h1>
            </div>
            <ProductDialog />
        </div>

        <div className="border rounded-md">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Image</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Wholesale</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell>
                                <img src={product.images[0]} alt={product.name} className="h-10 w-10 object-cover rounded" />
                            </TableCell>
                            <TableCell className="font-medium">{product.name}</TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>AED {product.price}</TableCell>
                            <TableCell>{product.wholesaleAvailable ? "Yes" : "No"}</TableCell>
                            <TableCell className="text-right space-x-2">
                                <ProductDialog 
                                    product={product} 
                                    trigger={<Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>} 
                                />
                                <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    className="text-destructive hover:text-destructive"
                                    onClick={() => {
                                        if (confirm("Are you sure?")) deleteProduct(product.id);
                                    }}
                                >
                                    <Trash className="h-4 w-4" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
      </div>
    </Layout>
  );
}
