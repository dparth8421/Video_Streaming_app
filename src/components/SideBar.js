import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className=" p-5 shadow-lg w-48 h-screen overflow-y-scroll no-scrollbar">
      <ul className="">
        <div className="flex pb-5">
          <img
            className="w-5 h-5"
            src="https://img.icons8.com/?size=50&id=73&format=png"
          />
          <Link to="/">
            <li className="px-6">Home</li>
          </Link>
        </div>

        <div className="flex pb-5">
          <img
            className="w-5 h-5"
            src="https://img.icons8.com/?size=50&id=6904&format=png"
          />
          <Link to="/">
            <li className="px-6">History</li>
          </Link>
        </div>

        <div className="flex pb-5">
          <img
            className="w-5 h-5"
            src="https://img.icons8.com/?size=50&id=37325&format=png"
          />
          <Link to="/">
            <li className="px-6">Subscription</li>
          </Link>
        </div>
      </ul>

      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <div className="flex pb-5 pt-5">
          <img
            className="w-5 h-5"
            src="https://img.icons8.com/?size=80&id=f1tO77j0IUYs&format=png"
          />
          <Link to="/">
            <li className="px-5">Zee News</li>
          </Link>
        </div>
        <div className="flex pb-5">
          <img
            className="w-5 h-5"
            src="https://img.icons8.com/?size=50&id=2772&format=png"
          />
          <Link to="/">
            <li className="px-5">NDA TV</li>
          </Link>
        </div>
        <div className="flex pb-5">
          <img
            className="w-5 h-5"
            src="https://img.icons8.com/?size=48&id=b11RoTVWkAAh&format=png"
          />
          <Link to="/">
            <li className="px-5">ABP Maza</li>
          </Link>
        </div>
        <div className="flex pb-5">
          <img
            className="w-5 h-5"
            src="https://img.icons8.com/?size=50&id=1766&format=png"
          />
          <Link to="/">
            <li className="px-5">International News</li>
          </Link>
        </div>
      </ul>
      <h1 className="font-bold pt-5 ">Explore</h1>
      <ul>
        <div className="flex pb-5 pt-5">
          <img
            className="w-5 h-5"
            src="https://img.icons8.com/?size=80&id=HZ2ukyyEDgOj&format=png"
          />
          <Link to="/">
            <li className="px-5">Trending</li>
          </Link>
        </div>
        <div className="flex pb-5">
          <img
            className="w-5 h-5"
            src="https://img.icons8.com/?size=50&id=21823&format=png"
          />
          <Link to="/">
            <li className="px-5">Shopping</li>
          </Link>
        </div>
        <div className="flex pb-5">
          <img
            className="w-5 h-5"
            src="https://img.icons8.com/?size=50&id=71197&format=png"
          />
          <Link to="/">
            <li className="px-5">Music</li>
          </Link>
        </div>
        <div className="flex pb-5">
          <img
            className="w-5 h-5"
            src="https://img.icons8.com/?size=50&id=PhhliN0ImMD2&format=png"
          />
          <Link to="/">
            <li className="px-5">Movies</li>
          </Link>
        </div>
        <div className="flex pb-5">
          <img
            className="w-5 h-5"
            src="https://img.icons8.com/?size=50&id=tjuIMOXXe1mT&format=png"
          />
          <Link to="/">
            <li className="px-5">Live</li>
          </Link>
        </div>
        <div className="flex pb-5">
          <img
            className="w-5 h-5"
            src="https://img.icons8.com/?size=50&id=7317&format=png"
          />
          <Link to="/">
            <li className="px-5">Gaming</li>
          </Link>
        </div>

        <div className="flex pb-5">
          <img
            className="w-5 h-5"
            src="data:image/png;base64,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"
          />
          <Link to="/">
            <li className="px-5">Sport</li>
          </Link>
        </div>
        <div className="flex pb-5">
          <img
            className="w-5 h-5"
            src="data:image/png;base64,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"
          />
          <Link to="/">
            <li className="px-5">Travel</li>
          </Link>
        </div>
        <div className="flex pb-5">
          <img
            className="w-5 h-5"
            src="data:image/png;base64,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"
          />
          <Link to="/">
            <li className="px-5">Cooking</li>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
