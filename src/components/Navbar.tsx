import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "হোম", href: "#home" },
  { label: "আমাদের সম্পর্কে", href: "#about" },
  { label: "পণ্য সমূহ", href: "#products" },
  { label: "সেবা সমূহ", href: "#services" },
  { label: "যোগাযোগ", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => scrollTo("#home")} className="flex items-center gap-2 group">
            <Leaf className="h-7 w-7 text-primary transition-transform group-hover:rotate-12" />
            <span className="text-xl font-bold text-foreground">আরাফ ট্রেডার্স</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary"
              >
                {item.label}
              </button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
