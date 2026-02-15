import { motion } from "framer-motion";
import { Truck, Store, MessageCircle, Handshake } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "হোম ডেলিভারি",
    desc: "বগুড়া সদর ও আশেপাশের এলাকায় দ্রুত পণ্য পৌঁছে দিই।",
  },
  {
    icon: Store,
    title: "পাইকারি বিক্রয়",
    desc: "পাইকারি মূল্যে বড় অর্ডারে বিশেষ ছাড়।",
  },
  {
    icon: MessageCircle,
    title: "কৃষি পরামর্শ",
    desc: "অভিজ্ঞ কৃষিবিদদের কাছ থেকে বিনামূল্যে পরামর্শ নিন।",
  },
  {
    icon: Handshake,
    title: "বিশ্বস্ত সেবা",
    desc: "সততা ও দায়িত্বশীলতার সাথে সেবা প্রদান করি।",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 bg-secondary/30">
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          আমাদের সেবা সমূহ
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          আমরা শুধু পণ্য বিক্রি করি না, সেবাও দিই।
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="group bg-card rounded-xl border border-border p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors duration-300">
              <s.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
