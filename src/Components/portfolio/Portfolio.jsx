import { Data } from "./Data";
import "./portfolio.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Import Swiper React components
import { Swiper,SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';




const Portfolio = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });
  }, []);
  return (
    <section className="portfolio section" id="portfolio">
      <h2
        className="section__title"
        data-aos="zoom-in-down"
        data-aos-delay="200"
      >
        Portfolio
      </h2>

      <span
        className="section__subtitle"
        data-aos="zoom-in-down"
        data-aos-delay="300"
      >
        Recent Works
      </span>

      <Swiper
        data-aos="zoom-in-down"
        data-aos-delay="500"
        data-aos-anchor-placement="center-bottom"
        className="portfolio__container"
        grabCursor={true}
        spaceBetween={5}
        loop={false}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          577: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description, link }) => {
          return (
            <SwiperSlide className="recentWork__card" key={id}>
              <div className="work__holder">
                <img src={image} alt="1" className="recentWork__image" />

                <div className="work-portfolio__description">
                  <h3 className="work__name">{title}</h3>
                  <p className="work__description">{description}</p>
                  <a
                    href={link}
                    className="button button--flex work__button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Site <i class="bx bx-right-arrow-alt work__arrow"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Portfolio;


