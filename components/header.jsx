import { useState } from 'react';
import Link from 'next/link';
import { IconSvg } from '../IconSvg/iconsvg';
import ToggleTheme from './toggleTheme';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNavMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <header
      id="header"
      className="w-full min-h-[60px] flex items-center fixed bottom-0 left-0 z-10 bg-secondary shadow-[0_1px_20px_1px_rgba(0,0,0,0.1)] lg:top-0 lg:h-20"
    >
      <nav className="w-full max-w-screen-lg text-primary mx-auto flex justify-between items-center px-6  py-1 lg:px-0 lg:py-0">
        <Link href="/">
          <h1 className="cursor-pointer text-2xl font-bold"> DevAnkitKr</h1>
        </Link>

        <div className="flex items-center text-primary">
          <ul
            className={`md:transition-[bottom] md:ease-in md:duration-300 shadow-[0_35px_60px_1px_rgba(0,0,0,0.5)] bg-secondary rounded-2xl p-2 pt-10 pb-14 rounded-b-none w-full fixed ${
              toggleMenu ? 'bottom-0 ' : 'bottom-[-100%]'
            } left-0 z-50 grid gap-4 grid-cols-3 grid-rows-2 col-end-3 lg:relative lg:grid-cols-6 lg:grid-rows-1 lg:gap-6 lg:shadow-none lg:p-4`}
          >
            <li className="">
              <a
                href="#home"
                className="flex flex-col items-center ease-in duration-150 hover:scale-110"
                onClick={() => setToggleMenu(false)}
              >
                <div className="w-5">{IconSvg.HomeIcon}</div>Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="flex flex-col items-center ease-in duration-150 hover:scale-110"
                onClick={() => setToggleMenu(false)}
              >
                <div className="w-5">{IconSvg.AboutIcon}</div>
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="flex flex-col items-center ease-in duration-150 hover:scale-110"
                onClick={() => setToggleMenu(false)}
              >
                <div className="w-5">{IconSvg.SkillIcon}</div>
                Skills
              </a>
            </li>
            <li>
              <a
                href="#service"
                className="flex flex-col items-center ease-in duration-150 hover:scale-110"
                onClick={() => setToggleMenu(false)}
              >
                <div className="w-5">{IconSvg.ServiceIcon}</div>
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="flex flex-col items-center ease-in duration-150 hover:scale-110"
                onClick={() => setToggleMenu(false)}
              >
                <div className="w-5">{IconSvg.PortfolioIcon}</div>
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="flex flex-col items-center ease-in duration-150 hover:scale-110"
                onClick={() => setToggleMenu(false)}
              >
                <div className="w-5">{IconSvg.ContactIcon}</div>
                Contact
              </a>
            </li>
            <li
              className="flex flex-col items-center absolute right-[1.2rem] bottom-[0.4rem] lg:hidden"
              onClick={toggleNavMenu}
            >
              <div className="w-6 hover:text-red-400 cursor-pointer">
                {IconSvg.MenuClose}
              </div>
            </li>
          </ul>
        </div>
        <div className="w-fit  flex flex-row ">
          <span className="pr-3 lg:pr-0">
            <ToggleTheme />
          </span>
          <span onClick={toggleNavMenu} className="cursor-pointer lg:hidden">
            {IconSvg.MenuIcon}
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
