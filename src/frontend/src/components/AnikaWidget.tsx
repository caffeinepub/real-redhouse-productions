import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const AVATAR_URL =
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&crop=face";

type Message = {
  id: number;
  type: "user" | "bot";
  text: string;
  actionLabel?: string;
  actionHref?: string;
};

type Chip = {
  label: string;
  highlight?: boolean;
  reply: string;
  actionLabel: string;
  actionHref: string;
};

const CHIPS: Chip[] = [
  {
    label: "Who is Sayan?",
    reply:
      "Sayan Mojumder is an independent filmmaker, writer, and colorist based in Kolkata, India. He founded Real Redhouse Productions with a belief in authentic, resource-efficient storytelling.",
    actionLabel: "Read His Bio",
    actionHref: "#about",
  },
  {
    label: "Hire Sayan for a Project",
    highlight: true,
    reply:
      "Sayan specializes in Film Direction, Screenwriting, Video Editing, and Color Grading. If you are looking to hire him for your next project, please email him directly or check out the services page.",
    actionLabel: "View Services",
    actionHref: "#services",
  },
  {
    label: "Sayan's Works",
    reply:
      "Working since 2021, Sayan's foundation comes from the stage. He has performed at iconic Kolkata venues like Rabindra Sadan, Academy of Fine Arts, Madhusudan Mancha, Gyan Mancha, etc. Behind the camera, his visual work spans independent short films, TV commercials, and music videos.",
    actionLabel: "View Projects",
    actionHref: "#projects",
  },
  {
    label: "Submit Your Script",
    reply:
      "Have a compelling script? Sayan Mojumder Creations is open to reading, developing, and potentially funding original stories from scratch. We are always looking for authentic voices.",
    actionLabel: "Pitch to Originals",
    actionHref: "#originals",
  },
  {
    label: "Submit Your Film",
    reply:
      "Finished a great short film, music video, or series? Real Redhouse Productions helps indie filmmakers with PR, distribution, and festival submissions under our banner. We are open to collaboration.",
    actionLabel: "Go to Releases & PR",
    actionHref: "#releases",
  },
  {
    label: "Support Where We (Almost) Loved",
    reply:
      'Thank you for your interest! You can become a Co-Producer for the upcoming psychological musical short film "Where We (Almost) Loved". Check out the pitch deck in the Projects section!',
    actionLabel: "Go to Project",
    actionHref: "#projects",
  },
  {
    label: "Contact Sayan Directly",
    reply:
      "I am just an AI, so if you aren't satisfied with my answers or need a real human, you can email Sayan directly at sayanmojumderreal@gmail.com. (Please be respectful and don't spam!)",
    actionLabel: "Contact Info",
    actionHref: "#contact",
  },
];

const INITIAL_MESSAGE: Message = {
  id: 0,
  type: "bot",
  text: "Hello! I am Anika, Sayan's virtual assistant. If you need any help navigating his portfolio or production services, just ask me below.",
};

let msgCounter = 1;

export default function AnikaWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const tooltipIntervalRef = useRef<ReturnType<typeof setInterval> | null>(
    null,
  );
  const tooltipTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const firstTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll to bottom when chat opens
  useEffect(() => {
    if (!isOpen) return;
    const t = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 60);
    return () => clearTimeout(t);
  }, [isOpen]);

  // Tooltip nudge logic — only runs when chat is closed
  // First trigger: 10s after page load; subsequent triggers: every 40s
  useEffect(() => {
    if (isOpen) {
      // Clear everything when chat opens
      if (firstTimerRef.current) clearTimeout(firstTimerRef.current);
      if (tooltipIntervalRef.current) clearInterval(tooltipIntervalRef.current);
      if (tooltipTimeoutRef.current) clearTimeout(tooltipTimeoutRef.current);
      setShowTooltip(false);
      return;
    }

    const startCycle = () => {
      setShowTooltip(true);
      tooltipTimeoutRef.current = setTimeout(() => {
        setShowTooltip(false);
      }, 4000);
    };

    // First trigger after 10s, then every 40s
    firstTimerRef.current = setTimeout(() => {
      startCycle();
      tooltipIntervalRef.current = setInterval(startCycle, 40000);
    }, 10000);

    return () => {
      if (firstTimerRef.current) clearTimeout(firstTimerRef.current);
      if (tooltipIntervalRef.current) clearInterval(tooltipIntervalRef.current);
      if (tooltipTimeoutRef.current) clearTimeout(tooltipTimeoutRef.current);
    };
  }, [isOpen]);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 60);
  };

  const handleChipClick = (chip: Chip) => {
    if (isTyping) return;

    const userMsg: Message = {
      id: msgCounter++,
      type: "user",
      text: chip.label,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);
    scrollToBottom();

    const delay = Math.random() * 500 + 1500; // 1500–2000ms
    setTimeout(() => {
      const botMsg: Message = {
        id: msgCounter++,
        type: "bot",
        text: chip.reply,
        actionLabel: chip.actionLabel,
        actionHref: chip.actionHref,
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
      scrollToBottom();
    }, delay);
  };

  const handleActionClick = (href: string) => {
    window.location.hash = href.replace("#", "");
    setIsOpen(false);
  };

  const windowClass =
    "fixed z-[9999] flex flex-col " +
    "bottom-0 left-0 right-0 h-[80vh] rounded-t-2xl rounded-b-none " +
    "md:bottom-24 md:right-6 md:left-auto md:w-[380px] md:h-[520px] md:rounded-2xl " +
    "bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden";

  return (
    <>
      {/* Mobile overlay backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 z-[9998] md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-window"
            data-ocid="anika.panel"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 340, damping: 30 }}
            className={windowClass}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 flex-shrink-0">
              <div className="relative flex-shrink-0">
                <img
                  src={AVATAR_URL}
                  alt="Anika"
                  className="w-9 h-9 rounded-full object-cover ring-1 ring-white/20"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-400 ring-2 ring-black" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-white font-semibold text-sm tracking-wide">
                    Anika
                  </span>
                  <span className="flex items-center gap-1 text-green-400 text-[10px] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                    Online
                  </span>
                </div>
                <p className="text-white/40 text-[11px] truncate">
                  Virtual Assistant
                </p>
              </div>
              <button
                type="button"
                data-ocid="anika.close_button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0"
                aria-label="Minimize chat"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.type === "bot" && (
                    <img
                      src={AVATAR_URL}
                      alt="Anika"
                      className="w-6 h-6 rounded-full object-cover flex-shrink-0 mt-1 ring-1 ring-white/10"
                    />
                  )}
                  <div
                    className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 ${
                      msg.type === "user"
                        ? "bg-orange-500/20 border border-orange-500/30 rounded-tr-sm"
                        : "bg-white/5 border border-white/10 rounded-tl-sm"
                    }`}
                  >
                    <p className="text-white/90 text-[13px] leading-relaxed">
                      {msg.text}
                    </p>
                    {msg.actionLabel && msg.actionHref && (
                      <button
                        type="button"
                        data-ocid="anika.secondary_button"
                        onClick={() => handleActionClick(msg.actionHref!)}
                        className="mt-2.5 px-3 py-1.5 rounded-md text-[12px] font-medium text-orange-400 border border-orange-500/50 hover:bg-orange-500/10 hover:border-orange-400 transition-all duration-200"
                      >
                        {msg.actionLabel}
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex gap-2 justify-start">
                  <img
                    src={AVATAR_URL}
                    alt="Anika"
                    className="w-6 h-6 rounded-full object-cover flex-shrink-0 mt-1 ring-1 ring-white/10"
                  />
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-3.5 py-3 flex items-center gap-1">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Option Chips */}
            <div className="flex-shrink-0 border-t border-white/10 px-3 py-3 bg-black/50">
              <p className="text-white/30 text-[10px] uppercase tracking-widest mb-2 px-1">
                Quick questions
              </p>
              <div className="flex flex-wrap gap-1.5 max-h-[100px] overflow-y-auto">
                {CHIPS.map((chip) => (
                  <button
                    type="button"
                    key={chip.label}
                    data-ocid="anika.toggle"
                    onClick={() => handleChipClick(chip)}
                    disabled={isTyping}
                    className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all duration-200 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed ${
                      chip.highlight
                        ? "text-orange-300 border border-orange-500/70 bg-orange-500/10 hover:bg-orange-500/20 hover:border-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.3)]"
                        : "text-white/70 border border-white/15 bg-white/5 hover:bg-white/10 hover:text-white hover:border-white/30"
                    }`}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating avatar button + tooltip */}
      <div className="fixed bottom-6 right-6 z-[9999] flex items-center">
        {/* Tooltip nudge — positioned to the LEFT of the avatar, single line enforced */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              key="tooltip"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              style={{
                position: "absolute",
                right: "calc(100% + 12px)",
                top: "50%",
                transform: "translateY(-50%)",
                whiteSpace: "nowrap",
                zIndex: 99999,
                pointerEvents: "none",
              }}
              className="bg-zinc-900/95 border border-orange-500/30 text-orange-400 text-xs font-medium px-3 py-2 rounded-lg shadow-lg"
            >
              Hi! Need help exploring?
              {/* Arrow pointing right */}
              <div
                style={{
                  position: "absolute",
                  right: "-5px",
                  top: "50%",
                  transform: "translateY(-50%) rotate(45deg)",
                  width: "8px",
                  height: "8px",
                  background: "rgb(24 24 27 / 0.95)",
                  borderRight: "1px solid rgba(249,115,22,0.3)",
                  borderTop: "1px solid rgba(249,115,22,0.3)",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Avatar FAB */}
        <button
          type="button"
          data-ocid="anika.open_modal_button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Open Anika virtual assistant"
          className="relative w-[48px] h-[48px] md:w-[60px] md:h-[60px] rounded-full overflow-visible focus:outline-none"
        >
          <span className="absolute inset-0 rounded-full border-2 border-orange-500/40 animate-ping" />
          <span className="absolute inset-0 rounded-full border border-orange-500/20" />
          <img
            src={AVATAR_URL}
            alt="Chat with Anika"
            className="w-[48px] h-[48px] md:w-[60px] md:h-[60px] rounded-full object-cover ring-2 ring-white/20 shadow-lg relative z-10"
          />
          <span className="absolute bottom-0.5 right-0.5 z-20 w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-green-400 ring-2 ring-black" />
        </button>
      </div>
    </>
  );
}
