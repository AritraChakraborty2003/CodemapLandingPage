const About = () => {
  return (
    <>
      <div className="AboutContainer ">
        <div className="aboutDataHolder lg:mt-[-3.45vmin] flex flex-wrap justify-center items-center">
          {(screen.width > 1000 && (
            <>
              <div className="p-2 titleHolder  w-[100vw]  ">
                <p className="text-[7vmin] lg:text-[8.5vmin] font-extrabold font-sans-serif">
                  <span className="text-purple">About</span> Us
                </p>
              </div>
              <div className="leftHolder w-[100vw] lg:w-[34vw]  h-[95vh] ">
                <div className="imgHolder w-[99%] h-[99%] flex justify-end items-center">
                  <img
                    src="coders.jpg"
                    alt="coder"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
              <div className="rightHolder w-[100vw]  lg:w-[62vw]   p-5">
                <p className="text-[2.7vmin] pl-3 leading-[5.75vmin] font-poppins">
                  Welcome to Codemap, where technology, education, and community
                  come together. We are an IT solutions company dedicated to
                  providing innovative software and AI-driven services,
                  organizing impactful technical events, and building a thriving
                  tech community. Our Learning Management System (LMS) offers
                  comprehensive courses and certifications to empower students
                  and professionals with the skills they need to excel in the
                  tech industry. Through workshops, hackathons, and networking
                  opportunities, we bring innovators together to share ideas and
                  grow. At Codemap, we’re driven by a mission to foster growth,
                  collaboration, and digital transformation. Let’s shape the
                  future of technology together!The missions of Codemap are:
                  <div className="font-medium mt-3">
                    1. Make a equipped technical platform for the techies
                    <br></br>2. Providing Efficient and cost effective IT
                    solution to clients
                    <br></br> 3. Helping students grow their career in the tech
                    industry
                    <br></br> 3. Effectively grow and nurture the technical
                    community
                  </div>
                </p>
              </div>
            </>
          )) || (
            <>
              <div className="pt-6 p-2 titleHolder  w-[100vw]  ">
                <p className="text-[12vmin] lg:text-[8.5vmin] font-extrabold font-sans-serif">
                  <span className="text-purple">About</span> Us
                </p>
              </div>
              <div className="leftHolder w-[100vw] lg:w-[34vw]  h-[30vh] ">
                <div className="imgHolder w-[100%] h-[100%] flex justify-end items-center">
                  <img
                    src="about_new.jpg"
                    alt="coder"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
              <div className="rightHolder w-[100vw]">
                <p className="text-[3.75vmin] pl-3 pr-3 leading-[7.45vmin] font-poppins">
                  Welcome to Codemap, where technology, education, and community
                  come together. We are an IT solutions company dedicated to
                  providing innovative software and AI-driven services,
                  organizing impactful technical events, and building a thriving
                  tech community. Our Learning Management System (LMS) offers
                  comprehensive courses and certifications to empower students
                  and professionals with the skills they need to excel in the
                  tech industry. Through workshops, hackathons, and networking
                  opportunities, we bring innovators together to share ideas and
                  grow. At Codemap, we’re driven by a mission to foster growth,
                  collaboration, and digital transformation. Let’s shape the
                  future of technology together!
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default About;
