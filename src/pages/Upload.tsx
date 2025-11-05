import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload as UploadIcon, Image as ImageIcon } from "lucide-react";
import { toast } from "sonner";

const Upload = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        toast.success("Image uploaded successfully!");
      };
      reader.readAsDataURL(file);
    } else {
      toast.error("Please upload an image file");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">
              Upload Your <span className="bg-gradient-hero bg-clip-text text-transparent">Photo</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Drag and drop your image or click to browse. We'll help you create the perfect canvas.
            </p>
          </div>

          <Card className="p-8">
            {!uploadedImage ? (
              <div
                className={`border-2 border-dashed rounded-lg p-12 text-center transition-all ${
                  dragActive ? "border-primary bg-primary-light" : "border-border"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  id="file-upload"
                  accept="image/*"
                  onChange={handleChange}
                  className="hidden"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="w-20 h-20 mx-auto mb-4 bg-primary-light rounded-full flex items-center justify-center">
                    <UploadIcon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Drop your image here</h3>
                  <p className="text-muted-foreground mb-4">or click to browse</p>
                  <Button variant="hero">
                    Select Image
                  </Button>
                </label>
                <p className="text-sm text-muted-foreground mt-6">
                  Supports: JPG, PNG, WEBP • Max size: 10MB
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="relative aspect-video bg-secondary rounded-lg overflow-hidden">
                  <img 
                    src={uploadedImage} 
                    alt="Uploaded preview"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setUploadedImage(null)}
                  >
                    <ImageIcon className="w-4 h-4" />
                    Choose Different Image
                  </Button>
                  <Button variant="hero" className="flex-1">
                    Continue to Editor
                  </Button>
                </div>
                <div className="bg-primary-light p-4 rounded-lg">
                  <p className="text-sm text-center">
                    ✓ Image resolution: Good for sizes up to 24" × 36"
                  </p>
                </div>
              </div>
            )}
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1</div>
              <h3 className="font-semibold mb-1">Upload</h3>
              <p className="text-sm text-muted-foreground">Choose your favorite photo</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <h3 className="font-semibold mb-1">Customize</h3>
              <p className="text-sm text-muted-foreground">Select size and frame options</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <h3 className="font-semibold mb-1">Receive</h3>
              <p className="text-sm text-muted-foreground">Get your canvas in 5-7 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
