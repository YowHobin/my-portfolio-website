import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect,useState } from "react";
import "./qualification.css";

export const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false,
        mirror: false,
      });
    }, []);
  return (
    <section className="qualification section">
      <h2
        className="section__title"
        data-aos="zoom-in-down"
        data-aos-delay="200"
      >
        Qualification{" "}
      </h2>

      <span
        className="section__subtitle"
        data-aos="zoom-in-down"
        data-aos-delay="300"
      >
        My Personal Journey{" "}
      </span>

      <div className="qualification__container container">
        <div
          className="qualification__tabs"
          data-aos="zoom-in-down"
          data-aos-delay="800"
          data-aos-anchor-placement="center-bottom"
        >
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          {/* Education */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div
                data-aos="zoom-in-left"
                data-aos-delay="300"
                data-aos-anchor-placement="center-bottom"
              >
                <h3 className="qualification__title">
                  BS in Information Technology
                </h3>
                <span className="qualification__subtitle">
                  Rizal Technological University
                </span>
                <p className="awards">Academic Achiever & Dean's Lister</p>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div
                data-aos="zoom-in-right"
                data-aos-delay="600"
                data-aos-anchor-placement="center-bottom"
              >
                <h3 className="qualification__title">Information, Communications, and Techonology</h3>
                <span className="qualification__subtitle">Buting Senior High School</span>
                <p className="awards">Academic Achiever & Dean's Lister</p>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2019
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">UCCAE Intern</h3>
                <span className="qualification__subtitle">
                  Rizal Technological University
                </span>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> September  - December 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Florist Manila</h3>
                <span className="qualification__subtitle">
                  Business Administrator
                </span>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> July - December 2021
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
