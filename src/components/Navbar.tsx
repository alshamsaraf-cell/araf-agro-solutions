import { Leaf } from "lucide-react";

const navItems = [
  { label: "হোম", href: "#home" },
  { label: "আমাদের সম্পর্কে", href: "#about" },
  { label: "পণ্য সমূহ", href: "#products" },
  { label: "সেবা সমূহ", href: "#services" },
  { label: "যোগাযোগ", href: "#contact" },
];

const Navbar = () => {

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => scrollTo("#home")} className="flex items-center gap-2 group">
            <Leaf className="h-7 w-7 text-primary transition-transform group-hover:rotate-12" />
            <span className="text-xl font-bold text-foreground">আরাফ ট্রেডার্স</span>
          </button>

          <div className="flex items-center gap-1">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
