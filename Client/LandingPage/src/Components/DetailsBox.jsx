/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const DetailsBox = (props) => {
  return (
    <>
      {props.data.map((val) => (
        <>
          <div className="detailsHolder flex gap-x-3 w-[85%]">
            {val.url.split(".")[0] === "location1" ? (
              <>
                <div className="detailsIcon h-[6vmin] w-[6vmin]">
                  <img
                    src={val.url}
                    alt={val.url.split()[0]}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="textHolder">
                  <p className="text-grey">{val.info}</p>
                </div>
              </>
            ) : (
              <>
                <div className="detailsIcon h-[4vmin] w-[4vmin]">
                  <img
                    src={val.url}
                    alt={val.url.split(".")[0] + "1"}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="textHolder">
                  <p className="text-grey">{val.info}</p>
                </div>
              </>
            )}
          </div>
        </>
      ))}
    </>
  );
};

export default DetailsBox;
