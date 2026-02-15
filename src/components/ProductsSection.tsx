import { motion } from "framer-motion";
import { Wheat, Bug, UtensilsCrossed, Drumstick } from "lucide-react";

const products = [
  {
    icon: Wheat,
    name: "সার",
    desc: "ইউরিয়া, টিএসপি, ডিএপি, এমওপি সহ সকল ধরনের সার পাওয়া যায়।",
    emoji: "🌾",
  },
  {
    icon: Bug,
    name: "কীটনাশক",
    desc: "ফসলের জন্য কার্যকরী কীটনাশক ও বালাইনাশক।",
    emoji: "🛡️",
  },
  {
    icon: UtensilsCrossed,
    name: "চাল",
    desc: "মিনিকেট, নাজিরশাইল সহ বিভিন্ন জাতের উন্নত মানের চাল।",
    emoji: "🍚",
  },
  {
    icon: Drumstick,
    name: "এগ্রো ফার্মের খাবার",
    desc: "পোল্ট্রি, মাছ ও গবাদি পশুর জন্য পুষ্টিকর খাবার।",
    emoji: "🐔",
  },
];

const ProductsSection = () => (
  <section id="products" className="py-20 md:py-28">
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          আমাদের পণ্য সমূহ
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          কৃষি ও খামারের জন্য প্রয়োজনীয় সকল পণ্য এক ছাদের নিচে।
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.04 }}
            className="group bg-card rounded-xl border border-border p-6 text-center shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-default"
          >
            <div className="text-5xl mb-4">{p.emoji}</div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              <p.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{p.name}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
