import React, { useRef, useEffect } from "react";

const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId: number;

    // Resize canvas to fill the screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Particle class
    class Particle {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 5 + 2; // Adjust particle size as desired
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.alpha = 1; // Fully opaque at first
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 0.005; // Fade speed
      }
      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#fff"; // Use white particles; adjust as needed
        ctx.fill();
        ctx.restore();
      }
    }

    let particles: Particle[] = [];

    // Function to create particles at the mouse location
    const createParticles = (x: number, y: number) => {
      for (let i = 0; i < 5; i++) { // Adjust the number of particles per event here
        particles.push(new Particle(x, y));
      }
    };

    // Listen for mouse movements
    const handleMouseMove = (e: MouseEvent) => {
      createParticles(e.clientX, e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop to update and draw particles
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw(ctx);
        // Remove particles that have fully faded
        if (particle.alpha <= 0) {
          particles.splice(index, 1);
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup event listeners and animation on component unmount
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    // The canvas is positioned fixed to cover the viewport and sits behind other content.
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1
      }}
    />
  );
};

export default InteractiveBackground;
