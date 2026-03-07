import { cn } from "@/lib/utils";
import {
  AlertCircle,
  CheckCircle2,
  Instagram,
  Loader2,
  Mail,
  Youtube,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useInView } from "../hooks/useInView";
import { useSubmitContactForm } from "../hooks/useQueries";

export default function ContactSection() {
  const [headingRef, headingInView] = useInView<HTMLDivElement>();
  const [formRef, formInView] = useInView<HTMLDivElement>();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const { mutate: submitForm, isPending } = useSubmitContactForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    submitForm(formData, {
      onSuccess: () => {
        setSubmitState("success");
        setFormData({ name: "", email: "", message: "" });
        toast.success("Message sent! I'll get back to you soon.");
      },
      onError: () => {
        setSubmitState("error");
        toast.error("Something went wrong. Please try again.");
      },
    });
  };

  const inputClass = cn(
    "w-full bg-card/50 border border-border/60 rounded-sm px-4 py-3 text-foreground text-sm font-body",
    "placeholder:text-muted-foreground/50",
    "focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber/30",
    "transition-all duration-200",
  );

  return (
    <section
      id="contact"
      className="py-24 md:py-32"
      style={{
        background:
          "linear-gradient(to bottom, oklch(0.07 0 0), oklch(0.05 0.005 30))",
      }}
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <div
          ref={headingRef}
          className={cn(
            "fade-in-up text-center mb-14",
            headingInView && "in-view",
          )}
        >
          <p className="text-xs tracking-cinematic uppercase text-amber font-display mb-4">
            Get In Touch
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight">
            Let's make{" "}
            <span className="text-amber italic">something real.</span>
          </h2>
          <div className="mt-5 w-16 h-px bg-amber opacity-60 mx-auto" />
        </div>

        {/* Form */}
        <div
          ref={formRef}
          className={cn("fade-in-up delay-200", formInView && "in-view")}
        >
          {submitState === "success" ? (
            <div
              className="text-center py-16 space-y-4"
              data-ocid="contact.success_state"
            >
              <CheckCircle2
                size={48}
                className="text-amber mx-auto"
                strokeWidth={1.5}
              />
              <h3 className="font-display font-semibold text-xl text-foreground">
                Message sent!
              </h3>
              <p className="text-muted-foreground">
                I'll get back to you as soon as I can.
              </p>
              <button
                type="button"
                onClick={() => setSubmitState("idle")}
                className="btn-amber-ghost px-6 py-2.5 rounded-sm text-sm mt-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs text-muted-foreground mb-1.5 tracking-wide font-display uppercase"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, name: e.target.value }))
                    }
                    placeholder="Your name"
                    className={inputClass}
                    required
                    autoComplete="name"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs text-muted-foreground mb-1.5 tracking-wide font-display uppercase"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, email: e.target.value }))
                    }
                    placeholder="your@email.com"
                    className={inputClass}
                    required
                    autoComplete="email"
                    data-ocid="contact.email_input"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs text-muted-foreground mb-1.5 tracking-wide font-display uppercase"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, message: e.target.value }))
                  }
                  placeholder="Tell me about your project..."
                  className={cn(inputClass, "resize-none min-h-[140px]")}
                  required
                  rows={5}
                  data-ocid="contact.textarea"
                />
              </div>

              {submitState === "error" && (
                <div
                  className="flex items-center gap-2 text-sm text-destructive border border-destructive/30 rounded-sm px-4 py-3 bg-destructive/5"
                  data-ocid="contact.error_state"
                >
                  <AlertCircle size={16} strokeWidth={1.5} />
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="btn-amber w-full py-3.5 rounded-sm text-sm flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                data-ocid="contact.submit_button"
              >
                {isPending ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </div>

        {/* Contact info */}
        <div className="mt-14 pt-10 border-t border-border/30 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 flex-wrap">
          <a
            href="mailto:sayanmojumderreal@gmail.com"
            className="flex items-center gap-3 text-muted-foreground hover:text-amber transition-colors group"
          >
            <Mail
              size={18}
              strokeWidth={1.5}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="text-sm font-body">
              sayanmojumderreal@gmail.com
            </span>
          </a>
          <a
            href="https://instagram.com/sayanmojumder_real"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-amber transition-colors group"
          >
            <Instagram
              size={18}
              strokeWidth={1.5}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="text-sm font-body">@sayanmojumder_real</span>
          </a>
          <a
            href="https://youtube.com/@RealRedhouseEntertainment"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-amber transition-colors group"
          >
            <Youtube
              size={18}
              strokeWidth={1.5}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="text-sm font-body">RealRedhouseEntertainment</span>
          </a>
        </div>
      </div>
    </section>
  );
}
