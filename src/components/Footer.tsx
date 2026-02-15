import { Leaf, Facebook, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-12">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid sm:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="h-6 w-6" />
            <span className="text-lg font-bold">আরাফ ট্রেডার্স</span>
          </div>
          <p className="text-sm opacity-70">
            কৃষি পণ্যের বিশ্বস্ত সরবরাহকারী। মানসম্মত পণ্য, সাশ্রয়ী মূল্য।
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">যোগাযোগ</h4>
          <div className="space-y-2 text-sm opacity-70">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>শিকারপুর, বগুড়া সদর</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <a href="tel:+8801739881515" className="hover:opacity-100 transition-opacity">০১৭৩৯৮৮১৫১৫</a>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">সামাজিক যোগাযোগ</h4>
          <a
            href="https://www.facebook.com/share/18YEgkevyS/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
          >
            <Facebook className="h-5 w-5" />
            Facebook পেজ
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-50">
        © {new Date().getFullYear()} আরাফ ট্রেডার্স। সর্বস্বত্ব সংরক্ষিত।
      </div>
    </div>
  </footer>
);

export default Footer;
