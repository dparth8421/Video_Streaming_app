import React from "react";

const VideoCards = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  const formatCount = (viewCount) => {
    const million = 1000000;
    const thousand = 100000;

    if (viewCount > million) {
      return (viewCount / million).toFixed() + "M Views";
    } else if (viewCount < million) {
      return (viewCount / thousand).toFixed() + "K Views";
    } else {
      return viewCount + "Views";
    }
  };

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="Thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{formatCount(statistics.viewCount)} </li>
      </ul>
    </div>
  );
};

export default VideoCards;
