import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast({ title: "সকল তথ্য পূরণ করুন", variant: "destructive" });
      return;
    }

    const body = `নাম: ${form.name}%0Aইমেইল: ${form.email}%0A%0A${form.message}`;
    window.location.href = `mailto:alshamsaraf@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${body}`;

    toast({ title: "ইমেইল ক্লায়েন্ট খোলা হচ্ছে..." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const update = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">যোগাযোগ করুন</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            যেকোনো প্রশ্ন বা অর্ডারের জন্য আমাদের সাথে যোগাযোগ করুন।
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-xl border border-border p-8 shadow-sm space-y-5"
          >
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">আপনার নাম</label>
              <Input placeholder="নাম লিখুন" value={form.name} onChange={(e) => update("name", e.target.value)} />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">ইমেইল</label>
              <Input type="email" placeholder="example@email.com" value={form.email} onChange={(e) => update("email", e.target.value)} />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">বিষয়</label>
              <Input placeholder="বিষয় লিখুন" value={form.subject} onChange={(e) => update("subject", e.target.value)} />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">মেসেজ</label>
              <Textarea placeholder="আপনার মেসেজ লিখুন..." rows={4} value={form.message} onChange={(e) => update("message", e.target.value)} />
            </div>
            <Button type="submit" className="w-full text-base font-semibold" size="lg">
              <Send className="h-4 w-4 mr-2" />
              মেসেজ পাঠান
            </Button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 flex flex-col justify-center"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">ঠিকানা</h4>
                <p className="text-muted-foreground">শিকারপুর, বগুড়া সদর</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">মোবাইল</h4>
                <a href="tel:+8801739881515" className="text-muted-foreground hover:text-primary transition-colors">
                  ০১৭৩৯৮৮১৫১৫
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">ইমেইল</h4>
                <a href="mailto:alshamsaraf@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  alshamsaraf@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Facebook className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">ফেসবুক</h4>
                <a
                  href="https://www.facebook.com/share/18YEgkevyS/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  আমাদের পেজে ভিজিট করুন →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
