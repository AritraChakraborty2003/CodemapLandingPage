const Navbar = () => {
  return (
    <>
      {screen.width > 1000 ? (
        <div className="w-[100vw] flex h-[10vmin]  bg-mainBg ">
          <div className="leftHolder w-[30vw]  bg-mainBg">
            <div className="logoHolder w-[20vmin] md:w-[14vmin] h-[9vmin] ml-3 p-1  bg-mainBg flex justify-center items-center">
              <img
                src="CodemapLogo.png"
                alt="logo"
                className="max-w-full max-h-full "
              />
            </div>
          </div>
          <div className="rightHolder flex justify-center items-center w-[50vw] ">
            <ul className="flex gap-x-10 text-[2.15vmin] ">
              <li>About-Us</li>
              <li>Services</li>
              <li>Careers</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="w-[100vw] flex h-[16vmin]  bg-mainBg ">
          <div className="leftHolder w-[50vw]   bg-mainBg">
            <div className="logoHolder w-[37vmin] h-[16vmin] ml-3 p-1  bg-mainBg flex justify-center items-center">
              <img
                src="CodemapLogo.png"
                alt="logo"
                className="max-w-full max-h-full "
              />
            </div>
          </div>
          <div className="rightHolder flex justify-end items-center pr-6 w-[50vw] ">
            <img src="ham.png" height={30} width={30}></img>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
