import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  MENU_ICON,
  SEARCH_ICON,
  USER_ICON,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_API,
} from "../constants/Constants";
import { CiSearch } from "react-icons/ci";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [query, setQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    const Timer = setTimeout(() => {
      if (searchCache[query]) {
        setSuggestion(searchCache[query]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(Timer);
    };
  }, [query]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + query);
    const json = await data.json();
    setSuggestion(json[1]);
    // console.log(json[1]);

    //update the cache
    dispatch(
      cacheResults({
        [query]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  window.onscroll = () => {
    setShowSuggestion(false);
  };

  return (
    <div className="grid grid-flow-col p-2 m-1 shadow-lg justify-between">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-10 cursor-pointer"
          src={MENU_ICON}
          alt="menu_icon"
        />
        <a href="/">
          <img className="h-12 mx-2" src={YOUTUBE_LOGO} alt="youtube_logo" />
        </a>
      </div>
      <div className="col-span-10 md:col-span-6 px-4 md:px-20">
        <div className="flex items-center">
          <input
            className="w-full md:w-3/4 border border-gray-400 p-2 rounded-l-full focus:outline-none"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
            onClick={() => setShowSuggestion(true)}
          />
          <button className="border border-gray-400 px-4 py-2 rounded-r-full  bg-gray-100 ">
            <img className="h-6" src={SEARCH_ICON} />
          </button>
        </div>
        {showSuggestion && (
          <div className="py-2 px-5 fixed bg-white w-full md:w-2/5 shadow-lg rounded-lg mt-2 md:mt-0">
            <ul>
              <div>
                {suggestion.map((s) => (
                  <li
                    key={s}
                    className="flex items-center py-1 hover:bg-gray-200 "
                  >
                    <div className="mr-2">
                      <CiSearch />
                    </div>
                    {s}
                  </li>
                ))}
              </div>
            </ul>
          </div>
        )}
      </div>
      <div className="hidden md:block col-span-1">
        <img className="h-10" src={USER_ICON} alt="user_icon" />
      </div>
    </div>
  );
};

export default Head;
