import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import kidArtClouds from "@/assets/kid-art-clouds.jpg";
import kidArtBalloons from "@/assets/kid-art-balloons.jpg";
import kidArtChicken from "@/assets/kid-art-chicken.jpg";
import kidArtWindowCat from "@/assets/kid-art-window-cat.jpg";
import kidArtPanda from "@/assets/kid-art-panda.jpg";

const KidArt = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allProducts = [
    {
      id: "kid-art-8x8-textured",
      name: "8x8\" 3D Textured Clouds Canvas",
      description: "Fluffy 3D clouds with moon and stars",
      startingPrice: 29.99,
      originalPrice: 59.99,
      image: kidArtClouds,
      category: "textured"
    },
    {
      id: "kid-art-10x10-balloons",
      name: "10x10\" Balloon Adventure Canvas",
      description: "Colorful pom-pom balloon house in the sky",
      startingPrice: 32.99,
      originalPrice: 65.99,
      image: kidArtBalloons,
      category: "textured"
    },
    {
      id: "kid-art-6x6-chicken",
      name: "6x6\" Cool Chicken Mini Canvas",
      description: "Adorable chicken with sunglasses on purple",
      startingPrice: 19.99,
      originalPrice: 39.99,
      image: kidArtChicken,
      category: "animals"
    },
    {
      id: "kid-art-8x8-window-cat",
      name: "8x8\" Moonlight Window Canvas",
      description: "Cat silhouette gazing at the moon through window",
      startingPrice: 27.99,
      originalPrice: 55.99,
      image: kidArtWindowCat,
      category: "animals"
    },
    {
      id: "kid-art-8x10-panda",
      name: "8x10\" Peeking Panda Canvas",
      description: "Cute panda peeking with heart on yellow gradient",
      startingPrice: 24.99,
      originalPrice: 49.99,
      image: kidArtPanda,
      category: "animals"
    },
  ];

  const filteredProducts = selectedCategory === "all" 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  const categories = [
    { id: "all", label: "All Designs" },
    { id: "textured", label: "3D Textured" },
    { id: "animals", label: "Cute Animals" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Kid's Room Canvas Art
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Whimsical, colorful canvas art perfect for nurseries, playrooms, and children's bedrooms. Adorable designs kids will love!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="text-lg px-8">Browse Designs</Button>
              <Button size="lg" variant="outline" className="text-lg px-8">Custom Art</Button>
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

      {/* Kid Art Design Inspiration Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Playful Art for Happy Spaces</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Brighten your child's room with charming artwork featuring cute animals, dreamy skies, and whimsical scenes.
            </p>
          </div>

          <div className="space-y-8">
            {/* 3D Textured Art Feature */}
            <Card className="overflow-hidden border-2">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={kidArtClouds} 
                    alt="3D textured clouds canvas with fluffy clouds and moon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">3D Textured Canvas Art</h3>
                  <p className="text-muted-foreground mb-4">
                    Unique tactile artwork featuring fluffy 3D clouds, colorful pom-pom balloons, and other textured elements that kids can touch and admire.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Interactive 3D textured designs</li>
                    <li>✓ Safe, child-friendly materials</li>
                    <li>✓ Whimsical sky and cloud themes</li>
                    <li>✓ Perfect nursery and playroom décor</li>
                  </ul>
                </CardContent>
              </div>
            </Card>

            {/* Design Varieties Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={kidArtBalloons} 
                    alt="Colorful balloon house adventure canvas"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Adventure Themes</h3>
                  <p className="text-sm text-muted-foreground">
                    Inspire imagination with balloon adventures, magical scenes, and dreamy landscapes perfect for little explorers.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={kidArtPanda} 
                    alt="Cute panda peeking on yellow background"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Adorable Animals</h3>
                  <p className="text-sm text-muted-foreground">
                    Sweet animal friends including pandas, chickens, cats, and more with playful expressions and bright colors.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={kidArtWindowCat} 
                    alt="Cat looking at moon through window at night"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Nighttime Scenes</h3>
                  <p className="text-sm text-muted-foreground">
                    Peaceful nighttime artwork with moons, stars, and silhouettes—perfect for creating a calm bedtime atmosphere.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Kid Art Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Kid's Canvas Art?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughtfully designed artwork that grows with your child and brightens their world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sparks Creativity</h3>
              <p className="text-muted-foreground">
                Colorful, imaginative designs inspire creativity and wonder in young minds.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Safe & Durable</h3>
              <p className="text-muted-foreground">
                Child-safe materials, securely attached elements, and high-quality canvas that lasts for years.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎁</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Perfect Gifts</h3>
              <p className="text-muted-foreground">
                Thoughtful presents for baby showers, birthdays, or welcoming a new little one.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Room Ideas Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Perfect for Every Space</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our kid's canvas art fits beautifully in nurseries, playrooms, and bedrooms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-3">Nursery Décor</h3>
              <p className="text-sm text-muted-foreground">
                Soft, dreamy designs with clouds, moons, and gentle colors for peaceful nurseries.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-3">Playroom Fun</h3>
              <p className="text-sm text-muted-foreground">
                Bright, energetic art featuring cute animals and adventure themes for active play spaces.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-3">Bedroom Walls</h3>
              <p className="text-sm text-muted-foreground">
                Create a cozy, personalized space with art that matches your child's personality.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-3">Reading Nook</h3>
              <p className="text-sm text-muted-foreground">
                Calming nighttime scenes and friendly animals make perfect reading corner companions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Brighten Your Child's Room Today</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover whimsical canvas art that will make kids smile. Special pricing on all children's art this week!
          </p>
          <Button size="lg" className="text-lg px-12">Shop Kid's Art</Button>
        </div>
      </section>
    </div>
  );
};

export default KidArt;
