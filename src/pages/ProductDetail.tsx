import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ShoppingCart, Upload } from "lucide-react";
import { toast } from "sonner";
import canvasMockup from "@/assets/canvas-mockup.jpg";

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

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("16x20");
  const [selectedFrame, setSelectedFrame] = useState("none");

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
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Product Image */}
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <img 
                src={canvasMockup} 
                alt="Canvas preview"
                className="w-full aspect-square object-cover"
              />
            </Card>
            <div className="text-center p-4 bg-primary-light rounded-lg">
              <p className="text-sm text-muted-foreground">
                Upload your image to see a realistic preview
              </p>
            </div>
          </div>

          {/* Product Options */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Gallery Wrap Canvas</h1>
              <p className="text-muted-foreground text-lg">
                Premium quality canvas with professional gallery wrap
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <Label className="text-lg font-semibold mb-4 block">
                Choose Size
              </Label>
              <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="grid grid-cols-2 gap-3">
                {sizes.map((size) => (
                  <label
                    key={size.id}
                    className="flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer hover:border-primary transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary-light"
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value={size.id} id={size.id} />
                      <div>
                        <div className="font-medium">{size.label}</div>
                        <div className="text-sm text-muted-foreground">${size.price}</div>
                      </div>
                    </div>
                  </label>
                ))}
              </RadioGroup>
            </div>

            {/* Frame Selection */}
            <div>
              <Label className="text-lg font-semibold mb-4 block">
                Frame Options
              </Label>
              <RadioGroup value={selectedFrame} onValueChange={setSelectedFrame} className="grid grid-cols-2 gap-3">
                {frames.map((frame) => (
                  <label
                    key={frame.id}
                    className="flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer hover:border-primary transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary-light"
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value={frame.id} id={frame.id} />
                      <div>
                        <div className="font-medium">{frame.label}</div>
                        <div className="text-sm text-muted-foreground">
                          {frame.price === 0 ? "Included" : `+$${frame.price}`}
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </RadioGroup>
            </div>

            {/* Price & Actions */}
            <div className="border-t pt-6">
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-lg text-muted-foreground">Total Price:</span>
                <span className="text-4xl font-bold text-primary">${totalPrice}</span>
              </div>
              <div className="space-y-3">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={handleUploadImage}
                >
                  <Upload className="w-5 h-5" />
                  Upload Your Image
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </Button>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                Free shipping • 100% satisfaction guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
