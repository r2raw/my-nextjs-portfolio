import { useEffect, useState } from "react";

export default function useCurrentWidth() {
  const [width, setWidth] = useState(null); 
  const [currentWidth, setCurrentWidth] = useState("sm");

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setWidth(w);
      if (w >= 1280) {
        setCurrentWidth("xl");
      } else if (w >= 1024) {
        setCurrentWidth("lg");
      } else if (w >= 768) {
        setCurrentWidth("md");
      } else {
        setCurrentWidth("sm");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return currentWidth;
}
