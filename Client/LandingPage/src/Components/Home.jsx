import About from "./About";
import Hero from "./Hero";
import Services from "./Services";
import Line from "./Line";
import Navbar from "./Navbar";
import RevolvingHeader from "./RevolvingHeader";
import Footer from "./Footer";
import Contact from "./Contact";
const Home = () => {
  return (
    <>
      {screen.width > 1000 && <RevolvingHeader />}

      <Navbar />
      <Line />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
