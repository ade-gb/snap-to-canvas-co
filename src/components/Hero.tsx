import { Button } from "@/components/ui/button";
import { Upload, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center bg-gradient-subtle overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Beautiful canvas prints in a modern living room" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Turn Your Memories Into{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Stunning Canvas Art
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Upload your favorite photos and create museum-quality canvas prints. 
            Custom sizes, premium frames, and shipped right to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/upload">
              <Button variant="hero" size="lg" className="w-full sm:w-auto group">
                <Upload className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Create Your Canvas
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Browse Products
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Easy Returns</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
