import { useEffect, useState } from "react";

export function useLoadingAnimation(initialDuration: string, delay: number) {
  const [loading, setLoading] = useState(true);
  const [animationDuration, setAnimationDuration] = useState(initialDuration);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setAnimationDuration("0.5s"); // Shorter duration after loading completes
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return { loading, animationDuration };
}
