import { useState } from "react";
import Line from "./Line";
const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const toggleNav = () => {
    setNavState(!navState);
  };

  return (
    <>
      {screen.width > 1000 ? (
        <>
          <div className="w-[100vw] flex h-[10vmin]  bg-mainBg ">
            <div className="leftHolder w-[30vw]  bg-mainBg">
              <div className="logoHolder w-[20vmin] md:w-[18vmin] h-[10vmin] ml-3 p-1  bg-mainBg flex justify-center items-center">
                <img
                  src="CodemapLogo.png"
                  alt="logo"
                  className="max-w-full max-h-full "
                />
              </div>
            </div>
            <div className="rightHolder flex justify-center items-center w-[50vw] ">
              <ul className="flex gap-x-10 text-[2.15vmin] ">
                <li>
                  <a href="#about">About-Us</a>
                </li>
                <li>
                  {" "}
                  <a href="#services">Services</a>
                </li>
                <li>Careers</li>
                <li>
                  <a href="https://community.codemap.online">Community</a>
                </li>
                <li>
                  {" "}
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <Line />
        </>
      ) : (
        <>
          <div className="w-[100vw] flex h-[18vmin]  bg-mainBg ">
            <div className="leftHolder w-[50vw]   bg-mainBg">
              <div className="logoHolder w-[37vmin] h-[16vmin] md:w-[27vmin] md:h-[16vmin] ml-3 p-1 mt-1  bg-mainBg flex justify-center items-center">
                <img
                  src="CodemapLogo.png"
                  alt="logo"
                  className="max-w-full max-h-full "
                />
              </div>
            </div>
            <div
              className="rightHolder flex justify-end items-center pr-6 w-[50vw] "
              onClick={toggleNav}
            >
              <img
                src="ham.png"
                height={30}
                width={30}
                onClick={toggleNav}
              ></img>
            </div>
          </div>
          <Line />
          {navState ? (
            <>
              <div className="p-2 navHolder bg-mainBg w-[100vw]">
                <ul className="text-[3.15vmin] flex flex-col gap-y-4  ">
                  <li
                    className="hover:underline underline-offset-4"
                    onClick={toggleNav}
                  >
                    <a href="#about">About-Us</a>
                  </li>
                  <li
                    className="hover:underline underline-offset-4"
                    onClick={toggleNav}
                  >
                    <a href="#services">Services</a>
                  </li>
                  <li
                    className="hover:underline underline-offset-4"
                    onClick={toggleNav}
                  >
                    Careers
                  </li>
                  <li
                    className="hover:underline underline-offset-4"
                    onClick={toggleNav}
                  >
                    <a href="https://community.codemap.online">Community</a>
                  </li>
                  <li
                    className="hover:underline underline-offset-4"
                    onClick={toggleNav}
                  >
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
              <Line />
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};

export default Navbar;
