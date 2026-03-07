import { cn } from "@/lib/utils";
import { Film, Globe, Megaphone } from "lucide-react";
import { useInView } from "../hooks/useInView";

const LOGO_URL = "https://i.postimg.cc/mDcXtr22/Logopit-1609740112774.png";
const PITCH_EMAIL = "mailto:rremediabusiness@gmail.com";

const pillars = [
  {
    icon: Film,
    title: "Video Premiere",
    body: "Official release under our banner on our growing YouTube network — your film, presented with the credibility it deserves.",
  },
  {
    icon: Globe,
    title: "Global Audio Streaming",
    body: "Distribution of your original soundtracks across Spotify, Apple Music, Gaana, JioSaavn, and more — reaching ears worldwide.",
  },
  {
    icon: Megaphone,
    title: "PR & Strategic Marketing",
    body: "End-to-end promotional campaigns, poster reveals, and digital PR — building the buzz before, during, and after release.",
  },
];

export default function RealRedhouseSection() {
  const [headingRef, headingInView] = useInView<HTMLDivElement>();
  const [subtitleRef, subtitleInView] = useInView<HTMLDivElement>();

  return (
    <section
      id="redhouse"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.07 0.018 15) 0%, oklch(0.09 0.022 20) 40%, oklch(0.08 0.015 10) 100%)",
      }}
    >
      {/* Film-grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Subtle burgundy radial glow — top-center */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, oklch(0.25 0.06 15 / 0.35) 0%, transparent 70%)",
        }}
      />

      {/* Bottom edge fade to blend with About section */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
        style={{
          background:
            "linear-gradient(to bottom, transparent, oklch(0.07 0 0 / 0.6))",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ── Heading block ── */}
        <div
          ref={headingRef}
          className={cn("fade-in-up mb-4", headingInView && "in-view")}
        >
          <p className="text-xs tracking-cinematic uppercase text-amber/80 font-display mb-5">
            Production & Distribution
          </p>

          {/* Logo + Title row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
            <img
              src={LOGO_URL}
              alt="Real Redhouse Productions logo"
              className="h-[80px] w-auto object-contain flex-shrink-0 drop-shadow-[0_0_12px_rgba(180,30,30,0.4)]"
              loading="lazy"
            />
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              Real Redhouse Productions
            </h2>
          </div>

          <div className="mt-2 w-16 h-px bg-red-700 opacity-70" />
        </div>

        {/* ── Subtitle ── */}
        <div
          ref={subtitleRef}
          className={cn(
            "fade-in-up mb-16 max-w-2xl",
            subtitleInView && "in-view",
          )}
        >
          <p className="text-foreground/90 text-base md:text-lg leading-relaxed font-body">
            <span className="text-amber font-semibold font-display">
              You Made the Film. We Take It to the World.
            </span>{" "}
            Looking for a platform? We acquire and distribute high-quality
            independent short films, music videos, and web series.
          </p>
        </div>

        {/* ── Three Pillars ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="flex justify-center">
          <a
            href={PITCH_EMAIL}
            className="group relative inline-flex items-center gap-3 px-10 py-4 font-display uppercase tracking-widest text-sm font-semibold text-white overflow-hidden rounded-sm transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.38 0.12 20), oklch(0.28 0.09 15))",
              border: "1px solid oklch(0.5 0.14 20 / 0.6)",
              boxShadow:
                "0 0 24px oklch(0.4 0.12 20 / 0.3), inset 0 1px 0 oklch(0.6 0.1 20 / 0.2)",
            }}
            data-ocid="redhouse.pitch_button"
          >
            {/* Hover glow layer */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.48 0.16 20), oklch(0.35 0.12 15))",
              }}
            />
            <Film
              size={16}
              strokeWidth={2}
              className="relative z-10 opacity-80"
            />
            <span className="relative z-10">Pitch Your Project</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[number];
  index: number;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const Icon = pillar.icon;

  return (
    <div
      ref={ref}
      className={cn(
        "fade-in-up group relative rounded-sm overflow-hidden border transition-all duration-500",
        inView && "in-view",
      )}
      style={{
        animationDelay: `${index * 120}ms`,
        background:
          "linear-gradient(145deg, oklch(0.12 0.018 15 / 0.8), oklch(0.09 0.012 10 / 0.9))",
        borderColor: "oklch(0.3 0.05 15 / 0.5)",
        backdropFilter: "blur(4px)",
      }}
      data-ocid={`redhouse.card.${index + 1}`}
    >
      {/* Top border glow on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.55 0.15 25 / 0.8), transparent)",
        }}
      />

      {/* Ambient glow behind icon */}
      <div
        className="absolute top-0 left-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-8 -translate-y-8"
        style={{
          background:
            "radial-gradient(circle, oklch(0.4 0.1 20 / 0.2), transparent 70%)",
        }}
      />

      <div className="relative z-10 p-7 flex flex-col gap-4">
        {/* Icon */}
        <div
          className="w-11 h-11 rounded-sm flex items-center justify-center transition-all duration-300 group-hover:scale-105"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.35 0.1 20 / 0.6), oklch(0.22 0.07 15 / 0.4))",
            border: "1px solid oklch(0.45 0.1 20 / 0.5)",
            boxShadow: "0 0 16px oklch(0.4 0.1 20 / 0.2)",
          }}
        >
          <Icon
            size={20}
            strokeWidth={1.5}
            className="text-amber group-hover:text-amber-glow transition-colors"
          />
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-lg text-white group-hover:text-amber transition-colors duration-300">
          {pillar.title}
        </h3>

        {/* Body */}
        <p className="text-muted-foreground text-sm leading-relaxed font-body">
          {pillar.body}
        </p>

        {/* Bottom decorative line */}
        <div
          className="mt-1 h-px w-8 opacity-40 group-hover:w-16 group-hover:opacity-70 transition-all duration-500"
          style={{ background: "oklch(0.55 0.14 20)" }}
        />
      </div>
    </div>
  );
}
