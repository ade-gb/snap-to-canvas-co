import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Check, Package, Truck, MapPin, Clock } from "lucide-react";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Free Shipping Across the USA
            </h1>
            <p className="text-xl text-muted-foreground">
              Fast, reliable delivery to all 50 states with tracking included
            </p>
          </div>

          {/* Free Shipping Highlight */}
          <Card className="p-8 mb-8 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-4">
              <Package className="w-12 h-12 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-2">100% Free Shipping</h2>
                <p className="text-lg text-muted-foreground">
                  Every order ships free to any address in the United States. No minimum purchase required. No hidden fees.
                </p>
              </div>
            </div>
          </Card>

          {/* Delivery Times by Region */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Estimated Delivery Times</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">East Coast</h3>
                </div>
                <p className="text-muted-foreground mb-2">
                  CT, DE, FL, GA, ME, MD, MA, NH, NJ, NY, NC, PA, RI, SC, VT, VA, WV
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-semibold">3-5 business days</span>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Midwest</h3>
                </div>
                <p className="text-muted-foreground mb-2">
                  IL, IN, IA, KS, MI, MN, MO, NE, ND, OH, SD, WI
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-semibold">4-6 business days</span>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">South</h3>
                </div>
                <p className="text-muted-foreground mb-2">
                  AL, AR, KY, LA, MS, OK, TN, TX
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-semibold">4-6 business days</span>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">West Coast</h3>
                </div>
                <p className="text-muted-foreground mb-2">
                  AK, AZ, CA, CO, HI, ID, MT, NV, NM, OR, UT, WA, WY
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-semibold">5-7 business days</span>
                </div>
              </Card>
            </div>
          </div>

          {/* Shipping Process */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">How Shipping Works</h2>
            <div className="space-y-4">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Order Processing</h3>
                    <p className="text-muted-foreground">
                      Your canvas is printed the same day you order (for orders placed before 2 PM EST). We use museum-quality materials and archival inks.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Quality Check & Packaging</h3>
                    <p className="text-muted-foreground">
                      Every canvas undergoes a thorough quality inspection. We then carefully package it with protective corners and bubble wrap to ensure safe delivery.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Shipment & Tracking</h3>
                    <p className="text-muted-foreground">
                      Your order ships via USPS, UPS, or FedEx (we choose the fastest carrier for your location). You'll receive a tracking number via email within 24 hours of shipment.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Delivery to Your Door</h3>
                    <p className="text-muted-foreground">
                      Your canvas arrives ready to hang with all necessary hardware included. If you're not completely satisfied, we'll make it right with our 100% satisfaction guarantee.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Shipping Benefits */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Shipping Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Free to All 50 States</h3>
                    <p className="text-muted-foreground">Including Alaska and Hawaii</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Tracking Included</h3>
                    <p className="text-muted-foreground">Monitor your order every step of the way</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Secure Packaging</h3>
                    <p className="text-muted-foreground">Protected corners and bubble wrap</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Damage Protection</h3>
                    <p className="text-muted-foreground">We'll replace or refund if damaged in transit</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Shipping FAQs</h2>
            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Do you ship to PO boxes?</h3>
                <p className="text-muted-foreground">
                  Yes, we ship to PO boxes throughout the United States using USPS.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Can I expedite my order?</h3>
                <p className="text-muted-foreground">
                  Yes! Contact us immediately after placing your order, and we can arrange rush processing and expedited shipping for an additional fee.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Do you ship internationally?</h3>
                <p className="text-muted-foreground">
                  Currently, we only ship within the United States and its territories. International shipping may be available in the future.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">What if my canvas is damaged during shipping?</h3>
                <p className="text-muted-foreground">
                  We take great care in packaging, but if your canvas arrives damaged, contact us within 48 hours with photos and we'll send a replacement at no charge.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shipping;
