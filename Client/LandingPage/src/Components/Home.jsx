import Hero from "./Hero";
import Line from "./Line";
import Navbar from "./Navbar";
import RevolvingHeader from "./RevolvingHeader";
const Home = () => {
  return (
    <>
      {screen.width > 1000 && <RevolvingHeader />}

      <Navbar />
      <Line />
      <Hero />
    </>
  );
};

export default Home;
