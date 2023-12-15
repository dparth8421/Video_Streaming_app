import React from "react";
import Buttons from "./Buttons";

const ButtonsList = () => {
  const list = [
    "All",
    "Game",
    "Live",
    "Cricket",
    "News",
    "Cooking",
    "Surfing",
    "Songs",
    "Javascript",
    "React",
    "Mixex",
    "Pop",
    "Comedy",
    "Rock",
    "Jazz",
    "Badminton",
    "Tennis",
    "Swimming",
    "Birds",
  ];

  return (
    <div className="flex overflow-x-auto no-scrollbar">
      {list.map((name, index) => (
        <Buttons key={index} name={name} isFirstButton={index === 0} />
      ))}
    </div>
  );
};

export default ButtonsList;
