import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import Products from "./pages/Products";
import CanvasPrints from "./pages/CanvasPrints";
import MetalPrints from "./pages/MetalPrints";
import CollagesCanvas from "./pages/CollagesCanvas";
import PrintBundles from "./pages/PrintBundles";
import PhotoPillows from "./pages/PhotoPillows";
import PhotoBlankets from "./pages/PhotoBlankets";
import PetPortraits from "./pages/PetPortraits";
import WordArt from "./pages/WordArt";
import KidArt from "./pages/KidArt";
import ProductDetail from "./pages/ProductDetail";
import Upload from "./pages/Upload";
import Cart from "./pages/Cart";
import Deals from "./pages/Deals";
import Gifts from "./pages/Gifts";
import TrackOrder from "./pages/TrackOrder";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import FAQ from "./pages/FAQ";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/canvas-prints" element={<CanvasPrints />} />
          <Route path="/metal-prints" element={<MetalPrints />} />
          <Route path="/collages-canvas" element={<CollagesCanvas />} />
          <Route path="/print-bundles" element={<PrintBundles />} />
          <Route path="/photo-pillows" element={<PhotoPillows />} />
          <Route path="/photo-blankets" element={<PhotoBlankets />} />
          <Route path="/pet-portraits" element={<PetPortraits />} />
          <Route path="/word-art" element={<WordArt />} />
          <Route path="/kid-art" element={<KidArt />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/track" element={<TrackOrder />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/auth" element={<Auth />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
