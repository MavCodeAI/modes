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
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Clock } from "lucide-react";
import { Link } from "wouter";

export default function AdminRequests() {
  const { quotes, updateQuoteStatus } = useStore();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
            <Link href="/admin">
                <Button variant="ghost" size="icon"><ArrowLeft className="h-4 w-4" /></Button>
            </Link>
            <h1 className="text-3xl font-serif font-bold">Wholesale Requests</h1>
        </div>

        <div className="border rounded-md">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Business</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Region</TableHead>
                        <TableHead>Volume</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {quotes.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                                No quote requests yet.
                            </TableCell>
                        </TableRow>
                    ) : (
                        quotes.map((quote) => (
                            <TableRow key={quote.id}>
                                <TableCell>{new Date(quote.date).toLocaleDateString()}</TableCell>
                                <TableCell className="font-medium">
                                    {quote.businessName}
                                    <div className="text-xs text-muted-foreground">{quote.email}</div>
                                </TableCell>
                                <TableCell>
                                    {quote.contactName}
                                    <div className="text-xs text-muted-foreground">{quote.phone}</div>
                                </TableCell>
                                <TableCell className="uppercase">{quote.region}</TableCell>
                                <TableCell>{quote.volume}</TableCell>
                                <TableCell>
                                    <Badge variant={quote.status === "pending" ? "outline" : "default"} className={quote.status === "pending" ? "text-yellow-600 border-yellow-600" : "bg-green-600"}>
                                        {quote.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    {quote.status === "pending" && (
                                        <Button 
                                            size="sm" 
                                            variant="ghost" 
                                            className="text-green-600 hover:text-green-700 hover:bg-green-50"
                                            onClick={() => updateQuoteStatus(quote.id, "processed")}
                                        >
                                            <CheckCircle className="h-4 w-4 mr-1" /> Mark Processed
                                        </Button>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
      </div>
    </Layout>
  );
}
