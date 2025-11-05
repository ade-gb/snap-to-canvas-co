import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import canvasMockup from "@/assets/canvas-mockup.jpg";
import workspaceCanvas from "@/assets/workspace-canvas.jpg";

const products = [
  {
    id: "gallery-wrap",
    name: "Gallery Wrap Canvas",
    description: "Classic canvas wrap with image extending around the edges",
    startingPrice: 49,
    image: canvasMockup,
  },
  {
    id: "framed-canvas",
    name: "Framed Canvas Print",
    description: "Premium canvas with your choice of wood frame",
    startingPrice: 79,
    image: workspaceCanvas,
  },
  {
    id: "split-canvas",
    name: "Split Canvas Set",
    description: "Multi-panel canvas for a modern gallery wall look",
    startingPrice: 129,
    image: canvasMockup,
  },
  {
    id: "museum-wrap",
    name: "Museum Wrap Canvas",
    description: "Professional gallery-style wrap with 1.5\" depth",
    startingPrice: 59,
    image: workspaceCanvas,
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Canvas <span className="bg-gradient-hero bg-clip-text text-transparent">Collections</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your perfect canvas style. All products come with our quality guarantee and free shipping.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
