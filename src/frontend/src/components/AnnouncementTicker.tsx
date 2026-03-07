// Static ticker text — no .map() needed, keys are stable JSX positions
function TickerCopy() {
  const hi = "text-orange-400 font-semibold";
  const base = "text-white/85";
  return (
    <span
      className={`inline-flex items-center text-sm ${base} tracking-wide px-12`}
    >
      <span>🎬&nbsp;</span>
      <span className={hi}>
        PRODUCTION UPDATE: RENDERING AT 1 FRAME PER DAY...
      </span>
      <span>
        &nbsp;The final polish of this site is taking longer than James Cameron
        waiting for&nbsp;
      </span>
      <span className={hi}>Avatar</span>
      <span>
        &nbsp;technology. The truth? The director is currently overthinking
        every pixel and taking a massive nap. If you see broken links or empty
        sections, we are 100% going to&nbsp;
      </span>
      <span className={hi}>fix it in post</span>
      <span>
        . Updates dropping when the caffeine kicks in! Sometime soon.
        ...Maybe.&nbsp;🎬
      </span>
    </span>
  );
}

interface AnnouncementTickerProps {
  onOpen?: () => void;
}

export default function AnnouncementTicker({
  onOpen,
}: AnnouncementTickerProps) {
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: ticker is a decorative banner; primary interaction is via the button role affordance
    <div
      className="fixed top-0 left-0 right-0 w-full z-[100] bg-black/70 backdrop-blur-md border-b border-orange-500/40 overflow-hidden"
      style={{
        height: "36px",
        cursor: onOpen ? "pointer" : "default",
      }}
      aria-label="Announcement ticker — click to read full production update"
      data-ocid="ticker.panel"
      onClick={onOpen}
      title={onOpen ? "Click to open Production Update" : undefined}
    >
      {/* Track — two copies for seamless infinite loop */}
      <div
        className="flex items-center whitespace-nowrap h-full ticker-track"
        style={{ willChange: "transform" }}
      >
        <TickerCopy />
        {/* Gap between copies */}
        <span className="inline-block w-24 shrink-0" aria-hidden="true" />
        <span aria-hidden="true">
          <TickerCopy />
        </span>
        <span className="inline-block w-24 shrink-0" aria-hidden="true" />
      </div>
    </div>
  );
}
