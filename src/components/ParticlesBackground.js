"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [isReady, setIsReady] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setIsReady(true);
    });
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const syncColorScheme = (event) => {
      setIsDarkMode(event.matches);
    };

    mediaQuery.addEventListener("change", syncColorScheme);

    return () => {
      mediaQuery.removeEventListener("change", syncColorScheme);
    };
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: "transparent",
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: 120,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: isDarkMode ? "#f8fafc" : ["#3b82f6", "#22d3ee", "#60a5fa"],
        },
        links: {
          enable: false,
        },
        move: {
          enable: true,
          speed: isDarkMode ? 0.8 : 0.55,
        },
        number: {
          value: 45,
        },
        opacity: {
          value: isDarkMode ? 0.7 : 0.34,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: isDarkMode ? { min: 1, max: 3 } : { min: 1, max: 2.8 },
        },
      },
      detectRetina: true,
    }),
    [isDarkMode]
  );

  if (!isReady) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0 pointer-events-none"
    />
  );
}