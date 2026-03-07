import { cn } from "@/lib/utils";
import { Clapperboard, Newspaper } from "lucide-react";
import { useState } from "react";
import { useInView } from "../hooks/useInView";

const PITCH_EMAIL = "mailto:sayanmojumderreal@gmail.com";

// ── Press Card ──────────────────────────────────────────────────────────────

function PressCard({ index }: { index: number }) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "fade-in-up group rounded-sm overflow-hidden cursor-pointer",
        "min-w-[85vw] snap-start flex-shrink-0",
        "md:min-w-0 md:flex-shrink md:snap-align-none",
        inView && "in-view",
      )}
      style={{
        animationDelay: `${index * 100}ms`,
        transitionDelay: `${index * 100}ms`,
        background:
          "linear-gradient(145deg, oklch(0.10 0.007 220 / 0.85), oklch(0.08 0.005 210 / 0.9))",
        border: "1px solid oklch(0.22 0.008 220 / 0.6)",
      }}
      data-ocid={`smc.press_card.${index}`}
    >
      {/* Image placeholder */}
      <div
        className="relative overflow-hidden aspect-[16/10]"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.12 0.008 220), oklch(0.08 0.005 200))",
        }}
      >
        <div
          className="absolute inset-0 transition-transform duration-500 group-hover:scale-105 flex flex-col items-center justify-center gap-2"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M 0 0 L 24 0' stroke='%23ffffff' stroke-width='0.3' stroke-opacity='0.04'/%3E%3Cpath d='M 0 0 L 0 24' stroke='%23ffffff' stroke-width='0.3' stroke-opacity='0.04'/%3E%3C/svg%3E")`,
            backgroundSize: "24px 24px",
          }}
        >
          <Newspaper size={32} strokeWidth={1} className="text-white/20" />
          <span className="text-xs font-body text-white/30 tracking-wider">
            [ Article Screenshot ]
          </span>
        </div>
      </div>

      {/* Card footer */}
      <div
        className="p-4 flex items-center gap-2 transition-all duration-300"
        style={{ borderTop: "1px solid oklch(0.22 0.008 220 / 0.4)" }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ background: "oklch(0.65 0.18 60)" }}
        />
        <span className="text-xs font-body text-white/40 tracking-wide">
          Article Placeholder — Media Mention {index}
        </span>
      </div>
    </div>
  );
}

// ── SMC Section ─────────────────────────────────────────────────────────────

export default function SMCSection() {
  const [headingRef, headingInView] = useInView<HTMLDivElement>();
  const [textRef, textInView] = useInView<HTMLDivElement>();
  const [pressRef, pressInView] = useInView<HTMLDivElement>();
  const [buttonHovered, setButtonHovered] = useState(false);

  return (
    <section
      id="smc"
      className="relative pt-16 pb-24 md:pt-20 md:pb-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.06 0.008 240) 0%, oklch(0.08 0.006 220) 50%, oklch(0.07 0.005 200) 100%)",
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

      {/* Subtle silver/grey radial glow at top-center */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% 0%, oklch(0.25 0.01 220 / 0.25) 0%, transparent 70%)",
        }}
      />

      {/* Top fade from reddish section above */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-6"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.07 0 0 / 0.7), transparent)",
        }}
      />

      {/* ── PART 1: Split-screen intro ── */}
      <div className="flex flex-col md:flex-row min-h-[480px] md:min-h-[560px] relative z-10">
        {/* Left: Hero image */}
        <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full overflow-hidden flex items-center justify-center p-6 md:p-8">
          <img
            src="https://i.postimg.cc/T14f77Fx/Picsart-26-03-08-01-41-07-352-jpg.jpg"
            alt="Sayan Mojumder Creations — Cinematic Still"
            className="w-full aspect-video object-cover rounded-2xl border border-white/10 shadow-2xl"
          />

          {/* Right edge fade to blend into text */}
          <div
            className="hidden md:block absolute top-0 right-0 bottom-0 w-16 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, transparent, oklch(0.065 0.007 230))",
            }}
          />
        </div>

        {/* Right: Text content */}
        <div className="w-full md:w-1/2 flex items-center">
          <div className="p-8 md:p-12 lg:p-16 w-full">
            <div
              ref={headingRef}
              className={cn("fade-in-up", headingInView && "in-view")}
            >
              {/* Eyebrow */}
              <p
                className="text-xs tracking-[0.25em] uppercase font-display mb-4"
                style={{ color: "oklch(0.72 0.06 70)" }}
              >
                In-House Production
              </p>

              {/* Main heading — premium wordmark */}
              <h2
                className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight"
                style={{ letterSpacing: "0.08em" }}
              >
                Sayan Mojumder Creations
              </h2>

              {/* Decorative gold rule */}
              <div
                className="mt-3 mb-5 w-12 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.72 0.06 70), transparent)",
                }}
              />

              {/* Subtitle */}
              <p className="text-amber font-semibold font-display text-base md:text-lg mb-5">
                You bring the idea. We build the world.
              </p>
            </div>

            <div
              ref={textRef}
              className={cn("fade-in-up delay-200", textInView && "in-view")}
            >
              {/* Body text */}
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-body mb-8">
                SMC is the creative heartbeat of our network. We are an
                independent production house dedicated to developing and funding
                original IPs—from gripping short films to immersive web series.
                Whether we direct it in-house or collaborate with visionary
                creators, our focus is simple: turning powerful scripts into
                premium cinematic experiences.
              </p>

              {/* CTA Button */}
              <a
                href={PITCH_EMAIL}
                className="group/btn inline-flex items-center gap-3 px-8 py-3.5 font-display uppercase tracking-widest text-sm font-semibold text-white rounded-sm transition-all duration-300"
                style={{
                  background: buttonHovered
                    ? "linear-gradient(135deg, oklch(0.20 0.010 220), oklch(0.16 0.008 210))"
                    : "linear-gradient(135deg, oklch(0.16 0.008 220), oklch(0.12 0.006 210))",
                  border: buttonHovered
                    ? "1px solid oklch(0.45 0.020 220 / 0.9)"
                    : "1px solid oklch(0.35 0.015 220 / 0.7)",
                  boxShadow: buttonHovered
                    ? "0 0 20px oklch(0.4 0.015 220 / 0.3)"
                    : "none",
                }}
                onMouseEnter={() => setButtonHovered(true)}
                onMouseLeave={() => setButtonHovered(false)}
                data-ocid="smc.pitch_button"
              >
                <Clapperboard
                  size={16}
                  strokeWidth={1.5}
                  className="opacity-80"
                />
                Pitch Your Script
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── PART 2: Press & Media Mentions ── */}
      <div
        ref={pressRef}
        className={cn(
          "relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-4",
          pressInView ? "animate-fade-in" : "opacity-0",
        )}
      >
        {/* Section divider */}
        <div
          className="w-full h-px mb-12"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.5 0.01 220 / 0.2), transparent)",
          }}
        />

        {/* Heading */}
        <p
          className="text-xs tracking-[0.25em] uppercase font-display text-center mb-2"
          style={{ color: "oklch(0.72 0.06 70)" }}
        >
          Featured In
        </p>
        <h3 className="font-display font-semibold text-xl md:text-2xl text-white text-center tracking-wide mb-10">
          Press & Media Mentions
        </h3>

        {/* Press card container: swipeable horizontal carousel on mobile, 3-col grid on desktop */}
        <div className="flex flex-row overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide md:grid md:grid-cols-3 md:gap-5 md:overflow-x-visible md:snap-none max-w-5xl mx-auto">
          {[1, 2, 3].map((i) => (
            <PressCard key={i} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
