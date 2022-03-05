import React from "react";

const PortfolioCard = ({ title, link, image }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-2 mb-8 mx-10 m mx-auto lg:min-h-fit lg:m-0 lg:max-w-fit lg:m-20 border rounded">
      <div className="lg:w-6/12">
        <span>
          <img src={image} className="max-w-full h-auto mb-4 lg:mb-0" />
        </span>
      </div>
      <div className="flex flex-col items-start w-full lg:w-6/12 lg:pl-10">
        <h1 className="text-2xl font-bold my-2 text-primary">{title}</h1>
        <p className="text-secondary my-2">
          Website adaptable to all devices, with ui components and animated
          interactions.
        </p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="bg-accent text-accent font-bold flex py-3 my-4 px-4 rounded ease-in duration-150 hover:bg-yellow-500 hover:scale-105"
        >
          Demo
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
