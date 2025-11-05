import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Package, Truck, CheckCircle, Clock, MapPin, Mail, Phone, MessageCircle, Calendar, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

        {/* Additional Features when tracking is active */}
        {tracking && (
          <>
            {/* Delivery Instructions */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-primary" />
                  Delivery Instructions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="instructions">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="instructions">Special Instructions</TabsTrigger>
                    <TabsTrigger value="preferences">Delivery Preferences</TabsTrigger>
                  </TabsList>
                  <TabsContent value="instructions" className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        Leave package at front door. Ring doorbell upon delivery.
                      </p>
                    </div>
                    <Button variant="outline" className="w-full">
                      Update Instructions
                    </Button>
                  </TabsContent>
                  <TabsContent value="preferences" className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <span className="text-sm">Signature Required</span>
                        <Badge variant="secondary">No</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <span className="text-sm">Safe Place Delivery</span>
                        <Badge variant="secondary">Front Porch</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <span className="text-sm">Alternate Delivery Date</span>
                        <Badge variant="outline">Not Set</Badge>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Update Preferences
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Expected Delivery Map Section */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Delivery Location
                </CardTitle>
                <CardDescription>Your package will be delivered to</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg p-6 mb-4">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-16 h-16 mx-auto mb-3 text-primary" />
                    <p className="font-medium text-foreground mb-1">John Doe</p>
                    <p className="text-sm">123 Main Street, Apt 4B</p>
                    <p className="text-sm">New York, NY 10001</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Change Delivery Address
                </Button>
              </CardContent>
            </Card>
          </>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Mail className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-1">Email Updates</h3>
              <p className="text-xs text-muted-foreground mb-3">
                Get tracking updates via email
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Subscribe
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Phone className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-1">Call Support</h3>
              <p className="text-xs text-muted-foreground mb-3">
                Speak with our team
              </p>
              <Button variant="outline" size="sm" className="w-full">
                1-800-CANVAS
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <MessageCircle className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-1">Live Chat</h3>
              <p className="text-xs text-muted-foreground mb-3">
                Chat with us now
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Start Chat
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Order History Section (when not tracking) */}
        {!tracking && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Recent Orders
              </CardTitle>
              <CardDescription>
                Your recently placed orders
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((order) => (
                  <div key={order} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                        <Package className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Order #{12340 + order}</p>
                        <p className="text-sm text-muted-foreground">
                          Placed on Dec {15 + order}, 2025
                        </p>
                      </div>
                    </div>
                    <Badge variant={order === 1 ? "secondary" : "outline"}>
                      {order === 1 ? "In Transit" : "Delivered"}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Help Section */}
        <Card className="mt-8">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                If you have questions about your order, our support team is here to help
              </p>
              <div className="flex gap-3 justify-center">
                <Button variant="outline">Contact Support</Button>
                <Button>View All Orders</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default TrackOrder;
