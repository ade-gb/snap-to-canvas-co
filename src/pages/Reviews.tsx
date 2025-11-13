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

        {/* Customer Gallery */}
        <div className="bg-muted/30 rounded-3xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Customer Gallery</h2>
            <p className="text-muted-foreground">
              Beautiful canvas prints created by our customers
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
