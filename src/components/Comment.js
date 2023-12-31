import React from "react";
import { USER_IMG } from "../constants/Constants";

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex shadow-sm bg-white p-2 rounded-lg my-2 ">
      <img className="w-12 h-12" src={USER_IMG} alt="user" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
