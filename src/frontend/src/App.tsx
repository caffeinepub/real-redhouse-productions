import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import NolanModal from "./components/NolanModal";
import Preloader from "./components/Preloader";
import ProjectsSection from "./components/ProjectsSection";
import RealRedhouseSection from "./components/RealRedhouseSection";
import SMCSection from "./components/SMCSection";
import ServicesSection from "./components/ServicesSection";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, applyTheme } = useTheme();
  const [modalOpen, setModalOpen] = useState(false);

  // Intercept: dark -> show modal; light -> go straight back to dark
  const handleThemeToggle = () => {
    if (theme === "dark") {
      setModalOpen(true);
    } else {
      applyTheme("dark");
    }
  };

  const handleModalCancel = () => {
    setModalOpen(false);
    // Keep dark mode — nothing changes
  };

  const handleModalConfirm = () => {
    setModalOpen(false);
    applyTheme("light");
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Preloader />
      <Navbar theme={theme} onThemeToggle={handleThemeToggle} />
      <main>
        <HeroSection />
        <ProjectsSection />
        <RealRedhouseSection />
        <SMCSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
      <NolanModal
        open={modalOpen}
        onCancel={handleModalCancel}
        onConfirm={handleModalConfirm}
      />
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
