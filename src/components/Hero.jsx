import { useEffect } from "react";
import Button from "./Button";
import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-scroll";

export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" grid place-items-center sm:place-items-start  sm:grid-cols-3 h-[630px]    border-b ">
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        className=" col-span-2 relative  pt-6  z-10"
      >
        <img
          className="absolute z-0 -left-[200px]  sm:-left-48 lg:-left-48 sm:top-20 -top-20"
          src="/images/Group.png"
          alt=""
        />
        <p className=" relative font-bold pt-48 sm:pt-20 sm:w-[500px]  text-center sm:text-left text-[30px] leading-10 sm:leading-[85px] sm:text-[68px] lg:text-[55px] ">
          Nice to meet you! <br />
          I'm{" "}
          <span className="border-b-4 inline border-b-primary-green mb-0">
            Ofori-Boye.
          </span>
        </p>
        <p className="py-5 sm:py-10 lg:py-14 sm:text-left text-center text-[16px] sm:text-[18px] text-gray-400">
          Based in Kumasi, Ghana, and a front-end developer <br />
          passionate about building accessible web apps <br />
          that users love.
        </p>

        {<div className="w-full flex justify-center sm:block">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <Button
              name="CONTACT ME"
              style="font-bold border-b-4 pb-2 border-b-primary-green hover:text-primary-green tracking-wider"
            />
          </Link>{" "}
        </div>}
      </div>

      <div className=" bg-secondary-dark absolute  sm:right-0  lg:right-40 top-0  pt-32 ">
        <img
          className=" absolute z-30 -right-24 bottom-0 sm:bottom-0 sm:-right-20 lg:bottom-20 lg:-left-16"
          src="/images/Oval.png"
          alt=""
        />
        <img
          className="w-[174px] h-[174px]  sm:h-[500px] sm:w-full"
          src="/images/Untitled design.png"
          alt=""
        />
      </div>
    </div>
  );
}
