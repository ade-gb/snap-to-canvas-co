import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Filter, Package } from "lucide-react";
import familyCanvas from "@/assets/family-canvas.jpg";
import galleryWall1 from "@/assets/gallery-wall-1.jpg";
import metalCats1 from "@/assets/metal-cats-1.jpg";
import blanketFamilyTapestry from "@/assets/blanket-family-tapestry.jpg";
import petPortraitBio from "@/assets/pet-portrait-bio.jpg";
import wordArtStarryNight from "@/assets/word-art-starry-night.jpg";

const categories = [
  { id: "all", label: "All Bundles" },
  { id: "family", label: "Family Bundles" },
  { id: "wedding", label: "Wedding Bundles" },
  { id: "gift", label: "Gift Sets" },
  { id: "room", label: "Room Decor" },
];

const allProducts = [
  {
    id: "family-memories-bundle",
    name: "Family Memories Complete Bundle",
    description: "Complete home decor package: 3 canvas prints, 1 metal print, and 1 photo blanket. Perfect for displaying cherished family moments throughout your home.",
    startingPrice: 89.99,
    originalPrice: 599,
    image: familyCanvas,
    category: "family",
    rating: 5,
    reviews: 542,
    bestseller: true,
    items: 5,
  },
  {
    id: "gallery-wall-bundle",
    name: "Ultimate Gallery Wall Bundle",
    description: "Create a stunning gallery wall with 5 canvas collages, 2 metal prints, and 1 word art piece. Everything coordinated for a cohesive look.",
    startingPrice: 149.99,
    originalPrice: 899,
    image: galleryWall1,
    category: "room",
    rating: 5,
    reviews: 389,
    bestseller: true,
    items: 8,
  },
  {
    id: "pet-lover-bundle",
    name: "Pet Lover's Deluxe Bundle",
    description: "Celebrate your furry friend with 2 pet portraits, 1 metal print, 1 photo pillow, and 1 word art canvas. The ultimate pet lover collection.",
    startingPrice: 119.99,
    originalPrice: 729,
    image: petPortraitBio,
    category: "gift",
    rating: 5,
    reviews: 467,
    bestseller: true,
    items: 5,
  },
  {
    id: "wedding-bundle",
    name: "Wedding Memory Bundle",
    description: "Preserve your special day with 3 wedding canvases, 1 large metal print, 1 custom blanket, and 1 word art piece featuring your vows.",
    startingPrice: 179.99,
    originalPrice: 1099,
    image: galleryWall1,
    category: "wedding",
    rating: 5,
    reviews: 623,
    bestseller: true,
    items: 6,
  },
  {
    id: "cozy-home-bundle",
    name: "Cozy Home Decor Bundle",
    description: "Transform your living space with 2 canvas prints, 1 metal print, 2 photo pillows, and 1 soft photo blanket.",
    startingPrice: 129.99,
    originalPrice: 799,
    image: blanketFamilyTapestry,
    category: "room",
    rating: 5,
    reviews: 356,
    bestseller: false,
    items: 6,
  },
  {
    id: "metal-canvas-combo",
    name: "Metal & Canvas Combo Bundle",
    description: "Best of both worlds: 3 premium metal prints and 3 gallery-wrapped canvases. Perfect for modern home decor.",
    startingPrice: 99.99,
    originalPrice: 649,
    image: metalCats1,
    category: "room",
    rating: 5,
    reviews: 298,
    bestseller: false,
    items: 6,
  },
  {
    id: "inspirational-bundle",
    name: "Inspirational Word Art Bundle",
    description: "Create an uplifting atmosphere with 3 custom word art canvases and 2 motivational metal prints.",
    startingPrice: 94.99,
    originalPrice: 579,
    image: wordArtStarryNight,
    category: "gift",
    rating: 5,
    reviews: 411,
    bestseller: false,
    items: 5,
  },
];

const PrintBundles = () => {
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
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            <Package className="w-4 h-4 mr-2" />
            Save Up to 70% with Bundles
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Print Bundles & Collections
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Complete your space with curated bundles. Get multiple products at incredible savings. 
            Perfect for gifting or transforming an entire room.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild className="shadow-soft">
              <Link to="/upload">Create Your Bundle</Link>
            </Button>
            <Button size="lg" variant="outline">
              View All Bundles
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
                  <Badge className="absolute top-4 right-4 z-10 bg-secondary text-secondary-foreground">
                    {product.items} Items
                  </Badge>
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
                    <Link to={`/product/${product.id}`}>View Bundle Details</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Bundles */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Why Choose Print Bundles?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Massive Savings</h3>
              <p className="text-muted-foreground">
                Save up to 70% compared to buying items individually. Bundle pricing gives you the best value.
              </p>
            </Card>
            <Card className="p-6">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Curated Collections</h3>
              <p className="text-muted-foreground">
                Professionally designed bundles ensure all pieces work together perfectly for a cohesive look.
              </p>
            </Card>
            <Card className="p-6">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Perfect for Gifting</h3>
              <p className="text-muted-foreground">
                Ready-made gift sets that show you care. Perfect for weddings, housewarmings, and special occasions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Bundle Savings Calculator */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <Card className="p-8 bg-gradient-subtle">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Bundle Savings Example</h2>
              <p className="text-muted-foreground mb-8">
                See how much you save with our Family Memories Bundle
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-foreground">Bundle Includes:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ 3 Canvas Prints (16x20")</li>
                    <li>✓ 1 Metal Print (20x30")</li>
                    <li>✓ 1 Photo Blanket (50x60")</li>
                  </ul>
                </div>
                <div className="bg-background/50 p-6 rounded-lg">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Individual Price:</span>
                      <span className="font-semibold line-through text-foreground">$599</span>
                    </div>
                    <div className="flex justify-between text-xl">
                      <span className="font-bold text-foreground">Bundle Price:</span>
                      <span className="font-bold text-primary">$89.99</span>
                    </div>
                    <div className="pt-3 border-t border-border">
                      <span className="text-2xl font-bold text-primary">You Save $509!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PrintBundles;
