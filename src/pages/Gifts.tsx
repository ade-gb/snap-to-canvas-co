import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Heart, Gift, Calendar, Sparkles, Baby, Home } from "lucide-react";

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
