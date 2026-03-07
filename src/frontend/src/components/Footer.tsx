import { Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="border-t border-border/20 py-8 bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground font-body">
          <span className="text-amber font-display font-medium tracking-wide">
            Real Redhouse Productions
          </span>
          <span className="opacity-40">·</span>
          <span>Kolkata, India</span>
        </div>

        <p className="text-xs text-muted-foreground/60 font-body flex items-center gap-1">
          © {year}. Built with{" "}
          <Heart size={11} className="text-amber fill-amber" /> using{" "}
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground/80 hover:text-amber transition-colors underline underline-offset-2"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
