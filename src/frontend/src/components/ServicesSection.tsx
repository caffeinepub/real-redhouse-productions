import { cn } from "@/lib/utils";
import { Music, Palette, Scissors, Video } from "lucide-react";
import { useRef } from "react";
import { useInView } from "../hooks/useInView";

// ─── Arsenal blueprint assets (generated — served from public/) ───────────────
const arsenalFx3 =
  "/assets/generated/arsenal-sony-fx3-transparent.dim_400x400.png";
const arsenalA7s =
  "/assets/generated/arsenal-sony-a7siii-transparent.dim_400x400.png";
const arsenalGmaster =
  "/assets/generated/arsenal-sony-gmaster-transparent.dim_400x400.png";
const arsenalDrone =
  "/assets/generated/arsenal-dji-drone-transparent.dim_400x400.png";
const arsenalPlaceholder =
  "/assets/generated/arsenal-placeholder-transparent.dim_400x400.png";
const arsenalAudio =
  "/assets/generated/arsenal-audio-recorder-transparent.dim_400x400.png";
const arsenalDaVinci =
  "/assets/generated/arsenal-davinci-resolve-transparent.dim_400x400.png";
const arsenalAfterEffects =
  "/assets/generated/arsenal-after-effects-transparent.dim_400x400.png";
const arsenalGimbal =
  "/assets/generated/arsenal-gimbal-transparent.dim_400x400.png";
const arsenalPremiere =
  "/assets/generated/arsenal-premiere-pro-transparent.dim_400x400.png";

// ─── Arsenal Data ─────────────────────────────────────────────────────────────

const arsenalItems = [
  { name: "Sony FX3", category: "Cinema Line", img: arsenalFx3 },
  { name: "Sony A7S III", category: "Alpha Series", img: arsenalA7s },
  { name: "Sony G-Master", category: "Premium Optics", img: arsenalGmaster },
  {
    name: "DJI Mini 4 Pro",
    category: "Aerial Cinematography",
    img: arsenalDrone,
  },
  { name: "Aputure", category: "Cinematic Lighting", img: arsenalPlaceholder },
  {
    name: "Audient & Yamaha",
    category: "Pro Audio & Interface",
    img: arsenalAudio,
  },
  { name: "DaVinci Resolve", category: "Color & Edit", img: arsenalDaVinci },
  { name: "Blender", category: "3D & VFX", img: arsenalAfterEffects },
  { name: "FL Studio", category: "Audio Engineering", img: arsenalPremiere },
  { name: "Dolby Atmos", category: "Spatial Audio", img: arsenalGimbal },
] as const;

// ─── Data ────────────────────────────────────────────────────────────────────

const pillars = [
  {
    id: "film-direction",
    icon: Video,
    title: "Film Direction",
    summary:
      "Bringing screenplays to life with a strong visual language, meticulous detailing, and character-driven storytelling.",
  },
  {
    id: "music-videos",
    icon: Music,
    title: "Music Video Production",
    summary:
      "End-to-end production for artists — from storyboard to final cut.",
  },
  {
    id: "editing",
    icon: Scissors,
    title: "Editing",
    summary: "Narrative editing that shapes rhythm, pace, and emotional arc.",
  },
  {
    id: "color-grading",
    icon: Palette,
    title: "Color Grading",
    summary:
      "DaVinci Resolve certified — cinematic color that elevates every frame.",
  },
] as const;

const deepDiveBlocks = [
  {
    id: "film-direction",
    heading: "Direction & Screenwriting",
    subtitle: "Orchestrating the Visual Syntax.",
    body: "A cinematic narrative is built long before the camera rolls. Whether I am crafting an original screenplay grounded in narrative economy, or executing a commissioned script, my objective remains the same: translating the written word into a visceral on-screen reality. This directorial approach applies strictly across all formats—from an intimate, festival-bound short film and character-driven web series, to full-scale features. From designing the mise-en-scène and staging complex blocking, to modulating actor performances for subtextual depth, I ensure the psychological intent of the story dictates every single frame.",
    image:
      "https://i.postimg.cc/7PJ4qkCV/lots-led-lightning-systems-few-with-color-filters-stairs-movie-set.jpg",
    textLeft: true,
  },
  {
    id: "music-videos",
    heading: "Music Video Production",
    subtitle: "Turnkey Execution: From Audio Engineering to Visual Master.",
    body: "A music video is a delicate exercise in audio-visual synchronization. We offer complete, end-to-end turnkey execution, catering to projects at any stage of development. Whether you are handing over a locked master track, or require the sonic landscape to be built entirely from the ground up, our infrastructure handles it all. Beyond our in-house music production suite—equipped for full-scale audio engineering and sourcing accomplished vocal artists—our team manages the entire cinematic pipeline. From crewing seasoned Directors of Photography (DPs) and designing lighting schematics for rigorous principal photography, to dictating the rhythmic pacing in the edit suite, we take full ownership of delivering a cohesive, premium audio-visual product.",
    image: "https://i.postimg.cc/6368FPbs/THUMB-TSH.jpg",
    textLeft: false,
  },
  {
    id: "editing",
    heading: "Narrative & Rhythmic Editing",
    subtitle: "Sculpting the Temporal Architecture.",
    body: "Editing is the final rewrite of any project. With five years of intensive experience exclusively within the DaVinci Resolve ecosystem, my approach goes far beyond assembling clips. Whether I am dictating the kinetic, rhythmic pacing of a music video, preserving spatial continuity in a dramatic short film, or weaving complex character arcs across a multi-episodic web series, I treat the timeline as a psychological tool. My focus is strictly on meticulous shot selection, narrative economy, and constructing a seamless temporal flow that commands the audience's emotional engagement.",
    image: "https://i.postimg.cc/G2pf7kYr/20260308-020613.avif",
    textLeft: true,
  },
  {
    id: "color-grading",
    heading: "Cinematic Color Grading",
    subtitle: "DaVinci Resolve Certified Look Development.",
    body: "Color is an essential storytelling mechanism, not just a post-production aesthetic. As a DaVinci Resolve Certified colorist, I leverage advanced, node-based workflows to craft precise visual identities. My grading pipeline encompasses meticulous primary color correction, seamless shot-matching, and complex secondary tracking for stylized look development. Whether establishing the gritty palette of an independent film or web series, refining the high-end gloss of a commercial, or elevating a cinematic pre-wedding or wedding film to a theatrical standard, I manipulate luminance, contrast, and color separation to evoke the exact psychological response your project demands.",
    image:
      "https://i.postimg.cc/sXwr1jY6/wp14194051-davinci-resolve-4k-wallpapers-jpg.jpg",
    textLeft: false,
  },
];

// ─── Smooth Scroll Helper ─────────────────────────────────────────────────────

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// ─── Pillar Card ──────────────────────────────────────────────────────────────

interface PillarCardProps {
  pillar: (typeof pillars)[number];
  index: number;
}

function PillarCard({ pillar, index }: PillarCardProps) {
  const [ref, inView] = useInView<HTMLAnchorElement>();
  const Icon = pillar.icon;
  const delayClass =
    ["delay-100", "delay-200", "delay-300", "delay-400"][index] ?? "delay-200";

  return (
    <a
      ref={ref}
      href={`#${pillar.id}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToId(pillar.id);
      }}
      className={cn(
        "fade-in-up group border border-border/50 rounded-sm p-6 bg-card/40",
        "hover:bg-card transition-all duration-300 hover:border-amber/40",
        "hover:shadow-[0_0_24px_oklch(var(--amber)/0.15)] block cursor-pointer",
        "w-[85vw] min-w-[85vw] snap-start shrink-0 whitespace-normal md:w-auto md:min-w-0",
        inView && "in-view",
        delayClass,
      )}
      data-ocid={`services.item.${index + 1}`}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-amber/10 border border-amber/20 flex items-center justify-center group-hover:bg-amber/15 group-hover:border-amber/40 transition-all">
          <Icon size={18} strokeWidth={1.5} className="text-amber" />
        </div>
        <div>
          <h3 className="font-display font-semibold text-foreground text-base mb-1.5 group-hover:text-amber transition-colors">
            {pillar.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {pillar.summary}
          </p>
        </div>
      </div>
    </a>
  );
}

// ─── Deep-Dive Block ──────────────────────────────────────────────────────────

interface DeepDiveBlockProps {
  block: (typeof deepDiveBlocks)[number];
}

function DeepDiveBlock({ block }: DeepDiveBlockProps) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      id={block.id}
      ref={ref}
      className={cn(
        "fade-in-up mb-24 flex flex-col md:flex md:items-center gap-8 md:gap-0",
        block.textLeft ? "md:flex-row" : "md:flex-row-reverse",
        inView && "in-view",
      )}
    >
      {/* Image — always rendered first on mobile via order */}
      <div
        className={cn(
          "order-first w-full relative z-10",
          "md:w-1/2",
          block.textLeft ? "md:-ml-8" : "md:-mr-8",
        )}
      >
        <img
          src={block.image}
          alt={block.heading}
          className="w-full aspect-video object-cover rounded-sm border border-white/10 shadow-2xl"
        />
      </div>

      {/* Text column */}
      <div
        className={cn(
          "w-full relative z-0",
          "md:w-1/2",
          block.textLeft ? "md:pr-12" : "md:pl-12",
        )}
      >
        <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3">
          {block.heading}
        </h3>
        <p className="text-amber-dim italic text-sm tracking-wide mb-5">
          {block.subtitle}
        </p>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          {block.body}
        </p>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function ServicesSection() {
  const [headingRef, headingInView] = useInView<HTMLDivElement>();
  const [craftRef, craftInView] = useInView<HTMLDivElement>();
  const arsenalRef = useRef<HTMLDivElement>(null);

  const scrollArsenalLeft = () =>
    arsenalRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  const scrollArsenalRight = () =>
    arsenalRef.current?.scrollBy({ left: 300, behavior: "smooth" });

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* ── Section heading ──────────────────────────────── */}
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

        {/* ── Phase 1: Pillar cards ─────────────────────────── */}
        {/* Mobile: horizontal snap carousel */}
        <div
          className="flex flex-row overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide md:hidden"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </div>

        {/* Desktop: 2-col → 4-col grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </div>

        {/* ── Phase 2: Deep-dive Z-pattern ─────────────────── */}
        <div ref={craftRef} className={cn("mt-20", craftInView && "in-view")}>
          <p className="text-xs tracking-cinematic uppercase text-amber font-display mb-3">
            THE CRAFT
          </p>
          <div className="w-16 h-px bg-amber opacity-60 mb-14" />
        </div>

        {deepDiveBlocks.map((block) => (
          <DeepDiveBlock key={block.id} block={block} />
        ))}

        {/* ── CTA ──────────────────────────────────────────── */}
        <div className="flex justify-center mt-8 mb-4">
          <a
            href="mailto:sayanmojumderreal@gmail.com"
            data-ocid="services.hire_cta.button"
            className={cn(
              "inline-block px-12 py-5 rounded-sm font-display font-bold text-lg tracking-wide",
              "bg-amber text-black hover:bg-amber/90 active:scale-95",
              "shadow-[0_0_40px_oklch(var(--amber)/0.4)] hover:shadow-[0_0_60px_oklch(var(--amber)/0.6)]",
              "transition-all duration-300",
            )}
          >
            Hire Me for a Project
          </a>
        </div>

        {/* ── THE ARSENAL carousel ─────────────────────────── */}
        <div className="mt-16">
          {/* Heading row — arrows sit on the right on desktop */}
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs tracking-cinematic uppercase text-amber font-display">
              THE ARSENAL
            </p>
            {/* Desktop-only nav arrows — glowing wireframe style */}
            <div className="hidden md:flex items-center gap-3">
              <button
                type="button"
                onClick={scrollArsenalLeft}
                aria-label="Scroll left"
                data-ocid="services.arsenal.pagination_prev"
                className={cn(
                  "w-9 h-9 flex items-center justify-center rounded-full cursor-pointer",
                  "border border-cyan-400/40 bg-transparent",
                  "text-cyan-300 hover:text-white",
                  "hover:border-cyan-300/80 hover:shadow-[0_0_12px_rgba(34,211,238,0.5),inset_0_0_8px_rgba(34,211,238,0.1)]",
                  "transition-all duration-300",
                )}
              >
                {/* SVG wireframe left chevron */}
                <svg
                  viewBox="0 0 18 18"
                  fill="none"
                  className="w-4 h-4"
                  strokeWidth="1.5"
                  aria-label="Scroll left"
                  role="img"
                >
                  <title>Scroll left</title>
                  <polyline
                    points="11,4 6,9 11,14"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={scrollArsenalRight}
                aria-label="Scroll right"
                data-ocid="services.arsenal.pagination_next"
                className={cn(
                  "w-9 h-9 flex items-center justify-center rounded-full cursor-pointer",
                  "border border-cyan-400/40 bg-transparent",
                  "text-cyan-300 hover:text-white",
                  "hover:border-cyan-300/80 hover:shadow-[0_0_12px_rgba(34,211,238,0.5),inset_0_0_8px_rgba(34,211,238,0.1)]",
                  "transition-all duration-300",
                )}
              >
                {/* SVG wireframe right chevron */}
                <svg
                  viewBox="0 0 18 18"
                  fill="none"
                  className="w-4 h-4"
                  strokeWidth="1.5"
                  aria-label="Scroll right"
                  role="img"
                >
                  <title>Scroll right</title>
                  <polyline
                    points="7,4 12,9 7,14"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-16 h-px bg-amber opacity-60 mb-6" />

          {/* Scrollable carousel — scrollbar hidden on all screen sizes */}
          <div
            ref={arsenalRef}
            className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 pb-8 scrollbar-hide"
            style={{ scrollSnapType: "x mandatory" }}
            data-ocid="services.arsenal.list"
          >
            {arsenalItems.map((item, i) => (
              <div
                key={item.name}
                data-ocid={`services.arsenal.item.${i + 1}`}
                className={cn(
                  "shrink-0 snap-start",
                  "w-[55vw] md:w-56",
                  "bg-zinc-950/80 border border-cyan-500/20 rounded-md",
                  "p-4 flex flex-col gap-2",
                  "hover:border-cyan-400/50 hover:bg-zinc-900/80",
                  "hover:shadow-[0_0_20px_rgba(34,211,238,0.12)]",
                  "transition-all duration-300 group",
                )}
              >
                {/* Blueprint illustration */}
                <div className="w-full aspect-square flex items-center justify-center overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] group-hover:drop-shadow-[0_0_16px_rgba(34,211,238,0.8)] transition-all duration-300"
                  />
                </div>

                {/* Brand name */}
                <p className="font-display font-bold text-white text-sm leading-snug mt-1">
                  {item.name}
                </p>

                {/* Category */}
                <p className="text-xs text-cyan-400/70 font-display tracking-wide">
                  {item.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
