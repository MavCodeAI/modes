import React, { createContext, useContext, useEffect, useState } from "react";
import type { Product, Collection, CartItem, QuoteRequest, WishlistItem, RecentlyViewedItem } from "@/lib/types";
import { seedProducts, seedCollections } from "@/data/seed";
import { toast } from "sonner";

interface StoreContextType {
  products: Product[];
  collections: Collection[];
  cart: CartItem[];
  quotes: QuoteRequest[];
  wishlist: WishlistItem[];
  recentlyViewed: RecentlyViewedItem[];
  addToCart: (product: Product, size: string, color?: string) => void;
  removeFromCart: (productId: string, size: string) => void;
  updateCartQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  addQuote: (quote: Omit<QuoteRequest, "id" | "status" | "date">) => void;
  updateQuoteStatus: (id: string, status: "pending" | "processed") => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  addToRecentlyViewed: (product: Product) => void;
  getRecentlyViewed: () => RecentlyViewedItem[];
  isAdmin: boolean;
  toggleAdmin: () => void;
  refreshData: () => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<RecentlyViewedItem[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);

  // Initialize Data
  useEffect(() => {
    // Products
    const storedProducts = localStorage.getItem("mw_products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      setProducts(seedProducts);
      localStorage.setItem("mw_products", JSON.stringify(seedProducts));
    }

    // Collections
    const storedCollections = localStorage.getItem("mw_collections");
    if (storedCollections) {
      setCollections(JSON.parse(storedCollections));
    } else {
      setCollections(seedCollections);
      localStorage.setItem("mw_collections", JSON.stringify(seedCollections));
    }

    // Cart
    const storedCart = localStorage.getItem("mw_cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }

    // Quotes
    const storedQuotes = localStorage.getItem("mw_quotes");
    if (storedQuotes) {
      setQuotes(JSON.parse(storedQuotes));
    }

    // Wishlist
    const storedWishlist = localStorage.getItem("mw_wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }

    // Recently Viewed
    const storedRecentlyViewed = localStorage.getItem("mw_recently_viewed");
    if (storedRecentlyViewed) {
      setRecentlyViewed(JSON.parse(storedRecentlyViewed));
    }

    // Admin
    const storedAdmin = localStorage.getItem("mw_admin");
    if (storedAdmin === "true") setIsAdmin(true);
  }, []);

  // Sync to LocalStorage on changes
  useEffect(() => {
    if (products.length > 0) localStorage.setItem("mw_products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("mw_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("mw_quotes", JSON.stringify(quotes));
  }, [quotes]);

  useEffect(() => {
    localStorage.setItem("mw_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("mw_recently_viewed", JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  const refreshData = () => {
    const p = localStorage.getItem("mw_products");
    if (p) setProducts(JSON.parse(p));
  };

  // Cart Actions
  const addToCart = (product: Product, size: string, color?: string) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.selectedSize === size && item.selectedColor === color
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.selectedSize === size && item.selectedColor === color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, selectedSize: size, selectedColor: color }];
    });
    toast.success("Added to cart");
  };

  const removeFromCart = (productId: string, size: string) => {
    setCart((prev) => prev.filter((item) => !(item.id === productId && item.selectedSize === size)));
  };

  const updateCartQuantity = (productId: string, size: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId, size);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId && item.selectedSize === size ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  // Wishlist Actions
  const addToWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        toast.error("Product already in wishlist");
        return prev;
      }
      const wishlistItem: WishlistItem = {
        ...product,
        addedAt: new Date().toISOString(),
      };
      toast.success("Added to wishlist");
      return [...prev, wishlistItem];
    });
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist((prev) => {
      const filtered = prev.filter((item) => item.id !== productId);
      toast.success("Removed from wishlist");
      return filtered;
    });
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some((item) => item.id === productId);
  };

  // Recently Viewed Actions
  const addToRecentlyViewed = (product: Product) => {
    setRecentlyViewed((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        // Move to top if already exists
        const filtered = prev.filter((item) => item.id !== product.id);
        return [{ ...product, viewedAt: new Date().toISOString() }, ...filtered].slice(0, 10);
      }
      // Add new item and keep only 10 most recent
      const recentlyViewItem: RecentlyViewedItem = {
        ...product,
        viewedAt: new Date().toISOString(),
      };
      return [recentlyViewItem, ...prev].slice(0, 10);
    });
  };

  const getRecentlyViewed = () => {
    return recentlyViewed;
  };

  // Product Actions (Admin)
  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
    toast.success("Product added");
  };

  const updateProduct = (product: Product) => {
    setProducts((prev) => prev.map((p) => (p.id === product.id ? product : p)));
    toast.success("Product updated");
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    toast.success("Product deleted");
  };

  // Quote Actions
  const addQuote = (quoteData: Omit<QuoteRequest, "id" | "status" | "date">) => {
    const newQuote: QuoteRequest = {
      ...quoteData,
      id: Math.random().toString(36).substr(2, 9),
      status: "pending",
      date: new Date().toISOString(),
    };
    setQuotes((prev) => [...prev, newQuote]);
    toast.success("Quote request submitted");
  };

  const updateQuoteStatus = (id: string, status: "pending" | "processed") => {
    setQuotes((prev) => prev.map((q) => (q.id === id ? { ...q, status } : q)));
  };

  const toggleAdmin = () => {
    const newState = !isAdmin;
    setIsAdmin(newState);
    localStorage.setItem("mw_admin", String(newState));
    toast.info(newState ? "Admin Mode Enabled" : "Admin Mode Disabled");
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        collections,
        cart,
        quotes,
        wishlist,
        recentlyViewed,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        addProduct,
        updateProduct,
        deleteProduct,
        addQuote,
        updateQuoteStatus,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        addToRecentlyViewed,
        getRecentlyViewed,
        isAdmin,
        toggleAdmin,
        refreshData,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}
