"use client";

import React from "react";

const SecondSection = () => {
  return (
    <div className="bg-vdark-blue">
      <div className="p-4">
        <h1 className="font-bold text-soft-orange text-4xl mt-2">New</h1>
      </div>
      <div className="divide-y-[.5px] p-5">
        <section>
          <h1 className="font-bold text-white text-xl mb-2">
            <a
              className="hover:text-soft-orange focus:text-soft-orange"
              href=""
            >
              Hydrogen VS Electric Cars
            </a>
          </h1>
          <p className="text-white font-thin mb-8 text-[15px]">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </section>
        <section>
          <h1 className="font-bold text-white text-xl mb-2 mt-8">
            <a
              className="hover:text-soft-orange focus:text-soft-orange"
              href=""
            >
              The Downsides of AI Artistry
            </a>
          </h1>
          <p className="text-white font-thin mb-8 text-[15px]">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </section>
        <section>
          <h1 className="font-bold text-white text-xl mb-2 mt-8">
            <a
              className="hover:text-soft-orange focus:text-soft-orange"
              href=""
            >
              Is VC Funding Drying Up?
            </a>
          </h1>
          <p className="text-white font-thin mb-4 text-[15px]">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </section>
      </div>
    </div>
  );
};

export default SecondSection;
