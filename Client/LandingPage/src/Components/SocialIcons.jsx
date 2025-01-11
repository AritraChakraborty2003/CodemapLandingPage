/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";

const SocialIcons = (props) => {
  return (
    <>
      {props.socials.map((val) => (
        <div className="imageSocialContainer">
          <div className="imagHolder lg:h-[6vmin] lg:w-[6vmin] 2xl:w-[6vmin] 2xl:h-[6vmin]">
            <a href={val.url} target="_blank">
              <img src={val.image} alt={val.platform}></img>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default SocialIcons;
