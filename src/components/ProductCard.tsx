import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  startingPrice: number;
  image: string;
}

export const ProductCard = ({ id, name, description, startingPrice, image }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-soft transition-all duration-300 border-border hover-scale">
      <div className="aspect-square overflow-hidden bg-secondary">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-sm text-muted-foreground">Starting at</span>
          <span className="text-2xl font-bold text-primary">${startingPrice}</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link to={`/product/${id}`} className="w-full">
          <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            Customize
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
