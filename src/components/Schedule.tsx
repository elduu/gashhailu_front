import {
  Users,
  UserCheck,
  Mic,
  UtensilsCrossed,
  Camera,
  PartyPopper,
} from "lucide-react"; 
import { useScrollAnimation } from "@/hooks/useScrollAnimation";


  const schedule = [
  {
    time: "6:00 PM - 6:30 PM",
    title: "Guest Arrival & Welcome",
    icon: Users,
    desc: "Guests arrive and are warmly welcomed at the venue",
  },
  {
    time: "6:30 PM",
    title: "Arrival of Rev. Dr. Tolosa Gudina",
    icon: UserCheck,
    desc: "Honored guest arrives at the ceremony",
  },
  {
    time: "6:30 PM - 8:00 PM",
    title: "Official Program",
    icon: Mic,
    desc: "Speeches, worship, and formal ceremony program",
  },
  {
    time: "8:00 PM - 9:00 PM",
    title: "Dinner Service",
    icon: UtensilsCrossed,
    desc: "Dinner is served to all guests",
  },
  {
    time: "9:00 PM - 10:00 PM",
    title: "Cake Cutting & Photo Session",
    icon: Camera,
    desc: "Celebration cake cutting and group photos",
  },
  {
    time: "10:00 PM",
    title: "Conclusion of Ceremony",
    icon: PartyPopper,
    desc: "Closing remarks and end of the event",
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
