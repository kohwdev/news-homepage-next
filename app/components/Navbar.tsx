"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex items-center">
      {/* Desktop view */}
      <div className="hidden w-full flex-row justify-end sm:flex">
        <div className="flex gap-10">
          <a className="hover:text-soft-red focus:text-soft-red" href="">
            Home
          </a>
          <a className="hover:text-soft-red focus:text-soft-red" href="">
            New
          </a>
          <a className="hover:text-soft-red focus:text-soft-red" href="">
            Popular
          </a>
          <a className="hover:text-soft-red focus:text-soft-red" href="">
            Trending
          </a>
          <a className="hover:text-soft-red focus:text-soft-red" href="">
            Categories
          </a>
        </div>
      </div>
      {/*Display hamburger menu if screen size is small*/}
      <div onClick={handleNav} className="sm:hidden cursor-pointer">
        <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg">
          <g fill="#00001A" fill-rule="evenodd">
            <path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z" />
            <path d="M0 0h40v3H0z" />
          </g>
        </svg>
      </div>
      {/*Mobile menu */}
      <div
        className={
          menuOpen
            ? "fixed right-0 top-0 w-[60%] p-5 sm:hidden bg-off-white ease-in duration-500 z-50"
            : "fixed right-[-100%] top-0 p-5 ease-in duration-500 z-50"
        }
      >
        <div className="flex flex-col items-end h-screen">
          <div onClick={handleNav} className="cursor-pointer">
            <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg">
              <g fill="#00001A" fill-rule="evenodd">
                <path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" />
                <path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" />
              </g>
            </svg>
          </div>
          <div className="flex w-full flex-col gap-5 p-5 mt-12">
            <a className="hover:text-soft-red focus:text-soft-red" href="">
              Home
            </a>
            <a className="hover:text-soft-red focus:text-soft-red" href="">
              New
            </a>
            <a className="hover:text-soft-red focus:text-soft-red" href="">
              Popular
            </a>
            <a className="hover:text-soft-red focus:text-soft-red" href="">
              Trending
            </a>
            <a className="hover:text-soft-red focus:text-soft-red" href="">
              Categories
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
