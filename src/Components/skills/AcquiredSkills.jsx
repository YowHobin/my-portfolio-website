import figma from "../../assets/figma.png";
import git from "../../assets/git.png";
import infinity from "../../assets/infinityfree.png";
import vercel from "../../assets/vercel.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AcquiredSkills = () => {
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
      data-aos-delay="800"
      data-aos-anchor-placement="center-bottom"
    >
      <div className="skills_header">
        <h3 className="ASskills__title">Tools</h3>
        <p className="skills__subtitle">Acquired Skills</p>
      </div>

      <div className="skills_box">
        {/* 1st Column */}
        <div className="skills__group">
          <div className="skills__data">
            <img src={git} alt="html" className="logos" />

            <div>
              <h3 className="skills__name">Git / GitHub</h3>
              <span className="skills__level">More than 3 years</span>
            </div>
          </div>

          <div className="skills__data">
            <img src={vercel} alt="html" className="logos" />

            <div>
              <h3 className="skills__name">Vercel</h3>
              <span className="skills__level">More than 1 year</span>
            </div>
          </div>
        </div>

        {/* 2nd Column */}
        <div className="skills__group">
          <div className="skills__data">
            <img src={figma} alt="html" className="logos" />

            <div>
              <h3 className="skills__name">Figma</h3>
              <span className="skills__level">More than 3 years</span>
            </div>
          </div>

          <div className="skills__data">
            <img src={infinity} alt="html" className="logos" />

            <div>
              <h3 className="skills__name">InfinityFree</h3>
              <span className="skills__level">More than 3 years</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcquiredSkills;
