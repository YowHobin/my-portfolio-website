import ReactJS from "../../assets/React.png";
import BS from "../../assets/bootstrap.png";
import CSS from "../../assets/css.png";
import HTML from "../../assets/html5.png";
import jquery from "../../assets/jquery.png";
import JS from "../../assets/js.png";
import Next from "../../assets/next.png";
import sass from "../../assets/sass.png";
import TW from "../../assets/tailwind.png";
import TS from "../../assets/ts.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Frontend = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });
  }, []);
  return (
    <div
      className="skills__content"
      data-aos="zoom-in-down"
      data-aos-delay="400"
      data-aos-anchor-placement="center-bottom"
    >
      <h3 className="skills__title">Front-End</h3>

      <div className="skills_box">
        {/* 1st Column */}
        <div className="skills__group">
          <div className="skills__data">
            <img src={HTML} alt="html" className="logos" />

            <div>
              <h3 className="skills__name">HTML 5</h3>
              <span className="skills__level">More than 5 years</span>
            </div>
          </div>

          <div className="skills__data">
            <img src={BS} alt="html" className="logos" />

            <div>
              <h3 className="skills__name">Bootstap</h3>
              <span className="skills__level">More than 2 years</span>
            </div>
          </div>

          <div className="skills__data">
            <img src={sass} alt="html" className="logos" />

            <div>
              <h3 className="skills__name">SASS</h3>
              <span className="skills__level">Less than 6 months</span>
            </div>
          </div>

          <div className="skills__data">
            <img src={JS} alt="html" className="logos" />

            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">More than 3 years</span>
            </div>
          </div>

          <div className="skills__data">
            <img src={TS} alt="html" className="logos" />

            <div>
              <h3 className="skills__name">TypeScript</h3>
              <span className="skills__level">Less than 6 months</span>
            </div>
          </div>
        </div>

        {/* 2nd Column */}
        <div className="skills__group">
          <div className="skills__data">
            <img src={CSS} alt="html" className="logos" />

            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">More than 5 years</span>
            </div>
          </div>

          <div className="skills__data">
            <img src={TW} alt="html" className="logos" />

            <div>
              <h3 className="skills__name">Tailwind CSS</h3>
              <span className="skills__level">Less than 6 months</span>
            </div>
          </div>

          <div className="skills__data">
            <img src={jquery} alt="html" className="logos" />

            <div>
              <h3 className="skills__name">jQuery</h3>
              <span className="skills__level">More than 2 years</span>
            </div>
          </div>

          <div className="skills__data">
            <img src={ReactJS} alt="html" className="logos" />

            <div>
              <h3 className="skills__name">ReactJS</h3>
              <span className="skills__level">Less than 6 months</span>
            </div>
          </div>

          <div className="skills__data">
            <img src={Next} alt="html" className="logos" />

            <div>
              <h3 className="skills__name">NextJS</h3>
              <span className="skills__level">Less than 6 months</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
