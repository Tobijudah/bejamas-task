import { useEffect, useState } from "react";

const useMobileOnly = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const updateState = () => {
      if (window.innerWidth < 1024) setIsMobile(true);
      else setIsMobile(false);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateState);
      updateState();
      return () => window.removeEventListener("resize", updateState);
    }
  }, []);
  return isMobile;
};

export default useMobileOnly;
