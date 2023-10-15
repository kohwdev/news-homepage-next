"use client";
import React from "react";
import Image from "next/image";
import retroPc from "../../public/image-retro-pcs.jpg";
import topLaptop from "../../public/image-top-laptops.jpg";
import gameGrowth from "../../public/image-gaming-growth.jpg";

const ThirdSection = () => {
  return (
    <div className="container pt-16 flex flex-col sm:grid space-y-8 sm:space-y-0 pb-10 sm:w-screen sm:grid-cols-3">
      <div className="flex space-x-4">
        <div className="w-[30%]">
          <Image src={retroPc} alt="retro pc" />
        </div>
        <div className="space-y-2 w-[70%]">
          <h1 className="text-[#c6c6ce] text-4xl font-bold">01</h1>
          <h1 className="text-vdarkblue font-bold text-lg">
            <a className="hover:text-soft-red focus:text-soft-red" href="">
              Reviving Retro PCs
            </a>
          </h1>
          <p className="font-thin text-[15px]">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="w-[30%]">
          <Image src={topLaptop} alt="retro pc" />
        </div>
        <div className="space-y-2 w-[70%]">
          <h1 className="text-[#c6c6ce] text-4xl font-bold">02</h1>
          <h1 className="text-vdarkblue font-bold text-lg">
            <a className="hover:text-soft-red focus:text-soft-red" href="">
              Top 10 Laptops of 2022
            </a>
          </h1>
          <p className="font-thin text-[15px]">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="w-[30%]">
          <Image src={gameGrowth} alt="retro pc" />
        </div>
        <div className="space-y-2 w-[70%]">
          <h1 className="text-[#c6c6ce] text-4xl font-bold">03</h1>
          <h1 className="text-vdarkblue font-bold text-lg">
            <a className="hover:text-soft-red focus:text-soft-red" href="">
              The Growth of Gaming
            </a>
          </h1>
          <p className="font-thin text-[15px]">
            The Growth of Gaming How the pandemic has sparked fresh
            opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
