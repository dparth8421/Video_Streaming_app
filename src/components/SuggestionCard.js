import React from "react";

const SuggestionCard = ({ data, index }) => {
  const { snippet, statistics } = data;
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

  if (index >= 15) {
    return null;
  }
  return (
    <div className="flex my-2 bg-white rounded-lg overflow-hidden ">
      <img
        className="w-56 h-28 object-containr rounded-l-lg"
        src={thumbnails.medium.url}
        alt="Thumbnail"
      />
      <div className="flex flex-col px-3">
        <h2 className="font-semibold font-sans text-sm ">{title}</h2>
        <div className="flex text-xs flex-col">
          <p className="text-gray-600">{channelTitle}</p>
          <p className="text-gray-600">{formatCount(statistics.viewCount)}</p>
        </div>
      </div>
    </div>
  );
};

export default SuggestionCard;
