import React, { FC, useRef, useEffect } from "react";

const TechnoRippleBackground: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId: number;
    let startTime: number | null = null;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;
      if (!ctx) return;

      // Detect dark vs. light mode
      const isDarkMode = document.documentElement.classList.contains("dark");
      const backgroundColor = isDarkMode ? "#111" : "#fff";
      const strokeStyle = isDarkMode
        ? "rgba(255, 255, 255, 0.09)"
        : "rgba(0, 0, 0, 0.09)";

      // Clear and fill background
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw waves
      const numberOfWaves = 30;
      const waveSpacing = canvas.height / numberOfWaves;
      for (let i = 0; i < numberOfWaves; i++) {
        const baseY = i * waveSpacing;
        ctx.beginPath();
        ctx.moveTo(0, baseY);

        for (let x = 0; x <= canvas.width; x += 5) {
          let ripple = Math.sin(x * 0.03 + elapsed + i) * 6;

          const dx = Math.abs(mousePos.current.x - x);
          const dy = Math.abs(mousePos.current.y - baseY);
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            const factor = 1 - distance / 150;
            ripple += factor * 15;
          }

          ctx.lineTo(x, baseY + ripple);
        }

        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default TechnoRippleBackground;
