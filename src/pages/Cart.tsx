import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = []; // Will be populated with actual cart data later

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">
            Shopping <span className="bg-gradient-hero bg-clip-text text-transparent">Cart</span>
          </h1>

          {cartItems.length === 0 ? (
            <Card className="p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-primary-light rounded-full flex items-center justify-center">
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
            <div className="space-y-6">
              {/* Cart items will be displayed here */}
              <Card className="p-6">
                <div className="flex gap-4">
                  <div className="w-24 h-24 bg-secondary rounded"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Gallery Wrap Canvas</h3>
                    <p className="text-sm text-muted-foreground">16" × 20" • No Frame</p>
                    <p className="text-lg font-bold text-primary mt-2">$89</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between text-lg">
                    <span>Subtotal</span>
                    <span className="font-semibold">$89</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span>Shipping</span>
                    <span className="text-primary font-semibold">FREE</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between text-2xl font-bold">
                    <span>Total</span>
                    <span className="text-primary">$89</span>
                  </div>
                  <Button variant="hero" size="lg" className="w-full">
                    Proceed to Checkout
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
