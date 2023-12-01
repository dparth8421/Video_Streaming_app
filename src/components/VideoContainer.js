import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../constants/Constants";
import VideoCards from "./VideoCards";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap w-screen">
      {videos.map((video) => (
        <VideoCards key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
