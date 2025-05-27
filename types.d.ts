interface Food {
  _id: string;
  slug: string;
  imageUrl: string;
  name: string;
  price: number;
  originalPrice: number;
}

interface FoodDetails {
  imageUrl: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  category: string;
  tags: string[];
  available: boolean;
  reviews: number;
  slug: string;
}

interface FoodDetails extends Food {
  name: string;
  slug: string;
  description: string;
  originalPrice: number;
  price: number;
  tags: string[];
  category: string;
  reviews?: number;
}

interface FoodPageProps {
  food: FoodDetails;
}

interface Chef {
  _id: string;
  name: string;
  position: string;
  experience: number;
  specialty: string;
  image: string;
  description: string;
  available: boolean;
  slug: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  rating: number;
  image: string;
}

interface Review {
  name: string;
  rating: number;
  comment: string;
}

interface Order {
  _id: string;
  name: string;
  email: string;
  address: string;
  total: number;
  cartItems: CartItem[];
  createdAt: string;
}

interface User {
  name: string;
  email: string;
}

interface Product {
  _id: string;
  name: string;
  slug: string;
  imageUrl: string;
  price: number;
  originalPrice: number;
  description: string;
  category: string;
  tags: string[];
  available: boolean;
  reviews?: number;
}

interface ProductDetails extends Product {
  description: string;
  category: string;
  tags: string[];
  available: boolean;
  reviews?: number;
}
