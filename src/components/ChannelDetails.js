import React from "react";

const ChannelDetails = () => {
  return (
    <div className=" w- flex p-4 m-2 bg-gray-100 rounded-lg">
      <div className="flex items-center">
        <img
          className="h-10 w-10 rounded-full"
          src="data:image/png;base64,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"
          alt="Profile"
        />
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
