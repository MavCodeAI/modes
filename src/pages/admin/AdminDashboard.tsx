import { Layout } from "@/components/Layout";
import { useStore } from "@/contexts/StoreContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Package, FileText, Settings, Plus } from "lucide-react";
import { useEffect } from "react";

export default function AdminDashboard() {
  const { products, quotes, toggleAdmin, isAdmin } = useStore();

  useEffect(() => {
    // Auto-enable admin mode when visiting dashboard for demo purposes
    if (!isAdmin) toggleAdmin();
  }, []);

  const stats = [
    { label: "Total Products", value: products.length, icon: Package },
    { label: "Pending Quotes", value: quotes.filter(q => q.status === "pending").length, icon: FileText },
    { label: "Total Quotes", value: quotes.length, icon: FileText },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-serif font-bold">Admin Dashboard</h1>
            <div className="space-x-4">
                <Link href="/admin/products">
                    <Button variant="outline"><Package className="mr-2 h-4 w-4" /> Manage Products</Button>
                </Link>
                <Link href="/admin/wholesale-requests">
                    <Button variant="outline"><FileText className="mr-2 h-4 w-4" /> View Quotes</Button>
                </Link>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, i) => (
                <Card key={i}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                        <stat.icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stat.value}</div>
                    </CardContent>
                </Card>
            ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Link href="/admin/products">
                        <Button className="w-full justify-start" variant="ghost">
                            <Plus className="mr-2 h-4 w-4" /> Add New Product
                        </Button>
                    </Link>
                    <Button className="w-full justify-start" variant="ghost" onClick={toggleAdmin}>
                        <Settings className="mr-2 h-4 w-4" /> Toggle Admin Mode {isAdmin ? '(On)' : '(Off)'}
                    </Button>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-sm">System ready. LocalStorage initialized.</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </Layout>
  );
}
