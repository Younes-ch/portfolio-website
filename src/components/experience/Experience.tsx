import DATA from "../../constants/data";
import Title from "../common/Title";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  return (
    <div className="experience-sc resume-block">
      <div className="container">
        <div className="experience-content dotted-border-left">
          <Title titleText="Professional Experience" />
          <div className="experience-list grid">
            {DATA.professionalExperiences.map((experience) => (
              <ExperienceItem key={experience.id} item={experience} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
