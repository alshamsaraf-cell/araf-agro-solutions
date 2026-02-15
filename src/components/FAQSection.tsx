import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "আরাফ ট্রেডার্স কোথায় অবস্থিত?",
    a: "আমাদের দোকান শিকারপুর, বগুড়া সদরে অবস্থিত। আপনি সরাসরি আমাদের দোকানে এসে পণ্য কিনতে পারবেন।",
  },
  {
    q: "হোম ডেলিভারি সেবা কি পাওয়া যায়?",
    a: "হ্যাঁ, বগুড়া সদর ও আশেপাশের এলাকায় আমরা হোম ডেলিভারি সেবা প্রদান করি। অর্ডার করতে আমাদের সাথে যোগাযোগ করুন।",
  },
  {
    q: "পাইকারি মূল্যে পণ্য কিনতে পারবো?",
    a: "অবশ্যই! বড় অর্ডারে আমরা বিশেষ পাইকারি মূল্য দিয়ে থাকি। বিস্তারিত জানতে আমাদের সাথে যোগাযোগ করুন।",
  },
  {
    q: "কোন কোন ধরনের সার পাওয়া যায়?",
    a: "ইউরিয়া, টিএসপি, ডিএপি, এমওপি সহ সকল প্রকার কৃষি সার আমাদের কাছে পাওয়া যায়।",
  },
  {
    q: "পণ্যের মান কেমন?",
    a: "আমরা সর্বদা সর্বোচ্চ মানের পণ্য সরবরাহ করি। সকল পণ্য সরকার অনুমোদিত ও মানসম্মত।",
  },
  {
    q: "কিভাবে অর্ডার করবো?",
    a: "আমাদের মোবাইল নম্বর ০১৭৩৯৮৮১৫১৫ তে কল করুন অথবা ওয়েবসাইটের যোগাযোগ ফর্ম ব্যবহার করুন।",
  },
];

const FAQSection = () => {
  const leftFaqs = faqs.slice(0, 3);
  const rightFaqs = faqs.slice(3, 6);

  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            সচরাচর জিজ্ঞাসা
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            আপনার সাধারণ প্রশ্নের উত্তর এখানে পাবেন।
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {leftFaqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`left-${i}`}
                  className="bg-card rounded-xl border border-border px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-foreground font-medium text-left hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {rightFaqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`right-${i}`}
                  className="bg-card rounded-xl border border-border px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-foreground font-medium text-left hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
