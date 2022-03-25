import React from 'react';
import { IconSvg } from '../IconSvg/iconsvg';

const AboutSection = () => {
  return (
    <section className="w-full" id="about">
      <div className="flex items-center py-20 justify-center min-h-screen  max-w-screen-lg mt-0 m-auto">
        <div className="w-full flex flex-col items-center text-center px-6 lg:px-0 lg:text-left">
          <h1 className="mb-1 font-bold text-2xl text-primary">About Me</h1>
          <span className="text-gray-500 pb-20 text-secondary">
            Introduction
          </span>
          <div className="flex flex-col justify-center items-center lg:flex-row">
            <img src="/webdev.jpg" className="w-[350px] lg:w-2/4 p-0 rounded" />

            <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start lg:pl-10">
              <p className="mb-10 pt-10 lg:pt-0 lg:mb-0 text-secondary">
                Web developer ,with extensive knowledge and years of experience,
                working in web technologies and UI/UX design, delivering quality
                work.
              </p>
              <div className="grid grid-cols-3 gap-10 mb-10 lg:my-10 text-primary">
                <div className="flex flex-col justify-center items-center">
                  <span className="text-2xl font-bold">01+</span>
                  <span>Years </span>
                  <span>Experience</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span className="text-2xl font-bold">15+</span>
                  <span>Completed </span>
                  <span>project</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span className="text-2xl font-bold">03+</span>
                  <span>Companies </span>
                  <span>worked</span>
                </div>
              </div>
              <a
                className="bg-accent text-accent font-bold flex py-3 my-4 px-4 rounded ease-in duration-150 hover:bg-yellow-500 hover:scale-105"
                href="/ankitresume.pdf"
                download
              >
                DOWNLOAD CV <span className="pl-1">{IconSvg.DownloadIcon}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
