import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { toast } from "sonner";

export interface CartItem {
  id: string;
  productId: string;
  productName: string;
  productImage: string;
  size: string;
  sizeLabel: string;
  frame: string;
  frameLabel: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "id" | "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("snap4canvas-cart");
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to load cart:", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("snap4canvas-cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (item: Omit<CartItem, "id" | "quantity">) => {
    const existingItemIndex = items.findIndex(
      (i) =>
        i.productId === item.productId &&
        i.size === item.size &&
        i.frame === item.frame
    );

    if (existingItemIndex > -1) {
      // Item already exists, increase quantity
      const newItems = [...items];
      newItems[existingItemIndex].quantity += 1;
      setItems(newItems);
      toast.success("Quantity updated in cart!");
    } else {
      // New item
      const newItem: CartItem = {
        ...item,
        id: `${item.productId}-${item.size}-${item.frame}-${Date.now()}`,
        quantity: 1,
      };
      setItems([...items, newItem]);
      toast.success("Added to cart!", {
        description: `${item.productName} - ${item.sizeLabel}`,
      });
    }
  };

  const removeFromCart = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
    toast.success("Removed from cart");
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setItems(
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
    toast.success("Cart cleared");
  };

  const cartTotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
