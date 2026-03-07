import { useEffect } from "react";

interface NolanModalProps {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function NolanModal({
  open,
  onCancel,
  onConfirm,
}: NolanModalProps) {
  // Lock body scroll while modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <>
      <style>{`
        @keyframes nolanFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes nolanSlideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes nolanGlow {
          0%, 100% { box-shadow: 0 0 16px 2px rgba(251,146,60,0.18), 0 0 40px 8px rgba(251,146,60,0.07), 0 8px 48px 0 rgba(0,0,0,0.7); }
          50% { box-shadow: 0 0 28px 6px rgba(251,146,60,0.32), 0 0 60px 16px rgba(251,146,60,0.13), 0 8px 48px 0 rgba(0,0,0,0.7); }
        }
        @keyframes nolanSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes borderPulse {
          0%, 100% { border-color: rgba(251,146,60,0.25); }
          50% { border-color: rgba(251,146,60,0.65); }
        }
        .nolan-overlay {
          animation: nolanFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .nolan-card {
          animation: nolanSlideUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards,
                     nolanGlow 3s ease-in-out 0.45s infinite,
                     borderPulse 3s ease-in-out 0.45s infinite;
        }
        .nolan-icon-spin {
          display: inline-block;
          animation: nolanSpin 8s linear infinite;
        }
      `}</style>

      {/* Backdrop — biome-ignore: backdrop dismiss is a UX shortcut; primary close is via keyboard-accessible buttons */}
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: backdrop dismiss is a supplementary UX affordance; primary close is via buttons */}
      {/* biome-ignore lint/a11y/useSemanticElements: custom layout requires div wrapper for glassmorphism positioning */}
      <div
        className="nolan-overlay fixed inset-0 z-[9998] bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
        onClick={onCancel}
        data-ocid="nolan_modal.dialog"
        aria-modal="true"
        aria-labelledby="nolan-heading"
      >
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: stopPropagation only prevents backdrop close; no semantic action */}
        <div
          className="nolan-card relative max-w-lg w-full rounded-2xl border bg-zinc-950/90 backdrop-blur-xl p-8 md:p-10"
          style={{
            borderColor: "rgba(251,146,60,0.25)",
            borderWidth: "1px",
            borderStyle: "solid",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Subtle inner glow rim */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(251,146,60,0.06) 0%, transparent 70%)",
            }}
          />

          {/* Icon */}
          <div className="flex justify-center mb-5">
            <span
              className="nolan-icon-spin text-5xl leading-none select-none"
              aria-hidden="true"
            >
              🌀
            </span>
          </div>

          {/* Heading */}
          <h2
            id="nolan-heading"
            className="text-center text-2xl md:text-3xl font-display font-bold text-white tracking-tight mb-6"
          >
            A Nolan-Level Anomaly 🌀
          </h2>

          {/* Body */}
          <div className="space-y-4 text-sm md:text-base text-zinc-300 leading-relaxed mb-8 font-body">
            <p>
              I am still color grading the Light Mode. Right now, the white text
              on a white background is like a Christopher Nolan sound mix — you
              know it is there, you just can't make it out! 🎛️
            </p>
            <p className="text-zinc-400 italic text-xs md:text-sm border-l-2 border-amber-500/40 pl-3">
              Disclaimer: If you struggle to read anything, that's completely on
              you. But honestly, if you can understand the timelines in Tenet or
              Inception, you can survive this UI complexity.
            </p>
            <p className="text-zinc-300 font-medium">
              So remember...{" "}
              <span className="text-amber-400">
                Don't try to understand it.
              </span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Ghost cancel */}
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 py-3 px-5 rounded-lg border border-zinc-700 text-zinc-300 text-sm font-medium tracking-wide hover:border-zinc-500 hover:text-white transition-all duration-200 bg-transparent hover:bg-white/5"
              data-ocid="nolan_modal.cancel_button"
            >
              Stay in the Shadows 🦇
            </button>

            {/* Orange confirm */}
            <button
              type="button"
              onClick={onConfirm}
              className="flex-1 py-3 px-5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(249,115,22,0.35)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 6px 28px rgba(249,115,22,0.55)";
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 4px 20px rgba(249,115,22,0.35)";
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(0)";
              }}
              data-ocid="nolan_modal.confirm_button"
            >
              Just feel it ⏳
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
