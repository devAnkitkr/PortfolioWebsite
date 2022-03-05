import React from "react";
import { IconSvg } from "../IconSvg/iconsvg";

const HomeSection = () => {
  return (
    <section id="home" className="w-full">
      <div className="flex text-primary items-center justify-center min-h-screen max-w-screen-lg lg:pt-20 m-auto">
        <div className="grid gap-4 gap-y-10 grid-cols-3 px-6 lg:px-0 py-10 items-center">
          <div className="w-8 grid gap-4">
            <a href="/">
              <div className="">{IconSvg.LinkedinIcon}</div>
            </a>
            <a href="/">
              <div className="">{IconSvg.GithubIcon}</div>
            </a>
            <a href="/">
              <div className="">{IconSvg.WhatsappIcon}</div>
            </a>
          </div>
          <div className="col-span-2 self-center flex justify-center">
            <img
              src="/13.png"
              className="m-0 w-full max-w-[600px] border-none"
            />
          </div>
          <div className="col-span-3 self-start">
            <h1 className="text-2xl font-bold">Hello, I am Ankit Kumar</h1>
            <h3 className="text-lg font-medium text-secondary py-2">
              Web Developer
            </h3>
            <p className="text-secondary py-2">
              Welcome to my digital garden where I share what I'm learning about
              shipping great products, becoming a better developer and growing a
              career in tech.
            </p>
            <a
              href="#contact"
              className="bg-accent w-fit text-accent font-bold flex py-3 my-4 px-4 rounded ease-in duration-150 hover:bg-yellow-500 hover:scale-105"
            >
              Contact Me
              <span className="px-1">{IconSvg.ContactBtnIcon}</span>
            </a>
            <div className="">
              <a
                href="#about"
                className="font-medium flex text-secondary justify-start items-center mt-20 w-[200px] hover:translate-y-2 ease-in duration-150"
              >
                <span className="pr-2">{IconSvg.MouseIcon}</span>
                Scroll down
                <span className="pl-2"> {IconSvg.ScrollDownIcon}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
