import {
  TiSocialLinkedinCircular,
  TiSocialInstagramCircular,
  TiSocialFacebookCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";

import BackgroundImage from "./assets/Building.svg";

export const Footer = () => {
  return (
    <div className="relative mt-16 bg-[#B3E5FC] ">
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <span className="ml-2 text-xl font-bold tracking-wide">
                Online Examination Portal
              </span>
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm ">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <p className="mt-4 text-sm ">© Skyrev Theme 2021</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-semibold tracking-wide text-[#03A9F4] uppercase">
                Company
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/">News</a>
                </li>
                <li>
                  <a href="/">World</a>
                </li>
                <li>
                  <a href="/">Games</a>
                </li>
                <li>
                  <a href="/">References</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-[#03A9F4] uppercase">
                Services
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/">Web</a>
                </li>
                <li>
                  <a href="/">eCommerce</a>
                </li>
                <li>
                  <a href="/">Business</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-[#03A9F4] uppercase">
                Resources
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/">Media</a>
                </li>
                <li>
                  <a href="/">Brochure</a>
                </li>
                <li>
                  <a href="/">Nonprofit</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex flex-col justify-between pt-5 pb-10 sm:flex-row">
                <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                  <a href="/" className=" text-[#03A9F4]">
                    <TiSocialFacebookCircular
                      size={30}
                    ></TiSocialFacebookCircular>
                  </a>
                  <a href="/" className=" text-[#03A9F4]">
                    <TiSocialLinkedinCircular
                      size={30}
                    ></TiSocialLinkedinCircular>
                  </a>
                  <a href="/" className=" text-[#03A9F4]">
                    <TiSocialTwitterCircular
                      size={30}
                    ></TiSocialTwitterCircular>
                  </a>{" "}
                  <a href="/" className=" text-[#03A9F4]">
                    <TiSocialInstagramCircular
                      size={30}
                    ></TiSocialInstagramCircular>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={BackgroundImage} className="w-full" alt="" />
    </div>
  );
};
