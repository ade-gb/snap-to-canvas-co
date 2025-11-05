import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Filter } from "lucide-react";
import familyCanvas from "@/assets/family-canvas.jpg";
import petCanvas from "@/assets/pet-canvas.jpg";
import sunsetCanvas from "@/assets/sunset-canvas.jpg";
import weddingCanvas from "@/assets/wedding-canvas.jpg";
import landscapeCanvas from "@/assets/landscape-canvas.jpg";
import babyCanvas from "@/assets/baby-canvas.jpg";
import cityCanvas from "@/assets/city-canvas.jpg";
import floralCanvas from "@/assets/floral-canvas.jpg";

const categories = [
  { id: "all", label: "All Products" },
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
    startingPrice: 49,
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
    startingPrice: 49,
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
    startingPrice: 79,
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
    startingPrice: 79,
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
    startingPrice: 59,
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
    startingPrice: 49,
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
    startingPrice: 129,
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
    startingPrice: 59,
    image: floralCanvas,
    category: "nature",
    rating: 5,
    reviews: 201,
    bestseller: false,
  },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = selectedCategory === "all" 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Canvas Collections
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Transform your memories into stunning wall art. Premium quality, free shipping, 100% satisfaction guaranteed.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <h2 className="text-xl font-semibold">Filter by Category</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all"
              >
                {category.label}
                {category.id === "all" && (
                  <Badge variant="secondary" className="ml-2">
                    {allProducts.length}
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-soft transition-all group">
              {product.bestseller && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-primary text-primary-foreground shadow-lg">
                    Bestseller
                  </Badge>
                </div>
              )}
              <div className="aspect-square overflow-hidden bg-secondary relative">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-1">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-sm text-muted-foreground">Starting at</span>
                  <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                    ${product.startingPrice}
                  </span>
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

        {/* Why Choose Us Section */}
        <section className="bg-muted/30 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose <span className="bg-gradient-hero bg-clip-text text-transparent">Snap4Canvas</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">
                Museum-grade materials and archival inks for lasting beauty
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">★</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Guarantee</h3>
              <p className="text-muted-foreground">
                Love it or your money back, no questions asked
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-muted-foreground">
                Fast, free delivery on all orders nationwide
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
