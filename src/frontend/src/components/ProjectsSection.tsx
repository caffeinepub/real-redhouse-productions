import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useInView } from "../hooks/useInView";

const WWML_POSTER = "https://i.imghippo.com/files/dwM7055AQo.jpg";
const tumseHiImg =
  "https://i.postimg.cc/fTy0nWxv/Document_from_Sayan_Mojumder_1.jpg";
const alvidaImg = "https://i.postimg.cc/mDrFLT0v/THUMB.jpg";
const sunRahaImg =
  "https://i.ibb.co/XkjHLN3z/SUN-RAHA-HA-TU-NA-YOUTUBE-THUMBNAIL-01-1.png";
const takeOlpoImg =
  "https://i.ibb.co/MJHqk3C/Whats-App-Image-2023-08-05-at-06-10-52.jpg";
const aFriendImg = "https://i.ibb.co/SwLPXLL3/QHw1-R74-OLHo-HD-jpg.jpg";

interface ProjectCardData {
  id: string;
  title: string;
  subtitle?: string;
  roles: string[];
  year: number;
  logline?: string;
  genres?: string;
  image: string;
  teaserStill?: string;
  label?: string;
  featured?: boolean;
  imdb?: string;
  crowdfundLink?: string;
}

const staticProjects: ProjectCardData[] = [
  {
    id: "wwml",
    title: "Where We (Almost) Loved",
    subtitle: "Jodi Jante Amay Bhalobaste",
    roles: ["Directed", "In Production"],
    year: 2026,
    logline:
      "A silent musical-psychological short exploring a love that almost was.",
    genres: "Sci-Fi | Psychological Romance | Musical",
    image: WWML_POSTER,
    teaserStill:
      "https://i.postimg.cc/YqhPfq31/Picsart-26-03-08-01-24-45-207-jpg.jpg",
    label: "Festival Short · Coming Soon",
    featured: true,
    crowdfundLink:
      "https://drive.google.com/file/d/12G_DbUrcTpoxDkw_PmDggukU0ejU1TZq/preview",
  },
  {
    id: "tumse",
    title: "Tum Se Hi Recreated (Music Video)",
    roles: ["Directed"],
    year: 2024,
    image: tumseHiImg,
    imdb: "https://www.imdb.com/title/tt38784467/?ref_=ext_shr_lnk",
  },
  {
    id: "alvida",
    title: "Alvida (Music Video)",
    roles: ["Assisted", "Produced"],
    year: 2023,
    image: alvidaImg,
  },
  {
    id: "sunraha",
    title: "Sun Raha Hai Na Tu (Cover)",
    roles: ["Produced"],
    year: 2026,
    image: sunRahaImg,
  },
  {
    id: "takeolpo",
    title: "Take Olpo Kache Dakchi (Music Video)",
    roles: ["Co-Produced"],
    year: 2023,
    image: takeOlpoImg,
  },
  {
    id: "afriend",
    title: "A Friend Like You : Season 2 (Web Series)",
    roles: ["Co-Produced", "In Production"],
    year: 2027,
    image: aFriendImg,
  },
];

const roleBadgeStyles: Record<string, string> = {
  Directed: "bg-amber text-film-darker border-0 font-semibold",
  Produced:
    "bg-transparent text-foreground border border-border/80 font-medium",
  Assisted: "bg-muted text-muted-foreground border-0 font-medium",
  "Co-Produced":
    "bg-muted/50 text-muted-foreground border border-border font-medium",
  "In Production": "bg-orange-600 text-white border-0 font-bold",
};

function RoleBadge({ role }: { role: string }) {
  return (
    <Badge
      className={cn(
        "text-xs px-2.5 py-0.5 rounded-sm tracking-wide",
        roleBadgeStyles[role] ??
          "bg-muted text-muted-foreground border-0 font-medium",
      )}
    >
      {role}
    </Badge>
  );
}

function RoleBadges({ roles }: { roles: string[] }) {
  return (
    <div className="flex flex-row flex-wrap gap-1.5">
      {roles.map((role) => (
        <RoleBadge key={role} role={role} />
      ))}
    </div>
  );
}

function ImdbButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[10px] font-bold px-2 py-0.5 rounded border border-amber/50 text-amber hover:bg-amber/10 transition-colors tracking-wider"
    >
      IMDb
    </a>
  );
}

function FeaturedCard({
  project,
  index,
}: { project: ProjectCardData; index: number }) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "fade-in-up project-card col-span-full rounded-sm overflow-hidden border border-transparent hover:border-amber/40 group cursor-pointer transition-colors duration-300",
        inView && "in-view",
      )}
      data-ocid={`projects.item.${index + 1}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* ─── IMAGE SIDE ─── */}

        {/* MOBILE: solid black, badge centered only */}
        <div className="relative overflow-hidden aspect-video lg:hidden flex items-center justify-center bg-black">
          {/* Badge centered on mobile */}
          <div className="flex items-center justify-center w-full h-full px-6">
            <span
              className="font-extralight uppercase text-center"
              style={{
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                fontSize: "10px",
                letterSpacing: "0.4em",
                color: "var(--color-amber, #f59e0b)",
              }}
            >
              FIRST LOOK · COMING SOON
            </span>
          </div>
        </div>

        {/* DESKTOP: full premium — blurred bg + pulse + central poster */}
        <div className="relative overflow-hidden hidden lg:flex lg:min-h-[480px] items-center justify-center">
          {/* Background layer: poster image, heavy blur, 60% dark overlay, slow pulse */}
          <div
            className="absolute inset-0 animate-pulse"
            style={{ animationDuration: "4s" }}
          >
            <img
              src={project.image}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
              style={{ filter: "blur(24px)", transform: "scale(1.2)" }}
            />
            {/* 60% black darkening overlay */}
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Foreground: glassmorphism vertical poster card */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full py-8 px-6 w-full">
            <div
              className="relative rounded-lg shadow-2xl border border-white/20 overflow-hidden"
              style={{
                width: "260px",
                maxWidth: "300px",
                aspectRatio: "3/4",
                backdropFilter: "blur(4px)",
                boxShadow:
                  "0 25px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.08)",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain"
                loading="lazy"
                style={{ display: "block", background: "#000" }}
              />

              {/* First Look badge — across the top of the poster */}
              <div className="absolute top-0 left-0 right-0 flex justify-center z-20">
                <div className="w-full bg-black/60 px-3 py-2 flex justify-center">
                  <span
                    className="font-extralight uppercase whitespace-nowrap"
                    style={{
                      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                      fontSize: "9px",
                      letterSpacing: "0.4em",
                      color: "var(--color-amber, #f59e0b)",
                    }}
                  >
                    FIRST LOOK · COMING SOON
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── TEXT SIDE ─── */}
        <div className="p-8 lg:p-12 flex flex-col justify-center gap-4 bg-card">
          <div className="flex items-center gap-3 flex-wrap">
            <RoleBadges roles={project.roles} />
            {project.imdb && <ImdbButton href={project.imdb} />}
            <span className="text-muted-foreground text-sm font-mono">
              {project.year}
            </span>
          </div>

          <div>
            <h3 className="font-display font-bold text-2xl lg:text-3xl text-white leading-tight mb-1">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-amber text-base font-display italic">
                {project.subtitle}
              </p>
            )}
          </div>

          {project.logline && (
            <p className="text-muted-foreground text-base leading-relaxed">
              {project.logline}
            </p>
          )}

          {project.genres && (
            <p className="text-xs text-muted-foreground/70 font-body tracking-wide mt-1">
              {project.genres}
            </p>
          )}

          {project.teaserStill && (
            <div className="mt-2 rounded-sm overflow-hidden border border-white/10">
              <div className="relative w-full aspect-video">
                <img
                  src={project.teaserStill}
                  alt="Teaser still"
                  className="w-full h-full object-cover object-center opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-black/60 backdrop-blur-sm">
                  <p className="text-xs text-white/80 tracking-widest font-display uppercase">
                    Teaser Still
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Back This Vision — Hero gradient fundraising button */}
          {project.crowdfundLink && (
            <div className="mt-4">
              <a
                href={project.crowdfundLink}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="projects.back_vision.button"
                className="back-this-vision-btn inline-flex flex-col items-center justify-center w-full sm:w-auto px-8 py-4 rounded-sm text-white transition-all duration-300 relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #7f1d1d 0%, #c2410c 55%, #f97316 100%)",
                  boxShadow:
                    "0 4px 24px rgba(249,115,22,0.25), 0 1px 0 rgba(255,255,255,0.08) inset",
                }}
              >
                {/* Shimmer sweep overlay */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.22) 50%, transparent 100%)",
                    animation: "btnShimmer 5s ease-in-out infinite",
                  }}
                />
                {/* Primary CTA text */}
                <span className="relative z-10 font-display font-bold text-sm tracking-widest uppercase text-white">
                  BACK THIS VISION
                </span>
                {/* Subtext */}
                <span className="relative z-10 font-body text-[11px] tracking-wide text-white/70 mt-0.5">
                  View Pitch Deck &amp; Support the Film
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  delay,
}: {
  project: ProjectCardData;
  index: number;
  delay: number;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "fade-in-up project-card rounded-sm overflow-hidden border border-transparent hover:border-amber/40 bg-card group cursor-pointer transition-colors duration-300",
        inView && "in-view",
        `delay-${delay}`,
      )}
      data-ocid={`projects.item.${index + 1}`}
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4 flex flex-col gap-2.5">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 flex-wrap">
            <RoleBadges roles={project.roles} />
            {project.imdb && <ImdbButton href={project.imdb} />}
          </div>
          <span className="text-muted-foreground text-xs font-mono">
            {project.year}
          </span>
        </div>
        <h3 className="font-display font-semibold text-sm md:text-base text-foreground leading-snug line-clamp-2 group-hover:text-amber transition-colors">
          {project.title}
        </h3>
        {project.logline && (
          <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
            {project.logline}
          </p>
        )}
      </div>
    </div>
  );
}

const DELAYS = [100, 200, 300, 100, 200, 300];

export default function ProjectsSection() {
  const [headingRef, headingInView] = useInView<HTMLDivElement>();
  const [expanded, setExpanded] = useState(false);

  const featured = staticProjects[0];
  const visibleProjects = staticProjects.slice(1, 3);
  const hiddenProjects = staticProjects.slice(3);

  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <div
          ref={headingRef}
          className={cn("fade-in-up mb-14", headingInView && "in-view")}
        >
          <p className="text-xs tracking-cinematic uppercase text-amber font-display mb-3">
            Selected Work
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground">
            Projects
          </h2>
          <div className="mt-4 w-16 h-px bg-amber opacity-60" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Featured card spans full width */}
          <FeaturedCard project={featured} index={0} />

          {/* Always-visible projects (2 & 3) */}
          {visibleProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i + 1}
              delay={DELAYS[i] ?? 100}
            />
          ))}

          {/* Expandable projects (4, 5, 6) */}
          {expanded &&
            hiddenProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i + 3}
                delay={DELAYS[i + 2] ?? 100}
              />
            ))}
        </div>

        {/* Expand / Collapse button */}
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-sm text-sm uppercase tracking-wide font-display transition-all duration-200"
            style={{
              color: "#f97316",
              border: "1px solid #f97316",
              background: "transparent",
            }}
            data-ocid="projects.toggle"
          >
            {expanded ? (
              <>
                Show Less
                <ChevronUp size={16} strokeWidth={2} />
              </>
            ) : (
              <>
                View All Projects
                <ChevronDown size={16} strokeWidth={2} />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
