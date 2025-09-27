import { useEffect, useRef, useState } from "react";

// Modern arrow Back-to-Top button
const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ticking = useRef(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY || window.pageYOffset;
          setVisible(y > 240);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={[
        "fixed z-[10001] bottom-6 right-5 sm:bottom-8 sm:right-8",
        "inline-flex items-center justify-center",
        "h-12 w-12 sm:h-14 sm:w-14",
        "text-white focus:outline-none",
        "transition-all duration-300 ease-out",
        visible ? "opacity-100" : "opacity-0 pointer-events-none",
      ].join(" ")}
    >
      <div className="relative">
        {/* Arrow container */}
        <div
          className={[
            "relative w-6 h-6 sm:w-7 sm:h-7 mx-auto",
            "transition-transform duration-300",
            isHovered ? "-translate-y-1" : "",
          ].join(" ")}
        >
          {/* Arrow line */}
          <div
            className={[
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
              "w-0.5 h-6 sm:h-7 bg-white",
              "transition-all duration-300",
              isHovered ? "h-7 sm:h-8" : "",
            ].join(" ")}
          >
            {/* Arrow head */}
            <div
              className={[
                "absolute bottom-0 left-1/2 -translate-x-1/2",
                "w-3 h-3 border-b-2 border-r-2 border-white",
                "transform rotate-225 origin-center",
                "transition-all duration-300",
                isHovered ? "w-3.5 h-3.5" : "",
              ].join(" ")}
            />
          </div>

          {/* Glow effect */}
          <div
            className={[
              "absolute inset-0 rounded-full",
              "bg-purple-400/30 blur-md -z-10",
              "transition-all duration-300",
              isHovered ? "opacity-100 scale-125" : "opacity-0 scale-95",
            ].join(" ")}
          />
        </div>

        {/* Background circle */}
        <div
          className={[
            "absolute inset-0 -z-10 rounded-full",
            "bg-gradient-to-br from-purple-600 to-indigo-600",
            "transition-all duration-300",
            isHovered ? "shadow-lg shadow-purple-900/40" : "shadow-md shadow-purple-900/20",
          ].join(" ")}
        />
      </div>
    </button>
  );
};

export default BackToTop;
