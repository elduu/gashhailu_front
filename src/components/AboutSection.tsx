import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-background via-background to-muted/20"
    >
      <div className="container mx-auto max-w-5xl px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 will-change-transform ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <div className="bg-card/70 backdrop-blur-md border border-border rounded-[40px] shadow-2xl overflow-hidden">
            
            {/* Top Decorative Section */}
            <div className="relative py-16 px-6 md:px-14 text-center bg-gradient-to-br from-amber-50 via-background to-orange-50 dark:from-zinc-900 dark:via-background dark:to-zinc-950">
              
              <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top,theme(colors.orange.400),transparent_60%)]" />

              <div className="relative z-10 space-y-6">
                <p className="uppercase tracking-[0.4em] text-xs md:text-sm text-muted-foreground font-medium">
                  Birthday Celebration
                </p>

                <h1 className="font-heading text-4xl md:text-6xl leading-tight text-foreground">
                  Celebrating
                  <span className="block text-primary">
                    90 Blessed Years
                  </span>
                </h1>

                <div className="w-24 h-[2px] bg-primary mx-auto rounded-full" />

                <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed text-sm md:text-lg">
                  With gratitude to God and great joy, we warmly invite you to
                  join us in celebrating the 90th Birthday of our beloved
                  father, grandfather, and elder.
                </p>

                <div className="space-y-2">
                  <h2 className="text-2xl md:text-4xl font-bold text-foreground tracking-wide">
                    Honorable Gashe
                  </h2>

                  <h2 className="text-3xl md:text-5xl font-black text-primary">
                    HAILU KITESSA
                  </h2>

                  <p className="italic text-muted-foreground text-sm md:text-base">
                    A life of faith, wisdom, love, and legacy.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center py-6">
              <div className="w-20 h-px bg-border" />
              <span className="px-4 text-primary text-xl">✦</span>
              <div className="w-20 h-px bg-border" />
            </div>

            {/* English + Amharic Layout */}
            <div className="grid md:grid-cols-2 gap-0">
              
              {/* English */}
              <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-border bg-background/60">
                <div className="space-y-6">
                  <div>
                    <p className="uppercase text-xs tracking-[0.3em] text-primary mb-3">
                      Invitation
                    </p>

                    <h3 className="text-2xl font-bold text-foreground">
                      Join Our Celebration
                    </h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    Your presence will make this celebration even more meaningful
                    to our family.
                  </p>

                  <div className="space-y-4 pt-4">
                    <div className="flex items-start gap-4">
                      <span className="text-primary text-xl">📅</span>
                      <div>
                        <p className="font-semibold text-foreground">Date</p>
                        <p className="text-muted-foreground">
                          Saturday, May 30, 2026
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-primary text-xl">⏰</span>
                      <div>
                        <p className="font-semibold text-foreground">Time</p>
                        <p className="text-muted-foreground">
                          12:00 Noon
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-primary text-xl">📍</span>
                      <div>
                        <p className="font-semibold text-foreground">Venue</p>
                        <p className="text-muted-foreground">
                          Akkoo Coffee Bishoftu Branch
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Amharic */}
              <div className="p-8 md:p-12 bg-muted/20">
                <div className="space-y-6">
                  <div>
                    <p className="uppercase text-xs tracking-[0.3em] text-primary mb-3">
                      ግብዣ
                    </p>

                    <h3 className="text-2xl font-bold text-foreground leading-relaxed">
                      90 ዓመት የተባረከ የሕይወት ጉዞ
                    </h3>
                  </div>

                  <p className="text-muted-foreground leading-loose text-[15px]">
                    በታላቅ ደስታና በምስጋና፣ የተወደዱ አባታችን፣
                    አያታችንና ሽማግሌያችን
                  </p>

                  <div className="space-y-2">
                    <h2 className="text-3xl font-extrabold text-primary">
                      ክቡር ጋሼ ኃይሉ ቅጤሳ
                    </h2>

                    <p className="italic text-muted-foreground leading-relaxed">
                      በእምነት፣ በጥበብ፣ በፍቅርና በታሪክ የተሞላ
                      90 ዓመት።
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-loose text-[15px]">
                    90ኛ የልደት በዓላቸውን ከእኛ ጋር በመሆን
                    እንዲያከብሩ በክብር እንጋብዛለን።
                  </p>

                  <div className="space-y-4 pt-4">
                    <div className="flex items-start gap-4">
                      <span className="text-primary text-xl">📅</span>
                      <div>
                        <p className="font-semibold text-foreground">ቀን</p>
                        <p className="text-muted-foreground">
                          ቅዳሜ ግንቦት 22 ፣ 2018
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-primary text-xl">⏰</span>
                      <div>
                        <p className="font-semibold text-foreground">ሰዓት</p>
                        <p className="text-muted-foreground">
                          ከቀኑ 6:00 ሰአት
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-primary text-xl">📍</span>
                      <div>
                        <p className="font-semibold text-foreground">ቦታ</p>
                        <p className="text-muted-foreground">
                          አኮ ቡና ቢሾፍቱ ቅርንጫፍ
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="pt-4 text-muted-foreground leading-relaxed text-[15px]">
                    መገኘታችሁ ለቤተሰባችን ታላቅ ክብርና ደስታ
                    ይሆናል።
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Decorative */}
            <div className="py-8 text-center bg-gradient-to-r from-transparent via-primary/5 to-transparent">
              <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground">
                Faith • Family • Legacy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;