import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Package, Truck, CheckCircle, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [tracking, setTracking] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      setTracking({
        orderNumber: orderNumber,
        status: "In Transit",
        estimatedDelivery: "December 28, 2025",
        items: [
          { name: "16×20 Canvas Print - Gallery Wrap", quantity: 1 },
          { name: "11×14 Framed Canvas Print", quantity: 2 }
        ],
        timeline: [
          { status: "Order Placed", date: "Dec 20, 2025", time: "10:30 AM", completed: true },
          { status: "Processing", date: "Dec 21, 2025", time: "2:15 PM", completed: true },
          { status: "In Production", date: "Dec 22, 2025", time: "9:00 AM", completed: true },
          { status: "Quality Check", date: "Dec 23, 2025", time: "4:20 PM", completed: true },
          { status: "Shipped", date: "Dec 24, 2025", time: "11:45 AM", completed: true },
          { status: "In Transit", date: "Dec 25, 2025", time: "8:30 AM", completed: true },
          { status: "Out for Delivery", date: "Dec 28, 2025", time: "Est. 9:00 AM", completed: false },
          { status: "Delivered", date: "Dec 28, 2025", time: "Pending", completed: false }
        ],
        carrier: "FedEx",
        trackingNumber: "FX1234567890"
      });
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Package className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Track Your Order
          </h1>
          <p className="text-lg text-muted-foreground">
            Enter your order details to see real-time tracking information
          </p>
        </div>

        {/* Search Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Order Information</CardTitle>
            <CardDescription>
              Enter your order number and email address to track your shipment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleTrack} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="orderNumber">Order Number</Label>
                <Input
                  id="orderNumber"
                  placeholder="e.g., #12345"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSearching}>
                {isSearching ? "Searching..." : "Track Order"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Tracking Results */}
        {tracking && (
          <div className="space-y-6">
            {/* Status Overview */}
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Order Number</div>
                    <div className="font-semibold">{tracking.orderNumber}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Status</div>
                    <Badge variant="secondary" className="gap-1">
                      <Truck className="w-3 h-3" />
                      {tracking.status}
                    </Badge>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Estimated Delivery</div>
                    <div className="font-semibold">{tracking.estimatedDelivery}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Carrier Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Shipping Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Carrier</span>
                    <span className="font-medium">{tracking.carrier}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tracking Number</span>
                    <span className="font-medium font-mono text-sm">{tracking.trackingNumber}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Order Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tracking.items.map((item: any, index: number) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-foreground">{item.name}</span>
                      <span className="text-muted-foreground">Qty: {item.quantity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tracking Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tracking.timeline.map((event: any, index: number) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          event.completed ? 'bg-primary' : 'bg-muted'
                        }`}>
                          {event.completed ? (
                            <CheckCircle className="w-5 h-5 text-primary-foreground" />
                          ) : (
                            <Clock className="w-5 h-5 text-muted-foreground" />
                          )}
                        </div>
                        {index < tracking.timeline.length - 1 && (
                          <div className={`w-0.5 h-12 ${
                            event.completed ? 'bg-primary' : 'bg-border'
                          }`} />
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className={`font-semibold ${
                          event.completed ? 'text-foreground' : 'text-muted-foreground'
                        }`}>
                          {event.status}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {event.date} • {event.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Help Section */}
        <Card className="mt-8">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                If you have questions about your order, our support team is here to help
              </p>
              <Button variant="outline">Contact Support</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default TrackOrder;
