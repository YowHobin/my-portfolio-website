import React from 'react';
import git from "../../assets/git.png"
import figma from "../../assets/figma.png"

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
    <div className="skills__content" data-aos="zoom-in-down" data-aos-delay="400">
      <h3 className="skills__title">Acquired Skills</h3>

      <div className="skills_box">
         {/* 1st Column */}
        <div className="skills__group">
          
          <div className="skills__data">
            <img src={git} alt="html"  className="logos"/>
            
            <div>
              <h3 className="skills__name">Git / GitHub</h3>
              <span className="skills__level">More than 3 years</span>
            </div>
            
          </div>

          
        </div>

                      {/* 2nd Column */}
        <div className="skills__group">
          
          <div className="skills__data">
          <img src={figma} alt="html"  className="logos"/>
            
            <div>
              <h3 className="skills__name">Figma</h3>
              <span className="skills__level">More than 3 years</span>
            </div>
            
          </div>

          
        </div>

      </div>
    </div>
  )
}

export default AcquiredSkills