import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "মোঃ রফিকুল ইসলাম",
    review: "আরাফ ট্রেডার্স থেকে সার কিনে খুবই সন্তুষ্ট। মান অসাধারণ এবং দামও সাশ্রয়ী।",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rafiq",
  },
  {
    name: "ফাতেমা বেগম",
    review: "হোম ডেলিভারি সেবা চমৎকার! সময়মতো পণ্য পেয়েছি। ধন্যবাদ আরাফ ট্রেডার্স।",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=fatema",
  },
  {
    name: "আব্দুল করিম",
    review: "পোল্ট্রি ফিড এর মান খুব ভালো। আমার মুরগির স্বাস্থ্য অনেক ভালো হয়েছে।",
    rating: 4,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=karim",
  },
  {
    name: "সাইফুল ইসলাম",
    review: "কীটনাশকের কার্যকারিতা দারুণ। ফসলের পোকা দমনে খুবই কাজে দিয়েছে।",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=saiful",
  },
  {
    name: "নূরজাহান খাতুন",
    review: "চালের মান চমৎকার। পরিবারের সবাই খুশি। নিয়মিত এখান থেকে কিনবো।",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=nurjahan",
  },
  {
    name: "হাসান আলী",
    review: "কৃষি পরামর্শ সেবা অনেক সহায়ক হয়েছে। ফসলের ফলন অনেক বেড়েছে।",
    rating: 4,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=hasan",
  },
];

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
  <div className="flex-shrink-0 w-[320px] bg-card rounded-xl border border-border p-6 shadow-sm mx-3">
    <div className="flex items-center gap-3 mb-4">
      <img
        src={review.avatar}
        alt={review.name}
        className="w-12 h-12 rounded-full bg-secondary"
      />
      <div>
        <h4 className="font-semibold text-foreground text-sm">{review.name}</h4>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3.5 w-3.5 ${
                i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
    <p className="text-muted-foreground text-sm leading-relaxed">"{review.review}"</p>
  </div>
);

const ReviewsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5; // medium speed

    const animate = () => {
      scrollPos += speed;
      if (scrollPos >= el.scrollWidth / 2) {
        scrollPos = 0;
      }
      el.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      scrollPos = el.scrollLeft;
      animationId = requestAnimationFrame(animate);
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section id="reviews" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 mb-14 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          আমাদের গ্রাহকদের মতামত
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          আমাদের সন্তুষ্ট গ্রাহকরা যা বলছেন।
        </p>
      </div>

      <div className="relative">
        {/* Left blur */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        {/* Right blur */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex overflow-hidden"
          style={{ scrollBehavior: "auto" }}
        >
          {/* Duplicate reviews for infinite scroll effect */}
          {[...reviews, ...reviews].map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
