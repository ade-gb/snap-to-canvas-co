import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ShoppingCart, Upload, Check, Star } from "lucide-react";
import { toast } from "sonner";
import canvasMockup from "@/assets/canvas-mockup.jpg";
import workspaceCanvas from "@/assets/workspace-canvas.jpg";

const sizes = [
  { id: "8x10", label: '8" × 10"', price: 49 },
  { id: "12x16", label: '12" × 16"', price: 69 },
  { id: "16x20", label: '16" × 20"', price: 89 },
  { id: "20x30", label: '20" × 30"', price: 119 },
  { id: "24x36", label: '24" × 36"', price: 149 },
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

const productData: Record<string, { title: string; description: string; features: string[] }> = {
  "gallery-wrap": {
    title: "Gallery Wrap Canvas",
    description: "Our classic gallery wrap canvas features your image extending around the edges for a seamless, frameless look. Perfect for modern spaces and contemporary art displays.",
    features: [
      "Premium 400gsm poly-cotton blend canvas",
      "Image wraps around 1.5\" deep stretcher bars",
      "Museum-quality archival inks",
      "Hand-stretched and ready to hang",
      "UV-resistant and fade-proof for 100+ years",
    ],
  },
  "framed-canvas": {
    title: "Framed Canvas Print",
    description: "Elevate your canvas print with a handcrafted wooden frame. Choose from black, white, or natural wood to perfectly complement your décor.",
    features: [
      "Premium 400gsm canvas with professional framing",
      "Solid wood frames in three finishes",
      "Protective acrylic glazing included",
      "Sawtooth hanger pre-installed",
      "Archival quality materials throughout",
    ],
  },
  "split-canvas": {
    title: "Split Canvas Set",
    description: "Create a stunning gallery wall with our multi-panel split canvas sets. Your image is divided across 3 or 5 panels for a modern, dynamic display.",
    features: [
      "Available in 3-panel or 5-panel configurations",
      "Precision-aligned image splitting",
      "Each panel individually wrapped and ready to hang",
      "Premium canvas and archival inks",
      "Includes spacing template for perfect alignment",
    ],
  },
  "museum-wrap": {
    title: "Museum Wrap Canvas",
    description: "The premium choice for art collectors and galleries. Extra-deep 1.5\" profile creates impressive depth and shadow lines on the wall.",
    features: [
      "Premium 400gsm artist-grade canvas",
      "Extra-deep 1.5\" stretcher bars",
      "Gallery-quality presentation",
      "Archival inks rated for 200+ years",
      "Professional wire hanging system included",
    ],
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("16x20");
  const [selectedFrame, setSelectedFrame] = useState("none");

  const product = productData[id || "gallery-wrap"] || productData["gallery-wrap"];
  const selectedSizeData = sizes.find(s => s.id === selectedSize);
  const selectedFrameData = frames.find(f => f.id === selectedFrame);
  const totalPrice = (selectedSizeData?.price || 0) + (selectedFrameData?.price || 0);

  const handleAddToCart = () => {
    toast.success("Added to cart!", {
      description: `${selectedSizeData?.label} canvas with ${selectedFrameData?.label.toLowerCase()}`,
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
          src={canvasMockup} 
          alt="Canvas preview"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {sizes.map((size) => (
                <label
                  key={size.id}
                  className="relative flex flex-col p-4 border-2 rounded-xl cursor-pointer hover:border-primary transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/5 has-[:checked]:shadow-soft"
                >
                  <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
                    <div className="flex items-center justify-between mb-1">
                      <RadioGroupItem value={size.id} id={size.id} className="sr-only" />
                      <span className="font-semibold text-lg">{size.label}</span>
                      <Check className="w-5 h-5 text-primary opacity-0 has-[:checked]:opacity-100 transition-opacity" />
                    </div>
                  </RadioGroup>
                  <span className="text-2xl font-bold text-primary">${size.price}</span>
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
            {[canvasMockup, workspaceCanvas, canvasMockup, workspaceCanvas, canvasMockup, workspaceCanvas].map((img, idx) => (
              <Card key={idx} className="overflow-hidden group cursor-pointer hover:shadow-soft transition-all">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={img}
                    alt={`Example ${idx + 1}`}
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
