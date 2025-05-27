export const calculateTotal = (cartItems: CartItem[]): string => {
  return cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);
};

export const calculateDiscount = (cartItems: CartItem[]): string => {
  const total = parseFloat(calculateTotal(cartItems));
  return (total * 0.25).toFixed(2);
};

export const calculateShipping = (): string => {
  return "0.00";
};

export const calculateTotalAmount = (cartItems: CartItem[]): string => {
  const total = parseFloat(calculateTotal(cartItems));
  const discount = parseFloat(calculateDiscount(cartItems));
  const shipping = parseFloat(calculateShipping());
  return (total - discount + shipping).toFixed(2);
};

export const applyCoupon = (cartItems: CartItem[], coupon: string): string => {
  // Implement coupon logic if needed
  return calculateTotalAmount(cartItems);
};

export const removeItem = (
  cartItems: CartItem[],
  itemId: number
): CartItem[] => {
  return cartItems.filter((item) => item.id !== itemId);
};

export const updateQuantity = (
  cartItems: CartItem[],
  itemId: number,
  quantity: number
): CartItem[] => {
  return cartItems.map((item) =>
    item.id === itemId ? { ...item, quantity } : item
  );
};

export const clearCart = (): void => {
  localStorage.removeItem("cart");
};

export const getCartItems = (): CartItem[] => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

export const saveCartItems = (cartItems: CartItem[]): void => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
};
