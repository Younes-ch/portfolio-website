import DATA from "../../constants/data";
import Title from "../common/Title";
import SkillItem from "./SkillItem";

const Skill = () => {
  return (
    <div className="skill-sc resume-block">
      <div className="container">
        <div className="skill-content dotted-border-left">
          <Title titleText="Skills" />
          <div className="skill-list grid">
            {DATA.skills.map((skill) => (
              <SkillItem key={skill.id} item={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
