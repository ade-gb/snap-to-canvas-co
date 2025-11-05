import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ShoppingBag, Trash2, Plus, Minus, Tag, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { toast } from "sonner";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleApplyPromo = () => {
    // Simple promo code logic - in production, validate with backend
    if (promoCode.toUpperCase() === "SAVE10") {
      setDiscount(cartTotal * 0.1);
      toast.success("Promo code applied! 10% off");
    } else if (promoCode.toUpperCase() === "SAVE20") {
      setDiscount(cartTotal * 0.2);
      toast.success("Promo code applied! 20% off");
    } else {
      toast.error("Invalid promo code");
    }
  };

  const subtotal = cartTotal;
  const shipping = 0; // Free shipping
  const total = subtotal - discount;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            Shopping <span className="bg-gradient-hero bg-clip-text text-transparent">Cart</span>
          </h1>

          {items.length === 0 ? (
            <Card className="p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">
                Add some beautiful canvas prints to get started
              </p>
              <Link to="/products">
                <Button variant="hero" size="lg">
                  Browse Products
                </Button>
              </Link>
            </Card>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">
                    {items.length} {items.length === 1 ? "Item" : "Items"}
                  </h2>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={clearCart}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    Clear Cart
                  </Button>
                </div>

                {items.map((item) => (
                  <Card key={item.id} className="p-6">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={item.productImage} 
                          alt={item.productName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg mb-1 truncate">
                          {item.productName}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {item.sizeLabel} • {item.frameLabel}
                        </p>
                        <div className="flex items-center gap-2 mb-3">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-12 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          {item.quantity > 1 && (
                            <p className="text-xs text-muted-foreground">
                              ${item.price} each
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="p-6 sticky top-4">
                  <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                  
                  {/* Promo Code */}
                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">
                      Promo Code
                    </label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <Button 
                        variant="outline"
                        onClick={handleApplyPromo}
                      >
                        <Tag className="w-4 h-4" />
                        Apply
                      </Button>
                    </div>
                    {discount > 0 && (
                      <p className="text-sm text-green-600 mt-2">
                        ✓ Discount applied: -${discount.toFixed(2)}
                      </p>
                    )}
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-base">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold">${subtotal.toFixed(2)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-base text-green-600">
                        <span>Discount</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-base">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-primary font-semibold">FREE</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span className="text-primary">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button variant="hero" size="lg" className="w-full mb-3">
                    Proceed to Checkout
                  </Button>
                  
                  <Link to="/products">
                    <Button variant="outline" size="lg" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>

                  {/* Trust Badges */}
                  <div className="mt-6 pt-6 border-t space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      <span>Free shipping on all orders</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      <span>100% satisfaction guarantee</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      <span>Secure checkout</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
