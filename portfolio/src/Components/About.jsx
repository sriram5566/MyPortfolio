import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a Carmelite having done my Schooling in Carmel Garden MHSS, Coimbatore.
          My passion in electronics and automobile industry has taken me to the path of Engineering.      

        </p>

        <br />

        <p className="text-xl">
        My interest lies in watching videos and posts related to machineries and automobiles.
        Hobbies include Sports, Music & Travel.
        Initially to get placed in a company and aim to become a businessman in future.            
        </p>
      </div>
    </div>
  );
};

export default About;
