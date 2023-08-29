import { useState } from "react";
import "./services.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

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
    <section className="services section" id="services">
      <h2
        className="section__title"
        data-aos="zoom-in-down"
        data-aos-delay="200"
      >
        Services
      </h2>

      <span
        className="section__subtitle"
        data-aos="zoom-in-down"
        data-aos-delay="300"
      >
        What I can do
      </span>

      <div className="services__container container grid">
        <div className="services__content">
          <div
            className="animate"
            data-aos="flip-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="500"
          >
            <div>
              <i className="uil uil-arrow services__icon"></i>
              <h3 className="services__title">
                Web <br /> Developer
              </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(1)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
          </div>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Web Developer</h3>
              <p className="services__modal-description">
                With a strong foundation in web technologies and a passion for
                problem-solving, I'm committed to delivering innovative and
                efficient solutions as I embark on my journey as a web
                developer.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uis uis-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I implement responsive design to my projects as there will be 
                    users that will access the website through various devices.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uis uis-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I design and implement cutting-edge products and features
                    that drive success for every project.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uis uis-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I am well-versed in various web development frameworks and
                    languages, allowing me to adapt quickly and efficiently to
                    project requirements.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uis uis-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I meticulously test and optimize code to ensure smooth
                    functionality across different browsers and devices.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uis uis-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I constantly explore new technologies and methodologies to
                    enhance web development practices.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div
            className="animate"
            data-aos="flip-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="600"
          >
            <div>
              <i className="uil uil-edit services__icon"></i>
              <h3 className="services__title">
                UI / UX <br /> Design
              </h3>
            </div>

            <span onClick={() => toggleTab(2)} className="services__button">
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
          </div>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">UI/UX Design</h3>
              <p className="services__modal-description">
                With a keen eye for design and a dedication to enhancing user
                experiences, I am excited to create an UI/UX design, translating
                ideas into captivating and user-friendly designs.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uis uis-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I skillfully craft UX element interactions to optimize
                    usability and drive conversions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uis uis-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    My goal is to strike the perfect balance between aesthetics
                    and functionality, resulting in intuitive and delightful
                    user journeys.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uis uis-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Efficient in visualization and refinement of design concepts
                    for seamless implementation.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uis uis-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I collaborate with cross-functional teams to deliver
                    innovative and cohesive design solutions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uis uis-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I ensure that each design decision aligns with the target
                    audience's needs.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
