import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ShoppingCart, Upload, Check, Star } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import familyCanvas from "@/assets/family-canvas.jpg";
import petCanvas from "@/assets/pet-canvas.jpg";
import sunsetCanvas from "@/assets/sunset-canvas.jpg";
import weddingCanvas from "@/assets/wedding-canvas.jpg";
import landscapeCanvas from "@/assets/landscape-canvas.jpg";
import babyCanvas from "@/assets/baby-canvas.jpg";
import cityCanvas from "@/assets/city-canvas.jpg";
import floralCanvas from "@/assets/floral-canvas.jpg";
import canvasMockup from "@/assets/canvas-mockup.jpg";
import workspaceCanvas from "@/assets/workspace-canvas.jpg";

const sizes = [
  { id: "8x8", label: '8" × 8"', originalPrice: 145, price: 12.99 },
  { id: "10x8", label: '10" × 8"', originalPrice: 149, price: 13.99 },
  { id: "16x12", label: '16" × 12"', originalPrice: 159, price: 15.99 },
  { id: "20x16", label: '20" × 16"', originalPrice: 169, price: 18.95 },
];

const frames = [
  { id: "none", label: "No Frame", price: 0 },
  { id: "black", label: "Black Frame", price: 30 },
  { id: "white", label: "White Frame", price: 30 },
  { id: "natural", label: "Natural Wood", price: 35 },
];

const howItWorks = [
  {
    step: 1,
    title: "Upload Your Photo",
    description: "Choose your favorite high-resolution image from your device",
  },
  {
    step: 2,
    title: "Select Size & Frame",
    description: "Pick the perfect size and frame option for your space",
  },
  {
    step: 3,
    title: "We Print & Ship",
    description: "Professional printing on premium canvas, shipped free to your door",
  },
  {
    step: 4,
    title: "Display & Enjoy",
    description: "Ready to hang and transform your space",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "The quality is outstanding! My family photo looks absolutely beautiful on the canvas.",
    image: canvasMockup,
  },
  {
    name: "Michael R.",
    rating: 5,
    text: "Fast shipping and amazing quality. The colors are vibrant and true to the original photo.",
    image: workspaceCanvas,
  },
  {
    name: "Jessica L.",
    rating: 5,
    text: "I've ordered three canvases now. Each one exceeds my expectations. Highly recommend!",
    image: canvasMockup,
  },
];

const productData: Record<string, { 
  title: string; 
  description: string; 
  features: string[]; 
  heroImage: string;
  exampleImages: string[];
}> = {
  "gallery-wrap": {
    title: "Family Portrait Canvas",
    description: "Preserve your most precious family moments with our premium gallery wrap canvas. Perfect for displaying generations of love and creating lasting memories on your walls.",
    heroImage: familyCanvas,
    exampleImages: [familyCanvas, petCanvas, weddingCanvas, babyCanvas, familyCanvas, sunsetCanvas],
    features: [
      "Premium 400gsm poly-cotton blend canvas",
      "Vibrant, true-to-life color reproduction",
      "Museum-quality archival inks",
      "Hand-stretched and ready to hang",
      "UV-resistant and fade-proof for 100+ years",
    ],
  },
  "framed-canvas": {
    title: "Pet Portrait Canvas",
    description: "Celebrate your beloved furry family members with a stunning canvas portrait. Our pet canvases capture every whisker, every expression, and all the personality that makes your pet special.",
    heroImage: petCanvas,
    exampleImages: [petCanvas, familyCanvas, babyCanvas, floralCanvas, petCanvas, weddingCanvas],
    features: [
      "High-resolution printing captures fine fur details",
      "Premium canvas with professional framing options",
      "Scratch-resistant protective coating",
      "Perfect gift for pet lovers",
      "Archival quality materials throughout",
    ],
  },
  "split-canvas": {
    title: "Travel Memory Canvas",
    description: "Bring your adventures home with breathtaking travel photography on canvas. From tropical sunsets to mountain vistas, transform your favorite destinations into stunning wall art.",
    heroImage: sunsetCanvas,
    exampleImages: [sunsetCanvas, landscapeCanvas, cityCanvas, floralCanvas, sunsetCanvas, petCanvas],
    features: [
      "Vibrant sunset and landscape reproduction",
      "Multiple size options for any space",
      "Weather-resistant inks for lasting beauty",
      "Perfect for living rooms and offices",
      "Professional gallery-quality finish",
    ],
  },
  "museum-wrap": {
    title: "Wedding Canvas",
    description: "Your wedding day deserves to be celebrated forever. Transform your most romantic moments into elegant canvas art that captures the magic of your special day.",
    heroImage: weddingCanvas,
    exampleImages: [weddingCanvas, familyCanvas, babyCanvas, floralCanvas, weddingCanvas, petCanvas],
    features: [
      "Romantic soft-focus options available",
      "Elegant presentation for special occasions",
      "Perfect anniversary or wedding gift",
      "Professional color matching",
      "Archival inks rated for 200+ years",
    ],
  },
  "landscape-canvas": {
    title: "Landscape Canvas",
    description: "Bring the majesty of nature indoors with our breathtaking landscape canvases. From snow-capped mountains to serene forests, create a peaceful atmosphere in any room.",
    heroImage: landscapeCanvas,
    exampleImages: [landscapeCanvas, sunsetCanvas, floralCanvas, cityCanvas, landscapeCanvas, familyCanvas],
    features: [
      "Stunning nature photography reproduction",
      "Extra-deep stretcher bars for dimension",
      "Perfect for meditation and relaxation spaces",
      "Weather and fade-resistant inks",
      "Professional wire hanging system included",
    ],
  },
  "baby-canvas": {
    title: "Baby Portrait Canvas",
    description: "Capture the fleeting moments of your baby's first days, weeks, and months. Our gentle, soft-toned canvas prints preserve newborn sweetness in timeless wall art.",
    heroImage: babyCanvas,
    exampleImages: [babyCanvas, familyCanvas, weddingCanvas, petCanvas, babyCanvas, floralCanvas],
    features: [
      "Soft color grading for delicate skin tones",
      "Perfect for nurseries and children's rooms",
      "Safe, non-toxic materials and inks",
      "Beautiful gift for new parents",
      "Gentle matte finish reduces glare",
    ],
  },
  "city-canvas": {
    title: "City Skyline Split Canvas",
    description: "Make a bold statement with dramatic urban photography displayed across multiple panels. Our split canvas sets create dynamic, modern wall displays perfect for contemporary spaces.",
    heroImage: cityCanvas,
    exampleImages: [cityCanvas, landscapeCanvas, sunsetCanvas, floralCanvas, cityCanvas, weddingCanvas],
    features: [
      "Available in 3-panel or 5-panel configurations",
      "Precision-aligned image splitting",
      "Each panel individually wrapped and ready to hang",
      "Modern metropolitan aesthetic",
      "Includes spacing template for perfect alignment",
    ],
  },
  "floral-canvas": {
    title: "Floral Art Canvas",
    description: "Add natural elegance to your space with beautiful botanical canvas art. Our floral prints bring color, life, and tranquility to any room with soft, artistic styling.",
    heroImage: floralCanvas,
    exampleImages: [floralCanvas, landscapeCanvas, babyCanvas, sunsetCanvas, floralCanvas, weddingCanvas],
    features: [
      "Artistic botanical photography",
      "Soft-focus background for elegant look",
      "Perfect for bedrooms and living spaces",
      "Coordinating color palettes available",
      "Premium canvas with gallery-quality finish",
    ],
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("16x12");
  const [selectedFrame, setSelectedFrame] = useState("none");

  const product = productData[id || "gallery-wrap"] || productData["gallery-wrap"];
  const selectedSizeData = sizes.find(s => s.id === selectedSize);
  const selectedFrameData = frames.find(f => f.id === selectedFrame);
  const totalPrice = (selectedSizeData?.price || 0) + (selectedFrameData?.price || 0);

  const handleAddToCart = () => {
    addToCart({
      productId: id || "gallery-wrap",
      productName: product.title,
      productImage: product.heroImage,
      size: selectedSize,
      sizeLabel: selectedSizeData?.label || "",
      frame: selectedFrame,
      frameLabel: selectedFrameData?.label || "",
      price: totalPrice,
    });
  };

  const handleUploadImage = () => {
    navigate("/upload");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden">
        <img 
          src={product.heroImage} 
          alt={product.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </section>

      <div className="container mx-auto px-4 -mt-20 relative z-10">
        {/* Product Info Card */}
        <Card className="max-w-4xl mx-auto p-6 md:p-8 mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{product.title}</h1>
          <p className="text-muted-foreground text-lg mb-6">
            {product.description}
          </p>
          
          {/* Features List */}
          <div className="space-y-2 mb-8">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/90">{feature}</span>
              </div>
            ))}
          </div>

          {/* Size Selection */}
          <div className="mb-8">
            <Label className="text-xl font-semibold mb-4 block">
              Choose Your Size
            </Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sizes.map((size) => (
                <label
                  key={size.id}
                  className="relative flex flex-col p-4 border-2 rounded-xl cursor-pointer hover:border-primary transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/5 has-[:checked]:shadow-soft"
                >
                  <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
                    <div className="flex items-center justify-between mb-2">
                      <RadioGroupItem value={size.id} id={size.id} className="sr-only" />
                      <span className="font-semibold text-lg">{size.label}</span>
                      <Check className="w-5 h-5 text-primary opacity-0 has-[:checked]:opacity-100 transition-opacity" />
                    </div>
                  </RadioGroup>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg line-through text-muted-foreground">${size.originalPrice}</span>
                  </div>
                  <div className="text-sm font-medium text-foreground mb-1">
                    If you order now: <span className="text-2xl font-bold text-primary">${size.price}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">+ shipping and handling</span>
                </label>
              ))}
            </div>
          </div>

          {/* Frame Selection */}
          <div className="mb-8">
            <Label className="text-xl font-semibold mb-4 block">
              Frame Options
            </Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {frames.map((frame) => (
                <label
                  key={frame.id}
                  className="relative flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer hover:border-primary transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/5 has-[:checked]:shadow-soft"
                >
                  <RadioGroup value={selectedFrame} onValueChange={setSelectedFrame}>
                    <div className="flex items-center gap-3 flex-1">
                      <RadioGroupItem value={frame.id} id={frame.id} />
                      <div className="flex-1">
                        <div className="font-semibold text-base">{frame.label}</div>
                        <div className="text-sm text-muted-foreground">
                          {frame.price === 0 ? "Included" : `+$${frame.price}`}
                        </div>
                      </div>
                    </div>
                  </RadioGroup>
                </label>
              ))}
            </div>
          </div>

          {/* Price & CTA */}
          <div className="border-t pt-6">
            <div className="flex items-center justify-between mb-6 p-4 bg-primary/5 rounded-lg">
              <span className="text-xl font-semibold">Total Price:</span>
              <span className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                ${totalPrice}
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full text-base"
                onClick={handleUploadImage}
              >
                <Upload className="w-5 h-5" />
                Upload Your Image
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full text-base"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </Button>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-4 flex items-center justify-center gap-4 flex-wrap">
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4" /> Free shipping
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4" /> 100% satisfaction guarantee
              </span>
            </p>
          </div>
        </Card>

        {/* How It Works Section */}
        <section className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It <span className="bg-gradient-hero bg-clip-text text-transparent">Works</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step) => (
              <Card key={step.step} className="p-6 text-center hover:shadow-soft transition-shadow">
                <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Product Examples Gallery */}
        <section className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Customer <span className="bg-gradient-hero bg-clip-text text-transparent">Examples</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.exampleImages.map((img, idx) => (
              <Card key={idx} className="overflow-hidden group cursor-pointer hover:shadow-soft transition-all">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={img}
                    alt={`${product.title} example ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our <span className="bg-gradient-hero bg-clip-text text-transparent">Customers Say</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-6 hover:shadow-soft transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/90 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-sm">— {testimonial.name}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-3xl mx-auto text-center mb-16 p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your <span className="bg-gradient-hero bg-clip-text text-transparent">Canvas?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Transform your favorite memories into stunning wall art today
          </p>
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-12"
            onClick={handleUploadImage}
          >
            <Upload className="w-6 h-6" />
            Get Started Now
          </Button>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
