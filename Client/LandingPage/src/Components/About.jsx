/* eslint-disable react/jsx-no-comment-textnodes */
const About = () => {
  return (
    <>
      <div className="aboutHolder mt-8 md:mt-12 lg:mt-3 flex  pb-6 pb-6 flex-wrap justify-center items-center">
        <div className="leftHolder  w-[96vw] md:w-[90vw] lg:w-[45vw] lg:h-[97vh]  flex justify-center items-center">
          <div className="imageHolder lg:mt-16 lg:mr-3 w-[94%] h-[65%] ">
            <img
              src="AboutImage.jpg"
              alt="coder"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
        <div className="rightHolder flex flex-col gap-y-4 pl-2 md:pl-4 2xl:pl-6 w-[100vw]  lg:w-[53vw] pt-8 pb-1 lg:pb-2">
          <div className="aboutHeaderHolder flex flex-col gap-y-2">
            <div className="smallAboutTitle">
              <p
                id="smallAboutTitle"
                className="text-purple text-[3.15vmin] md:text-[2.65vmin]  font-bold font-poppins"
              >
                //&nbsp;About us
              </p>
            </div>
            <div className="mainTitleHolder">
              <p
                id="mainTitle"
                className="text-black font-extrabold text-[6.5vmin] lg:text-[5vmin] 2xl:text-[6.5vmin]"
              >
                We are an one stop technical platform
              </p>
            </div>
            <div className="mainTitleDescrHolder">
              <p
                id="mainTitleDescr"
                className="text-grey font-poppins text-[2.5vmin] leading-[5.45vmin]"
              >
                We at Codemap try to provide platform for all sorts of technical
                needs be IT solutions, Technical Blogs and Community to
                Technical event management
              </p>
            </div>
          </div>

          <div className="optionsHolder w-[100vw]  lg:w-[53vw] flex flex-col gap-y-1 mt-3">
            <div className="upperHolder w-[99vw] lg:w-[52vw] flex   gap-x-3">
              <div className="opt1">
                <div className="optHolder flex flex-col gap-y-1 w-[46vw] lg:w-[25.5vw] pb-10">
                  <div className="titleHolder flex gap-x-2 lg:gap-x-3 ">
                    <div className="titleIcon">
                      {screen.width > 767 ? (
                        <img src="tick.png" height={55} width={55} />
                      ) : (
                        <img src="tick.png" height={35} width={35} />
                      )}
                    </div>
                    <div className="titleText ">
                      <p className="font-extrabold text-[3.15vmin]">
                        IT Solutions & Consulting
                      </p>
                    </div>
                  </div>
                  <div className="optDescr">
                    <p className=" text-grey text-[2vmin]  md:text-[1.95vmin] mt-1 pl-4">
                      We provide top notch and best IT Solutions and consulting
                      services to our clients at the most affordable rate{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="opt2">
                <div className="optHolder flex flex-col  gap-y-1  w-[46vw] lg:w-[25.5vw] pb-10 ">
                  <div className="titleHolder flex gap-x-2 lg:gap-x-3 ">
                    <div className="titleIcon">
                      {screen.width > 767 ? (
                        <img src="tick.png" height={55} width={55} />
                      ) : (
                        <img src="tick.png" height={35} width={35} />
                      )}
                    </div>
                    <div className="titleText ">
                      <p className="font-extrabold text-[3.15vmin]">
                        Community Platform Support
                      </p>
                    </div>
                  </div>
                  <div className="optDescr">
                    <p className=" text-grey lg:ml-8 text-[2vmin]  md:text-[1.95vmin] mt-1 pl-4">
                      We have the community support platform to help the
                      technical community to nurture skills via LMS and Blogs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lowerHolder  w-[99vw] lg:w-[52vw]  flex   gap-x-3">
              <div className="opt3">
                <div className="optHolder flex flex-col gap-y-4  w-[46vw] lg:w-[25.5vw] pb-10 ">
                  <div className="titleHolder flex gap-x-2 lg:gap-x-3 ">
                    <div className="titleIcon">
                      {screen.width > 767 ? (
                        <img src="tick.png" height={55} width={55} />
                      ) : (
                        <img src="tick.png" height={35} width={35} />
                      )}
                    </div>
                    <div className="titleText ">
                      <p className="font-extrabold text-[3.15vmin]">
                        Technical Events & E-News
                      </p>
                    </div>
                  </div>
                  <div className="optDescr">
                    <p className=" text-grey text-[2vmin]  md:text-[1.95vmin] mt-1 pl-4">
                      The Technical Event Organizations is a core part of our
                      business be it for a hiring challenge or a theme specific
                      hackathon also making a news application as a SaaS
                    </p>
                  </div>
                </div>
              </div>
              <div className="opt4">
                <div className="optHolder flex flex-col gap-y-4   w-[46vw] lg:w-[25.5vw] pb-10 ">
                  <div className="titleHolder flex gap-x-2 lg:gap-x-3 ">
                    <div className="titleIcon">
                      {screen.width > 767 ? (
                        <img src="tick.png" height={55} width={55} />
                      ) : (
                        <img src="tick.png" height={35} width={35} />
                      )}
                    </div>
                    <div className="titleText ">
                      <p className="font-extrabold text-[3.15vmin]">
                        Codemap&lsquo;s Tech E-Store
                      </p>
                    </div>
                  </div>
                  <div className="optDescr">
                    <p className=" text-grey lg:ml-6 text-[2vmin]  md:text-[1.95vmin] mt-1 pl-4">
                      We have ecommerce business segment or e-store where we
                      sell technical products like books, goodies, swags,
                      codemap tshirts,pens and many more
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
