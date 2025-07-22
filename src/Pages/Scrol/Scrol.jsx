// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top : 100 , behavior: "smooth" });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
