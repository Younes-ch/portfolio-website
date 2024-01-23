import DATA from "../../constants/data";
import Title from "../common/Title";
import ProjectItem from "./ProjectItem";

const Project = () => {
  return (
    <div className="project-sc resume-block">
      <div className="container">
        <div className="project-content dotted-border-left">
          <Title titleText="Projects" />
          <div className="project-list grid">
            {DATA.projects.map((project) => (
              <ProjectItem key={project.id} item={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project