import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

// ── Tunable constants ──────────────────────────────────────────────
const CONFIG = {
  particleCount: 80,
  connectionDistance: 150,
  cursorConnectionMultiplier: 1.5,

  particleMinRadius: 1,
  particleMaxRadius: 3,
  particleMinOpacity: 0.2,
  particleMaxOpacity: 0.7,
  particleSpeed: 0.5,

  lineWidth: 0.5,
  lineMaxOpacity: 0.3,
  cursorLineWidth: 0.8,
  cursorLineMaxOpacity: 0.5,

  glowEnabled: true,
  glowIntensity: 15,
  glowPulseInterval: 4,
  glowPulseDuration: 1.4,
  glowPulseSpread: 0.15,
  glowPulseBrightness: 3,
};

interface Props {
  color?: string;
}

export default function ParticleCanvas({ color = "#6c63ff" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000 };

    function resize() {
      const oldW = canvas!.width;
      const oldH = canvas!.height;

      canvas!.width = canvas!.clientWidth;
      canvas!.height = canvas!.clientHeight;

      if (oldW > 0 && oldH > 0 && particles.length > 0) {
        const sx = canvas!.width / oldW;
        const sy = canvas!.height / oldH;
        for (const p of particles) {
          p.x = Math.min(p.x * sx, canvas!.width);
          p.y = Math.min(p.y * sy, canvas!.height);
        }
      }
    }

    function createParticles() {
      particles = [];
      for (let i = 0; i < CONFIG.particleCount; i++) {
        particles.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          vx: (Math.random() - 0.5) * CONFIG.particleSpeed,
          vy: (Math.random() - 0.5) * CONFIG.particleSpeed,
          radius:
            Math.random() * (CONFIG.particleMaxRadius - CONFIG.particleMinRadius) +
            CONFIG.particleMinRadius,
          opacity:
            Math.random() * (CONFIG.particleMaxOpacity - CONFIG.particleMinOpacity) +
            CONFIG.particleMinOpacity,
        });
      }
    }

    function hexToRgb(hex: string): [number, number, number] {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
        : [108, 99, 255];
    }

    const [r, g, b] = hexToRgb(color);
    const cursorDist = CONFIG.connectionDistance * CONFIG.cursorConnectionMultiplier;

    function drawLine(
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      baseOpacity: number,
      width: number,
      glowStrength: number,
      pulseProgress: number,
      reversed: boolean,
    ) {
      const hasPulse = CONFIG.glowEnabled && pulseProgress >= 0;

      if (hasPulse) {
        const fade = 1 - pulseProgress;
        ctx!.shadowColor = `rgba(${r}, ${g}, ${b}, ${baseOpacity * fade})`;
        ctx!.shadowBlur = glowStrength * CONFIG.glowIntensity * fade;
      } else {
        ctx!.shadowBlur = 0;
        ctx!.shadowColor = "transparent";
      }

      ctx!.beginPath();
      ctx!.moveTo(x1, y1);
      ctx!.lineTo(x2, y2);
      ctx!.lineWidth = width;

      if (hasPulse) {
        const gx1 = reversed ? x2 : x1;
        const gy1 = reversed ? y2 : y1;
        const gx2 = reversed ? x1 : x2;
        const gy2 = reversed ? y1 : y2;

        const grad = ctx!.createLinearGradient(gx1, gy1, gx2, gy2);
        const spread = CONFIG.glowPulseSpread;
        const peakOpacity = Math.min(baseOpacity * CONFIG.glowPulseBrightness, 1);
        const base = `rgba(${r}, ${g}, ${b}, ${baseOpacity})`;
        const peak = `rgba(${r}, ${g}, ${b}, ${peakOpacity})`;

        const lo = Math.max(0, pulseProgress - spread);
        const hi = Math.min(1, pulseProgress + spread);

        grad.addColorStop(0, base);
        grad.addColorStop(lo, base);
        grad.addColorStop(pulseProgress, peak);
        grad.addColorStop(hi, base);
        grad.addColorStop(1, base);

        ctx!.strokeStyle = grad;
      } else {
        ctx!.strokeStyle = `rgba(${r}, ${g}, ${b}, ${baseOpacity})`;
      }

      ctx!.stroke();
    }

    function draw() {
      const w = canvas!.width;
      const h = canvas!.height;
      ctx!.clearRect(0, 0, w, h);

      let pulseProgress = -1;
      if (CONFIG.glowEnabled) {
        const elapsed = (performance.now() / 1000) % CONFIG.glowPulseInterval;
        if (elapsed < CONFIG.glowPulseDuration) {
          pulseProgress = elapsed / CONFIG.glowPulseDuration;
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx!.shadowBlur = 0;
        ctx!.shadowColor = "transparent";
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity})`;
        ctx!.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONFIG.connectionDistance) {
            const t = 1 - dist / CONFIG.connectionDistance;
            drawLine(
              p.x, p.y, p2.x, p2.y,
              t * CONFIG.lineMaxOpacity,
              CONFIG.lineWidth,
              t,
              pulseProgress,
              (i + j) % 2 === 0,
            );
          }
        }

        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < cursorDist) {
          const t = 1 - mDist / cursorDist;
          drawLine(
            p.x, p.y, mouse.x, mouse.y,
            t * CONFIG.cursorLineMaxOpacity,
            CONFIG.cursorLineWidth,
            t * 1.5,
            pulseProgress,
            i % 2 === 0,
          );
        }
      }

      ctx!.shadowBlur = 0;
      ctx!.shadowColor = "transparent";

      animationId = requestAnimationFrame(draw);
    }

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function onMouseLeave() {
      mouse.x = -1000;
      mouse.y = -1000;
    }

    resize();
    createParticles();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
}
