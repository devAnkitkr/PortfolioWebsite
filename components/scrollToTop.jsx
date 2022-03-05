import { useEffect, useState } from "react";
import { IconSvg } from "../IconSvg/iconsvg";

const ScrollToTop = () => {
  const [state, setState] = useState("hidden");
  useEffect(() => {
    const scrollFunc = () => {
      let y = window.scrollY;

      if (y > 1050) {
        // scrollToTopButton.className = "top-link show";
        setState("fixed");
      } else {
        // scrollToTopButton.className = "top-link hide";
        setState("hidden");
      }
    };
    window.addEventListener("scroll", scrollFunc);
    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);

  return (
    <a
      href="#home"
      className={`${state} w-8 text-center bottom-20 right-6 bg-accent rounded cursor-pointer hover:scale-125 lg:bottom-10 lg:right-10 ease-in duration-150`}
    >
      {IconSvg.ScrollUpIcon}
    </a>
  );
};

export default ScrollToTop;
