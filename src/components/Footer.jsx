import { SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="border-t px-6 sm:px-10 lg:px-[165px] bg-secondary-dark text-white">
      <div className=" sm:flex items-center justify-between ">
        <div className="sm:flex items-center">
          <h1 className="  relative z-20 text-center text-[24px] sm:text-[32px] py-5 font-black font-test">
            GilbertWalker
          </h1>
          <FaLaptopCode className="hidden sm:block text-3xl ml-2 text-primary-green" />
        </div>

        <div className=" flex w-[174px]  mx-auto sm:mx-0 sm:w-40 text-xl relative z-20 sm:justify-between justify-around   ">
          <Link to="https://github.com/GilbertWalker " target="">
            <SiGithub />
          </Link>

          <Link
            to="https://www.linkedin.com/in/gilbert-ofori-boye-521b031a7/"
            target=""
          >
            <SiLinkedin />
          </Link>

          <Link
            to="mailto:gilbertoforiboye@gmail.com?subject=subject&cc=cc@example.com"
            target=""
          >
            <SiGmail />
          </Link>

          <Link to="https://wa.me/233248069933" target="">
            <SiWhatsapp />
          </Link>
        </div>
      </div>
    </div>
  );
}
