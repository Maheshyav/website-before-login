export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size: string;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
  sizes?: string[];
  inStock?: boolean;
}

export interface WaitlistItem {
  productId: number;
  email: string;
  size?: string;
  dateAdded: Date;
}