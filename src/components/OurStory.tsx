
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import story1 from "@/assets/gallery-3.jpg";
import story2 from "@/assets/gallery-11.jpg";
import story3 from "@/assets/gallery-7.jpg";
import story4 from "@/assets/gallery-9.jpg";
import story5 from "@/assets/gallery-8.jpg";
import story6 from "@/assets/gallery-14.jpg";

const milestones = [
 {
    year: "Early Life",
    title: "Called into Ministry",
    text: "From an early age, Rev. Dr. Tolosa Gudina devoted his life to serving God, answering a calling that would shape his lifelong journey in ministry.",
    image: story1,
  },
  {
    year: "Academic Journey",
    title: "Theological Education & Growth",
    text: "He pursued higher theological studies at Uppsala University in Sweden and Fuller Theological Seminary in California, USA, earning a Master of Arts and Doctor of Missiology.",
    image: story2,
  },
  {
    year: "Ministry Service",
    title: "Global Evangelical Impact",
    text: "Rev. Dr. Gudina has served as an ordained minister in the Swedish Evangelical Church and has preached and led conferences across many nations, promoting reconciliation, healing, and unity.",
    image: story3,
  },
  {
    year: "Leadership & Influence",
    title: "National & International Engagement",
    text: "He has met and engaged with global leaders and Ethiopian national figures while contributing to large evangelical gatherings and nationwide spiritual programs for over a decade.",
    image: story4,
  },
  {
    year: "Foundations",
    title: "Founding Ministries & Organizations",
    text: "He is the founder of Truth in Love Gospel Ministries, Ethiopian Pastors and Their Spouses Congress, and KINN Ethiopia, impacting church leadership development.",
    image: story5,
  },
  {
    year: "Today",
    title: "Celebrating 80 Years of Life & 59 Years of Ministry",
    text: "Now, we joyfully celebrate his 80th birthday and nearly six decades of faithful service to the Gospel and the global Church.",
    image: story6,
  },
];

const TimelineItem = ({
  item,
  index,
}: {
  item: (typeof milestones)[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex md:items-center mb-16 last:mb-0">
      {/* Desktop layout */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] gap-8 w-full items-center">
        <div className={`${isLeft ? "text-right" : "order-3 text-left"}`}>
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : isLeft
                ? "opacity-0 -translate-x-10"
                : "opacity-0 translate-x-10"
            }`}
          >
            <span className="text-secondary font-body text-xs tracking-[0.3em] uppercase">
              {item.year}
            </span>
            <h3 className="font-heading text-2xl text-foreground mt-1 mb-3">
              {item.title}
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-sm inline-block">
              {item.text}
            </p>
          </div>
        </div>

        {/* Center line + circle */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-secondary shadow-lg">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" width={512} height={512} />
          </div>
        </div>

        <div className={`${isLeft ? "order-3" : ""}`} />
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex gap-4">
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-secondary shadow-md flex-shrink-0">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" width={512} height={512} />
          </div>
          {index < milestones.length - 1 && (
            <div className="w-px h-full bg-secondary/30 mt-2" />
          )}
        </div>
        <div
          className={`transition-all duration-700 pb-4 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-secondary font-body text-xs tracking-[0.3em] uppercase">
            {item.year}
          </span>
          <h3 className="font-heading text-xl text-foreground mt-1 mb-2">
            {item.title}
          </h3>
          <p className="text-muted-foreground font-body text-sm leading-relaxed">
            {item.text}
          </p>
        </div>
      </div>
    </div>
  );
};

const OurStory = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="story" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="font-script text-3xl text-secondary">life Story</span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2">
       How the Journey Started
          </h2>
          <div className="w-16 h-px bg-secondary mx-auto mt-4" />
        </div>

        {/* Center vertical line (desktop only) */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-secondary/20" />
          {milestones.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
