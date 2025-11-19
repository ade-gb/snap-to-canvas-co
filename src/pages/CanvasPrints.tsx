import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Filter } from "lucide-react";
import { SEO } from "@/components/SEO";
import { createCollectionSchema, createBreadcrumbSchema } from "@/utils/schemas";
import familyCanvas from "@/assets/family-canvas.jpg";
import petCanvas from "@/assets/pet-canvas.jpg";
import sunsetCanvas from "@/assets/sunset-canvas.jpg";
import weddingCanvas from "@/assets/wedding-canvas.jpg";
import landscapeCanvas from "@/assets/landscape-canvas.jpg";
import babyCanvas from "@/assets/baby-canvas.jpg";
import cityCanvas from "@/assets/city-canvas.jpg";
import floralCanvas from "@/assets/floral-canvas.jpg";
import workspaceCanvas from "@/assets/workspace-canvas.jpg";
import canvasMockup from "@/assets/canvas-mockup.jpg";

const categories = [
  { id: "all", label: "All Canvas Prints" },
  { id: "family", label: "Family" },
  { id: "pets", label: "Pets" },
  { id: "weddings", label: "Weddings" },
  { id: "travel", label: "Travel" },
  { id: "nature", label: "Nature" },
  { id: "babies", label: "Babies" },
];

const allProducts = [
  {
    id: "gallery-wrap",
    name: "Family Portrait Canvas",
    description: "Preserve precious family moments in stunning detail with archival-quality printing.",
    startingPrice: 12.99,
    originalPrice: 145,
    image: familyCanvas,
    category: "family",
    rating: 5,
    reviews: 324,
    bestseller: true,
  },
  {
    id: "framed-canvas",
    name: "Pet Portrait Canvas",
    description: "Celebrate your furry friends with a beautiful canvas that captures their personality.",
    startingPrice: 12.99,
    originalPrice: 145,
    image: petCanvas,
    category: "pets",
    rating: 5,
    reviews: 289,
    bestseller: true,
  },
  {
    id: "split-canvas",
    name: "Travel Memory Canvas",
    description: "Bring your adventures home. Display your favorite travel photos in stunning clarity.",
    startingPrice: 13.99,
    originalPrice: 149,
    image: sunsetCanvas,
    category: "travel",
    rating: 5,
    reviews: 198,
    bestseller: false,
  },
  {
    id: "museum-wrap",
    name: "Wedding Canvas",
    description: "Turn your special day into timeless wall art. Perfect for newlyweds and anniversaries.",
    startingPrice: 15.99,
    originalPrice: 159,
    image: weddingCanvas,
    category: "weddings",
    rating: 5,
    reviews: 412,
    bestseller: true,
  },
  {
    id: "landscape-canvas",
    name: "Landscape Canvas",
    description: "Breathtaking nature scenes printed on premium canvas. Bring the outdoors inside.",
    startingPrice: 13.99,
    originalPrice: 149,
    image: landscapeCanvas,
    category: "nature",
    rating: 5,
    reviews: 156,
    bestseller: false,
  },
  {
    id: "baby-canvas",
    name: "Baby Portrait Canvas",
    description: "Capture precious newborn moments forever with professional canvas printing.",
    startingPrice: 12.99,
    originalPrice: 145,
    image: babyCanvas,
    category: "babies",
    rating: 5,
    reviews: 267,
    bestseller: true,
  },
  {
    id: "city-canvas",
    name: "City Skyline Split Canvas",
    description: "Modern urban photography on multi-panel canvas sets for dramatic wall displays.",
    startingPrice: 18.95,
    originalPrice: 169,
    image: cityCanvas,
    category: "travel",
    rating: 5,
    reviews: 143,
    bestseller: false,
  },
  {
    id: "floral-canvas",
    name: "Floral Art Canvas",
    description: "Beautiful botanical prints that add elegance and color to any room.",
    startingPrice: 15.99,
    originalPrice: 159,
    image: floralCanvas,
    category: "nature",
    rating: 5,
    reviews: 221,
    bestseller: false,
  },
  {
    id: "workspace-canvas",
    name: "Workspace Motivational Canvas",
    description: "Inspiring art for your office or workspace. Boost creativity and productivity.",
    startingPrice: 14.99,
    originalPrice: 155,
    image: workspaceCanvas,
    category: "nature",
    rating: 5,
    reviews: 189,
    bestseller: false,
  },
];

const CanvasPrints = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Custom Canvas Prints - Museum Quality"
        description="Premium custom canvas prints from $12.99. Gallery-wrapped, archival-quality printing with free shipping. Transform your photos into stunning wall art."
        keywords="custom canvas prints, museum quality canvas, gallery wrap canvas, photo to canvas"
        schema={createCollectionSchema(allProducts)}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-subtle py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Premium Canvas Prints</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Museum-Quality Canvas Prints
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your favorite photos into stunning gallery-wrapped canvas art. 
            Archival quality printing that lasts for generations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild className="shadow-soft">
              <Link to="/upload">Upload Your Photo</Link>
            </Button>
            <Button size="lg" variant="outline">
              View Sizes & Pricing
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

      {/* Canvas Display Inspiration */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Canvas Print Inspiration
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how our premium canvas prints look in real spaces
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <img 
                src={canvasMockup} 
                alt="Canvas print mockup in modern living room"
                className="w-full h-full object-cover"
              />
            </Card>
            <Card className="overflow-hidden">
              <img 
                src={workspaceCanvas} 
                alt="Canvas art in office workspace"
                className="w-full h-full object-cover"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Canvas Prints */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Why Choose Canvas Prints?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Museum-Quality Materials</h3>
              <p className="text-muted-foreground">
                Printed on premium canvas using archival inks that resist fading for 100+ years.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Gallery-Wrapped & Ready to Hang</h3>
              <p className="text-muted-foreground">
                1.5" thick wooden frames with wrapped edges. Arrives ready to hang with mounting hardware.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Vibrant Colors</h3>
              <p className="text-muted-foreground">
                Advanced printing technology delivers rich, true-to-life colors with stunning depth.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CanvasPrints;
