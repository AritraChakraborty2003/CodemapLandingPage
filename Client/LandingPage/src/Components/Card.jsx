/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const Card = (props) => {
  return (
    <>
      {props.data.map((val) => (
        <div className="cardHolder w-[90vw] md:w-[75vw] lg:w-[25%] p-4 bg-white border-grey border-[0.3px] ">
          <div className="imageHolder flex justify-center items-center">
            <img src={val.image} height={100} width={100} />
          </div>
          <div className="heading font-bold text-[6vmin] lg:text-[2.75vmin] text-center mt-4">
            {val.title}
          </div>

          <div className="descr text-center text-[4vmin] lg:text-[2.13vmin]  text-grey mt-2">
            {val.description}
          </div>
          <div className="buttonArea mt-4 flex justify-center items-center">
            <button className="p-2 bg-buttonMain w-[25%] text-white">
              <a href={val.url} target="_blank">
                Explore
              </a>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
