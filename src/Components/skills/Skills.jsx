import AcquiredSkills from "./AcquiredSkills";
import Backend from "./Backend";
import Frontend from "./Frontend";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2
        className="section__title"
        data-aos="zoom-in-down"
        data-aos-delay="200"
      >
        Skills
      </h2>
      <span
        className="section__subtitle"
        data-aos="zoom-in-down"
        data-aos-delay="300"
      >
        My Technical Skills
      </span>

      <div className="skills__container container grid">
        <Frontend />

        <Backend />

        <AcquiredSkills />
      </div>
    </section>
  );
};

export default Skills;
