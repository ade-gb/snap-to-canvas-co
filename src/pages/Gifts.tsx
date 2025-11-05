import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Heart, Gift, Calendar, Sparkles, Baby, Home, DollarSign, Truck, Star, Package } from "lucide-react";

const Gifts = () => {
  const occasions = [
    {
      icon: Heart,
      title: "Anniversaries",
      description: "Celebrate love with personalized canvas memories",
      color: "text-red-500"
    },
    {
      icon: Calendar,
      title: "Birthdays",
      description: "Make their special day unforgettable",
      color: "text-primary"
    },
    {
      icon: Baby,
      title: "New Baby",
      description: "Cherish precious first moments forever",
      color: "text-pink-500"
    },
    {
      icon: Home,
      title: "Housewarming",
      description: "Help them make their house a home",
      color: "text-green-500"
    }
  ];

  const giftIdeas = [
    {
      id: 1,
      title: "Wedding Canvas Set",
      price: "$149.99",
      description: "3-panel wedding photo display",
      image: "/placeholder.svg",
      badge: "Bestseller"
    },
    {
      id: 2,
      title: "Family Portrait Canvas",
      price: "$89.99",
      description: "Large format family memories",
      image: "/placeholder.svg",
      badge: "Popular"
    },
    {
      id: 3,
      title: "Pet Portrait Canvas",
      price: "$69.99",
      description: "Honor your furry family member",
      image: "/placeholder.svg",
      badge: "Trending"
    },
    {
      id: 4,
      title: "Travel Memories Collage",
      price: "$129.99",
      description: "Multi-photo travel collection",
      image: "/placeholder.svg",
      badge: "New"
    }
  ];

  const priceRanges = [
    {
      range: "Under $50",
      items: ["8×10 Single Canvas", "11×14 Gallery Wrap", "Digital Gift Card"],
      popular: "Pet Portrait 8×10"
    },
    {
      range: "$50 - $100",
      items: ["16×20 Framed Print", "Multi-Photo Collage", "2-Piece Canvas Set"],
      popular: "Family Portrait 16×20"
    },
    {
      range: "$100 - $200",
      items: ["24×36 Statement Piece", "3-Panel Wall Art", "Premium Framed Collection"],
      popular: "Wedding Canvas Set"
    },
    {
      range: "$200+",
      items: ["Large Format Gallery", "5-Panel Panorama", "Custom Size Premium"],
      popular: "Luxury Multi-Panel Set"
    }
  ];

  const customerStories = [
    {
      name: "Jessica & Mark",
      occasion: "Anniversary Gift",
      image: "/placeholder.svg",
      quote: "Our wedding photo on canvas is stunning! Best anniversary gift ever.",
      rating: 5
    },
    {
      name: "David Thompson",
      occasion: "Father's Day",
      image: "/placeholder.svg",
      quote: "My dad cried when he saw the family portrait canvas. Priceless moment.",
      rating: 5
    },
    {
      name: "Amanda Lee",
      occasion: "Housewarming",
      image: "/placeholder.svg",
      quote: "Perfect housewarming gift! My sister loved the custom size and quality.",
      rating: 5
    }
  ];

  const giftServices = [
    {
      icon: Gift,
      title: "Gift Wrapping",
      description: "Elegant premium wrapping included free",
      price: "Free"
    },
    {
      icon: Truck,
      title: "Express Delivery",
      description: "Guaranteed delivery for special occasions",
      price: "$24.99"
    },
    {
      icon: Package,
      title: "Gift Box Packaging",
      description: "Luxury presentation box with ribbon",
      price: "$14.99"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gift className="w-8 h-8 text-primary" />
            <Badge variant="secondary">Perfect Gift Ideas</Badge>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Gifts They'll Treasure Forever
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your favorite memories into stunning canvas prints that make perfect gifts for any occasion
          </p>
        </div>

        {/* Gift Card Banner */}
        <Card className="mb-12 bg-gradient-hero text-primary-foreground border-0">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-6 h-6" />
                  <h2 className="text-2xl font-bold">Can't Decide?</h2>
                </div>
                <p className="text-lg mb-6">
                  Give them the gift of choice with a Snap4Canvas gift card. Available in any amount.
                </p>
                <Button variant="secondary" size="lg">
                  Purchase Gift Card
                </Button>
              </div>
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <div className="text-sm mb-2">Gift Card Value</div>
                <div className="text-4xl font-bold mb-4">$25 - $500</div>
                <div className="text-sm opacity-90">Delivered instantly via email</div>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-xs">No expiration • Works on all products</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Occasions Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Occasion</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {occasions.map((occasion) => {
              const Icon = occasion.icon;
              return (
                <Card key={occasion.title} className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center">
                        <Icon className={`w-8 h-8 ${occasion.color}`} />
                      </div>
                    </div>
                    <CardTitle>{occasion.title}</CardTitle>
                    <CardDescription>{occasion.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link to="/products" className="w-full">
                      <Button variant="outline" className="w-full">
                        Explore Ideas
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Shop by Price */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Budget</h2>
          <Tabs defaultValue="under50" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="under50">Under $50</TabsTrigger>
              <TabsTrigger value="50-100">$50 - $100</TabsTrigger>
              <TabsTrigger value="100-200">$100 - $200</TabsTrigger>
              <TabsTrigger value="200plus">$200+</TabsTrigger>
            </TabsList>
            {priceRanges.map((range, index) => (
              <TabsContent key={index} value={index === 0 ? "under50" : index === 1 ? "50-100" : index === 2 ? "100-200" : "200plus"}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{range.range}</CardTitle>
                      <Badge variant="secondary">
                        <DollarSign className="w-3 h-3 mr-1" />
                        Best Value
                      </Badge>
                    </div>
                    <CardDescription>Popular gift options in this price range</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Available Options:</h4>
                        <ul className="space-y-2">
                          {range.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-primary-light rounded-lg p-6">
                        <Badge className="mb-3">Most Popular</Badge>
                        <h4 className="font-semibold text-lg mb-2">{range.popular}</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Perfect size and quality for gifting
                        </p>
                        <Link to="/products">
                          <Button className="w-full">View Options</Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Popular Gift Ideas */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Popular Gift Ideas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {giftIdeas.map((gift) => (
              <Card key={gift.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {gift.badge}
                  </Badge>
                  <img
                    src={gift.image}
                    alt={gift.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="text-lg">{gift.title}</CardTitle>
                  <CardDescription>{gift.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{gift.price}</span>
                  <Link to="/upload">
                    <Button>Create Now</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Gift Services */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Gift Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {giftServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Customer Stories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Gift Stories from Our Customers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customerStories.map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{story.name}</CardTitle>
                  <CardDescription>{story.occasion}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">
                    "{story.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-card rounded-lg p-8 border">
          <h2 className="text-2xl font-bold text-center mb-8">Why Snap4Canvas Makes the Perfect Gift</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Personalized & Meaningful</h3>
              <p className="text-sm text-muted-foreground">
                Each canvas tells a unique story that's special to your loved ones
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">
                Museum-grade materials that last a lifetime
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Beautiful Presentation</h3>
              <p className="text-sm text-muted-foreground">
                Ready to hang and beautifully packaged for gifting
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gifts;
