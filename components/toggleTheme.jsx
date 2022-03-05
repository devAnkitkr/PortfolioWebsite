import { useState, useEffect } from "react";
import { IconSvg } from "../IconSvg/iconsvg";

export default function ToggleTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(isDark ? "dark" : "light");
  }, [isDark, setIsDark]);

  return (
    <label>
      <span className="cursor-pointer" onClick={() => setIsDark(!isDark)}>
        {isDark ? IconSvg.DarkThemeIcon : IconSvg.LightThemeIcon}
      </span>
    </label>
  );
}
