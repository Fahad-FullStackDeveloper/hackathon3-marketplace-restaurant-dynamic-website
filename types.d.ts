interface Food {
  _id: string;
  slug: string;
  imageUrl: string;
  name: string;
  price: number;
  originalPrice: number;
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

interface ProductPageProps {
  product: ProductDetails;
}

interface ChefPageProps {
  chef: Chef;
}

interface CartPageProps {
  cartItems: CartItem[];
}

interface CheckoutPageProps {
  cartItems: CartItem[];
}

interface OrderPageProps {
  order: Order;
}

interface ReviewPageProps {
  reviews: Review[];
}

interface UserPageProps {
  user: User;
}

interface LoginPageProps {
  user: User;
}

interface SignUpPageProps {
  user: User;
}

interface AdminPageProps {
  user: User;
}

interface DashboardPageProps {
  user: User;
}

interface NavbarProps {
  cartItems: CartItem[];
}

interface FooterProps {
  chef: Chef;
}

interface HomeProps {
  products: Product[];
  chefs: Chef[];
}

interface PageProps {
  product: ProductDetails;
  chef: Chef;
  cartItems: CartItem[];
  order: Order;
  reviews: Review[];
  user: User;
}

interface ShopPageProps {
  products: Product[];
}

interface AboutPageProps {
  chef: Chef;
}

interface ContactPageProps {
  chef: Chef;
}