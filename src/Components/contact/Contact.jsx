import emailjs from '@emailjs/browser';
import { useRef } from 'react';

import "./contact.css";

import "./button";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7c4inju",
        "template_dd7gi5h",
        form.current,
        "l8Veks_h19BQa_miv"
      )
      e.target.reset()
  };

  

  return (
    <section className="contact section" id="contact">
      <h2
        className="section__title"
        data-aos="zoom-in-down"
        data-aos-delay="200"
      >
        Get in touch
      </h2>

      <span
        className="section__subtitle"
        data-aos="zoom-in-down"
        data-aos-delay="300"
      >
        Don't be shy, contact me!
      </span>

      <div className="contact__container container grid">
        <div
          className="contact__content"
          data-aos="zoom-in-down"
          data-aos-delay="500"
        >
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                lenardroyarellano@gmail.com
              </span>

              <a
                href="mailto:lenardroyarellano@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-messenger contact__card-icon"></i>

              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">Lenard Roy Arellano</span>

              <a
                href="https://m.me/LenardRoyArellano"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx-phone contact__card-icon"></i>

              <h3 className="contact__card-title">Contact Number</h3>
              <span className="contact__card-data">09569281860</span>

              <a href="tel: 09569281860" className="contact__button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div
          className="contact__content"
          data-aos="zoom-in-down"
          data-aos-delay="500"
        >
          <h3 className="contact__title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Your name"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Your email"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your project ideas here"
              ></textarea>
            </div>

            <button class="btn" href="mailto:lenardroyarellano@gmail.com">
              <span class="btn__text">Submit</span>
              <svg
                class="btn__progress"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <circle
                  class="btn__progress-track"
                  r="20"
                  cx="24"
                  cy="24"
                  fill="none"
                  stroke="#c7cad1"
                  stroke-width="8"
                />
                <circle
                  class="btn__progress-fill"
                  r="20"
                  cx="24"
                  cy="24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="8"
                  transform="rotate(-90,24,24)"
                  stroke-dasharray="125.66 125.66"
                  stroke-dashoffset="125.66"
                />
                <polyline
                  class="btn__progress-check"
                  points="12,24 20,32 36,16"
                  fill="none"
                  stroke="#fff"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-dasharray="34 34"
                  stroke-dashoffset="34"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
