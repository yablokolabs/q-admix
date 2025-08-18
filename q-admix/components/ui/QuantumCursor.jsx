import { useEffect, useRef } from "react";

// Quantum-inspired custom cursor: inner core + outer glow with smooth trailing
const QuantumCursor = () => {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const isDown = useRef(false);
  const isHover = useRef(false);
  const lastMoveTime = useRef(0);
  const isIdle = useRef(false);
  const idleTimeout = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const glow = glowRef.current;
    if (!dot || !glow) return;

    // Start hidden until first move
    dot.style.opacity = "0";
    glow.style.opacity = "0";

    const onMouseMove = (e) => {
      lastMoveTime.current = performance.now();
      if (isIdle.current) {
        isIdle.current = false;
        if (idleTimeout.current) clearTimeout(idleTimeout.current);
      }
      
      target.current = { x: e.clientX, y: e.clientY };
      
      // Show cursor immediately on first move
      dot.style.opacity = "1";
      glow.style.opacity = "1";
    };

    const onMouseDown = () => {
      isDown.current = true;
      dot.style.transform += " scale(0.85)";
      glow.style.transform += " scale(0.95)";
    };

    const onMouseUp = () => {
      isDown.current = false;
      // Remove any extra scale while preserving translate
      const reset = (el) => {
        const t = el.style.transform || "";
        const translate = t.match(/translate\([^\)]+\)/)?.[0] || "";
        el.style.transform = translate;
      };
      reset(dot);
      reset(glow);
    };

    const onMouseLeave = () => {
      dot.style.opacity = "0";
      glow.style.opacity = "0";
    };

    const onMouseEnter = () => {
      dot.style.opacity = "1";
      glow.style.opacity = "1";
    };

    const lerp = (a, b, n) => (1 - n) * a + n * b;

    // Check for idle state (no movement for 1.5s)
    const checkIdle = () => {
      const now = performance.now();
      if (!isHover.current && now - lastMoveTime.current > 1500) {
        isIdle.current = true;
      } else {
        idleTimeout.current = setTimeout(checkIdle, 100);
      }
    };
    
    // Start idle check loop
    idleTimeout.current = setTimeout(checkIdle, 1500);

    const animate = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.22);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.22);

      // Detect whether we're hovering an interactive element
      const el = document.elementFromPoint(target.current.x, target.current.y);
      const interactiveSelector = 'a, button, [role="button"], .cursor-interactive, input[type="submit"], input[type="button"], label';
      isHover.current = !!(el && el.closest(interactiveSelector));

      // Pulse factor when hovering
      const now = performance.now();
      const pulse = isHover.current ? 1 + 0.06 * Math.sin(now * 0.008) : 1;

      const dotTranslate = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      const glowTranslate = `translate(${pos.current.x}px, ${pos.current.y}px)`;

      const dotScale = (isHover.current ? 1.12 : 1.0) * (isDown.current ? 0.9 : 1.0);
      let glowScale = (isHover.current ? 1.15 : 1.0) * (isDown.current ? 0.98 : 1.0) * pulse;
      
      // Add subtle idle breathing effect
      if (isIdle.current && !isHover.current) {
        glowScale *= 0.98 + 0.04 * Math.sin(performance.now() * 0.002);
      }

      dot.style.transform = `${dotTranslate} scale(${dotScale})`;
      glow.style.transform = `${glowTranslate} scale(${glowScale})`;

      // Adjust glow opacity slightly on hover
      glow.style.opacity = isHover.current ? "1" : "0.85";

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    window.addEventListener("mouseenter", onMouseEnter, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave, { passive: true });

    // Hide on touch devices
    const onTouchStart = () => {
      dot.style.display = "none";
      glow.style.display = "none";
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseenter", onMouseEnter);
      if (idleTimeout.current) clearTimeout(idleTimeout.current);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("touchstart", onTouchStart);
    };
  }, []);

  // Two layers: inner core (solid) and outer glow (blurred gradient)
  return (
    <>
      <div
        ref={glowRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform, opacity",
          transition: "opacity 180ms ease-out",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: -26,
            top: -26,
            width: 52,
            height: 52,
            borderRadius: "50%",
            background:
              "radial-gradient(35% 35% at 50% 50%, rgba(168,85,247,0.55) 0%, rgba(79,70,229,0.35) 40%, rgba(79,70,229,0) 70%)",
            filter: "blur(12px)",
            opacity: 0.85,
          }}
        />
      </div>

      <div
        ref={dotRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          pointerEvents: "none",
          zIndex: 10000,
          willChange: "transform, opacity",
          transition: "opacity 120ms ease-out",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: -4,
            top: -4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#ffffff",
            boxShadow:
              "0 0 12px rgba(255,255,255,0.8), 0 0 24px rgba(168,85,247,0.55)",
          }}
        />
      </div>
    </>
  );
};

export default QuantumCursor;
