import { ChevronDown } from "lucide-react";

const stats = [
  { value: "15+", label: "Cover Songs\nProduced", key: "covers" },
  { value: "4", label: "Music Videos\nDirected/Assisted", key: "videos" },
  { value: "1", label: "Upcoming\nFestival Short", key: "festival" },
];

export default function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Hero video background */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/aLQvstqMhoo?autoplay=1&mute=1&loop=1&playlist=aLQvstqMhoo&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&start=94&end=120"
          title="Hero background video"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100vw",
            height: "56.25vw" /* 16:9 ratio */,
            minHeight: "100vh",
            minWidth: "177.78vh" /* 16:9 ratio */,
            transform: "translate(-50%, -50%) scale(1.2)",
            pointerEvents: "none",
            border: "none",
          }}
        />
        {/* Dark overlay to ensure text readability */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.6)" }}
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, oklch(0.07 0 0 / 0.5) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
        {/* Label */}
        <p
          className="text-xs tracking-cinematic uppercase text-amber font-display font-medium mb-6 animate-flicker"
          style={{ textShadow: "0 0 20px oklch(0.65 0.18 60 / 0.5)" }}
        >
          Sayan Mojumder
        </p>

        {/* H1 */}
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground mb-5">
          <span
            className="text-amber"
            style={{ textShadow: "0 0 40px oklch(0.65 0.18 60 / 0.3)" }}
          >
            Filmmaker
          </span>{" "}
          &amp; Independent Producer
        </h1>

        {/* Sub-tagline */}
        <p className="text-[10px] sm:text-xs md:text-sm tracking-wide-plus text-muted-foreground uppercase font-display mb-12 whitespace-nowrap">
          MUSIC VIDEOS&nbsp;•&nbsp;COMMERCIALS&nbsp;•&nbsp;SHORT FILMS
        </p>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 md:gap-16 mb-12">
          {stats.map((stat) => (
            <div key={stat.key} className="text-center">
              <div className="font-display font-bold text-3xl md:text-4xl text-amber leading-none mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground leading-snug whitespace-pre-line font-body">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={scrollToProjects}
          className="btn-amber inline-flex items-center gap-2 px-8 py-3.5 rounded-sm text-sm uppercase"
          data-ocid="hero.primary_button"
        >
          Watch My Work
        </button>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-amber transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} strokeWidth={1.5} />
      </button>
    </section>
  );
}
