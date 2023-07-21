/*import AOS from 'aos';
import 'aos/dist/aos.css';
import Data from './Data';
import ScrollDown from './ScrollDown';
import Social from './Social';
import "./home.css";


const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img" data-aos="fade-left"></div>

          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home */

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import Social from "./Social";
import "./home.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
      anchorPlacement: "top-center",
    });
    
  }, []);

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img" data-aos="fade-left"></div>

          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;






