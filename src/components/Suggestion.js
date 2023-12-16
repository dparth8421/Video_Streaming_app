import React, { useEffect, useState } from "react";
import SuggestionCard from "./SuggestionCard";
import { YOUTUBE_VIDEOS_API } from "../constants/Constants";
import { Link } from "react-router-dom";

const Suggestion = () => {
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json);
    setSuggestedVideos(json.items);
  };

  return (
    <div className="absolute">
      <div className="flex flex-col my-4 pl-3 ">
        {suggestedVideos.map((video, index) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <SuggestionCard data={video} index={index} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Suggestion;
