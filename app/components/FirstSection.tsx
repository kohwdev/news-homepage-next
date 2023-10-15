"use client";

import React from "react";
import Image from "next/image";

const FirstSection = () => {
  return (
    <div>
      {/*display mobile image on smaller screen*/}
      <div className="relative aspect-square w-full h-auto sm:hidden">
        <Image
          src="/image-web-3-mobile.jpg"
          layout="fill"
          objectFit="contain"
          alt="mobile"
        />
      </div>
      {/*display desktop image on bigger screen*/}
      <div className="hidden relative aspect-video w-full h-auto sm:flex">
        <Image
          src="/image-web-3-desktop.jpg"
          layout="fill"
          objectFit="cover"
          alt="mobile"
        />
      </div>
      <div className="sm:flex sm:mt-5">
        <h1 className="font-bold text-5xl/[50px] mb-4 text-vdark-blue">
          The Bright Future of Web 3.0?
        </h1>
        <div className="sm:pl-8">
          <p className="mb-4 font-thin text-[15px]">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className=" text-white bg-soft-red hover:bg-vdark-blue focus:bg-vdark-blue text-sm px-10 py-2.5 mr-2 mb-8 uppercase tracking-widest">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
