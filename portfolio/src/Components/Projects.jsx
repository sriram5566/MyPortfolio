import React from "react";
import portfolio from "../assets/protfolio.png";
import industry from "../assets/Pet Adoption.jpg";
import AccidentPrevention from "../assets/Accident Prevention.png";
import Snakegame from "../assets/Snakegame.png";
import  RentalCar from "../assets/RentalCar.jpg";

const project = () => {
  const portfolios = [
    {
      id: 1,
      title: "PORTFOLIO",
      src: portfolio,
      style: "shadow-blue-500",
    },
    {
      id: 2,
      title: "PET ADOPTION",
      src: industry,
      style: "shadow-blue-500",
    },
    {
      id: 3,
      title: "SENSOR MECHANISM FOR ACCIDENT PREVENTION",
      src: AccidentPrevention,
      style: "shadow-blue-500",
    },
    {
      id: 4,
      title: "SNAKE GAME",
      src: Snakegame,
      style: "shadow-blue-500",
    },
    {
      id: 5,
      title: "RENTAL CAR",
      src: RentalCar,
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default project;

