import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import floralBg from "@/assets/floral-texture.jpg";

const Quote = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <img
        src={floralBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        loading="lazy"
        width={800}
        height={800}
      />
      <div className="absolute inset-0 bg-background/80" />

      <div
        ref={ref}
        className={`relative z-10 text-center px-4 max-w-2xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <span className="font-script text-2xl md:text-3xl text-secondary leading-tight block">
በእምነት፣ በጥበብ፣ በፍቅርና በታሪክ የተሞላ 90 ዓመት።
   
        </span>
        <span className="font-script text-2xl md:text-3xl text-secondary leading-tight block">
     ክቡር ጋሼ ኃይሉ ቅጤሳ
        </span>
        <div className="w-16 h-px bg-secondary mx-auto mt-8" />
        <p className="font-body text-muted-foreground text-xs tracking-[0.3em] uppercase mt-6">
          HAPPY BIRTHDAY
        </p>
      </div>
    </section>
  );
};

export default Quote;
