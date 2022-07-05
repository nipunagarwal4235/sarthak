import React from "react";

import FeatureTwo from "./assets/Feature2.svg";

const SectionTwo = () => {
  return (
    <>
      <section>
        <div className="max-w-[1152px] flex flex-col-reverse justify-center p-3 xs:p-6 mx-auto sm:py-9 lg:py-16 lg:flex-row lg:justify-between">
          <div className="flex flex-col w-auto lg:w-9/12 justify-center p-0 xs:p-6 text-center rounded-sm lg:text-left">
            <h1 className="text-4xl font-bold leading-none sm:text-5xl text-[#01579B]">
              Smart Deployment
            </h1>
            <p className="mt-6 mb-8 text-gray-500 sm:mb-12">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur deleniti quasi voluptatum, accusantium harum dolore
              accusamus libero eaque officia voluptatem expedita fugit dolor
              laborum ad temporibus consequuntur iure veniam laboriosam.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-6 py-3 font-medium rounded bg-[#03A9F4] text-gray-100"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-3 xs:p-6 mt-8 mr-0 lg:mr-12 xl:mr-40 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={FeatureTwo}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
