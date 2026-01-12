import { Layout } from "@/components/Layout";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function SizeGuide() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-serif font-bold mb-8 text-center">Size Guide</h1>
        <p className="text-center text-muted-foreground mb-12">
            Our Abayas are designed to be loose-fitting. The size is primarily determined by your height.
        </p>
        
        <div className="border rounded-lg overflow-hidden">
            <Table>
            <TableCaption>Standard Abaya Sizing</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">Size</TableHead>
                <TableHead>Recommended Height</TableHead>
                <TableHead>Length (Inches)</TableHead>
                <TableHead className="text-right">Sleeve Length</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                <TableCell className="font-medium">50</TableCell>
                <TableCell>4'10" - 5'0"</TableCell>
                <TableCell>50"</TableCell>
                <TableCell className="text-right">26"</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium">52</TableCell>
                <TableCell>5'1" - 5'2"</TableCell>
                <TableCell>52"</TableCell>
                <TableCell className="text-right">27"</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium">54</TableCell>
                <TableCell>5'3" - 5'4"</TableCell>
                <TableCell>54"</TableCell>
                <TableCell className="text-right">28"</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium">56</TableCell>
                <TableCell>5'5" - 5'6"</TableCell>
                <TableCell>56"</TableCell>
                <TableCell className="text-right">29"</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium">58</TableCell>
                <TableCell>5'7" - 5'8"</TableCell>
                <TableCell>58"</TableCell>
                <TableCell className="text-right">30"</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium">60</TableCell>
                <TableCell>5'9" - 5'10"</TableCell>
                <TableCell>60"</TableCell>
                <TableCell className="text-right">31"</TableCell>
                </TableRow>
            </TableBody>
            </Table>
        </div>
      </div>
    </Layout>
  );
}
