import { ShoppingCart, Menu, Search, User, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";

export const Navbar = () => {
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showProductSubmenu, setShowProductSubmenu] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop Canvas", href: "/products", hasDropdown: true },
    { name: "Deals", href: "/deals" },
    { name: "Gifts", href: "/gifts" },
    { name: "Track Order", href: "/track" },
    { name: "Help", href: "/help" },
  ];

  const shopDropdownItems = [
    { name: "Canvas Prints", href: "/products" },
    { name: "Metal Prints", href: "/metal-prints" },
    { name: "Collages Canvas", href: "/products?type=collages" },
    { name: "Photo Pillows", href: "/photo-pillows" },
    { name: "Photo Blankets", href: "/photo-blankets" },
    { name: "Pet Portraits", href: "/products?type=pet-portraits" },
    { name: "Print Bundles", href: "/products?type=bundles" },
    { name: "Word Art", href: "/products?type=word-art" },
    { name: "Kid Art", href: "/products?type=kid-art" },
    { name: "Gift Cards", href: "/products?type=gift-cards" },
  ];

  const mobileMenuItems = [
    { name: "Products", href: "/products", hasArrow: true },
    { name: "Gifts", href: "/gifts" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact us", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];

  const handleSignOut = async () => {
    await signOut();
    toast.success("Signed out successfully");
    navigate("/");
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-background transition-all duration-300 animate-slide-down ${
        isScrolled ? "shadow-[0_2px_8px_rgba(0,0,0,0.05)]" : ""
      }`}
      role="banner"
    >
      <nav
        className="container mx-auto px-4 lg:px-8"
        aria-label="Main Navigation"
      >
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-xl lg:text-2xl text-primary tracking-tight z-10"
          >
            <span className="font-['Poppins',_sans-serif] font-bold" style={{ letterSpacing: '-0.2px' }}>
              Snap4Canvas
            </span>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center gap-7 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger asChild>
                    <button className="text-foreground font-medium text-[15px] hover:text-primary transition-colors duration-250 outline-none font-['Poppins',_sans-serif] px-4 py-3 cursor-pointer bg-transparent border-none" style={{ letterSpacing: '-0.2px' }}>
                      {link.name} ▾
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="center"
                    className="min-w-[220px] bg-background border-border rounded-lg shadow-lg p-2 z-[100]"
                  >
                    {shopDropdownItems.map((item) => (
                      <DropdownMenuItem key={item.name} asChild>
                        <Link
                          to={item.href}
                          className="block px-4 py-3 text-foreground hover:bg-border hover:text-primary-hover rounded-md transition-colors cursor-pointer"
                        >
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-foreground font-medium text-[15px] hover:text-primary transition-colors duration-250 font-['Poppins',_sans-serif]"
                  style={{ letterSpacing: '-0.2px' }}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-3 lg:gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="hidden lg:flex hover:text-primary"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </Button>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hidden lg:flex hover:text-primary"
                    aria-label="Account"
                  >
                    <User className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 bg-background z-[100]">
                  <DropdownMenuItem asChild>
                    <Link to="/track" className="w-full cursor-pointer">
                      My Orders
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/upload" className="w-full cursor-pointer">
                      Upload Design
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden lg:flex hover:text-primary"
                  aria-label="Account"
                >
                  <User className="w-5 h-5" />
                </Button>
              </Link>
            )}
            <Link to="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:text-primary"
                aria-label={`Cart with ${cartCount} items`}
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  aria-label="Toggle menu"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-full sm:w-[320px] bg-background p-0 flex flex-col"
              >
                <div className="flex-1 overflow-y-auto">
                  <nav className="py-4">
                    <div className="flex flex-col">
                      {mobileMenuItems.map((item) => (
                        <div key={item.name}>
                          {item.hasArrow ? (
                            <>
                              <button
                                onClick={() => setShowProductSubmenu(!showProductSubmenu)}
                                className="flex items-center justify-between px-6 py-4 text-foreground font-normal text-base border-b border-border hover:bg-border/50 transition-colors w-full text-left"
                              >
                                <span>{item.name}</span>
                                <svg 
                                  width="8" 
                                  height="14" 
                                  viewBox="0 0 8 14" 
                                  fill="none" 
                                  className={`text-muted-foreground transition-transform ${showProductSubmenu ? 'rotate-90' : ''}`}
                                >
                                  <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </button>
                              {showProductSubmenu && (
                                <div className="bg-muted/30">
                                  {shopDropdownItems.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      to={subItem.href}
                                      className="flex items-center px-10 py-3 text-foreground/80 font-normal text-sm border-b border-border hover:bg-border/50 transition-colors"
                                      onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setShowProductSubmenu(false);
                                      }}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link
                              to={item.href}
                              className="flex items-center justify-between px-6 py-4 text-foreground font-normal text-base border-b border-border hover:bg-border/50 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <span>{item.name}</span>
                            </Link>
                          )}
                        </div>
                      ))}
                      {user ? (
                        <button
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            handleSignOut();
                          }}
                          className="flex items-center justify-between px-6 py-4 text-foreground font-normal text-base border-b border-border hover:bg-border/50 transition-colors w-full text-left"
                        >
                          <span>Logout</span>
                        </button>
                      ) : (
                        <Link
                          to="/auth"
                          className="flex items-center justify-between px-6 py-4 text-foreground font-normal text-base border-b border-border hover:bg-border/50 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span>Login</span>
                        </Link>
                      )}
                    </div>
                  </nav>
                </div>
                
                <div className="mt-auto border-t border-border">
                  <div className="p-6">
                    <Link to="/upload" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground h-12 text-base font-medium rounded-lg">
                        Create your print
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="bg-primary text-primary-foreground px-6 py-6 text-center relative">
                    <p className="text-sm leading-relaxed">
                      Transform your photos — Get 90% Off Canvas Prints! <span className="font-bold underline">Save Now</span>
                    </p>
                    <button className="absolute bottom-4 right-6 w-12 h-12 rounded-full bg-background flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};
