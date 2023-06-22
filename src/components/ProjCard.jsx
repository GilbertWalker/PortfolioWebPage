import { useState, useEffect } from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import "../data.json"

export default function ProjCard({ data }) {
  const [showButton, setShowButton] = useState(false);

  function show() {
    setShowButton(true);
  }

  function hide() {
    setShowButton(false);
  }

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="flip-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="pb-10 sm:w-[300px]"
    >
      <div
        onMouseOver={show}
        onMouseLeave={hide}
        style={{ backgroundImage: `url(${data.image})` }}
        className="hover:bg-black hover:bg-opacity-70 w-full h-[230px] sm:h-[200px] rounded-xl shadow-lg cursor-pointer bg-blend-overlay bg-cover bg-no-repeat"
      >
        <div className="flex flex-col justify-center h-full items-center">
          {showButton && (
            <Button
              name="VIEW PROJECT"
              style="font-bold border-b-4 pb-1 border-b-primary-green hover:text-primary-green tracking-wider mb-10"
              onClick={() => {
                window.location.href = data.viewProj;
              }}
            />
          )}
          {showButton && (
            <Button
              name="VIEW CODE"
              style="font-bold border-b-4 pb-1 block border-b-primary-green hover:text-primary-green tracking-wider"
              onClick={() => {
                window.location.href = data.viewCode;
              }}
            />
          )}
        </div>
      </div>

      <h1 className="py-1 font-bold text-[24px]">{data.title}</h1>

      {data.stack.map((item, i) => {
        return <span key={i} className="mr-3">{item}</span>;
      })}
    </div>
  );
}

ProjCard.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    viewProj: PropTypes.string.isRequired,
    viewCode: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
