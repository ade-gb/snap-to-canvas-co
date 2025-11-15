import { Navbar } from "@/components/Navbar";
import { PromoPopup } from "@/components/PromoPopup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Star, Check, TrendingUp, Shield, Heart, Package } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import familyCanvas from "@/assets/family-canvas.jpg";
import petCanvas from "@/assets/pet-canvas.jpg";
import sunsetCanvas from "@/assets/sunset-canvas.jpg";
import weddingCanvas from "@/assets/wedding-canvas.jpg";
import landscapeCanvas from "@/assets/landscape-canvas.jpg";
import babyCanvas from "@/assets/baby-canvas.jpg";
import cityCanvas from "@/assets/city-canvas.jpg";
import floralCanvas from "@/assets/floral-canvas.jpg";

const howItWorks = [
  {
    step: 1,
    title: "Upload Your Photo",
    description: "Choose your favorite memory from your device",
  },
  {
    step: 2,
    title: "Select Size & Style",
    description: "Pick the perfect size and frame for your space",
  },
  {
    step: 3,
    title: "We Print & Ship Free",
    description: "Printed in USA with free shipping nationwide",
  },
  {
    step: 4,
    title: "Display & Enjoy",
    description: "Ready to hang and cherish forever",
  },
];

const productShowcase = [
  {
    id: "gallery-wrap",
    image: familyCanvas,
    title: "Family Portrait Canvas",
    description: "Preserve precious family moments in stunning detail with archival-quality printing.",
    price: 12.99,
    originalPrice: 145,
  },
  {
    id: "framed-canvas",
    image: petCanvas,
    title: "Pet Portrait Canvas",
    description: "Celebrate your furry friends with a beautiful canvas that captures their personality.",
    price: 12.99,
    originalPrice: 145,
  },
  {
    id: "split-canvas",
    image: sunsetCanvas,
    title: "Travel Memory Canvas",
    description: "Bring your adventures home. Display your favorite travel photos in stunning clarity.",
    price: 13.99,
    originalPrice: 149,
  },
  {
    id: "museum-wrap",
    image: weddingCanvas,
    title: "Wedding Canvas",
    description: "Turn your special day into timeless wall art. Perfect for newlyweds and anniversaries.",
    price: 15.99,
    originalPrice: 159,
  },
  {
    id: "landscape-canvas",
    image: landscapeCanvas,
    title: "Landscape Canvas",
    description: "Breathtaking nature scenes printed on premium canvas. Bring the outdoors inside.",
    price: 13.99,
    originalPrice: 149,
  },
  {
    id: "baby-canvas",
    image: babyCanvas,
    title: "Baby Portrait Canvas",
    description: "Capture precious newborn moments forever with professional canvas printing.",
    price: 12.99,
    originalPrice: 145,
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "The quality exceeded my expectations! My family photo looks absolutely stunning on the canvas.",
    image: familyCanvas,
  },
  {
    name: "Michael R.",
    rating: 5,
    text: "Fast shipping and incredible quality. The colors are vibrant and exactly like the original photo.",
    image: petCanvas,
  },
  {
    name: "Jessica L.",
    rating: 5,
    text: "I've ordered five canvases now! Each one is perfect. The best gift I've ever given.",
    image: weddingCanvas,
  },
  {
    name: "David K.",
    rating: 5,
    text: "Amazing service from start to finish. The canvas arrived perfectly packaged and ready to hang.",
    image: landscapeCanvas,
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "100% Satisfaction Guarantee",
    description: "Love it or your money back, no questions asked",
  },
  {
    icon: TrendingUp,
    title: "Premium Quality",
    description: "Museum-grade materials and archival inks",
  },
  {
    icon: Package,
    title: "Free USA Shipping",
    description: "Fast, free delivery to all 50 states",
  },
  {
    icon: Heart,
    title: "Made with Care",
    description: "Handcrafted by experienced artisans",
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <PromoPopup />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Beautiful canvas prints"
          className="w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-16">
          <div className="text-center text-white px-4 max-w-3xl animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Transform Your Photos Into Museum-Quality Canvas Art
            </h1>
            <p className="text-lg md:text-xl mb-2 drop-shadow-md">
              Premium custom canvas prints made in the USA
            </p>
            <p className="text-base md:text-lg mb-6 drop-shadow-md">
              Free shipping nationwide • 100% satisfaction guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Main CTA Section */}
      <section className="container mx-auto px-4 -mt-20 relative z-10 mb-16">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 text-center animate-scale-in" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Create Your <span className="bg-gradient-hero bg-clip-text text-transparent">Perfect Canvas</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Professional quality printing on premium canvas. Free shipping, 100% satisfaction guaranteed. 
            Your memories deserve the best.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            className="text-lg px-12 hover-scale"
            onClick={() => navigate("/upload")}
          >
            <Upload className="w-6 h-6" />
            Start Designing Now
          </Button>
        </Card>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It <span className="bg-gradient-hero bg-clip-text text-transparent">Works</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {howItWorks.map((step, idx) => (
              <Card 
                key={step.step} 
                className="p-6 text-center hover:shadow-soft transition-all bg-background hover-scale animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: "both" }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Popular <span className="bg-gradient-hero bg-clip-text text-transparent">Canvas Styles</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {productShowcase.map((product, idx) => (
              <Card 
                key={product.id} 
                className="overflow-hidden hover:shadow-soft transition-all group animate-fade-in hover-scale"
                style={{ animationDelay: `${idx * 0.05}s`, animationFillMode: "both" }}
              >
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg line-through text-muted-foreground">
                        ${product.originalPrice}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs text-muted-foreground">If you order now:</span>
                      <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                        ${product.price}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">+ shipping and handling</span>
                  </div>
                  <Link to={`/product/${product.id}`}>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Customize Now
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our <span className="bg-gradient-hero bg-clip-text text-transparent">Customers Say</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card 
                key={idx} 
                className="p-6 hover:shadow-soft transition-all bg-background hover-scale animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: "both" }}
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary animate-scale-in" style={{ animationDelay: `${(idx * 0.1) + (i * 0.05)}s`, animationFillMode: "both" }} />
                  ))}
                </div>
                <p className="text-foreground/90 mb-4 text-sm italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-sm">— {testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose <span className="bg-gradient-hero bg-clip-text text-transparent">Snap4Canvas</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((feature, idx) => (
              <Card 
                key={idx} 
                className="p-6 text-center hover:shadow-soft transition-all hover-scale animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: "both" }}
              >
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4 animate-scale-in" style={{ animationDelay: `${idx * 0.1 + 0.2}s`, animationFillMode: "both" }} />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers who've transformed their memories into beautiful canvas art
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 text-lg px-12 hover-scale"
              onClick={() => navigate("/upload")}
            >
              <Upload className="w-6 h-6" />
              Upload Your Photo
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-12 hover-scale"
              onClick={() => navigate("/products")}
            >
              Browse Products
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">S4C</span>
              </div>
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Snap4Canvas
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Transform your memories into stunning canvas art
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
              <Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                Products
              </Link>
              <Link to="/deals" className="text-muted-foreground hover:text-foreground transition-colors">
                Deals
              </Link>
              <Link to="/gifts" className="text-muted-foreground hover:text-foreground transition-colors">
                Gifts
              </Link>
              <Link to="/help" className="text-muted-foreground hover:text-foreground transition-colors">
                Help
              </Link>
              <Link to="/track" className="text-muted-foreground hover:text-foreground transition-colors">
                Track Order
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Snap4Canvas. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
