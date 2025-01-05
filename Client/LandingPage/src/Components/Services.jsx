import Card from "./Card";

const Services = () => {
  const data = [
    {
      title: "IT Services and Consulting",
      description:
        "We provide top class IT services and consulting to our clients",
      image: "IT.png",
      url: "https://services.codemap.online",
    },
    {
      title: "Technical Community",
      description:
        "We have a top class free technical community to help students grow",
      image: "technicalCommunity.webp",
      url: "https://community.codemap.online",
    },
    {
      title: "Event Organizers",
      description:
        "We organize top class technical events for the academia and corporates",
      image: "event1.png",
      url: "https://community.codemap.online",
    },
  ];
  return (
    <>
      <div className="servicesContainer bg-mainBg">
        <div className="servicesHolder w-[100vw]">
          <p className="ml-2 text-[11vmin] lg:text-[8.5vmin] font-extrabold font-sans-serif mt-4">
            Our <span className="text-purple">Services</span>
          </p>
        </div>
        <div className="servicesHolder gap-y-5 flex flex-wrap justify-center items-center gap-x-12 pb-12 pt-10">
          <Card data={data} />
        </div>
      </div>
    </>
  );
};

export default Services;
