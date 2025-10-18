"use client";

import type { FC, ReactNode } from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { adaptiveUxAnimation, type AdaptiveUxAnimationInput, type AdaptiveUxAnimationOutput } from "@/ai/flows/adaptive-ux-animation";

type AdaptiveUxContextType = {
  adjustments: Partial<AdaptiveUxAnimationOutput>;
  isLoading: boolean;
};

const AdaptiveUxContext = createContext<AdaptiveUxContextType>({
  adjustments: {},
  isLoading: true,
});

export const useAdaptiveUx = () => useContext(AdaptiveUxContext);

export const AdaptiveUxProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [adjustments, setAdjustments] = useState<Partial<AdaptiveUxAnimationOutput>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const runOrchestration = async () => {
      setIsLoading(true);
      // Simulate collecting performance metrics
      const metrics: AdaptiveUxAnimationInput = {
        heroSectionMetrics: { loadingTime: 500 + Math.random() * 1500, responsiveness: 70 + Math.random() * 30, userEngagement: 60 + Math.random() * 40 },
        menuSectionMetrics: { loadingTime: 300 + Math.random() * 1000, responsiveness: 80 + Math.random() * 20, userEngagement: 70 + Math.random() * 30 },
        gallerySectionMetrics: { loadingTime: 800 + Math.random() * 2000, responsiveness: 60 + Math.random() * 40, userEngagement: 50 + Math.random() * 50 },
        aboutUsSectionMetrics: { loadingTime: 200 + Math.random() * 500, responsiveness: 90 + Math.random() * 10, userEngagement: 80 + Math.random() * 20 },
        contactUsSectionMetrics: { loadingTime: 400 + Math.random() * 800, responsiveness: 85 + Math.random() * 15, userEngagement: 75 + Math.random() * 25 },
      };

      try {
        const result = await adaptiveUxAnimation(metrics);
        setAdjustments(result);
      } catch (error) {
        console.error("Error with Adaptive UX Orchestration:", error);
        // In case of an error, we can set some default message or leave it empty
        setAdjustments({
            heroSectionAdjustments: "Could not retrieve AI suggestions.",
        });
      } finally {
        setIsLoading(false);
      }
    };

    // Run after a short delay to simulate a real-world scenario
    const timer = setTimeout(runOrchestration, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AdaptiveUxContext.Provider value={{ adjustments, isLoading }}>
      {children}
    </AdaptiveUxContext.Provider>
  );
};
