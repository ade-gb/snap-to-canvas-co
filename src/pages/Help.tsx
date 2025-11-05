import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageCircle, Phone, HelpCircle, Package, CreditCard, Ruler, Shield, Video, Lightbulb, Users, BookOpen } from "lucide-react";

const Help = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "support@snap4canvas.com",
      action: "Send Email",
      color: "text-blue-500"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Available 9 AM - 6 PM EST",
      action: "Start Chat",
      color: "text-green-500"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "1-800-CANVAS-4U",
      action: "Call Now",
      color: "text-purple-500"
    }
  ];

  const faqCategories = [
    {
      icon: Package,
      title: "Ordering & Shipping",
      faqs: [
        {
          question: "How long does it take to receive my order?",
          answer: "Production typically takes 3-5 business days. Shipping times vary based on your location: Standard shipping (5-7 business days), Express shipping (2-3 business days), or Rush shipping (1-2 business days)."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes! We ship to over 50 countries worldwide. International shipping times range from 7-14 business days depending on your location. Customs fees may apply based on your country's regulations."
        },
        {
          question: "Can I track my order?",
          answer: "Absolutely! Once your order ships, you'll receive a tracking number via email. You can also track your order anytime using our Track Order page."
        }
      ]
    },
    {
      icon: Ruler,
      title: "Sizing & Quality",
      faqs: [
        {
          question: "What sizes are available?",
          answer: "We offer a wide range of sizes from small (8×10) to extra large (48×72). Popular sizes include 11×14, 16×20, 24×36, and 30×40. Custom sizes are also available upon request."
        },
        {
          question: "What if my image resolution is too low?",
          answer: "Our smart editor will alert you if your image resolution is too low for your selected size. We recommend high-resolution images (at least 1500×2000 pixels) for best results. Our team can also help enhance your image quality."
        },
        {
          question: "What material is used for canvas prints?",
          answer: "We use premium 400gsm poly-cotton canvas blend with archival-grade inks that resist fading for up to 200 years. All our prints come with a protective UV coating."
        }
      ]
    },
    {
      icon: CreditCard,
      title: "Payment & Pricing",
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, and Google Pay. All transactions are secured with SSL encryption."
        },
        {
          question: "Do you offer discounts for bulk orders?",
          answer: "Yes! Orders of 5+ canvases receive 15% off, 10+ receive 20% off, and 20+ receive 25% off. Contact our sales team for custom quotes on larger orders."
        },
        {
          question: "Is there a satisfaction guarantee?",
          answer: "We offer a 100% satisfaction guarantee. If you're not completely happy with your canvas, we'll remake it for free or provide a full refund within 30 days of delivery."
        }
      ]
    },
    {
      icon: Shield,
      title: "Returns & Quality",
      faqs: [
        {
          question: "What is your return policy?",
          answer: "We want you to love your canvas! If you're not satisfied, you can return it within 30 days for a full refund or free remake. The canvas must be in original condition. Custom or personalized items are subject to our quality guarantee."
        },
        {
          question: "What if my canvas arrives damaged?",
          answer: "We take great care in packaging, but if your canvas arrives damaged, please contact us within 48 hours with photos. We'll arrange a free replacement and provide a prepaid return label."
        },
        {
          question: "How do I care for my canvas print?",
          answer: "Keep your canvas away from direct sunlight and moisture. Clean gently with a soft, dry cloth. Avoid using cleaning chemicals. With proper care, your canvas will last for generations."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How Can We Help?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions or get in touch with our support team
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <Card key={method.title} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center">
                      <Icon className={`w-7 h-7 ${method.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full">{method.action}</Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            {faqCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.title}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-primary" />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Size Guide */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ruler className="w-5 h-5 text-primary" />
              Size Guide
            </CardTitle>
            <CardDescription>Choose the perfect size for your space</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Size</th>
                    <th className="text-left p-3">Dimensions</th>
                    <th className="text-left p-3">Best For</th>
                    <th className="text-left p-3">Min. Image Resolution</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b">
                    <td className="p-3 font-medium">Small</td>
                    <td className="p-3">8×10 - 11×14"</td>
                    <td className="p-3">Desks, shelves, small walls</td>
                    <td className="p-3">1200×1500 px</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Medium</td>
                    <td className="p-3">16×20 - 20×24"</td>
                    <td className="p-3">Living rooms, bedrooms</td>
                    <td className="p-3">2000×2500 px</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Large</td>
                    <td className="p-3">24×36 - 30×40"</td>
                    <td className="p-3">Statement walls, galleries</td>
                    <td className="p-3">3000×4000 px</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Extra Large</td>
                    <td className="p-3">36×48 - 48×72"</td>
                    <td className="p-3">Large spaces, commercial</td>
                    <td className="p-3">4500×6000 px</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Video Tutorials */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Video Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "How to Upload Your Photo", duration: "2:30", thumbnail: "/placeholder.svg" },
              { title: "Choosing the Perfect Size", duration: "3:15", thumbnail: "/placeholder.svg" },
              { title: "Design Tips for Best Results", duration: "4:20", thumbnail: "/placeholder.svg" }
            ].map((video, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-t-lg">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <Video className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                    <Badge className="absolute top-3 right-3">{video.duration}</Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{video.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Getting Started Guide */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <CardTitle>Getting Started Guide</CardTitle>
            </div>
            <CardDescription>Follow these simple steps to create your perfect canvas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: 1, title: "Upload Your Photo", desc: "Choose a high-quality image from your device" },
                { step: 2, title: "Select Size & Frame", desc: "Pick the perfect dimensions and frame style" },
                { step: 3, title: "Preview & Adjust", desc: "See exactly how your canvas will look" },
                { step: 4, title: "Order & Enjoy", desc: "Fast production and shipping to your door" }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Design Tips */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Lightbulb className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-center">Design Tips & Best Practices</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Photo Quality Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Use high-resolution images</p>
                      <p className="text-sm text-muted-foreground">At least 2000×2500 pixels for best quality</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Avoid overly compressed photos</p>
                      <p className="text-sm text-muted-foreground">Original files work better than social media downloads</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Check lighting and focus</p>
                      <p className="text-sm text-muted-foreground">Well-lit, in-focus photos print beautifully</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Composition Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Consider the canvas ratio</p>
                      <p className="text-sm text-muted-foreground">Match your photo orientation to canvas size</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Leave space around edges</p>
                      <p className="text-sm text-muted-foreground">Important elements shouldn't be too close to borders</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Test different orientations</p>
                      <p className="text-sm text-muted-foreground">Portrait vs landscape can change the entire look</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Community Gallery */}
        <Card className="mb-12 bg-muted border-0">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-3">Customer Gallery</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get inspired by beautiful canvas prints created by our customers
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-square bg-card rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                  <img
                    src="/placeholder.svg"
                    alt={`Customer canvas ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button size="lg">View Full Gallery</Button>
            </div>
          </CardContent>
        </Card>

        {/* Still Need Help */}
        <Card className="bg-gradient-hero text-primary-foreground border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
            <p className="mb-6 text-lg">
              Our friendly customer support team is ready to assist you with any questions
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Contact Support
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                View More FAQs
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Help;
