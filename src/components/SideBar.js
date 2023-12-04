import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
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
      </ul>
    </div>
  );
};

export default SideBar;
