import {
  Users,
  HandHeart,
  Music,
  Mic,
  BookOpen,
  HeartHandshake,
  Music2,
  MessageCircle,
  UtensilsCrossed,
  Cake,
  Mic2,
  Camera,
  UsersRound,
  PartyPopper,
} from "lucide-react"; 
import { useScrollAnimation } from "@/hooks/useScrollAnimation";


  const schedule = [
  {
    time: "12:00 PM - 12:30 PM",
    title: "የእንግዶች መድረስ እና መስተንግዶ",
    icon: Users,
    desc: "Background worship/music, photo reception, and tea/coffee service for guests.",
  },
  {
    time: "12:30 PM - 12:40 PM",
    title: "የመክፈቻ ጸሎት + የእንኳን ደህና መጣችሁ ንግግር",
    icon: HandHeart,
    desc: "Opening prayer and official welcome speech.",
  },
  {
    time: "12:40 PM - 1:00 PM",
    title: "1ኛው የአምልኮ ጊዜ",
    icon: Music,
    desc: "First worship session. Honorable Gashe Hailu enters during worship.",
  },
  {
    time: "1:00 PM - 1:10 PM",
    title: "ይፋዊ የእንኳን ደህና መጣችሁ ንግግር",
    icon: Mic,
    desc: "Official greeting and welcoming remarks.",
  },
  {
    time: "1:10 PM - 1:20 PM",
    title: "ስለ በረከት እና ምርቃት አጭር ትምህርት",
    icon: BookOpen,
    desc: "Short teaching about blessing and legacy.",
  },
  {
    time: "1:20 PM - 1:50 PM",
    title: "የቤተሰብ የክብር ጊዜ",
    icon: HeartHandshake,
    desc: "Family appreciation speeches, gifts, and blessing ceremony.",
  },
  {
    time: "1:50 PM - 2:00 PM",
    title: "2ኛው የአምልኮ ጊዜ",
    icon: Music2,
    desc: "Second worship session.",
  },
  {
    time: "2:00 PM - 2:20 PM",
    title: "የዕውቅና እና የምስክርነት ንግግሮች",
    icon: MessageCircle,
    desc: "Recognition and testimony speeches from selected speakers.",
  },
  {
    time: "2:20 PM - 3:15 PM",
    title: "ምሳ ግብዣ",
    icon: UtensilsCrossed,
    desc: "Lunch service for all guests. VIP guests served first.",
  },
  {
    time: "3:15 PM - 3:30 PM",
    title: "የኬክ ሥነ-ሥርዓት",
    icon: Cake,
    desc: "Birthday cake cutting ceremony.",
  },
  {
    time: "3:30 PM - 3:45 PM",
    title: "የክቡር አቶ ኃይሉ ቅጤሳ ንግግር",
    icon: Mic2,
    desc: "Special speech by Honorable Ato Hailu Kitessa.",
  },
  {
    time: "3:45 PM - 4:15 PM",
    title: "የቡድን ፎቶ",
    icon: Camera,
    desc: "Family and guest group photo session.",
  },
  {
    time: "4:15 PM - 5:00 PM",
    title: "ነፃ የመገናኛ እና የቤተሰብ ጊዜ",
    icon: UsersRound,
    desc: "Photos, fellowship, greetings, and soft background music.",
  },
  {
    time: "5:00 PM",
    title: "የመዝጊያ ጸሎት + ፍጻሜ",
    icon: PartyPopper,
    desc: "Closing prayer and conclusion of the celebration.",
  },

];
const Schedule = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="schedule" className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="font-script text-3xl text-secondary">The Big Day</span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2">
            Birthday Schedule
          </h2>
          <div className="w-16 h-px bg-secondary mx-auto mt-4" />
        </div>

        <div className="space-y-0">
          {schedule.map((item, i) => {
            const { ref, isVisible } = useScrollAnimation(0.2);
            const Icon = item.icon;
            return (
              <div
                key={i}
                ref={ref}
                className={`flex items-start gap-6 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                {/* Timeline */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border-2 border-secondary flex items-center justify-center bg-background">
                    <Icon size={18} className="text-secondary" />
                  </div>
                  {i < schedule.length - 1 && (
                    <div className="w-px h-16 bg-secondary/30" />
                  )}
                </div>

                <div className="pb-12">
                  <span className="text-secondary font-body text-xs tracking-[0.2em] uppercase">
                    {item.time}
                  </span>
                  <h3 className="font-heading text-xl text-foreground mt-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
