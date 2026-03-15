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
    angle: number;
    distance: number;
    maxDistance: number;
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
      const centerX = width / 2;
      const centerY = height / 2;
      
      particles.current = Array.from({ length: count }, () => {
        const angle = Math.random() * Math.PI * 2;
        const maxDistance = Math.random() * Math.max(width, height) * 0.8;
        const distance = Math.random() * maxDistance;
        
        return {
          x: centerX + Math.cos(angle) * distance,
          y: centerY + Math.sin(angle) * distance,
          size: minSize + Math.random() * (maxSize - minSize),
          speedX: Math.cos(angle) * speed * (0.5 + Math.random() * 0.5),
          speedY: Math.sin(angle) * speed * (0.5 + Math.random() * 0.5),
          opacity: Math.random() * 0.5 + 0.3,
          angle,
          distance,
          maxDistance,
        };
      });
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
    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      particles.current.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += (Math.random() - 0.5) * 0.01;
        
        const dx = p.x - centerX;
        const dy = p.y - centerY;
        const currentDistance = Math.sqrt(dx * dx + dy * dy);
        
        if (currentDistance > p.maxDistance || p.x < 0 || p.x > dimensions.width || p.y < 0 || p.y > dimensions.height) {
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.random() * 50;
          p.x = centerX + Math.cos(angle) * distance;
          p.y = centerY + Math.sin(angle) * distance;
          p.speedX = Math.cos(angle) * speed * (0.5 + Math.random() * 0.5);
          p.speedY = Math.sin(angle) * speed * (0.5 + Math.random() * 0.5);
          p.opacity = Math.random() * 0.5 + 0.3;
        }
        
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
  }, [dimensions, background, particleColor, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ position: "absolute", top: 0, left: 0 }}
    />
  );
}
