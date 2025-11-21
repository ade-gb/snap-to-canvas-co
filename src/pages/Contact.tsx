import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SEO } from "@/components/SEO";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100, "First name must be less than 100 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(100, "Last name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    // TODO: Implement backend submission
    console.log("Form submitted:", data);
    toast.success("Message sent successfully! We'll get back to you within 24 hours.");
    form.reset();
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "customersolution@snap4canvas.com",
      action: "Send Email",
      href: "mailto:customersolution@snap4canvas.com"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Available 9 AM - 6 PM EST",
      action: "Start Chat",
      href: "#"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "+1 669-246-2503",
      action: "Call Now",
      href: "tel:+16692462503"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <SEO 
        title="Contact Us - Customer Support"
        description="Get in touch with Snap4Canvas customer support. Email us at customersolution@snap4canvas.com or call +1 669-246-2503. We're here to help!"
        keywords="contact Snap4Canvas, customer support, canvas print help"
      />
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help! Reach out to us through any of these channels and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Methods - Modern Split Design */}
        <div className="mb-16 bg-gradient-hero rounded-3xl p-8 md:p-12 shadow-elegant">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary-foreground mb-3">Choose Your Preferred Method</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Our support team is ready to assist you with any questions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div 
                  key={method.title} 
                  className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 hover:bg-background transition-all hover:scale-105 hover:shadow-xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                    <Button 
                      variant="default" 
                      className="w-full mt-auto"
                      onClick={() => {
                        if (method.href === "#") {
                          toast.info("Live chat is currently offline. Please contact us via email or phone!");
                        } else {
                          window.location.href = method.href;
                        }
                      }}
                    >
                      {method.action}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Information Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Office Hours */}
          <div className="bg-card border-2 border-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Office Hours</h3>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex justify-between py-2 border-b border-border/50">
                <span className="font-medium">Monday - Friday</span>
                <span>9:00 AM - 6:00 PM EST</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border/50">
                <span className="font-medium">Saturday</span>
                <span>10:00 AM - 4:00 PM EST</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-medium">Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-card border-2 border-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Our Location</h3>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <p className="text-base leading-relaxed">
                Snap4Canvas Headquarters<br />
                123 Canvas Street<br />
                New York, NY 10001<br />
                United States
              </p>
              <Button variant="outline" className="mt-4 w-full">
                Get Directions
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-card border-2 border-border rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Send Us a Message</h2>
            <p className="text-muted-foreground">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="How can we help?" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        rows={6}
                        placeholder="Tell us more about your inquiry..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full">Send Message</Button>
            </form>
          </Form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
