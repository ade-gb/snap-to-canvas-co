import { Upload, Palette, Truck, Shield } from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Easy Upload",
    description: "Drag and drop your photos or browse from your device. We support all major image formats.",
  },
  {
    icon: Palette,
    title: "Custom Sizing",
    description: "Choose from multiple canvas sizes and frame options to perfectly fit your space.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Free shipping on all orders. Your canvas arrives ready to hang in 5-7 business days.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Museum-quality materials with a 100% satisfaction guarantee. Love it or your money back.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Snap4Canvas?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We make it simple to transform your digital photos into stunning wall art
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={feature.title}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: "both" }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-light rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
