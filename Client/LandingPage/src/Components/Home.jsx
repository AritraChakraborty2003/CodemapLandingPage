import About from "./About";
import Hero from "./Hero";
import Services from "./Services";
import Navbar from "./Navbar";
import RevolvingHeader from "./RevolvingHeader";
import Footer from "./Footer";
import Contact from "./Contact";
const Home = () => {
  return (
    <>
      <RevolvingHeader />

      <Navbar />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
