import { cn } from "@/lib/utils";
import { useInView } from "../hooks/useInView";

const bioParagraphs = [
  "My education in storytelling didn't begin behind a camera. It began on stage.",
  "Since the age of four, I trained in recitation and performing arts at Shankhamala, Belgharia, under Sumantra Sengupta — a foundation that eventually led me to audio stories, stage performances, and three years in a drama program at the Nehru Children's Museum, Kolkata. Along the way, I worked through workshops with theatre practitioners like Jagannath Bose, Gautam Halder, and Debshankar Halder, and explored mime under Anjan Deb.",
  "The most defining influence came from time spent with the late Soumitra Chatterjee — conversations and workshops that fundamentally changed how I understood narrative and the human beings inside it. A workshop with Sandip Ray, son of the maestro Satyajit Ray, offered its own quiet lesson in what it means to carry a cinematic legacy.",
  "Cinema pulled me toward post-production first. I trained as a Blackmagic Design certified colorist and worked at Philharmonic Studios, Kolkata — where I saw firsthand what hungry, talented artists could do without resources. That observation became Real Redhouse Productions: a deliberately lean outfit built around the belief that vision doesn't require capital to be serious.",
  "I am, above everything else, a student of the craft — still learning, still making work.",
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
            <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
              {bioParagraphs.map((para, index) => {
                const isFirst = para.startsWith("My education");
                const isLast = index === bioParagraphs.length - 1;

                if (isFirst) {
                  return (
                    <p
                      key={para.slice(0, 40)}
                      className="text-xl md:text-2xl italic leading-relaxed font-body text-foreground border-l-2 border-amber pl-5"
                    >
                      {para}
                    </p>
                  );
                }

                if (isLast) {
                  return (
                    <div key={para.slice(0, 40)} className="pt-2">
                      <div className="w-8 h-px bg-amber/40 mb-4" />
                      <p className="text-base leading-relaxed font-body italic text-muted-foreground/70">
                        {para}
                      </p>
                    </div>
                  );
                }

                return (
                  <p
                    key={para.slice(0, 40)}
                    className="text-base leading-relaxed font-body text-muted-foreground"
                  >
                    {para}
                  </p>
                );
              })}
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
