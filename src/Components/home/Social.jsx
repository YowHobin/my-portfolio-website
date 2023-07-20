import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Social = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });
    
  }, []);
  return (
    <div className="home__social">
      <div data-aos="fade-right">
        <a
          href="https://m.me/LenardRoyArellano"
          className="home__social-icon"
          target="_blank"
        >
        <i class="uil uil-facebook-messenger-alt"></i>
        </a>
      </div>
      
      <div data-aos="fade-right"
        data-aos-delay="50"
        >
          <a
            href="https://github.com/YowHobin"
            className="home__social-icon"
            target="_blank"
          >
        <i class="uil uil-github-alt"></i>
      </a>
      </div>
      
        <div data-aos="fade-right"
          data-aos-delay="100"
          >
           <a
              href="https://www.linkedin.com/in/lenard-roy-arellano-485845266/"
              className="home__social-icon"
              target="_blank"
            >
                <i class="uil uil-linkedin-alt"></i>
            </a>
       </div>
      
    </div>
  );
};

export default Social;