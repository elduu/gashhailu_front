import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <div
          ref={ref}
        className={`text-center space-y-8 transition-opacity transition-transform duration-700 will-change-transform ${
  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
}`}
        >
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">
          ክቡራት እና ክቡራን ቤተሰቦች እና የተወዳጁ ጓደኞች
          </h2>

          <p className="font-body text-muted-foreground text-sm md:text-base italic leading-relaxed">
           “ጌታዬ እግዚአብሔር ሆይ፥ አንተ ተናግረሃልና አሁን እንግዲህ ለዘላለም በፊትህ ይሆን ዘንድ የባሪያህን ቤት፥ እባክህ፥
            ባርክ፤ በበረከትህም የባሪያህ ቤት ለዘላለም ይባረክ።”
          </p>

          <p className="font-heading text-base font-semibold text-foreground">
         — መጽሐፈ ሳሙኤል ካልዕ 7፥29
          </p>

          <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed">
           የቄስ ዶ/ር ቶለሳ ጉዲና የሰማንያ ዓመት የልደት በዓል እና የሃምሳ ዘጠኝ ዓመት የወንጌል አገልግሎታቸውን
            ለማክበር ባዘጋጀነው የእራት ግብዣ ላይ እንዲገኙ በአክብሮት ጋብዘንዎታል።
            <strong className="text-foreground"> ሐሙስ፣ ሚያዚያ 29 / 2018 ዓ.ም.</strong>
            <strong className="text-foreground">በአድዋ ድል የመታሰቢያ ሕንፃ</strong>
          </p>

          <p className="font-body text-muted-foreground text-sm md:text-base">
            ሰዓት <strong className="text-foreground">ከምሽቱ 11:30 ሰዓት.</strong>
          </p>

          <p className="font-body text-muted-foreground text-sm md:text-base">
          በአክብሮት ጋብዘንዎታል።
          </p>

          <div className="pt-4">
            <span className="text-5xl"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
