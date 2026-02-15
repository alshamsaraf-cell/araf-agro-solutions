import { useState } from "react";
import { Home, User, ShoppingBag, Heart, MessageSquare } from "lucide-react";

const navItems = [
  { icon: Home, label: "হোম", href: "#home" },
  { icon: User, label: "সম্পর্কে", href: "#about" },
  { icon: ShoppingBag, label: "পণ্য", href: "#products" },
  { icon: Heart, label: "সেবা", href: "#services" },
  { icon: MessageSquare, label: "যোগাযোগ", href: "#contact" },
];

const MobileBottomNav = () => {
  const [active, setActive] = useState("#home");

  const scrollTo = (href: string) => {
    setActive(href);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <div className="flex items-center justify-around py-3 px-2 rounded-[2rem] bg-foreground/60 backdrop-blur-xl border border-foreground/10 shadow-2xl">
        {navItems.map((item) => {
          const isActive = active === item.href;
          return (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-primary text-primary-foreground scale-110 shadow-lg"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              <item.icon className="h-5 w-5" />
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
