import Contact from "../components/Contact/Contact";
import Activities from "../components/activities/Activities";
import Certificate from "../components/certificate/Certificate";
import Education from "../components/education/Education";
// import Experience from "../components/experience/Experience";
import Header from "../components/header/Header";
import Hobbies from "../components/hobbies/Hobbies";
import Project from "../components/project/Project";
import Skill from "../components/skill/Skill";

const HomePage = () => {
  return (
    <div className="page-container">
      <Header />
      <Education />
      {/* <Experience /> */}
      <Project />
      <Activities />
      <Skill />
      <Certificate />
      <Hobbies />
      <Contact />
    </div>
  );
};

export default HomePage;
