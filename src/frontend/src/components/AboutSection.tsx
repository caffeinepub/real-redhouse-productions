import { cn } from "@/lib/utils";
import { useInView } from "../hooks/useInView";

const bioParagraphs = [
  "I believe the best stories come from unconventional journeys. At my core, I am a 21-year-old student of cinema and Science, refusing to be boxed into a single category.",
  "My foundation in the arts didn't start behind a camera, but on the stage. Since the age of four, I started learning recitation and performing arts at Shankhamala in Belgharia (Kolkata) under the guidance of Sumantra Sengupta. This eventually led me to audio stories and stage performances. I spent three years in a drama program at the Nehru Children's Museum, Kolkata, trying to understand human emotions. I was lucky enough to absorb the nuances of performance through workshops with theatre stalwarts like Jagannath Bose, Gautam Halder, and Debshankar Halder, and explored the silent art of mime under Anjan Deb.",
  "My most profound influence came from closely interacting and attending workshops with the legendary Late Soumitra Chatterjee. He taught me the very soul of a narrative, making me realize I wanted to build my world around it.",
  "I also had the privilege of attending a workshop by Sandip Ray, son of the maestro Satyajit Ray. Even this brief experience gave me an invaluable glimpse into the legacy of Indian cinema.",
  "My path isn't a straight line. I earned a medical seat but walked away—a practical financial decision to spare my family the steep costs of Semi-Govt. medical education. Instead, I am pursuing my Bachelor of Physiotherapy (BPT) while quietly building my filmmaking goals.",
  "This pragmatism also led me to a Cosmetology certification. I practiced for a year and co-founded a skincare brand, 'Promise'. The B2C market is unforgiving and we had to pivot, but bootstrapping a business taught me invaluable lessons in marketing, risk-taking, and execution.",
  "Through all this, the camera kept calling. I shifted to post-production, got certified as a Blackmagic Design Colorist, and worked at Philharmonic Studios (Kolkata). There, I saw talented, hungry artists struggling due to a lack of resources. Thus, Real Redhouse Productions was born—a small, passion-driven initiative creating good cinema with underrated talent. Hustling on micro-budgets, we've produced 12+ music videos and a web series, proving vision outshines heavy capital.",
  "Currently, I'm expanding into VFX (DaVinci & Blender) and prepping my directorial debut: the short film 'Jodi Jante Amay Bhalobaste (Where We Almost Loved)'.",
  "Whether directing a commercial, studying human anatomy, or color-grading, I am still building myself. Always open to collaborating with filmmakers, actors, technicians, and other visionaries.",
];

const credentials = [
  { label: "Blackmagic", sub: "Certified Colorist" },
  { label: "Real Redhouse Productions", sub: "Founder and Producer" },
  { label: "BPT", sub: "Student of Science" },
];

export default function AboutSection() {
  const [headingRef, headingInView] = useInView<HTMLDivElement>();
  const [imageRef, imageInView] = useInView<HTMLDivElement>();
  const [textRef, textInView] = useInView<HTMLDivElement>();

  return (
    <section
      id="about"
      className="py-24 md:py-32"
      style={{
        background:
          "linear-gradient(to bottom, oklch(0.07 0 0), oklch(0.09 0.005 40), oklch(0.07 0 0))",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div
          ref={headingRef}
          className={cn("fade-in-up mb-14", headingInView && "in-view")}
        >
          <p className="text-xs tracking-cinematic uppercase text-amber font-display mb-3">
            The Filmmaker
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground">
            About
          </h2>
          <div className="mt-4 w-16 h-px bg-amber opacity-60" />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <div
            ref={imageRef}
            className={cn("fade-in-up lg:col-span-2", imageInView && "in-view")}
          >
            <div className="relative">
              {/* Amber corner accents */}
              <div className="absolute -top-2 -left-2 w-16 h-16 border-t-2 border-l-2 border-amber opacity-70 pointer-events-none z-10" />
              <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-2 border-r-2 border-amber opacity-70 pointer-events-none z-10" />
              <div className="overflow-hidden rounded-sm">
                <img
                  src="https://i.postimg.cc/KvV70p1r/20250209-175220(1).avif"
                  alt="Filmmaker on set"
                  className="w-full object-cover aspect-[4/5]"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-xs italic text-muted-foreground text-center font-body opacity-60">
                On set
              </p>
            </div>
          </div>

          {/* Bio text */}
          <div
            ref={textRef}
            className={cn(
              "fade-in-up delay-200 lg:col-span-3",
              textInView && "in-view",
            )}
          >
            <div className="space-y-5 max-h-[70vh] overflow-y-auto pr-2">
              {bioParagraphs.map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className={cn(
                    "text-base leading-relaxed font-body",
                    para.startsWith("I believe")
                      ? "text-foreground font-medium text-lg"
                      : "text-muted-foreground",
                  )}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Credentials strip */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {credentials.map((cred) => (
                <div
                  key={cred.label}
                  className="border border-border/40 rounded-sm p-3 bg-card/30"
                >
                  <p className="text-amber text-sm font-display font-semibold">
                    {cred.label}
                  </p>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    {cred.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
