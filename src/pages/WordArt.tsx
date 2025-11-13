import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import wordArtStarryNight from "@/assets/word-art-starry-night.jpg";
import wordArtSunsetQuote from "@/assets/word-art-sunset-quote.jpg";
import wordArtMountainQuote from "@/assets/word-art-mountain-quote.jpg";
import wordArtEmbossed from "@/assets/word-art-embossed.jpg";
import wordArtNewspaper from "@/assets/word-art-newspaper.jpg";

const WordArt = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allProducts = [
    {
      id: "word-art-8x10-painted",
      name: "8x10\" Painted Background Quote",
      description: "Hand-painted style background with custom quote",
      startingPrice: 24.99,
      originalPrice: 49.99,
      image: wordArtStarryNight,
      category: "painted"
    },
    {
      id: "word-art-12x12-sunset",
      name: "12x12\" Sunset Quote Canvas",
      description: "Vibrant gradient background with motivational text",
      startingPrice: 29.99,
      originalPrice: 59.99,
      image: wordArtSunsetQuote,
      category: "painted"
    },
    {
      id: "word-art-10x10-mountain",
      name: "10x10\" Mountain Scene Quote",
      description: "Scenic landscape with inspirational message",
      startingPrice: 27.99,
      originalPrice: 55.99,
      image: wordArtMountainQuote,
      category: "painted"
    },
    {
      id: "word-art-12x12-embossed",
      name: "12x12\" Textured Embossed Canvas",
      description: "3D raised text with premium textured finish",
      startingPrice: 34.99,
      originalPrice: 69.99,
      image: wordArtEmbossed,
      category: "textured"
    },
    {
      id: "word-art-11x14-newspaper",
      name: "11x14\" Vintage Newspaper Style",
      description: "Retro newspaper background with bold typography",
      startingPrice: 31.99,
      originalPrice: 63.99,
      image: wordArtNewspaper,
      category: "vintage"
    },
  ];

  const filteredProducts = selectedCategory === "all" 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  const categories = [
    { id: "all", label: "All Styles" },
    { id: "painted", label: "Painted Backgrounds" },
    { id: "textured", label: "Textured & 3D" },
    { id: "vintage", label: "Vintage Style" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Custom Word Art Canvas
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your favorite quotes, lyrics, and phrases into stunning canvas art. Perfect for home décor and meaningful gifts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="text-lg px-8">Create Your Quote</Button>
              <Button size="lg" variant="outline" className="text-lg px-8">Browse Templates</Button>
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

      {/* Word Art Design Inspiration Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Word Art Design Inspiration</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover creative typography styles and background designs to bring your words to life.
            </p>
          </div>

          <div className="space-y-8">
            {/* Painted Scenic Backgrounds Feature */}
            <Card className="overflow-hidden border-2">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={wordArtStarryNight} 
                    alt="Starry night painted background with inspirational quote"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Painted Scenic Backgrounds</h3>
                  <p className="text-muted-foreground mb-4">
                    Combine your favorite quotes with beautiful hand-painted style backgrounds featuring starry nights, sunsets, mountains, and more.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Artistic painted-style backgrounds</li>
                    <li>✓ Custom quote or phrase of your choice</li>
                    <li>✓ Multiple font styles available</li>
                    <li>✓ Perfect for home or office décor</li>
                  </ul>
                </CardContent>
              </div>
            </Card>

            {/* Design Varieties Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={wordArtSunsetQuote} 
                    alt="Sunset gradient background with motivational quote"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Gradient & Nature Scenes</h3>
                  <p className="text-sm text-muted-foreground">
                    Vibrant sunset gradients and nature silhouettes create stunning backdrops for your inspirational messages.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={wordArtEmbossed} 
                    alt="Textured embossed canvas with 3D lettering"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Textured & Embossed</h3>
                  <p className="text-sm text-muted-foreground">
                    Premium 3D raised lettering on textured canvas for an elegant, tactile art piece.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={wordArtNewspaper} 
                    alt="Vintage newspaper style word art"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Vintage Typography</h3>
                  <p className="text-sm text-muted-foreground">
                    Bold, retro lettering on vintage newspaper backgrounds for classic, timeless appeal.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Word Art Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Word Art Canvas?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Express yourself with personalized typography that speaks to your style.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✍️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Your Words, Your Style</h3>
              <p className="text-muted-foreground">
                Choose any quote, lyric, phrase, or personal mantra. Select fonts, colors, and backgrounds to match your vision.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Artistic Backgrounds</h3>
              <p className="text-muted-foreground">
                From painted landscapes to vintage textures and modern minimalism—find the perfect backdrop for your words.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Meaningful Gifts</h3>
              <p className="text-muted-foreground">
                Create personalized gifts with meaningful quotes for weddings, graduations, or any special occasion.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Style Options Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Popular Quote Categories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get inspired by these popular quote themes for your custom word art.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-3">Motivational Quotes</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Empower your space with uplifting and inspiring messages.
              </p>
              <p className="text-xs italic text-muted-foreground">
                "The darkest nights produce the brightest stars"
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-3">Love & Romance</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Celebrate love with romantic quotes and song lyrics.
              </p>
              <p className="text-xs italic text-muted-foreground">
                "All you need is love"
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-3">Home & Family</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Warm, welcoming phrases that make a house a home.
              </p>
              <p className="text-xs italic text-muted-foreground">
                "Let's stay at home"
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-3">Wisdom & Philosophy</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Thought-provoking quotes about life and growth.
              </p>
              <p className="text-xs italic text-muted-foreground">
                "The best view comes after the hardest climb"
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Create Your Custom Word Art Canvas Today</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Turn your favorite words into beautiful wall art. Limited time offer on all custom quote canvases.
          </p>
          <Button size="lg" className="text-lg px-12">Design Now</Button>
        </div>
      </section>
    </div>
  );
};

export default WordArt;
