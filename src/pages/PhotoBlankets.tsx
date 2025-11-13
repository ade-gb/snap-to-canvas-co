import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import blanketFamilyTapestry from "@/assets/blanket-family-tapestry.jpg";
import blanketPhotoCollage from "@/assets/blanket-photo-collage.jpg";
import blanketSinglePhoto from "@/assets/blanket-single-photo.jpg";
import blanketMomGrid from "@/assets/blanket-mom-grid.jpg";

const PhotoBlankets = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allProducts = [
    {
      id: "photo-blanket-50x60",
      name: "50x60\" Photo Blanket",
      description: "Perfect throw size for sofas and beds",
      startingPrice: 39.99,
      originalPrice: 79.99,
      image: blanketFamilyTapestry,
      category: "fleece"
    },
    {
      id: "photo-blanket-60x80",
      name: "60x80\" Photo Blanket",
      description: "Large premium blanket with custom text",
      startingPrice: 49.99,
      originalPrice: 99.99,
      image: blanketPhotoCollage,
      category: "fleece"
    },
    {
      id: "photo-blanket-40x50",
      name: "40x50\" Photo Blanket",
      description: "Cozy size perfect for kids and travel",
      startingPrice: 34.99,
      originalPrice: 69.99,
      image: blanketSinglePhoto,
      category: "fleece"
    },
    {
      id: "photo-blanket-60x80-sherpa",
      name: "60x80\" Sherpa Blanket",
      description: "Ultra-soft sherpa backing with photo collage",
      startingPrice: 59.99,
      originalPrice: 119.99,
      image: blanketMomGrid,
      category: "sherpa"
    },
    {
      id: "photo-blanket-50x60-woven",
      name: "50x60\" Woven Blanket",
      description: "Premium woven tapestry with fringe",
      startingPrice: 54.99,
      originalPrice: 109.99,
      image: blanketFamilyTapestry,
      category: "woven"
    },
  ];

  const filteredProducts = selectedCategory === "all" 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  const categories = [
    { id: "all", label: "All Blankets" },
    { id: "fleece", label: "Fleece Blankets" },
    { id: "sherpa", label: "Sherpa Blankets" },
    { id: "woven", label: "Woven Tapestry" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Custom Photo Blankets
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Wrap yourself in warmth and memories with personalized photo blankets. Perfect for cozy nights and meaningful gifts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="text-lg px-8">Start Creating</Button>
              <Button size="lg" variant="outline" className="text-lg px-8">View Materials</Button>
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

      {/* Blanket Design Inspiration Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Photo Blanket Design Inspiration</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover creative ways to personalize your photo blanket with custom layouts, text, and more.
            </p>
          </div>

          <div className="space-y-8">
            {/* Woven Tapestry with Custom Text */}
            <Card className="overflow-hidden border-2">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={blanketFamilyTapestry} 
                    alt="Woven tapestry blanket with family photo and custom text"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Woven Tapestry Blankets</h3>
                  <p className="text-muted-foreground mb-4">
                    Transform your favorite family photo into a beautiful woven tapestry with decorative fringe edges and custom text overlay.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Premium woven construction for durability</li>
                    <li>✓ Add custom family names or quotes</li>
                    <li>✓ Colorful fringe adds decorative touch</li>
                    <li>✓ Perfect wall hanging or keepsake gift</li>
                  </ul>
                </CardContent>
              </div>
            </Card>

            {/* Design Varieties Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={blanketPhotoCollage} 
                    alt="Photo collage blanket with multiple photos and text"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Photo Collage Style</h3>
                  <p className="text-sm text-muted-foreground">
                    Combine multiple cherished photos with custom text on a dark, cozy fleece background for dramatic effect.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={blanketSinglePhoto} 
                    alt="Single photo blanket with full-size image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Full-Size Photo Print</h3>
                  <p className="text-sm text-muted-foreground">
                    Showcase one beautiful photo edge-to-edge with vibrant colors and ultra-soft fleece material.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={blanketMomGrid} 
                    alt="Photo grid blanket with MOM text and family photos"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Grid Layout with Text</h3>
                  <p className="text-sm text-muted-foreground">
                    Create meaningful designs with photo grids and large letters spelling MOM, DAD, or custom words.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Photo Blankets Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Photo Blankets?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium quality blankets that combine warmth, comfort, and cherished memories.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Materials</h3>
              <p className="text-muted-foreground">
                Choose from ultra-soft fleece, cozy sherpa, or elegant woven tapestry. All machine washable.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Total Customization</h3>
              <p className="text-muted-foreground">
                Add multiple photos, custom text, choose layouts, and select from various sizes and materials.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Heartfelt Gifts</h3>
              <p className="text-muted-foreground">
                Perfect for Mother's Day, anniversaries, graduations, and celebrating family milestones.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Material Options Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Choose Your Material</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each material offers unique comfort and style options.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Fleece Blanket</h3>
              <p className="text-muted-foreground mb-4">
                Lightweight and soft with vibrant photo printing. Perfect for everyday use.
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Ultra-soft fleece material</li>
                <li>• Vibrant, long-lasting colors</li>
                <li>• Machine washable</li>
                <li>• Budget-friendly option</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-primary">
              <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-3">
                POPULAR
              </div>
              <h3 className="text-xl font-bold mb-3">Sherpa Blanket</h3>
              <p className="text-muted-foreground mb-4">
                Plush fleece front with ultra-cozy sherpa backing. Maximum warmth and comfort.
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Plush fleece top, sherpa back</li>
                <li>• Extra warm and cozy</li>
                <li>• Premium quality feel</li>
                <li>• Ideal for cold weather</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Woven Tapestry</h3>
              <p className="text-muted-foreground mb-4">
                Decorative woven construction with fringe edges. Heirloom quality gift.
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Premium woven fabric</li>
                <li>• Decorative fringe edges</li>
                <li>• Can be used as wall hanging</li>
                <li>• Luxurious gift option</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Create Your Custom Photo Blanket Today</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Limited time offer: Save up to 50% on all photo blanket orders.
          </p>
          <Button size="lg" className="text-lg px-12">Design Your Blanket</Button>
        </div>
      </section>
    </div>
  );
};

export default PhotoBlankets;
