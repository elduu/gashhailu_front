import { Navigation } from "lucide-react";
import map from "@/assets/image.png";
const locationButtons = [

  {
    label: "Hotel",
    icon: "🏡",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.226083559722!2d38.9427656!3d8.764787499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b72d3c27674db%3A0x989f05740e4beeb1!2sQW7V%2BW46%2C%20Bishoftu!5e0!3m2!1sen!2set!4v1780122806835!5m2!1sen!2set",
  },
  
 
];

const Events = () => {
  return (
    <section id="events" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-5xl">

        {/* Google Map */}
        <div className="rounded-xl overflow-hidden shadow-lg border border-secondary/20">
    <div className="rounded-xl overflow-hidden shadow-lg border border-secondary/20">
          <img
            src={map}
            alt="Hotel Location Map - Bishoftu"
            className="w-full h-[350px] object-cover"
          />
        </div>
        </div>
        

        {/* Location Buttons */}
        <div className="mt-8 flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 overflow-x-auto">

          {locationButtons.map((loc) => (
            <a
              key={loc.label}
              href={loc.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center
                whitespace-nowrap
                text-xs sm:text-sm
                px-3 py-1.5 sm:px-5 sm:py-2.5
                rounded-full
                border-2 border-foreground/80
                bg-background
                font-body
                text-foreground
                hover:border-secondary hover:text-secondary
                transition-all duration-300
              "
            >
              {/* Hide icons on mobile */}
              <span className="hidden sm:inline text-lg mr-2">
                {loc.icon}
              </span>

              {loc.label}
            </a>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Events;