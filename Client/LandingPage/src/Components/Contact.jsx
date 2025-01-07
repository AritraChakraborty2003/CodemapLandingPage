/* eslint-disable react-hooks/exhaustive-deps */

import ValidateEmail from "../Utils/ValidateEmail";
import ValidateName from "../Utils/ValidateName";
import DetailsBox from "./DetailsBox";
import UseSendData from "../Utils/useSendData";
import { useEffect } from "react";
import { useState } from "react";
import SocialIcons from "./SocialIcons";
import { toast } from "react-toastify";
const Contact = () => {
  const [data1, setData1] = useState([]);
  const [tigger, setTigger] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const organization = document.getElementById("organization").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !organization || !message) {
      toast.error("Please enter all details... ");
      return;
    } else {
      if (!ValidateEmail(email) || !ValidateName(name)) {
        toast.error("Invalid email or name... ");
        return;
      } else {
        const dataObj = {
          name,
          email,
          organization,
          message,
        };

        setData1(dataObj);
        setTigger(true);

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("organization").value = "";
        document.getElementById("message").value = "";
      }
    }
  };

  let status = UseSendData(tigger, "contact", data1);

  useEffect(() => {
    setTigger(false);
    status = null;
  }, [status]);

  const data = [
    {
      url: "location1.png",
      info: "1st Floor, IIMT LBF Incubation Center,Greater Knowledge Park III,Noida, UP, 201310",
    },
    {
      url: "email1.png",
      info: "codemap2024@gmail.com",
    },
    {
      url: "phonec.png",
      info: "+91 7585824862/8090570646",
    },
    {
      url: "time.png",
      info: "Open 24 hrs",
    },
  ];

  const socials = [
    {
      image: "linkedin.png",
      url: "https://www.linkedin.com/company/code-map/",
      platform: "LinkedIn",
    },
    {
      image: "instagram.png",
      url: "https://www.instagram.com/_codemap_/",
      platform: "Instagram",
    },
    {
      image: "website.png",
      url: "https://www.codemap.online/",
      platform: "website",
    },
    {
      image: "cart.png",
      url: "https://www.estore.codemap.online/",
      platform: "Codemap Estore",
    },
  ];
  return (
    <>
      <div className="ContactHolder flex justify-center items-center pt-12 pb-12">
        <div className="ContactHolderMain w-[96vw]  flex border-[0.65px] border-grey rounded-md">
          <div className="formHolder w-[92vw] lg:w-[60vw] pl-3">
            <div className="titleHolder pl-2">
              <p className="text-[9vmin] text-purple font-bold font-open-sans pt-4">
                Let&#39;s Talk
              </p>
            </div>

            <div className="pl-3  w-[90%] descrHolderContact pt-3 pb-3 lg:pt-0 lg:pb-0 leading-6 lg:leading-8 text-grey">
              <p>
                We will be happy to hear you please write your query and we will
                try to answer you as fast as possible,Its a humble request not
                to spam 🙂
              </p>
            </div>

            <div className="formContainer flex flex-col gap-y-4 w-[96%] lg:w-[89%] pl-3 mt-4 pb-7">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name..."
                className="bg-mainBg rounded-md p-3"
              />
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email..."
                className="bg-mainBg rounded-md p-3"
              />
              <input
                type="text"
                name="organization"
                id="organization"
                placeholder="Enter your organization..."
                className="bg-mainBg rounded-md p-3"
              />
              <textarea
                rows={9}
                cols={50}
                id="message"
                name="message"
                className="bg-mainBg rounded-md p-3"
                placeholder="Enter your message..."
              />
              <button
                className="bg-purple text-white p-3 w-[30%]"
                onClick={handleClick}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="detailsHolder hidden lg:block lg:w-[40vw] border-l-[0.35px] ">
            <div className="detailesInnerHolder mt-6 flex flex-col justify-center items-center gap-y-10">
              <div className="imageHolder w-[94%] lg:h-[35vh] p-2 flex justify-center items-center ">
                <img
                  src="msg.png"
                  className="max-w-full max-h-full object-contain "
                />
              </div>
              <div className="detailsHolder w-[94%]   flex flex-col justify-center items-center gap-y-4 pl-3 pt-1 ">
                <DetailsBox data={data} />
              </div>
              <div className="imageHolder w-[94%]   flex gap-x-12 mt-6 justify-center items-center">
                <SocialIcons socials={socials} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
