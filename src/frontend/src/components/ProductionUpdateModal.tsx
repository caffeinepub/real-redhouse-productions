import { X } from "lucide-react";
import { useEffect } from "react";

interface ProductionUpdateModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ProductionUpdateModal({
  open,
  onClose,
}: ProductionUpdateModalProps) {
  // Lock body scroll while open
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

  // ESC key to close
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      <style>{`
        @keyframes puFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes puSlideUp {
          from { opacity: 0; transform: translateY(32px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
        @keyframes puOrangePulse {
          0%,100% { box-shadow: 0 0 18px 3px rgba(249,115,22,0.20), 0 0 60px 12px rgba(249,115,22,0.07), 0 24px 80px rgba(0,0,0,0.8); }
          50%     { box-shadow: 0 0 34px 8px rgba(249,115,22,0.38), 0 0 90px 22px rgba(249,115,22,0.14), 0 24px 80px rgba(0,0,0,0.8); }
        }
        @keyframes puBorderBreath {
          0%,100% { border-color: rgba(249,115,22,0.35); }
          50%     { border-color: rgba(249,115,22,0.70); }
        }
        @keyframes puFilmGrain {
          0%   { background-position: 0%   0%;   }
          25%  { background-position: 100% 50%;  }
          50%  { background-position: 50%  100%; }
          75%  { background-position: 0%   50%;  }
          100% { background-position: 0%   0%;   }
        }
        @keyframes puScanline {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes puCameraFlicker {
          0%,92%,100% { opacity: 1; }
          93%          { opacity: 0.6; }
          96%          { opacity: 0.85; }
        }
        .pu-overlay {
          animation: puFadeIn 0.3s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        .pu-card {
          animation: puSlideUp 0.45s cubic-bezier(0.16,1,0.3,1) forwards,
                     puOrangePulse  3.5s ease-in-out 0.45s infinite,
                     puBorderBreath 3.5s ease-in-out 0.45s infinite,
                     puCameraFlicker 8s ease-in-out 1s infinite;
        }
        .pu-scanline {
          animation: puScanline 6s linear infinite;
          pointer-events: none;
        }
      `}</style>

      {/* ── Backdrop ── */}
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: backdrop dismiss is a supplementary affordance */}
      {/* biome-ignore lint/a11y/useSemanticElements: custom overlay layout */}
      <div
        className="pu-overlay fixed inset-0 z-[9999] flex items-center justify-center p-4"
        style={{ background: "rgba(0,0,0,0.72)" }}
        onClick={onClose}
        data-ocid="production_update_modal.dialog"
        aria-modal="true"
        aria-labelledby="pu-heading"
        // biome-ignore lint/a11y/useSemanticElements: glassmorphism backdrop requires div; native dialog element cannot be used here
      >
        {/* ── Modal Card ── */}
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: stopPropagation only */}
        <div
          className="pu-card relative max-w-md w-full rounded-2xl overflow-hidden"
          style={{
            background: "rgba(0,0,0,0.82)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(249,115,22,0.35)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Scanline effect */}
          <div
            className="pu-scanline absolute left-0 right-0 h-[2px] z-10"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(249,115,22,0.12), transparent)",
            }}
            aria-hidden="true"
          />

          {/* Inner orange rim glow at top */}
          <div
            className="absolute inset-x-0 top-0 h-[1px]"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(249,115,22,0.6) 50%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          {/* Radial ambient glow behind content */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% -10%, rgba(249,115,22,0.08) 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />

          {/* ── Close (X) button ── */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full text-zinc-400 hover:text-white transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
            aria-label="Close modal"
            data-ocid="production_update_modal.close_button"
          >
            <X size={15} strokeWidth={2.5} />
          </button>

          {/* ── Content ── */}
          <div className="relative z-10 px-7 pt-9 pb-7 md:px-9 md:pt-10 md:pb-8">
            {/* Film-strip top decoration */}
            <div className="flex gap-[6px] mb-6" aria-hidden="true">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  // biome-ignore lint/suspicious/noArrayIndexKey: decorative static list
                  key={i}
                  className="h-[6px] flex-1 rounded-sm"
                  style={{ background: "rgba(249,115,22,0.22)" }}
                />
              ))}
            </div>

            {/* Title */}
            <h2
              id="pu-heading"
              className="text-xl md:text-2xl font-bold tracking-widest uppercase mb-1 text-center"
              style={{ color: "#f97316" }}
            >
              🎬 PRODUCTION UPDATE
            </h2>

            {/* Subtitle rule */}
            <div className="flex items-center gap-3 my-4" aria-hidden="true">
              <div
                className="flex-1 h-px"
                style={{ background: "rgba(249,115,22,0.25)" }}
              />
              <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-600">
                Director's Memo
              </span>
              <div
                className="flex-1 h-px"
                style={{ background: "rgba(249,115,22,0.25)" }}
              />
            </div>

            {/* Body */}
            <div className="space-y-3 text-sm md:text-[0.92rem] leading-relaxed mb-7 font-body">
              <p>
                <span className="text-orange-400 font-semibold">
                  RENDERING AT 1 FRAME PER DAY...
                </span>{" "}
                <span className="text-zinc-300">
                  The final polish of this site is taking longer than James
                  Cameron waiting for{" "}
                </span>
                <span className="text-orange-400 font-semibold">Avatar</span>
                <span className="text-zinc-300"> technology.</span>
              </p>
              <p className="text-zinc-400">
                The truth? The director is currently overthinking every pixel
                and taking a massive nap.
              </p>
              <p className="text-zinc-300">
                If you see broken links or empty sections, we are 100% going to{" "}
                <span className="text-orange-400 font-semibold">
                  fix it in post
                </span>
                .
              </p>
              <p className="text-zinc-400 italic border-l-2 border-orange-500/30 pl-3 text-xs md:text-sm">
                Updates dropping when the caffeine kicks in! Sometime soon.
                ...Maybe.
              </p>
            </div>

            {/* Film-strip bottom decoration */}
            <div className="flex gap-[6px] mb-6" aria-hidden="true">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  // biome-ignore lint/suspicious/noArrayIndexKey: decorative static list
                  key={i}
                  className="h-[6px] flex-1 rounded-sm"
                  style={{ background: "rgba(249,115,22,0.22)" }}
                />
              ))}
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3.5 px-6 rounded-xl font-bold text-sm md:text-base tracking-wide text-white transition-all duration-200 active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                boxShadow: "0 4px 22px rgba(249,115,22,0.40)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 6px 30px rgba(249,115,22,0.60)";
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 4px 22px rgba(249,115,22,0.40)";
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(0)";
              }}
              data-ocid="production_update_modal.confirm_button"
            >
              Enter the Director's Cut 🎬
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
