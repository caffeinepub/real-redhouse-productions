import { cn } from "@/lib/utils";
import { Clapperboard } from "lucide-react";
import { useState } from "react";
import { useInView } from "../hooks/useInView";

const PITCH_EMAIL = "mailto:sayanmojumderreal@gmail.com";

// ── Active Press Card (Card 1) ───────────────────────────────────────────────

function ActivePressCard({ index }: { index: number }) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "fade-in-up group rounded-xl overflow-hidden cursor-pointer",
        "min-w-[85vw] snap-start flex-shrink-0",
        "md:min-w-0 md:flex-shrink md:snap-align-none",
        inView && "in-view",
      )}
      style={{
        animationDelay: `${index * 100}ms`,
        transitionDelay: `${index * 100}ms`,
        background: "oklch(0.10 0.007 220)",
        border: "1px solid oklch(0.28 0.01 220 / 0.7)",
        boxShadow: "0 4px 24px oklch(0 0 0 / 0.4)",
      }}
      data-ocid="smc.press_card.1"
    >
      {/* Article image with Instagram-style zoom */}
      <div className="relative overflow-hidden aspect-[4/5]">
        <img
          src="https://i.postimg.cc/c4ZXJR93/And-here-we-go-The-biggest-digital-news-platform-of-India-Daily-Hunt-(-dailyhuntapp)-is-featuri.jpg"
          alt="Dailyhunt feature on Sayan Mojumder"
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 active:scale-110"
          style={{ background: "oklch(0.07 0.005 220)" }}
        />
        {/* Live badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] font-display uppercase tracking-[0.15em] text-white/80">
            Live
          </span>
        </div>
      </div>

      {/* Card footer */}
      <div
        className="p-4"
        style={{ borderTop: "1px solid oklch(0.22 0.008 220 / 0.4)" }}
      >
        <p
          className="text-xs font-display uppercase tracking-[0.18em] font-bold mb-1"
          style={{ color: "oklch(0.72 0.18 55)" }}
        >
          Dailyhunt
        </p>
        <p className="text-sm font-body text-white/75 leading-snug">
          Sayan Mojumdar unveils a fresh take on web series as part of his
          latest project.
        </p>
      </div>
    </div>
  );
}

// ── Anticipation Placeholder Card (Cards 2 & 3) ───────────────────────────────

function AnticipationCard({ index, label }: { index: number; label: string }) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "fade-in-up group rounded-xl overflow-hidden cursor-default select-none",
        "min-w-[85vw] snap-start flex-shrink-0",
        "md:min-w-0 md:flex-shrink md:snap-align-none",
        inView && "in-view",
      )}
      style={{
        animationDelay: `${index * 120}ms`,
        transitionDelay: `${index * 120}ms`,
        background:
          "linear-gradient(145deg, oklch(0.09 0.006 220 / 0.9), oklch(0.07 0.004 210))",
        border: "1px solid oklch(0.20 0.007 220 / 0.5)",
      }}
      data-ocid={`smc.press_card.${index}`}
    >
      {/* Visual area — dimmed wireframe gradient */}
      <div
        className="relative overflow-hidden aspect-[4/5] flex flex-col items-center justify-center gap-5"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.08 0.006 230 / 0.95), oklch(0.06 0.004 210))",
        }}
      >
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath d='M 32 0 L 0 0 0 32' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.28 0.02 220 / 0.15), transparent 70%)",
          }}
        />

        {/* Coming Soon badge */}
        <div className="relative flex flex-col items-center gap-3 z-10">
          {/* Thin top rule */}
          <div
            className="w-10 h-px"
            style={{ background: "oklch(0.50 0.015 220 / 0.5)" }}
          />
          <p
            className="text-[10px] font-display uppercase font-semibold"
            style={{
              letterSpacing: "0.35em",
              color: "oklch(0.55 0.012 220 / 0.7)",
            }}
          >
            {label}
          </p>
          {/* Thin bottom rule */}
          <div
            className="w-10 h-px"
            style={{ background: "oklch(0.50 0.015 220 / 0.5)" }}
          />
        </div>
      </div>

      {/* Card footer */}
      <div
        className="px-4 py-3 flex items-center gap-2"
        style={{ borderTop: "1px solid oklch(0.18 0.006 220 / 0.4)" }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ background: "oklch(0.38 0.01 220 / 0.8)" }}
        />
        <span
          className="text-[10px] font-display uppercase tracking-[0.20em]"
          style={{ color: "oklch(0.40 0.010 220 / 0.7)" }}
        >
          Announcement Pending
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
          <ActivePressCard index={1} />
          <AnticipationCard index={2} label="Press Release Pending" />
          <AnticipationCard index={3} label="Upcoming Feature" />
        </div>
      </div>
    </section>
  );
}
