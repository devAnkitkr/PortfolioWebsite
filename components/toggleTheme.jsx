import { useState, useEffect } from 'react';
import { IconSvg } from '../IconSvg/iconsvg';
import Cookie from 'js-cookie';

export default function ToggleTheme() {
  const [isDark, setIsDark] = useState(
    Cookie.get('toggleTheme') ? JSON.parse(Cookie.get('toggleTheme')) : false
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(isDark ? 'dark' : 'light');
  }, [isDark]);

  const handleToggleTheme = () => {
    if (isDark == true) {
      setIsDark(false);
      Cookie.set('toggleTheme', JSON.stringify(false));
      return;
    }
    setIsDark(true);
    Cookie.set('toggleTheme', JSON.stringify(true));
    return;
  };
  return (
    <label>
      <span className="cursor-pointer" onClick={handleToggleTheme}>
        {isDark ? IconSvg.DarkThemeIcon : IconSvg.LightThemeIcon}
      </span>
    </label>
  );
}
