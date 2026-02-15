import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            🌿 কৃষি পণ্যের বিশ্বস্ত সরবরাহকারী
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-foreground mb-6 leading-tight"
        >
          আরাফ{" "}
          <span className="text-gradient">ট্রেডার্স</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          মানসম্মত সার, কীটনাশক, চাল ও এগ্রো ফার্মের খাবার — সাশ্রয়ী মূল্যে আপনার দোরগোড়ায়।
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="text-base font-semibold shadow-lg hover:shadow-xl transition-shadow"
            onClick={() => scrollTo("#products")}
          >
            আমাদের পণ্য দেখুন
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base font-semibold"
            onClick={() => scrollTo("#contact")}
          >
            <Phone className="h-4 w-4 mr-2" />
            যোগাযোগ করুন
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
