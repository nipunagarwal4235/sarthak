import React from "react";

import Avatar from './assets/avatara 1.svg'
import TestOne from './assets/test 1.svg'

const GiveTest = () => {
  return (
    <>
    <h1 className="text-center font-bold py-6 text-4xl">What are you loooking for?</h1>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid max-w-screen-lg gap-12 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
          <div className="md:text-center">
          <h5 className="font-bold text-3xl text-[#2196F3]">Which Exam do you want to give today?</h5>
            <div className="relative">
              <img
                className="object-cover w-full h-64 lg:h-80 xl:h-96"
                src={Avatar}
                alt=""
              />
              <div className="absolute inset-0" />
            </div>
            <div className="px-6 py-8 sm:px-8">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-[#EC7D7D] focus:shadow-outline focus:outline-none"
              >
                Take Test
              </button>
              <p className="mt-5 text-2xl text-[#0BABF4]">
                Take your test and get instant results
              </p>
            </div>
          </div>
          <div className="md:text-center">
            <div className="relative">
              <img
                className="object-cover w-full h-64 lg:h-80 xl:h-96"
                src={TestOne}
                alt=""
              />
              <div className="absolute inset-0" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiveTest;
