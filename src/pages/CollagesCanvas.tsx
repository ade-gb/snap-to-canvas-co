import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Filter } from "lucide-react";
import galleryWall1 from "@/assets/gallery-wall-1.jpg";
import galleryWall2 from "@/assets/gallery-wall-2.jpg";
import galleryWall3 from "@/assets/gallery-wall-3.jpg";
import galleryWall4 from "@/assets/gallery-wall-4.jpg";
import galleryWall5 from "@/assets/gallery-wall-5.jpg";

const categories = [
  { id: "all", label: "All Collages" },
  { id: "family", label: "Family" },
  { id: "travel", label: "Travel" },
  { id: "wedding", label: "Wedding" },
  { id: "gallery", label: "Gallery Walls" },
];

const allProducts = [
  {
    id: "gallery-wall-family",
    name: "Family Photo Collage - 5 Panel",
    description: "Create a stunning gallery wall with your favorite family memories across 5 coordinated canvases.",
    startingPrice: 49.99,
    originalPrice: 299,
    image: galleryWall1,
    category: "family",
    rating: 5,
    reviews: 412,
    bestseller: true,
  },
  {
    id: "gallery-wall-travel",
    name: "Travel Memories Gallery Set",
    description: "Showcase your adventures with a professionally designed multi-panel travel collage.",
    startingPrice: 54.99,
    originalPrice: 319,
    image: galleryWall2,
    category: "travel",
    rating: 5,
    reviews: 267,
    bestseller: true,
  },
  {
    id: "gallery-wall-modern",
    name: "Modern Gallery Wall - 7 Piece",
    description: "Contemporary design featuring 7 canvases in varying sizes for a sophisticated look.",
    startingPrice: 59.99,
    originalPrice: 349,
    image: galleryWall3,
    category: "gallery",
    rating: 5,
    reviews: 338,
    bestseller: true,
  },
  {
    id: "gallery-wall-wedding",
    name: "Wedding Story Collage",
    description: "Tell your love story with a romantic multi-canvas wedding photo display.",
    startingPrice: 64.99,
    originalPrice: 379,
    image: galleryWall4,
    category: "wedding",
    rating: 5,
    reviews: 445,
    bestseller: true,
  },
  {
    id: "gallery-wall-statement",
    name: "Statement Gallery Wall - 9 Piece",
    description: "Make a bold statement with our largest collage set featuring 9 perfectly arranged canvases.",
    startingPrice: 69.99,
    originalPrice: 399,
    image: galleryWall5,
    category: "gallery",
    rating: 5,
    reviews: 289,
    bestseller: false,
  },
];

const CollagesCanvas = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-subtle py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Gallery Wall Collections</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Canvas Photo Collages & Gallery Walls
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your space with professionally designed multi-panel canvas sets. 
            Perfect for telling your story across multiple images.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild className="shadow-soft">
              <Link to="/upload">Create Your Collage</Link>
            </Button>
            <Button size="lg" variant="outline">
              Design Ideas
            </Button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 border-b border-border/50">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <h2 className="text-lg font-semibold text-foreground">Filter by Category</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  {product.bestseller && (
                    <Badge className="absolute top-4 left-4 z-10 bg-primary shadow-soft">
                      Bestseller
                    </Badge>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{product.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{product.description}</p>
                  
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-foreground">
                      ${product.startingPrice}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                    <Badge variant="secondary" className="ml-auto">
                      {Math.round(((product.originalPrice - product.startingPrice) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>

                  <Button asChild className="w-full">
                    <Link to={`/product/${product.id}`}>Customize & Order</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Wall Design Tips */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Gallery Wall Inspiration
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how our collage sets transform walls into stunning focal points
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <img 
                src={galleryWall1} 
                alt="Family gallery wall display"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Symmetrical Layout</h3>
                <p className="text-sm text-muted-foreground">Perfect balance for formal spaces</p>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <img 
                src={galleryWall3} 
                alt="Modern gallery wall"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Organic Layout</h3>
                <p className="text-sm text-muted-foreground">Natural, flowing arrangement</p>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <img 
                src={galleryWall5} 
                alt="Statement gallery wall"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Grid Layout</h3>
                <p className="text-sm text-muted-foreground">Clean, contemporary aesthetic</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Collage Canvas Sets */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Why Choose Canvas Collages?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Pre-Designed Layouts</h3>
              <p className="text-muted-foreground">
                Professionally designed arrangements take the guesswork out of gallery wall creation.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Complete Sets</h3>
              <p className="text-muted-foreground">
                Everything you need in one package with precise spacing guides and mounting templates.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Maximum Impact</h3>
              <p className="text-muted-foreground">
                Create dramatic focal points that showcase multiple memories in a cohesive design.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollagesCanvas;
