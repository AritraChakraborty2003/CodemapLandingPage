const Hero = () => {
  return (
    <>
      <div className="bannerContainer bg-mainBg w-[100vw] pb-10 lg:pb-0 lg:h-[80vh] flex flex-wrap">
        <div className="leftHolder lg:w-[45vw]">
          <div className="mainHolder h-[53vh] lg:h-full md:w-[100vw] lg:w-full flex justify-center  ">
            <div className="imageHolder flex lg:justify-start   lg:items-center w-[96%] h-[99%] md:w-[75%]  lg:w-[98%] lg:h-[99%] ">
              <img
                src="coder.png"
                alt="coder"
                // className="max-w-full max-h-full object-contain "
              />
            </div>
          </div>
        </div>
        <div className="rightHolder mt-[-9vmin] lg:mt-0  w-[100vw] lg:w-[55vw] h-full  pb-4 lg:pb-0">
          <div className="textContainerBox flex h-full w-full justify-center lg:justify-start items-center lg:pl-10">
            <div className="textHolder flex flex-col gap-y-6 justify-center pl-3">
              <div>
                <div className="ml-1 md:ml-0 md:pl-5 lg:pl-0 gap-x-2 md:gap-x-4 flex items-center">
                  <div className="h-20 md:h-[12.75vmin] w-1 border-[4px] md:border-[7px] rounded-md border-purple"></div>
                  <p className="text-purple text-[17vmin] md:text-[15vmin] lg:text-[15vmin] font-sans-serif font-extrabold tracking-[0.15vmin]">
                    <span className="text-black">Code</span>map
                  </p>
                </div>
                <p className="text-purple text-[4vmin] lg:text-[3vmin] font-medium tracking-[0.15vmin] md:mt-[-2vmin] md:ml-1 md:pl-2   lg:ml-0 lg:pl-0 ">
                  ( where ideas turn into innovation )
                </p>
                <p></p>
              </div>
              <div className="w-[98%] md:w-[88%] lg:w-[83%] md:ml-2 md:pl-2 lg:ml-0 lg:pl-0 font-poppins md:leading-[5.35vmin] text-[3.75vmin] leading-[7vmin] md:text-[2.75vmin] lg:text-[2.25vmin]">
                We at codemap aim to deliver best quality technical solutions
                and community support to our clients and members. Give us a
                chance to provide you a platform for: &nbsp;
                <span id="services" className="font-bold text-purple">
                  IT Services
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
