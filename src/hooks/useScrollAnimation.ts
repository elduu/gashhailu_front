import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => {
            if (prev) return prev; // prevent re-trigger
            return true;
          });

          observer.disconnect(); // IMPORTANT FIX
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -10% 0px",
        
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}