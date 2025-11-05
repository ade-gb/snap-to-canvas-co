import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Clock, Star, Gift, Percent, TrendingUp, Users, Mail, Tag } from "lucide-react";
import { useState } from "react";

const Deals = () => {
  const [email, setEmail] = useState("");

  const deals = [
    {
      id: 1,
      title: "50% Off All Canvas Prints",
      description: "Limited time offer on all sizes",
      discount: "50% OFF",
      expiresIn: "2 days",
      image: "/placeholder.svg",
      category: "Canvas Prints",
      saved: "$89.99"
    },
    {
      id: 2,
      title: "Buy 2 Get 1 Free",
      description: "Mix and match any canvas sizes",
      discount: "BOGO",
      expiresIn: "5 days",
      image: "/placeholder.svg",
      category: "Special Offer",
      saved: "$129.99"
    },
    {
      id: 3,
      title: "Free Shipping on Orders $75+",
      description: "No code needed, automatically applied",
      discount: "FREE SHIP",
      expiresIn: "7 days",
      image: "/placeholder.svg",
      category: "Shipping",
      saved: "$19.99"
    },
    {
      id: 4,
      title: "20% Off Multi-Panel Sets",
      description: "Create stunning wall displays",
      discount: "20% OFF",
      expiresIn: "3 days",
      image: "/placeholder.svg",
      category: "Multi-Panel",
      saved: "$59.99"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Saved over $100 with the bundle deal! The quality is amazing and shipping was fast.",
      product: "Family Portrait Bundle"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "The flash sale price was unbeatable. Got three large canvases for the price of one!",
      product: "24×36 Canvas Set"
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "Love the BOGO deal! Perfect for decorating multiple rooms without breaking the bank.",
      product: "Mixed Size Bundle"
    }
  ];

  const trendingDeals = [
    { name: "Wedding Photo Bundle", popularity: 95, savings: "$149" },
    { name: "Family Portrait Set", popularity: 88, savings: "$99" },
    { name: "Pet Canvas Collection", popularity: 82, savings: "$79" },
    { name: "Travel Memories Pack", popularity: 76, savings: "$119" }
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
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Today's Best Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {deal.category}
                    </Badge>
                    <span className="text-sm font-semibold text-primary">
                      Save {deal.saved}
                    </span>
                  </div>
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
        </div>

        {/* Trending Deals */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <CardTitle>Trending Deals</CardTitle>
            </div>
            <CardDescription>Most popular offers this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trendingDeals.map((deal, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{deal.name}</span>
                      <span className="text-sm text-primary font-semibold">
                        Save {deal.savings}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary rounded-full h-2 transition-all"
                        style={{ width: `${deal.popularity}%` }}
                      />
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {deal.popularity}% claimed
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Bundle Deals */}
        <div className="mb-12">
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
                <p className="text-sm text-muted-foreground line-through mb-4">
                  Regular: $189
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 3x 11×14 Canvas Prints</li>
                  <li>• Free Shipping</li>
                  <li>• Gallery Wrap Included</li>
                  <li>• Ready to Hang</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Bundle</Button>
              </CardFooter>
            </Card>

            <Card className="border-primary border-2 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="shadow-lg">Most Popular</Badge>
              </div>
              <CardHeader className="pt-8">
                <CardTitle>Pro Bundle</CardTitle>
                <CardDescription>Best value for money</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">$199</div>
                <p className="text-sm text-muted-foreground line-through mb-4">
                  Regular: $399
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 5x 16×20 Canvas Prints</li>
                  <li>• Free Priority Shipping</li>
                  <li>• Premium Frames</li>
                  <li>• 20% Off Future Orders</li>
                  <li>• Quality Guarantee</li>
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
                <p className="text-sm text-muted-foreground line-through mb-4">
                  Regular: $699
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 8x Mixed Size Prints</li>
                  <li>• Free Express Shipping</li>
                  <li>• Luxury Frames</li>
                  <li>• 30% Off Future Orders</li>
                  <li>• Free Design Consultation</li>
                  <li>• Lifetime Warranty</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Bundle</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Referral Program */}
        <Card className="mb-12 bg-card">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Refer a Friend</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Give your friends 20% off their first order and get $20 credit for every successful referral. It's a win-win!
                </p>
                <div className="flex gap-4">
                  <Button size="lg">Get Referral Link</Button>
                  <Button size="lg" variant="outline">Learn More</Button>
                </div>
              </div>
              <div className="bg-primary-light rounded-lg p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">20%</div>
                    <div className="text-sm text-muted-foreground">Friend Discount</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">$20</div>
                    <div className="text-sm text-muted-foreground">Your Credit</div>
                  </div>
                  <div className="col-span-2 pt-4 border-t border-border">
                    <div className="text-2xl font-bold text-primary mb-1">Unlimited</div>
                    <div className="text-sm text-muted-foreground">Referral Rewards</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Customer Testimonials */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.product}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-gradient-hero text-primary-foreground border-0">
          <CardContent className="p-8 text-center">
            <Mail className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Never Miss a Deal</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about exclusive offers, flash sales, and new products.
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-foreground"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
            <p className="text-xs mt-4 opacity-90">
              Get 10% off your first order when you subscribe
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Deals;
