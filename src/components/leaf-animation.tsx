"use client";
import { useState, useEffect } from "react";
import { CupIcon, LeafIcon, SplashIcon } from "./icons";

export function LeafAnimation() {
  const [scrollFraction, setScrollFraction] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const fraction = scrollHeight > 0 ? currentScroll / scrollHeight : 0;
      setScrollFraction(fraction);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isClient) {
    return null;
  }

  const pageHeight = window.innerHeight;
  const pageWidth = window.innerWidth;

  const y = scrollFraction * (pageHeight + 200) - 100;
  const x = pageWidth * 0.5 + Math.sin(scrollFraction * Math.PI * 3) * (pageWidth * 0.15) * Math.cos(scrollFraction * Math.PI * 0.5);
  const rotate = scrollFraction * 1080;
  const scale = scrollFraction > 0.96 ? 0 : 1;
  const opacity = scrollFraction > 0.96 ? 0 : 1;

  const cupOpacity = scrollFraction > 0.88 ? 1 : 0;
  const cupScale = scrollFraction > 0.88 ? 1 : 0.8;
  const splashScale = scrollFraction > 0.98 ? 1 : 0;
  const splashOpacity = scrollFraction > 0.98 && scrollFraction < 0.995 ? 1 : 0;


  return (
    <div className="fixed inset-0 z-50 pointer-events-none" aria-hidden="true">
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform: `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${scale})`,
          opacity: opacity,
          transition: "transform 100ms linear, opacity 200ms ease-out",
          willChange: "transform, opacity",
        }}
      >
        <LeafIcon className="w-10 h-10 text-primary drop-shadow-lg" />
      </div>

      <div
        className="fixed bottom-10 left-1/2 -translate-x-1/2"
        style={{
          opacity: cupOpacity,
          transform: `scale(${cupScale})`,
          transition: "opacity 0.5s ease-in, transform 0.5s ease-in",
          transformOrigin: 'bottom center'
        }}
      >
        <CupIcon className="w-24 h-24 text-primary" style={{filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'}}/>
      </div>

      <div
        className="fixed bottom-16 left-1/2 -translate-x-1/2"
        style={{
          transform: `scale(${splashScale})`,
          opacity: splashOpacity,
          transition: "transform 0.3s cubic-bezier(.17,.67,.4,1.55), opacity 0.3s ease-out",
        }}
      >
        <SplashIcon className="w-32 h-32 text-primary" />
      </div>
    </div>
  );
}
