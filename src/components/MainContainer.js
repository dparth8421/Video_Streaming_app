import React from "react";
import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="w-screen overflow-hidden">
      <ButtonsList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
