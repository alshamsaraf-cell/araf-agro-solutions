import { motion } from "framer-motion";
import { ShieldCheck, Award, Banknote } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "বিশ্বস্ততা",
    desc: "বছরের পর বছর ধরে কৃষকদের আস্থার প্রতীক।",
  },
  {
    icon: Award,
    title: "মানসম্মত পণ্য",
    desc: "সর্বোচ্চ মানের কৃষি উপকরণ সরবরাহ করি।",
  },
  {
    icon: Banknote,
    title: "সাশ্রয়ী মূল্য",
    desc: "ন্যায্য ও সাশ্রয়ী মূল্যে পণ্য পৌঁছে দিই।",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-secondary/30">
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          আমাদের সম্পর্কে
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          আরাফ ট্রেডার্স শিকারপুর, বগুড়ায় অবস্থিত একটি নির্ভরযোগ্য কৃষি পণ্যের দোকান। আমরা কৃষকদের জন্য সেরা মানের সার, কীটনাশক, চাল এবং এগ্রো ফার্মের খাবার সরবরাহ করে থাকি।
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="group bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <f.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
