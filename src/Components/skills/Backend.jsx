import React from 'react';
import PHP from "../../assets/php.png"
import sql from "../../assets/mysql.png"
import node from "../../assets/nodejs.png"
import next from "../../assets/next.png"

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
    <div className="skills__content" data-aos="zoom-in-down" data-aos-delay="400">
      <h3 className="skills__title">Back-End</h3>

      <div className="skills_box">
         {/* 1st Column */}
        <div className="skills__group">
          
          <div className="skills__data">
            <img src={PHP} alt="html"  className="logos"/>
            
            <div>
              <h3 className="skills__name">PHP</h3>
              <span className="skills__level">More than 3 years</span>
            </div>
            
          </div>

          <div className="skills__data">
            <img src={node} alt="html"  className="logos"/>
            
            <div>
              <h3 className="skills__name">NodeJS</h3>
              <span className="skills__level">Less than 6 months</span>
            </div>
            
          </div>

          
        </div>

                      {/* 2nd Column */}
        <div className="skills__group">
          
          <div className="skills__data">
            <img src={sql} alt="html"  className="logos"/>
            
            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">More than 6 months</span>
            </div>
            
          </div>

          <div className="skills__data">
            <img src={next} alt="html"  className="logos"/>
            
            <div>
              <h3 className="skills__name">NextJS</h3>
              <span className="skills__level">Less than 6 months</span>
            </div>
            
          </div>

          
        </div>

      </div>
    </div>
  )
}

export default Backend