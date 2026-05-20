import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <div
          ref={ref}
          className={`text-center space-y-8 transition-opacity transition-transform duration-700 will-change-transform ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          {/* English Heading */}
          <h2 className="font-heading text-3xl md:text-5xl text-foreground leading-tight">
            Celebrating
            <span className="block text-primary">
              90 Blessed Years
            </span>
          </h2>

          {/* English Text */}
          <p className="font-body text-muted-foreground text-sm md:text-base italic leading-relaxed">
            With gratitude to God and great joy, we warmly invite you to join us
            in celebrating the 90th Birthday of our beloved father,
            grandfather, and elder.
          </p>

          {/* Name */}
          <p className="font-heading text-2xl md:text-4xl font-bold text-foreground leading-relaxed">
            Honorable Gashe
            <span className="block text-primary">
              HAILU KITESSA
            </span>
          </p>

          {/* English Subtext */}
          <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed">
            A life of faith, wisdom, love, and legacy.
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-border" />
            <span className="text-primary text-xl">✦</span>
            <div className="w-16 h-px bg-border" />
          </div>

          {/* Amharic Heading */}
        
          {/* Amharic Content */}
          <p className="font-body text-muted-foreground text-sm md:text-base leading-loose">
            በታላቅ ደስታና በምስጋና፣
            የተወደዱ አባታችን፣ አያታችንና ሽማግሌያችን
          </p>

          <p className="font-body text-muted-foreground text-sm md:text-base leading-loose">
            90ኛ የልደት በዓላቸውን ከእኛ ጋር በመሆን
            እንዲያከብሩ በክብር እንጋብዛለን።
          </p>

          <p className="font-body text-muted-foreground text-sm md:text-base italic leading-relaxed">
            
          </p>

          {/* Shared Event Details */}
          <div className="space-y-4 pt-4">
            <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed">
              <strong className="text-foreground">
                Saturday, May 30, 2026
              </strong>
              <br />
              ቅዳሜ ግንቦት 22 ፣ 2018
            </p>

            <p className="font-body text-muted-foreground text-sm md:text-base">
              Time / ሰዓት{" "}
              <strong className="text-foreground">
                12:00 Noon — ከቀኑ 6:00 ሰአት
              </strong>
            </p>

            <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed">
              <strong className="text-foreground">
                Akkoo Coffee Bishoftu Branch
              </strong>
              <br />
              አኮ ቡና ቢሾፍቱ ቅርንጫፍ
            </p>
          </div>

          {/* Closing */}
          <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed">
            Your presence will make this celebration even more meaningful to our
            family.
            <span className="block mt-2">
              መገኘታችሁ ለቤተሰባችን ታላቅ ክብርና ደስታ ይሆናል።
            </span>
          </p>

          <div className="pt-4">
            <span className="text-4xl text-primary">✦</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;