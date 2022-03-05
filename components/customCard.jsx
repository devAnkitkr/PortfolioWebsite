import { useState } from "react";
import { IconSvg } from "../IconSvg/iconsvg";

const CustomCard = ({ icon, title, features }) => {
  const [togglePopUp, setTogglePopUp] = useState(false);
  const closePopUp = () => {
    setTogglePopUp(!togglePopUp);
  };
  return (
    <div
      className="flex-col bg-secondary text-secondary justify-around items-start min-h-[250px] w-[250px] p-10 m-4 border rounded relative"
      style={{ boxShadow: "0 10px 8px rgb(0 0 0 / 0.04)" }}
    >
      <span className="pt-10">{icon}</span>
      <h1 className="text-2xl font-bold py-10 w-20 text-primary">{title}</h1>
      <span
        className="cursor-pointer flex group ease-in duration-300"
        onClick={() => setTogglePopUp(true)}
      >
        View More{" "}
        <span className="group-hover:pl-4 duration-300 pl-2">
          {IconSvg.ViewMoreIcon}
        </span>
      </span>
      <div
        className={`fixed z-30 p-4 w-full h-full bg-zinc-900/[.6] top-0 left-0 flex justify-center items-center  ${
          !togglePopUp && "hidden"
        }`}
      >
        <div className="min-w-[350px] bg-secondary border rounded p-8 pt-10 relative">
          <span
            className="absolute top-2 right-2 cursor-pointer hover:scale-125"
            onClick={closePopUp}
          >
            {IconSvg.MenuClose}
          </span>
          <h1 className="text-2xl font-bold mb-4">{title}</h1>
          <ul>
            {features.map((value, index) => (
              <li className="flex py-1" key={index}>
                <span className="pr-2 text-sm text-gray-500">
                  {IconSvg.ListStyleIcon}
                </span>
                <span className="text-secondary">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
