import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Package, CreditCard, Ruler, Shield } from "lucide-react";
import { SEO } from "@/components/SEO";
import { createFAQSchema } from "@/utils/schemas";

const FAQ = () => {
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
        },
        {
          question: "What shipping options are available?",
          answer: "We offer Standard (5-7 days), Express (2-3 days), and Rush (1-2 days) shipping. All orders are carefully packaged to ensure your canvas arrives in perfect condition."
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
        },
        {
          question: "Can I see a preview before ordering?",
          answer: "Yes! Our online editor shows you a realistic preview of how your canvas will look, including the frame option you select."
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
        },
        {
          question: "Are there any hidden fees?",
          answer: "No hidden fees! The price you see at checkout is the final price, including all taxes. Shipping costs are clearly displayed before you complete your purchase."
        }
      ]
    },
    {
      icon: Shield,
      title: "Returns & Quality",
      faqs: [
        {
          question: "What is your return policy?",
          answer: "We want you to love your canvas! If you're not satisfied, contact us within 30 days of delivery for a free remake or full refund. Custom orders are eligible for refund if there's a quality issue."
        },
        {
          question: "What if my canvas arrives damaged?",
          answer: "We take great care in packaging, but if your canvas arrives damaged, please contact us within 48 hours with photos. We'll arrange a free replacement and provide a prepaid return label."
        },
        {
          question: "How do I care for my canvas print?",
          answer: "Keep your canvas away from direct sunlight and moisture. Clean gently with a soft, dry cloth. Avoid using cleaning chemicals. With proper care, your canvas will last for generations."
        },
        {
          question: "Do you guarantee color accuracy?",
          answer: "We strive for the best color accuracy, but slight variations may occur due to different screen calibrations. If you're not happy with the colors, we'll remake it at no charge."
        }
      ]
    }
  ];

  // Flatten all FAQs for schema
  const allFAQs = faqCategories.flatMap(category => category.faqs);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <SEO 
        title="FAQ - Frequently Asked Questions"
        description="Quick answers to questions about custom canvas prints, shipping, quality, returns, and more. Get help with your Snap4Canvas order."
        keywords="canvas print FAQ, custom canvas questions, shipping info, canvas quality, return policy"
        schema={createFAQSchema(allFAQs)}
      />
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quick answers to questions you may have. Can't find what you're looking for? Contact our support team!
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {faqCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader className="bg-muted/30">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-0">
                        <AccordionTrigger className="text-left hover:text-primary">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
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

        {/* Popular Questions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Most Popular Questions</h2>
          <div className="bg-card border-2 border-border rounded-2xl p-8">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "How long does production and delivery take?",
                  answer: "Production takes 3-5 business days, plus shipping time (5-7 days standard, 2-3 days express, or 1-2 days rush). Total delivery time ranges from 8-12 business days for standard shipping."
                },
                {
                  question: "What's your quality guarantee?",
                  answer: "We offer a 100% satisfaction guarantee. If you're not happy with your canvas for any reason, we'll remake it for free or provide a full refund within 30 days."
                },
                {
                  question: "Can I order a custom size?",
                  answer: "Yes! While we offer standard sizes, we can accommodate custom dimensions. Contact our support team with your requirements for a custom quote."
                },
                {
                  question: "Do you offer bulk pricing?",
                  answer: "Absolutely! Orders of 5+ canvases get 15% off, 10+ get 20% off, and 20+ get 25% off automatically at checkout."
                },
                {
                  question: "What image quality do I need?",
                  answer: "For best results, use high-resolution images of at least 1500×2000 pixels. Our editor will alert you if your image resolution is too low for your selected size."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`popular-${index}`} className="border-b last:border-0">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Still Have Questions */}
        <div className="bg-gradient-hero text-primary-foreground rounded-3xl p-8 md:p-12 text-center">
          <HelpCircle className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
          <p className="mb-6 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Our friendly customer support team is here to help! Reach out anytime and we'll get back to you quickly.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/contact">
              <button className="px-6 py-3 bg-background text-foreground rounded-lg font-semibold hover:bg-background/90 transition-colors">
                Contact Support
              </button>
            </a>
            <a href="/track">
              <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Track Your Order
              </button>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;
