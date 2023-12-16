import React from "react";
import { PROFILE } from "../constants/Constants";

const ChannelDetails = () => {
  return (
    <div className=" w- flex p-4 mx-4 bg-gray-100 rounded-lg">
      <div className="flex items-center">
        <img className="h-10 w-10 rounded-full" src={PROFILE} alt="Profile" />
        <div className="flex ml-6 items-center">
          <div>
            <h2 className="text-xl font-semibold">Valorant</h2>
            <p className="text-sm text-gray-500">2M Subscribers</p>
          </div>
          <div>
            <button className="bg-black text-white px-4 py-2 rounded-2xl ml-5">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center ml-52">
        <img
          className="h-6 ml-5"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFzCJkrzwDsDHawvi28ueraUxJ3RZMGU4-A&usqp=CAU"
          alt="Like Icon"
        />
        <span className="ml-2">Like</span>
        <img
          className="h-6 ml-5"
          src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3253277/dislike-icon-md.png"
          alt="Dislike Icon"
        />
        <span className="ml-2">Dislike</span>
        <img
          className="h-8 ml-20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbyuEeASxLr_fJY1NdBdUwyXUKsjxKFzlNhLvM2ZQ_oKVvw2SBHjgbs62jGBWIx7OhtsA&usqp=CAU"
          alt="Dislike Icon"
        />
        <span className="ml-2">Share</span>
      </div>
    </div>
  );
};

export default ChannelDetails;
