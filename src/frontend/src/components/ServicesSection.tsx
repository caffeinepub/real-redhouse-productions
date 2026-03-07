import { cn } from "@/lib/utils";
import { Film, Music, Palette, Scissors, Sparkles, Video } from "lucide-react";
import { useInView } from "../hooks/useInView";

const services = [
  {
    icon: Video,
    title: "Film Direction",
    description:
      "Bringing screenplays to life with a strong visual language, meticulous detailing, and character-driven storytelling.",
  },
  {
    icon: Music,
    title: "Music Video Production",
    description:
      "End-to-end production for artists — from storyboard to final cut.",
  },
  {
    icon: Film,
    title: "Short Film Direction",
    description:
      "Festival-ready short films built on micro-budgets with maximum emotion.",
  },
  {
    icon: Scissors,
    title: "Editing",
    description:
      "Narrative editing that shapes rhythm, pace, and emotional arc.",
  },
  {
    icon: Palette,
    title: "Color Grading",
    description:
      "DaVinci Resolve certified — cinematic color that elevates every frame.",
  },
  {
    icon: Sparkles,
    title: "Film Production",
    description:
      "Turnkey production exclusively for short films and web series—maximizing resources for a premium cinematic output.",
  },
];

interface ServiceCardProps {
  service: (typeof services)[0];
  index: number;
  delay: number;
}

function ServiceCard({ service, index, delay }: ServiceCardProps) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={cn(
        "fade-in-up group border border-border/50 rounded-sm p-6 bg-card/40 hover:bg-card transition-all duration-300",
        "hover:border-amber/40 hover:shadow-amber",
        inView && "in-view",
        delay === 100 && "delay-100",
        delay === 200 && "delay-200",
        delay === 300 && "delay-300",
        delay === 400 && "delay-400",
        delay === 500 && "delay-500",
      )}
      data-ocid={`services.item.${index + 1}`}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-amber/10 border border-amber/20 flex items-center justify-center group-hover:bg-amber/15 group-hover:border-amber/40 transition-all">
          <Icon size={18} strokeWidth={1.5} className="text-amber" />
        </div>
        <div>
          <h3 className="font-display font-semibold text-foreground text-base mb-1.5 group-hover:text-amber transition-colors">
            {service.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}

const DELAYS = [100, 200, 300, 400, 200, 300];

export default function ServicesSection() {
  const [headingRef, headingInView] = useInView<HTMLDivElement>();

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div
          ref={headingRef}
          className={cn("fade-in-up mb-14", headingInView && "in-view")}
        >
          <p className="text-xs tracking-cinematic uppercase text-amber font-display mb-3">
            Craft & Expertise
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground">
            What I Do
          </h2>
          <div className="mt-4 w-16 h-px bg-amber opacity-60" />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              delay={DELAYS[i] ?? 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
