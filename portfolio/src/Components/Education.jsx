import React from "react";

import Skcet from "../assets/Skcet.png";
import Carmel from "../assets/Carmel.png";

const Education = () => {
  const techs = [
    {
      id: 1,
      src: Carmel,
      title: "CARMEL GARDEN",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: Skcet,
      title: "SKCET",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="education"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Education
          </p>
          <p className="py-6">The Educational Institutions that I have Studied and Pursuing</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
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

export default Education;
