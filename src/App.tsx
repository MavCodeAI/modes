import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router, Route, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { StoreProvider } from "@/contexts/StoreContext";
import { Suspense, lazy } from "react";

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

// Lazy loaded pages
const Home = lazy(() => import("@/pages/Home"));
const Shop = lazy(() => import("@/pages/Shop"));
const Collection = lazy(() => import("@/pages/Collection"));
const ProductDetail = lazy(() => import("@/pages/ProductDetail"));
const Cart = lazy(() => import("@/pages/Cart"));
const Checkout = lazy(() => import("@/pages/Checkout"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const SizeGuide = lazy(() => import("@/pages/SizeGuide"));
const Profile = lazy(() => import("@/pages/Profile"));

// Wholesale Pages
const Wholesale = lazy(() => import("@/pages/Wholesale"));
const WholesaleCatalog = lazy(() => import("@/pages/wholesale/WholesaleCatalog"));
const WholesaleProduct = lazy(() => import("@/pages/wholesale/WholesaleProduct"));
const RequestQuote = lazy(() => import("@/pages/wholesale/RequestQuote"));

// Admin Pages
const AdminDashboard = lazy(() => import("@/pages/admin/AdminDashboard"));
const AdminProducts = lazy(() => import("@/pages/admin/AdminProducts"));
const AdminRequests = lazy(() => import("@/pages/admin/AdminRequests"));

const NotFound = lazy(() => import("@/pages/NotFound"));

function AppRouter() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        {/* Retail Routes */}
        <Route path="/">
          <Suspense fallback={<PageLoader />}>
            <Home />
          </Suspense>
        </Route>
        <Route path="/shop">
          <Suspense fallback={<PageLoader />}>
            <Shop />
          </Suspense>
        </Route>
        <Route path="/collections/:slug">
          <Suspense fallback={<PageLoader />}>
            <Collection />
          </Suspense>
        </Route>
        <Route path="/product/:id">
          <Suspense fallback={<PageLoader />}>
            <ProductDetail />
          </Suspense>
        </Route>
        <Route path="/cart">
          <Suspense fallback={<PageLoader />}>
            <Cart />
          </Suspense>
        </Route>
        <Route path="/checkout">
          <Suspense fallback={<PageLoader />}>
            <Checkout />
          </Suspense>
        </Route>
        <Route path="/about">
          <Suspense fallback={<PageLoader />}>
            <About />
          </Suspense>
        </Route>
        <Route path="/contact">
          <Suspense fallback={<PageLoader />}>
            <Contact />
          </Suspense>
        </Route>
        <Route path="/faq">
          <Suspense fallback={<PageLoader />}>
            <FAQ />
          </Suspense>
        </Route>
        <Route path="/size-guide">
          <Suspense fallback={<PageLoader />}>
            <SizeGuide />
          </Suspense>
        </Route>
        <Route path="/profile">
          <Suspense fallback={<PageLoader />}>
            <Profile />
          </Suspense>
        </Route>

        {/* Wholesale Routes */}
        <Route path="/wholesale">
          <Suspense fallback={<PageLoader />}>
            <Wholesale />
          </Suspense>
        </Route>
        <Route path="/wholesale/catalog">
          <Suspense fallback={<PageLoader />}>
            <WholesaleCatalog />
          </Suspense>
        </Route>
        <Route path="/wholesale/product/:id">
          <Suspense fallback={<PageLoader />}>
            <WholesaleProduct />
          </Suspense>
        </Route>
        <Route path="/wholesale/request-quote">
          <Suspense fallback={<PageLoader />}>
            <RequestQuote />
          </Suspense>
        </Route>

        {/* Admin Routes */}
        <Route path="/admin">
          <Suspense fallback={<PageLoader />}>
            <AdminDashboard />
          </Suspense>
        </Route>
        <Route path="/admin/products">
          <Suspense fallback={<PageLoader />}>
            <AdminProducts />
          </Suspense>
        </Route>
        <Route path="/admin/wholesale-requests">
          <Suspense fallback={<PageLoader />}>
            <AdminRequests />
          </Suspense>
        </Route>

        <Route>
          <Suspense fallback={<PageLoader />}>
            <NotFound />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <StoreProvider>
            <TooltipProvider>
              <Toaster />
              <AppRouter />
            </TooltipProvider>
          </StoreProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
