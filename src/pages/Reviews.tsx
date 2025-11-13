import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Users, Star, Upload } from "lucide-react";

const Reviews = () => {
  const featuredReviews = [
    { 
      name: "Sarah M.", 
      rating: 5, 
      text: "Absolutely stunning quality! The colors are vibrant and the canvas feels premium. Will definitely order again!", 
      date: "2 days ago",
      verified: true
    },
    { 
      name: "James P.", 
      rating: 5, 
      text: "Fast shipping and beautiful results. Turned my vacation photos into amazing wall art!", 
      date: "1 week ago",
      verified: true
    },
    { 
      name: "Emily R.", 
      rating: 5, 
      text: "Perfect gift for my parents' anniversary. They loved it! The frame quality is exceptional.", 
      date: "2 weeks ago",
      verified: true
    },
    { 
      name: "Michael T.", 
      rating: 5, 
      text: "Best canvas printing service I've used. Customer service was excellent and helped me choose the perfect size.", 
      date: "3 weeks ago",
      verified: true
    },
    { 
      name: "Lisa K.", 
      rating: 5, 
      text: "The quality exceeded my expectations. My family photos look absolutely beautiful on the wall!", 
      date: "1 month ago",
      verified: true
    },
    { 
      name: "David W.", 
      rating: 5, 
      text: "Amazing product! The canvas arrived well-packaged and the print quality is outstanding.", 
      date: "1 month ago",
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Users className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Customer Love & Creations
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our customers are saying and creating with their canvas prints
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Happy Customers", value: "50,000+" },
            { label: "Average Rating", value: "4.9/5" },
            { label: "5-Star Reviews", value: "95%" },
            { label: "Repeat Customers", value: "78%" }
          ].map((stat, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Reviews with Photos */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Featured Reviews</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredReviews.slice(0, 3).map((review, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-shadow border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-semibold">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold">{review.name}</p>
                      {review.verified && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Verified</span>
                      )}
                    </div>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">"{review.text}"</p>
                <p className="text-xs text-muted-foreground">{review.date}</p>
                <div className="aspect-square rounded-xl overflow-hidden bg-muted mt-4">
                  <img
                    src="/placeholder.svg"
                    alt={`${review.name}'s canvas`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Reviews */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredReviews.map((review, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-semibold flex-shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-semibold">{review.name}</p>
                      {review.verified && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Verified</span>
                      )}
                    </div>
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-2">"{review.text}"</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Display Ideas Gallery */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Display Ideas & Inspiration</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how our customers transform their spaces with creative canvas arrangements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Multi-Canvas Family Wall */}
            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-soft hover:shadow-elegant transition-all">
              <div className="aspect-[4/5] bg-muted/50 relative">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="grid grid-cols-3 gap-2 w-full h-full">
                    <div className="bg-background/80 rounded-lg shadow-md"></div>
                    <div className="bg-background/80 rounded-lg shadow-md col-span-2 row-span-2"></div>
                    <div className="bg-background/80 rounded-lg shadow-md"></div>
                    <div className="bg-background/80 rounded-lg shadow-md col-span-2"></div>
                    <div className="bg-background/80 rounded-lg shadow-md"></div>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-border">
                <h3 className="font-semibold text-lg mb-2">Multi-Canvas Gallery Wall</h3>
                <p className="text-sm text-muted-foreground">Mix different sizes to create a stunning family photo display</p>
              </div>
            </div>

            {/* Triptych Layout */}
            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-soft hover:shadow-elegant transition-all">
              <div className="aspect-[4/5] bg-muted/50 relative">
                <div className="absolute inset-0 flex items-center justify-center p-8 gap-3">
                  <div className="flex-1 h-3/4 bg-background/80 rounded-lg shadow-md"></div>
                  <div className="flex-1 h-full bg-background/80 rounded-lg shadow-md"></div>
                  <div className="flex-1 h-3/4 bg-background/80 rounded-lg shadow-md"></div>
                </div>
              </div>
              <div className="p-6 border-t border-border">
                <h3 className="font-semibold text-lg mb-2">Triptych Display</h3>
                <p className="text-sm text-muted-foreground">Three vertical canvases for a modern, sophisticated look</p>
              </div>
            </div>

            {/* Framed Gallery */}
            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-soft hover:shadow-elegant transition-all">
              <div className="aspect-[4/5] bg-muted/50 relative">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="grid grid-cols-4 grid-rows-3 gap-2 w-full h-full">
                    <div className="bg-background/80 rounded-md shadow-md"></div>
                    <div className="bg-background/80 rounded-md shadow-md col-span-2 row-span-2"></div>
                    <div className="bg-background/80 rounded-md shadow-md"></div>
                    <div className="bg-background/80 rounded-md shadow-md row-span-2"></div>
                    <div className="bg-background/80 rounded-md shadow-md"></div>
                    <div className="bg-background/80 rounded-md shadow-md col-span-2"></div>
                    <div className="bg-background/80 rounded-md shadow-md"></div>
                    <div className="bg-background/80 rounded-md shadow-md"></div>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-border">
                <h3 className="font-semibold text-lg mb-2">Artistic Gallery Wall</h3>
                <p className="text-sm text-muted-foreground">Asymmetric arrangement with varying frame sizes</p>
              </div>
            </div>

            {/* Split Canvas */}
            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-soft hover:shadow-elegant transition-all">
              <div className="aspect-[4/5] bg-muted/50 relative">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative w-full h-3/4">
                    <div className="absolute left-0 w-[45%] h-full bg-background/80 rounded-lg shadow-xl" style={{ transform: 'translateZ(20px)' }}></div>
                    <div className="absolute left-[25%] w-[50%] h-full bg-background/80 rounded-lg shadow-xl" style={{ transform: 'translateZ(40px) scale(1.1)' }}></div>
                    <div className="absolute right-0 w-[45%] h-full bg-background/80 rounded-lg shadow-xl" style={{ transform: 'translateZ(20px)' }}></div>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-border">
                <h3 className="font-semibold text-lg mb-2">Multi-Panel Split Canvas</h3>
                <p className="text-sm text-muted-foreground">Single image split across multiple canvases for dramatic effect</p>
              </div>
            </div>
          </div>
        </div>

        {/* Real Customer Photos */}
        <div className="bg-muted/30 rounded-3xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Real Customer Photos</h2>
            <p className="text-muted-foreground">
              See the quality and beauty of our canvas prints in real homes
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div 
                key={i} 
                className="aspect-square rounded-xl overflow-hidden hover:scale-[1.02] transition-all cursor-pointer shadow-md hover:shadow-xl"
              >
                <img
                  src="/placeholder.svg"
                  alt={`Customer canvas ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" variant="default">View Full Gallery</Button>
          </div>
        </div>

        {/* Write a Review CTA */}
        <div className="bg-gradient-hero text-primary-foreground rounded-3xl p-8 md:p-12 text-center">
          <Upload className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">Share Your Experience</h3>
          <p className="mb-6 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            We'd love to hear about your experience and see your beautiful canvas prints!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="secondary" size="lg">
              Write a Review
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
              Upload Your Photo
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reviews;
