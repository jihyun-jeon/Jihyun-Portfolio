import { useEffect, useRef } from "react";

export const useThemeObserver = (
  setState: React.Dispatch<React.SetStateAction<number>>,
  stateNumber: number
): React.MutableRefObject<HTMLDivElement | null>[] => {
  const isRef = useRef<HTMLDivElement | null>(null);
  const option = {};

  useEffect(() => {
    const observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
        setState(stateNumber);
      }
    }, option);

    if (isRef.current) {
      observer.observe(isRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return [isRef];
};
