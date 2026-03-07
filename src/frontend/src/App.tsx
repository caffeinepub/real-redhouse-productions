import { Toaster } from "@/components/ui/sonner";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import ProjectsSection from "./components/ProjectsSection";
import RealRedhouseSection from "./components/RealRedhouseSection";
import ServicesSection from "./components/ServicesSection";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Preloader />
      <Navbar theme={theme} onThemeToggle={toggle} />
      <main>
        <HeroSection />
        <ProjectsSection />
        <RealRedhouseSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          classNames: {
            toast:
              "bg-card border border-border text-card-foreground font-body",
            success: "!border-amber",
            error: "!border-destructive",
          },
        }}
      />
    </div>
  );
}
