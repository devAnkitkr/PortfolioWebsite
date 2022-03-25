import { IconSvg } from '../IconSvg/iconsvg';
const Footer = () => {
  return (
    <footer id="footer" className="bg-secondary text-secondary">
      <div className="flex flex-col items-start justify-start min-h-[100px] max-w-screen-lg mb-[60px] p-6 lg:mb-0 lg:px-0 mx-auto">
        <h1 className="text-lg font-semibold">Devankitkr</h1>
        <p>Web Developer</p>
        <div className="flex justify-between w-[100px] my-6">
          <a
            href="https://www.linkedin.com/in/ankkitkr/"
            target="_blank"
            rel="noreferrer"
          >
            <span>{IconSvg.LinkedinIcon}</span>
          </a>
          <a
            href="https://github.com/devAnkitkr"
            target="_blank"
            rel="noreferrer"
          >
            <span>{IconSvg.GithubIcon}</span>
          </a>
          <a
            href="https://wa.me/919958071589?text=Can+we+talk%3F"
            target="_blank"
            rel="noreferrer"
          >
            <span>{IconSvg.WhatsappIcon}</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
