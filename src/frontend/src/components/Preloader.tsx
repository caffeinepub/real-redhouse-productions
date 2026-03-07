import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 3200);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 3900);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: fading ? 0 : 1,
        transition: "opacity 700ms ease",
        pointerEvents: fading ? "none" : "auto",
      }}
      data-ocid="preloader.modal"
    >
      {/* Cinematic loading text */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {/* Film strip decorative element */}
        <div
          style={{
            display: "flex",
            gap: "6px",
            marginBottom: "0.5rem",
          }}
        >
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={`film-cell-${i}`}
              style={{
                width: "8px",
                height: "14px",
                backgroundColor: i === 3 ? "#f59e0b" : "#333",
                borderRadius: "1px",
                animation: `filmPulse 1.4s ease-in-out ${i * 0.1}s infinite`,
              }}
            />
          ))}
        </div>

        {/* LOADING text */}
        <p
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontSize: "clamp(0.65rem, 2vw, 0.85rem)",
            fontWeight: 700,
            letterSpacing: "0.55em",
            color: "#f59e0b",
            textTransform: "uppercase" as const,
            margin: 0,
          }}
        >
          LOADING
        </p>

        {/* Thin progress bar */}
        <div
          style={{
            width: "clamp(120px, 30vw, 220px)",
            height: "1px",
            backgroundColor: "#1a1a1a",
            borderRadius: "999px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              backgroundColor: "#f59e0b",
              borderRadius: "999px",
              animation:
                "progressFill 3.2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
              transformOrigin: "left center",
            }}
          />
        </div>
      </div>

      {/* Keyframe styles */}
      <style>{`
        @keyframes filmPulse {
          0%, 100% { opacity: 0.25; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.15); }
        }
        @keyframes progressFill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
