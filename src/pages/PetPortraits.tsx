import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import petMemorialBox from "@/assets/pet-memorial-box.jpg";
import petCollageMemorial from "@/assets/pet-collage-memorial.jpg";
import petPortraitBio from "@/assets/pet-portrait-bio.jpg";
import petSilhouetteCollage from "@/assets/pet-silhouette-collage.jpg";

const PetPortraits = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allProducts = [
    {
      id: "pet-portrait-canvas-8x10",
      name: "8x10\" Pet Portrait Canvas",
      description: "Classic canvas portrait with custom text and biography",
      startingPrice: 29.99,
      originalPrice: 59.99,
      image: petPortraitBio,
      category: "canvas"
    },
    {
      id: "pet-memorial-box-8x8",
      name: "8x8\" Pet Memorial Shadow Box",
      description: "Keepsake shadow box with photos and memory items",
      startingPrice: 44.99,
      originalPrice: 89.99,
      image: petMemorialBox,
      category: "memorial"
    },
    {
      id: "pet-collage-portrait-11x14",
      name: "11x14\" Photo Collage Portrait",
      description: "Multiple pet photos with custom name and date",
      startingPrice: 34.99,
      originalPrice: 69.99,
      image: petCollageMemorial,
      category: "collage"
    },
    {
      id: "pet-silhouette-art-12x16",
      name: "12x16\" Silhouette Photo Art",
      description: "Pet silhouette filled with photo collage memories",
      startingPrice: 39.99,
      originalPrice: 79.99,
      image: petSilhouetteCollage,
      category: "artistic"
    },
    {
      id: "pet-portrait-canvas-16x20",
      name: "16x20\" Premium Pet Portrait",
      description: "Large format portrait with story text",
      startingPrice: 49.99,
      originalPrice: 99.99,
      image: petPortraitBio,
      category: "canvas"
    },
  ];

  const filteredProducts = selectedCategory === "all" 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  const categories = [
    { id: "all", label: "All Portraits" },
    { id: "canvas", label: "Canvas Portraits" },
    { id: "memorial", label: "Memorial Pieces" },
    { id: "collage", label: "Photo Collages" },
    { id: "artistic", label: "Artistic Designs" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Custom Pet Portraits & Memorials
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Honor your beloved pets with personalized portraits, memorial shadow boxes, and artistic tributes that celebrate their unique spirit.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="text-lg px-8">Create Memorial</Button>
              <Button size="lg" variant="outline" className="text-lg px-8">Browse Styles</Button>
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

      {/* Pet Portrait Design Inspiration Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Pet Memorial Design Ideas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create a lasting tribute to your furry friend with these meaningful design options.
            </p>
          </div>

          <div className="space-y-8">
            {/* Memorial Shadow Box Feature */}
            <Card className="overflow-hidden border-2">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={petMemorialBox} 
                    alt="Pet memorial shadow box with photos, collar, and keepsakes"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Memorial Shadow Boxes</h3>
                  <p className="text-muted-foreground mb-4">
                    Preserve precious memories in a beautiful shadow box display. Include photos, collar, tags, and personalized memorial items in one meaningful keepsake.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Display photos alongside cherished items</li>
                    <li>✓ Custom engraved memorial plaques</li>
                    <li>✓ Handcrafted wooden frames</li>
                    <li>✓ Perfect tribute for Rainbow Bridge memories</li>
                  </ul>
                </CardContent>
              </div>
            </Card>

            {/* Design Varieties Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={petCollageMemorial} 
                    alt="Pet photo collage with name and memorial date"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Photo Collage Memorial</h3>
                  <p className="text-sm text-muted-foreground">
                    Combine favorite photos with your pet's name and special dates for a touching tribute canvas.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={petPortraitBio} 
                    alt="Black and white pet portrait with biography text"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Portrait with Story</h3>
                  <p className="text-sm text-muted-foreground">
                    Beautiful black and white portrait featuring your pet's name, breed, and their unique personality story.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={petSilhouetteCollage} 
                    alt="Cat silhouette filled with photo collage"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Silhouette Art</h3>
                  <p className="text-sm text-muted-foreground">
                    Creative silhouette design filled with a collage of your pet's photos and heartfelt memorial text.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Pet Portraits Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Create a Pet Memorial?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Celebrate the unconditional love and joy your pet brought to your life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🐾</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Lasting Tribute</h3>
              <p className="text-muted-foreground">
                Create a beautiful memorial that honors your pet's memory and keeps them close to your heart forever.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fully Personalized</h3>
              <p className="text-muted-foreground">
                Add custom text, dates, favorite quotes, and choose from various artistic styles to match your pet's personality.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Healing Gift</h3>
              <p className="text-muted-foreground">
                A thoughtful sympathy gift for grieving pet parents, offering comfort during difficult times.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Memorial Options Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Memorial & Portrait Styles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect style to celebrate your pet's unique spirit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-3">Canvas Portraits</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Classic canvas prints with beautiful photo reproduction and optional biography text.
              </p>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>• Gallery-quality canvas</li>
                <li>• Custom text overlays</li>
                <li>• Black & white or color</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-primary">
              <div className="inline-block px-2 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-3">
                MOST POPULAR
              </div>
              <h3 className="text-lg font-bold mb-3">Shadow Boxes</h3>
              <p className="text-sm text-muted-foreground mb-3">
                3D keepsake displays combining photos with collar, tags, and memorial items.
              </p>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>• Include physical keepsakes</li>
                <li>• Custom engraving available</li>
                <li>• Handcrafted wooden frames</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-3">Photo Collages</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Multiple photos arranged artistically with names, dates, and loving messages.
              </p>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>• Multiple photo layouts</li>
                <li>• Custom backgrounds</li>
                <li>• Add memorial quotes</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-3">Artistic Silhouettes</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Creative designs with pet silhouettes filled with photo collages and memories.
              </p>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>• Custom pet shapes</li>
                <li>• 25+ photo capacity</li>
                <li>• Memorial text included</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Create a Lasting Memory of Your Beloved Pet</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Design a beautiful tribute that celebrates the joy and love your pet brought into your life.
          </p>
          <Button size="lg" className="text-lg px-12">Start Creating</Button>
        </div>
      </section>
    </div>
  );
};

export default PetPortraits;
