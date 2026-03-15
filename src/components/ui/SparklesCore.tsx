"use client";
import { useEffect, useState, useRef } from "react";

interface SparklesCoreProps {
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
  speed?: number;
  className?: string;
}

export function SparklesCore({
  background = "transparent",
  minSize = 0.4,
  maxSize = 1.2,
  particleDensity = 70,
  particleColor = "#FF4D00",
  speed = 0.4,
  className = "",
}: SparklesCoreProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const particles = useRef<Array<{
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        const { width, height } = canvasRef.current.parentElement?.getBoundingClientRect() || { width: window.innerWidth, height: window.innerHeight };
        setDimensions({ width, height });
        canvasRef.current.width = width;
        canvasRef.current.height = height;
        initParticles(width, height);
      }
    };

    const initParticles = (width: number, height: number) => {
      const count = Math.floor((width * height) / (10000 / particleDensity));
      particles.current = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: minSize + Math.random() * (maxSize - minSize),
        speedX: (Math.random() - 0.5) * speed,
        speedY: (Math.random() - 0.5) * speed,
        opacity: Math.random(),
      }));
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [minSize, maxSize, particleDensity, speed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      particles.current.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += (Math.random() - 0.5) * 0.02;

        if (p.x < 0) p.x = dimensions.width;
        if (p.x > dimensions.width) p.x = 0;
        if (p.y < 0) p.y = dimensions.height;
        if (p.y > dimensions.height) p.y = 0;
        if (p.opacity < 0) p.opacity = 0;
        if (p.opacity > 1) p.opacity = 1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.globalAlpha = p.opacity * 0.6;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, [dimensions, background, particleColor]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ position: "absolute", top: 0, left: 0 }}
    />
  );
}
