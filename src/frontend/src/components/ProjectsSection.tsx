import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useInView } from "../hooks/useInView";
const tumseHiImg =
  "https://i.postimg.cc/fTy0nWxv/Document_from_Sayan_Mojumder_1.jpg";
const alvidaImg = "https://i.postimg.cc/mDrFLT0v/THUMB.jpg";
const sunRahaImg =
  "https://i.postimg.cc/hvt85H8Z/SUN-RAHA-HA-TU-NA-YOUTUBE-THUMBNAIL-01-(1).png";
const takeOlpoImg = "https://i.imghippo.com/files/qkfw7024baw.jpg";
const aFriendImg = "https://i.imghippo.com/files/BOR6962Uu.jpeg";

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
}

const staticProjects: ProjectCardData[] = [
  {
    id: "wwml",
    title: "Where We (Almost) Loved",
    subtitle: "Jodi Jante Amay Bhalobaste",
    roles: ["Directed"],
    year: 2026,
    logline:
      "A silent musical-psychological short exploring a love that almost was.",
    genres: "Sci-Fi | Psychological Romance | Musical",
    image: "/assets/generated/wwml-featured.dim_1200x675.jpg",
    teaserStill: "/assets/generated/wwml-teaser-still.dim_800x450.jpg",
    label: "Festival Short · Coming Soon",
    featured: true,
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
    year: 2024,
    image: sunRahaImg,
  },
  {
    id: "takeolpo",
    title: "Take Olpo Kache Dakchi (Music Video)",
    roles: ["Co-Produced"],
    year: 2024,
    image: takeOlpoImg,
  },
  {
    id: "afriend",
    title: "A Friend Like You : Season 2 (Web Series)",
    roles: ["Co-Produced", "In Production"],
    year: 2025,
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
  "In Production": "bg-amber/30 text-amber border border-amber/50 font-medium",
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
        "fade-in-up project-card col-span-full rounded-sm overflow-hidden border border-border/50 bg-card group cursor-pointer",
        inView && "in-view",
      )}
      data-ocid={`projects.item.${index + 1}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image side */}
        <div className="relative overflow-hidden aspect-video lg:aspect-auto lg:min-h-[400px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent lg:hidden" />
          {project.label && (
            <div className="absolute top-4 left-4">
              <span className="bg-background/80 backdrop-blur-sm text-amber text-xs px-3 py-1.5 rounded-sm tracking-wide border border-amber/30 font-display uppercase">
                {project.label}
              </span>
            </div>
          )}
        </div>

        {/* Text side */}
        <div className="p-8 lg:p-12 flex flex-col justify-center gap-4">
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
            <div className="mt-2 rounded-sm overflow-hidden border border-border/40">
              <img
                src={project.teaserStill}
                alt="Teaser still"
                className="w-full aspect-video object-cover opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
              <div className="px-3 py-2 bg-muted/30 border-t border-border/30">
                <p className="text-xs text-muted-foreground tracking-wide font-display uppercase">
                  Teaser Still
                </p>
              </div>
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
        "fade-in-up project-card rounded-sm overflow-hidden border border-border/50 bg-card group cursor-pointer",
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
            className="btn-amber-ghost inline-flex items-center gap-2 px-8 py-3 rounded-sm text-sm uppercase tracking-wide font-display transition-all duration-200"
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
