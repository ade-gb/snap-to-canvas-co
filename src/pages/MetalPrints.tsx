import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Filter } from "lucide-react";
import metalCats1 from "@/assets/metal-cats-1.jpg";
import metalCats2 from "@/assets/metal-cats-2.jpg";
import metalBridge from "@/assets/metal-bridge.jpg";
import metalSoccer from "@/assets/metal-soccer.jpg";
import metalCars from "@/assets/metal-cars.jpg";

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
    id: "metal-cats-1",
    name: "Pet Portrait Metal Print - Cat Edition",
    description: "Showcase your feline friend on luminous metal with stunning depth and clarity.",
    startingPrice: 15.99,
    originalPrice: 165,
    image: metalCats1,
    category: "pets",
    rating: 5,
    reviews: 312,
    bestseller: true,
  },
  {
    id: "metal-cats-2",
    name: "Multi-Pet Metal Print",
    description: "Celebrate all your furry friends together on a premium aluminum print.",
    startingPrice: 17.99,
    originalPrice: 175,
    image: metalCats2,
    category: "pets",
    rating: 5,
    reviews: 267,
    bestseller: true,
  },
  {
    id: "metal-bridge",
    name: "Architectural Metal Print",
    description: "Bold structural photography with incredible detail and modern appeal on metal.",
    startingPrice: 18.99,
    originalPrice: 179,
    image: metalBridge,
    category: "travel",
    rating: 5,
    reviews: 198,
    bestseller: false,
  },
  {
    id: "metal-soccer",
    name: "Sports Action Metal Print",
    description: "Capture the energy and excitement of your favorite sports moments on durable metal.",
    startingPrice: 16.99,
    originalPrice: 169,
    image: metalSoccer,
    category: "family",
    rating: 5,
    reviews: 245,
    bestseller: false,
  },
  {
    id: "metal-cars",
    name: "Automotive Metal Print",
    description: "Show off your prized vehicle with vibrant colors and sleek metal finish.",
    startingPrice: 19.99,
    originalPrice: 185,
    image: metalCars,
    category: "travel",
    rating: 5,
    reviews: 189,
    bestseller: false,
  },
];

const MetalPrints = () => {
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
            Metal Print Collections
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Modern aluminum prints with vibrant colors, exceptional durability, and a sleek frameless finish.
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

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg line-through text-muted-foreground">
                      ${product.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-muted-foreground">If you order now:</span>
                    <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                      ${product.startingPrice}
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

        {/* Display Inspiration Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Creative Metal Art Displays</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover unique ways to showcase metal art in your space
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-elegant transition-all">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={metalCats1}
                  alt="Peeking cat silhouette metal art series"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 border-t border-border">
                <h3 className="font-semibold mb-1">Silhouette Series</h3>
                <p className="text-sm text-muted-foreground">Playful multi-panel metal art</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-elegant transition-all">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={metalCats2}
                  alt="3D cat metal wall art arrangement"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 border-t border-border">
                <h3 className="font-semibold mb-1">3D Metal Art</h3>
                <p className="text-sm text-muted-foreground">Dimensional wall sculpture display</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-elegant transition-all">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={metalSoccer}
                  alt="Soccer player breaking through frame metal art"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 border-t border-border">
                <h3 className="font-semibold mb-1">Action Sports Art</h3>
                <p className="text-sm text-muted-foreground">Dynamic breaking-frame design</p>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-elegant transition-all">
              <div className="aspect-video overflow-hidden">
                <img
                  src={metalBridge}
                  alt="Bridge shelf metal wall art for collectibles"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 border-t border-border">
                <h3 className="font-semibold mb-1">Functional Art Shelf</h3>
                <p className="text-sm text-muted-foreground">Decorative bridge display with storage</p>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-elegant transition-all">
              <div className="aspect-video overflow-hidden">
                <img
                  src={metalCars}
                  alt="Illuminated curved metal car display shelf"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 border-t border-border">
                <h3 className="font-semibold mb-1">LED Display Shelf</h3>
                <p className="text-sm text-muted-foreground">Modern backlit metal showcase</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Why Choose Metal Prints Section */}
        <section className="bg-muted/30 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose <span className="bg-gradient-hero bg-clip-text text-transparent">Metal Prints</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ultra-Vibrant Colors</h3>
              <p className="text-muted-foreground">
                Colors that pop with incredible depth and luminosity on aluminum
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">💎</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sleek & Modern</h3>
              <p className="text-muted-foreground">
                Frameless design with a contemporary, gallery-quality finish
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Built to Last</h3>
              <p className="text-muted-foreground">
                Waterproof, scratch-resistant, and fade-proof for decades
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MetalPrints;
