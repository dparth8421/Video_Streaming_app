import React from "react";

const Buttons = ({ name, isFirstButton }) => {
  return (
    <div>
      <button
        className={`px-5 py-2 m-2 rounded-lg ${
          isFirstButton ? "bg-black text-white" : "bg-gray-200"
        }`}
      >
        {name}
      </button>
    </div>
  );
};

export default Buttons;
