import { useState } from "react";
import { IconSvg } from "../IconSvg/iconsvg";

const Accordian = ({ title, caption, data, icon }) => {
  const [toggleMenu, settoggleMenu] = useState(true);
  const handleDownMenu = () => {
    settoggleMenu(!toggleMenu);
  };
  return (
    <div className="flex flex-col py-5 p-2 min-w-[300px] text-primary">
      <div>
        <div className="flex justify-between items-center w-full">
          <div className="flex">
            <span className="pr-2 pt-1">{icon}</span>
            <h1 className="font-bold text-lg">{title}</h1>
          </div>
          <span
            className={`cursor-pointer ml-4 mt-1 text-accent ${
              toggleMenu && "origin-center rotate-180"
            }`}
            onClick={handleDownMenu}
          >
            {IconSvg.DownArrowIcon}
          </span>
        </div>
        <p className="text-sm text-secondary pl-8">{caption}</p>
      </div>
      <div className={`pt-5 pb-5 pl-8 ${toggleMenu ? "block" : "hidden"}`}>
        {data.map((item,index) => (
          <div key={index}>
            <div className="flex justify-between">
              <span>{item.name}</span>
              <span>{item.percent + "%"}</span>
            </div>
            <span className="block w-full h-2 bg-secondary mb-2 rounded">
              <span
                className="block float-left bg-accent h-2 rounded"
                style={{ width: item.percent + "%" }}
              ></span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
