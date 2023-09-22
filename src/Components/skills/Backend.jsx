import JS from "../../assets/js.png";
import laravel from "../../assets/laravel.png";
import mongodb from "../../assets/mongodb.png";
import sql from "../../assets/mysql.png";
import next from "../../assets/next.png";
import node from "../../assets/nodejs.png";
import PHP from "../../assets/php.png";
import prisma from "../../assets/prisma.png";
import TS from "../../assets/ts.png";


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Backend = () => {
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
      data-aos-delay="600"
      data-aos-anchor-placement="center-bottom"
    >
      <h3 className="skills__title">Back-End</h3>

      <div className="skills_box">
        {/* 1st Column */}
        <div className="skills__group">
          <div className="skills__data">
            <img src={PHP} alt="html" className="logos" />

            <div>
              <h3 className="skills__name">PHP</h3>
              <span className="skills__level">More than 3 years</span>
            </div>
          </div>

          <div className="skills__data">
            <img src={node} alt="html" className="logos" />

            <div>
              <h3 className="skills__name">NodeJS</h3>
              <span className="skills__level">Less than 6 months</span>
            </div>
          </div>

          <div className="skills__data">
            <img src={prisma} alt="html" className="logos" />

            <div>
              <h3 className="skills__name">Prisma</h3>
              <span className="skills__level">Less than 6 months</span>
            </div>
          </div>

          <div className="skills__data">
            <img src={JS} alt="html" className="logos" />

            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">More than 1 year</span>
            </div>
          </div>
        </div>

        {/* 2nd Column */}
        <div className="skills__group">
          <div className="skills__data">
            <img src={sql} alt="html" className="logos" />

            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">More than 3 years</span>
            </div>
          </div>

          <div className="skills__data">
            <img src={next} alt="html" className="logos" />

            <div>
              <h3 className="skills__name">NextJS</h3>
              <span className="skills__level">Less than 6 months</span>
            </div>
          </div>

          <div className="skills__data">
            <img src={mongodb} alt="html" className="logos" />

            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Less than 6 months</span>
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
      </div>

      {/* additional skills odd looking */}
      <div className="skills__data odd">
        <img src={laravel} alt="html" className="logos" />

        <div>
          <h3 className="skills__name">Laravel</h3>
          <span className="skills__level">Less than 6 months</span>
        </div>
      </div>
    </div>
  );
};

export default Backend;
