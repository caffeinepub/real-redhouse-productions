import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

interface NavbarProps {
  theme: "dark" | "light";
  onThemeToggle: () => void;
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ theme, onThemeToggle }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/60 shadow-film"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavClick("#home")}
          className="font-display font-bold text-sm md:text-base tracking-wide-plus uppercase text-amber hover:opacity-80 transition-opacity"
          data-ocid="nav.link"
        >
          Sayan Mojumder
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground tracking-wide transition-colors duration-200 relative group"
              data-ocid={`nav.${link.label.toLowerCase()}.link`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber group-hover:w-full transition-all duration-300" />
            </button>
          ))}

          <button
            type="button"
            onClick={onThemeToggle}
            className="ml-2 p-2 rounded-sm border border-border/50 text-muted-foreground hover:text-foreground hover:border-amber/50 transition-all duration-200"
            aria-label="Toggle theme"
            data-ocid="nav.toggle"
          >
            {theme === "dark" ? (
              <Sun size={16} strokeWidth={1.5} />
            ) : (
              <Moon size={16} strokeWidth={1.5} />
            )}
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            type="button"
            onClick={onThemeToggle}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
            data-ocid="nav.mobile.toggle"
          >
            {theme === "dark" ? (
              <Sun size={18} strokeWidth={1.5} />
            ) : (
              <Moon size={18} strokeWidth={1.5} />
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
            data-ocid="nav.mobile.button"
          >
            {mobileOpen ? (
              <X size={22} strokeWidth={1.5} />
            ) : (
              <Menu size={22} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-background/98 backdrop-blur-md border-b border-border/60`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className="py-3 text-base font-medium text-muted-foreground hover:text-amber border-b border-border/30 last:border-0 tracking-wide transition-colors text-left w-full"
              data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
