import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Upload as UploadIcon, 
  Image as ImageIcon, 
  ZoomIn, 
  ZoomOut,
  RotateCw,
  Contrast,
  Sun,
  Sparkles
} from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import canvasMockup from "@/assets/canvas-mockup.jpg";

const Upload = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [dragActive, setDragActive] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  
  // Editor state
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  // Redirect to auth if not logged in
  useEffect(() => {
    if (!loading && !user) {
      toast.error("Please log in to upload photos");
      navigate("/auth");
    }
  }, [user, loading, navigate]);

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

  const handleFile = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload an image file");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      toast.error("Image must be smaller than 10MB");
      return;
    }

    setUploading(true);
    
    try {
      // Upload to Supabase Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${user?.id}/${Date.now()}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from('photos')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data } = supabase.storage
        .from('photos')
        .getPublicUrl(fileName);

      // Load image for preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        toast.success("Image uploaded successfully!");
      };
      reader.readAsDataURL(file);
    } catch (error: any) {
      console.error("Upload error:", error);
      toast.error("Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  // Draw canvas preview with filters
  useEffect(() => {
    if (!uploadedImage || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      imageRef.current = img;
      
      // Set canvas size
      canvas.width = 600;
      canvas.height = 400;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Apply transformations
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rotation * Math.PI) / 180);
      
      const scale = zoom / 100;
      const imgWidth = img.width * scale;
      const imgHeight = img.height * scale;
      
      // Apply filters
      ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`;
      
      ctx.drawImage(
        img,
        -imgWidth / 2,
        -imgHeight / 2,
        imgWidth,
        imgHeight
      );
      
      ctx.restore();
    };
    img.src = uploadedImage;
  }, [uploadedImage, zoom, rotation, brightness, contrast, saturation]);

  const resetFilters = () => {
    setZoom(100);
    setRotation(0);
    setBrightness(100);
    setContrast(100);
    setSaturation(100);
  };

  if (loading) {
    return null;
  }

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
                  disabled={uploading}
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="w-20 h-20 mx-auto mb-4 bg-primary-light rounded-full flex items-center justify-center">
                    <UploadIcon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Drop your image here</h3>
                  <p className="text-muted-foreground mb-4">or click to browse</p>
                  <Button variant="hero" disabled={uploading}>
                    {uploading ? "Uploading..." : "Select Image"}
                  </Button>
                </label>
                <p className="text-sm text-muted-foreground mt-6">
                  Supports: JPG, PNG, WEBP • Max size: 10MB
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <Tabs defaultValue="preview" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="preview">Canvas Preview</TabsTrigger>
                    <TabsTrigger value="editor">Edit Photo</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="preview" className="space-y-4">
                    <div className="relative bg-secondary rounded-lg p-8 overflow-hidden">
                      <div className="relative mx-auto" style={{ maxWidth: '600px' }}>
                        <img 
                          src={canvasMockup} 
                          alt="Canvas frame mockup"
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 flex items-center justify-center p-[12%]">
                          <canvas 
                            ref={canvasRef}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-primary-light p-4 rounded-lg">
                      <p className="text-sm text-center">
                        ✓ Preview of how your photo will look on canvas
                      </p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="editor" className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold flex items-center gap-2">
                          <ZoomIn className="w-4 h-4" />
                          Zoom: {zoom}%
                        </h3>
                        <Slider
                          value={[zoom]}
                          onValueChange={([v]) => setZoom(v)}
                          min={50}
                          max={200}
                          step={5}
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-semibold flex items-center gap-2">
                          <RotateCw className="w-4 h-4" />
                          Rotation: {rotation}°
                        </h3>
                        <Slider
                          value={[rotation]}
                          onValueChange={([v]) => setRotation(v)}
                          min={0}
                          max={360}
                          step={15}
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-semibold flex items-center gap-2">
                          <Sun className="w-4 h-4" />
                          Brightness: {brightness}%
                        </h3>
                        <Slider
                          value={[brightness]}
                          onValueChange={([v]) => setBrightness(v)}
                          min={50}
                          max={150}
                          step={5}
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-semibold flex items-center gap-2">
                          <Contrast className="w-4 h-4" />
                          Contrast: {contrast}%
                        </h3>
                        <Slider
                          value={[contrast]}
                          onValueChange={([v]) => setContrast(v)}
                          min={50}
                          max={150}
                          step={5}
                        />
                      </div>
                      
                      <div className="space-y-4 md:col-span-2">
                        <h3 className="font-semibold flex items-center gap-2">
                          <Sparkles className="w-4 h-4" />
                          Saturation: {saturation}%
                        </h3>
                        <Slider
                          value={[saturation]}
                          onValueChange={([v]) => setSaturation(v)}
                          min={0}
                          max={200}
                          step={5}
                        />
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button variant="outline" onClick={resetFilters} className="flex-1">
                        Reset All
                      </Button>
                    </div>
                    
                    <canvas 
                      ref={canvasRef}
                      className="w-full rounded-lg bg-secondary"
                    />
                  </TabsContent>
                </Tabs>
                
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => {
                      setUploadedImage(null);
                      resetFilters();
                    }}
                  >
                    <ImageIcon className="w-4 h-4" />
                    Choose Different Image
                  </Button>
                  <Button variant="hero" className="flex-1">
                    Add to Cart
                  </Button>
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
