import DATA from "../../constants/data";
import Title from "../common/Title";
import EducationItem from "./EducationItem";

const Education = () => {
  return (
    <div className="education-sc resume-block">
      <div className="container">
        <div className="education-content dotted-border-left">
          <Title titleText="Education" />
          <div className="education-list grid">
            {DATA.educationalExperiences.map((education) => (
              <EducationItem key={education.id} item={education} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
