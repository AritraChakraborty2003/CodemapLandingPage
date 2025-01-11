import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "IT Solutions",
      "E-Store",
      "Technical Community",
      "Latest E-News",
      "Technical Events",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 90,
  });
  return (
    <>
      <div className="bannerContainer bg-mainBg w-[100vw] pb-10 lg:pb-10   flex flex-wrap">
        <div className="leftHolder w-[100vw] lg:w-[48vw]">
          <div className="mainHolder h-[49vh] md:h-[59vh] lg:h-[83vh] md:w-[100vw] lg:w-full flex justify-center items-center 2xl:justify-end ">
            <div className="imageHolder  flex justify-center lg:justify-start   lg:items-center 2xl:items-end 2xl:justify-end w-[96%] h-[99%] md:w-[85%] md:h-[100%]  lg:w-[94%] lg:h-[97%] 2xl:w-[96%] 2xl:h-[93%] ">
              <img
                src="coder1.jpg"
                alt="coder"
                className="max-w-full max-h-full object-contain "
              />
            </div>
          </div>
        </div>
        <div className="rightHolder mt-[2vmin] lg:mt-[-3vmin] lg:h-[83vh] 2xl:h-[93vh]   2xl:mt-[-1.65vmin]  w-[100vw] lg:w-[50vw] h-full  pb-4 lg:pb-10  ">
          <div className="textContainerBox flex h-full w-full justify-center lg:justify-start items-center ">
            <div className="textHolder flex flex-col ml-1 gap-y-6 justify-center pl-2 2xl:pl-10 lg:mt-20 2xl:mt-1">
              <div>
                <div className="ml-1 md:ml-0 md:pl-5 lg:pl-0 gap-x-2 md:gap-x-4 flex items-center">
                  <div className="h-[13vmin] md:h-[12.75vmin] w-1 border-[4px] md:border-[7px] rounded-md border-purple"></div>
                  <p className="text-purple text-[17vmin] md:text-[15vmin] lg:text-[14.45vmin]  2xl:text-[16.05vmin] font-sans-serif font-extrabold tracking-[0.15vmin]">
                    <span className="text-black">Code</span>map
                  </p>
                </div>
                <p className="text-purple text-[4vmin] lg:text-[3vmin] font-medium tracking-[0.15vmin] md:mt-[-2vmin] md:ml-1 md:pl-2   lg:ml-0 lg:pl-0 ">
                  ( where ideas turn into innovation )
                </p>
                <p></p>
              </div>
              <div className="w-[98%] md:w-[88%] lg:w-[83%] md:ml-2 md:pl-2 lg:ml-0 lg:pl-0  font-poppins md:leading-[5.35vmin] text-[3.75vmin] leading-[7vmin] md:text-[2.75vmin] lg:text-[2.05vmin] 2xl:text-[2.15vmin]">
                We at codemap aim to deliver best quality technical solutions
                and community support to our clients and members. Give us a
                chance to provide you a platform for: &nbsp;
                <span id="services" className="font-bold text-purple">
                  {text}
                </span>
                <span id="services" className="font-bold text-purple">
                  <Cursor cursorStyle="|" />
                </span>
              </div>
              <button className="bg-buttonMain ml-1 lg:mt-5 font-medium text-white p-4 rounded-md w-[30%] tracking-[0.35vmin] text-[3.95vmin] md:text-[2.75vmin]">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
