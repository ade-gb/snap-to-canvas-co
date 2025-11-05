import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import canvasMockup from "@/assets/canvas-mockup.jpg";
import workspaceCanvas from "@/assets/workspace-canvas.jpg";

const featuredProducts = [
  {
    id: "gallery-wrap",
    name: "Gallery Wrap Canvas",
    description: "Classic canvas wrap with image extending around the edges",
    startingPrice: 49,
    image: canvasMockup,
  },
  {
    id: "framed-canvas",
    name: "Framed Canvas Print",
    description: "Premium canvas with your choice of wood frame",
    startingPrice: 79,
    image: workspaceCanvas,
  },
  {
    id: "split-canvas",
    name: "Split Canvas Set",
    description: "Multi-panel canvas for a modern gallery wall look",
    startingPrice: 129,
    image: canvasMockup,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      
      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular <span className="bg-gradient-hero bg-clip-text text-transparent">Canvas Styles</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our most loved canvas options
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="outline" size="lg">
                View All Products
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
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
