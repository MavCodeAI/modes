export interface Product {
  id: string;
  name: string;
  price: number;
  compareAt?: number;
  category: string;
  tags: string[]; // "new_drop", "weekly_drop", "best_seller", "featured"
  images: string[];
  description: string;
  sizes: string[];
  colors?: string[];
  wholesaleAvailable: boolean;
  moq?: number; // Minimum Order Quantity for wholesale
  isNew?: boolean; // Keep for backward compatibility or map to tag
  isBestSeller?: boolean; // Keep for backward compatibility or map to tag
}

export interface Collection {
  id: string;
  slug: string;
  name: string;
  description?: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor?: string;
}

export interface QuoteRequest {
  id: string;
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  region: string;
  volume: string;
  message?: string;
  status: "pending" | "processed";
  date: string;
}

export interface WishlistItem extends Product {
  addedAt: string;
}

export interface RecentlyViewedItem extends Product {
  viewedAt: string;
}

export type SortOption = "newest" | "price-low" | "price-high";
