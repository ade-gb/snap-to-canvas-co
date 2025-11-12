import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address").max(255),
});

export const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem("snap4canvas-promo-seen");
    
    if (!hasSeenPopup) {
      // Show popup after 2 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("snap4canvas-promo-seen", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      emailSchema.parse({ email });
      
      // Store email (you can later connect this to your backend)
      localStorage.setItem("snap4canvas-promo-email", email);
      localStorage.setItem("snap4canvas-promo-seen", "true");
      
      toast.success("Success! Check your email for your 90% off code!", {
        description: "Your discount code is: SAVE90",
      });
      
      setIsOpen(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.issues[0].message);
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      setIsOpen(open);
      if (!open) {
        localStorage.setItem("snap4canvas-promo-seen", "true");
      }
    }}>
      <DialogContent hideClose className="max-w-2xl p-0 gap-0 border-0 bg-transparent overflow-hidden">
        <div className="relative bg-gradient-hero text-primary-foreground p-8 md:p-12 rounded-2xl shadow-soft">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Custom Prints,
                <br />
                Incredible Savings
              </h2>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Get 90% Off
              <br />
              All Prints!
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-lg mx-auto">
              Transform your favorite moments into stunning keepsakes - and save 90% while you're at it! Sign up to save & create today.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mt-8">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 bg-background text-foreground placeholder:text-muted-foreground text-lg border-0 focus-visible:ring-2 focus-visible:ring-primary-foreground"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="h-14 px-8 bg-background text-primary hover:bg-background/90 text-lg font-semibold whitespace-nowrap"
              >
                Unlock 90% Off
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
