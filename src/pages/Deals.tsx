import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock, Star, Gift, Percent } from "lucide-react";

const Deals = () => {
  const deals = [
    {
      id: 1,
      title: "50% Off All Canvas Prints",
      description: "Limited time offer on all sizes",
      discount: "50% OFF",
      expiresIn: "2 days",
      image: "/placeholder.svg",
      category: "Canvas Prints"
    },
    {
      id: 2,
      title: "Buy 2 Get 1 Free",
      description: "Mix and match any canvas sizes",
      discount: "BOGO",
      expiresIn: "5 days",
      image: "/placeholder.svg",
      category: "Special Offer"
    },
    {
      id: 3,
      title: "Free Shipping on Orders $75+",
      description: "No code needed, automatically applied",
      discount: "FREE SHIP",
      expiresIn: "7 days",
      image: "/placeholder.svg",
      category: "Shipping"
    },
    {
      id: 4,
      title: "20% Off Multi-Panel Sets",
      description: "Create stunning wall displays",
      discount: "20% OFF",
      expiresIn: "3 days",
      image: "/placeholder.svg",
      category: "Multi-Panel"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Percent className="w-4 h-4 mr-2" />
            Limited Time Offers
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Exclusive Deals & Promotions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Save big on custom canvas prints with our special offers. Limited time only!
          </p>
        </div>

        {/* Flash Sale Banner */}
        <Card className="mb-12 bg-gradient-hero text-primary-foreground border-0">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Star className="w-6 h-6 fill-current" />
              <h2 className="text-2xl font-bold">Flash Sale!</h2>
              <Star className="w-6 h-6 fill-current" />
            </div>
            <p className="text-lg mb-4">Up to 60% off on selected canvas prints</p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">12</div>
                <div className="text-xs">Hours</div>
              </div>
              <div className="text-2xl">:</div>
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">34</div>
                <div className="text-xs">Minutes</div>
              </div>
              <div className="text-2xl">:</div>
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">56</div>
                <div className="text-xs">Seconds</div>
              </div>
            </div>
            <Link to="/products">
              <Button variant="secondary" size="lg">
                Shop Flash Sale
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {deals.map((deal) => (
            <Card key={deal.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="destructive" className="text-xs">
                    {deal.discount}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="w-3 h-3 mr-1" />
                    {deal.expiresIn}
                  </div>
                </div>
                <CardTitle className="text-lg">{deal.title}</CardTitle>
                <CardDescription>{deal.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <Badge variant="outline" className="text-xs">
                  {deal.category}
                </Badge>
              </CardContent>
              <CardFooter>
                <Link to="/products" className="w-full">
                  <Button className="w-full" variant="outline">
                    Shop Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bundle Deals */}
        <div className="bg-card rounded-lg p-8 border">
          <div className="flex items-center gap-2 mb-6">
            <Gift className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Bundle & Save</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Starter Bundle</CardTitle>
                <CardDescription>Perfect for beginners</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">$99</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 3x 11×14 Canvas Prints</li>
                  <li>• Free Shipping</li>
                  <li>• Gallery Wrap Included</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Bundle</Button>
              </CardFooter>
            </Card>

            <Card className="border-primary border-2">
              <CardHeader>
                <Badge className="w-fit mb-2">Most Popular</Badge>
                <CardTitle>Pro Bundle</CardTitle>
                <CardDescription>Best value for money</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">$199</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 5x 16×20 Canvas Prints</li>
                  <li>• Free Shipping</li>
                  <li>• Premium Frames</li>
                  <li>• 20% Off Future Orders</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Bundle</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Premium Bundle</CardTitle>
                <CardDescription>For the enthusiasts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">$349</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 8x Mixed Size Prints</li>
                  <li>• Free Priority Shipping</li>
                  <li>• Luxury Frames</li>
                  <li>• 30% Off Future Orders</li>
                  <li>• Free Design Consultation</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Bundle</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Deals;
