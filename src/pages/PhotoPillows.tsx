import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import pillowCollage from "@/assets/pillow-collage.jpg";
import pillowBrushstroke from "@/assets/pillow-brushstroke.jpg";
import pillowPets from "@/assets/pillow-pets.jpg";
import pillowArtistic from "@/assets/pillow-artistic.jpg";

const PhotoPillows = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allProducts = [
    {
      id: "photo-pillow-16x16",
      name: "16x16\" Photo Pillow",
      description: "Perfect square pillow for single photos or collages",
      startingPrice: 24.99,
      originalPrice: 49.99,
      image: pillowCollage,
      category: "square"
    },
    {
      id: "photo-pillow-18x18",
      name: "18x18\" Photo Pillow",
      description: "Standard throw pillow size",
      startingPrice: 27.99,
      originalPrice: 54.99,
      image: pillowBrushstroke,
      category: "square"
    },
    {
      id: "photo-pillow-20x20",
      name: "20x20\" Photo Pillow",
      description: "Larger decorative pillow",
      startingPrice: 31.99,
      originalPrice: 59.99,
      image: pillowPets,
      category: "square"
    },
    {
      id: "photo-pillow-12x20",
      name: "12x20\" Lumbar Pillow",
      description: "Rectangular lumbar support pillow",
      startingPrice: 29.99,
      originalPrice: 56.99,
      image: pillowArtistic,
      category: "lumbar"
    },
    {
      id: "photo-pillow-14x14",
      name: "14x14\" Photo Pillow",
      description: "Compact decorative pillow",
      startingPrice: 22.99,
      originalPrice: 44.99,
      image: pillowCollage,
      category: "square"
    },
  ];

  const filteredProducts = selectedCategory === "all" 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  const categories = [
    { id: "all", label: "All Pillows" },
    { id: "square", label: "Square Pillows" },
    { id: "lumbar", label: "Lumbar Pillows" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Custom Photo Pillows
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your favorite memories into cozy, personalized pillows. Perfect for sofas, beds, and thoughtful gifts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="text-lg px-8">Start Designing</Button>
              <Button size="lg" variant="outline" className="text-lg px-8">View Sizes</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="px-6"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Pillow Design Inspiration Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Photo Pillow Design Ideas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get inspired by these creative photo pillow designs. From photo collages to artistic effects.
            </p>
          </div>

          <div className="space-y-8">
            {/* Photo Collage Grid Pillows */}
            <Card className="overflow-hidden border-2">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={pillowCollage} 
                    alt="4-photo collage pillow with family and pets"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Photo Collage Pillows</h3>
                  <p className="text-muted-foreground mb-4">
                    Create stunning 4-photo grid pillows perfect for showcasing multiple memories. Ideal for family photos, pet collections, or special moments.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Equal photo spacing for balanced design</li>
                    <li>✓ Mix family photos with pet portraits</li>
                    <li>✓ Perfect for sofas and reading nooks</li>
                    <li>✓ Great conversation starter piece</li>
                  </ul>
                </CardContent>
              </div>
            </Card>

            {/* Design Varieties Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={pillowBrushstroke} 
                    alt="Pillow with brushstroke effect background"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Artistic Backgrounds</h3>
                  <p className="text-sm text-muted-foreground">
                    Add painted brushstroke effects or gradient backgrounds to make your photos pop with artistic flair.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={pillowPets} 
                    alt="Pet photo grid pillow on mint background"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Colored Backgrounds</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose custom background colors to match your decor. Perfect for themed rooms and coordinated spaces.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={pillowArtistic} 
                    alt="Artistic Japanese-style pillow design"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Full Art Designs</h3>
                  <p className="text-sm text-muted-foreground">
                    Transform entire artwork or scenic photos into stunning statement pillows for unique home decor.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Photo Pillows Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Photo Pillows?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium quality pillows that bring comfort and cherished memories together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛋️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Comfort & Style</h3>
              <p className="text-muted-foreground">
                Soft, durable fabric with vibrant photo printing. Machine washable covers for easy care.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Full Customization</h3>
              <p className="text-muted-foreground">
                Choose layouts, add text, apply filters, and select background colors to match your vision.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎁</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Perfect Gifts</h3>
              <p className="text-muted-foreground">
                Thoughtful, personalized presents for housewarmings, birthdays, and special occasions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Create Your Custom Photo Pillow Today</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Enjoy special promotional pricing on all photo pillow orders placed this week.
          </p>
          <Button size="lg" className="text-lg px-12">Get Started Now</Button>
        </div>
      </section>
    </div>
  );
};

export default PhotoPillows;
