import { ShoppingCart, Menu, Search, User, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { useToast } from "@/hooks/use-toast";

export const Navbar = () => {
  const [cartCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

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
    { name: "Single Canvas Prints", href: "/products?type=single" },
    { name: "Framed Prints", href: "/products?type=framed" },
    { name: "Multi-Panel Sets", href: "/products?type=multi-panel" },
    { name: "Collage Prints", href: "/products?type=collage" },
  ];

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: "Signed out",
      description: "You've been signed out successfully.",
    });
    navigate("/");
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-background transition-all duration-300 ${
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
                  <DropdownMenuTrigger className="text-foreground font-medium text-[15px] hover:text-primary transition-colors duration-250 outline-none font-['Poppins',_sans-serif]" style={{ letterSpacing: '-0.2px' }}>
                    {link.name} ▾
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="center"
                    className="min-w-[220px] bg-background border-border rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.1)] p-2"
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
                <DropdownMenuContent align="end" className="w-48">
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
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-semibold">
                    {cartCount}
                  </span>
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
                className="w-[280px] bg-background p-0"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-6 border-b border-border">
                    <span className="font-bold text-xl text-primary font-['Poppins',_sans-serif]">
                      Menu
                    </span>
                  </div>
                  <nav className="flex-1 py-6 px-4 overflow-y-auto">
                    <div className="flex flex-col gap-1">
                      {navLinks.map((link) => (
                        <div key={link.name}>
                          <Link
                            to={link.href}
                            className="block px-4 py-3 text-foreground font-medium hover:bg-border hover:text-primary rounded-md transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.name}
                          </Link>
                          {link.hasDropdown && (
                            <div className="ml-4 mt-1 flex flex-col gap-1">
                              {shopDropdownItems.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  className="block px-4 py-2 text-sm text-muted-foreground hover:bg-border hover:text-primary rounded-md transition-colors"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-border flex flex-col gap-2">
                      <Button
                        variant="ghost"
                        className="justify-start px-4 hover:bg-border hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Search className="w-5 h-5 mr-3" />
                        Search
                      </Button>
                      {user ? (
                        <>
                          <Link to="/upload" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button
                              variant="ghost"
                              className="w-full justify-start px-4 hover:bg-border hover:text-primary"
                            >
                              <User className="w-5 h-5 mr-3" />
                              My Account
                            </Button>
                          </Link>
                          <Button
                            variant="ghost"
                            className="justify-start px-4 hover:bg-border hover:text-primary text-destructive"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              handleSignOut();
                            }}
                          >
                            <LogOut className="w-5 h-5 mr-3" />
                            Sign Out
                          </Button>
                        </>
                      ) : (
                        <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)}>
                          <Button
                            variant="ghost"
                            className="w-full justify-start px-4 hover:bg-border hover:text-primary"
                          >
                            <User className="w-5 h-5 mr-3" />
                            Sign In
                          </Button>
                        </Link>
                      )}
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};
