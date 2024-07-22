import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({ showSideBar }) {
  return (
    <nav className="absolute top-0 left-0 w-full pt-10 text-white z-20 p-5">
      <div className="contanier">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold uppercase">
            <span className="text-primary">Coders </span>
            coffee
          </p>

          <div>
            <GiHamburgerMenu
              onClick={showSideBar}
              className="text-3xl cursor-pointer z-50"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
