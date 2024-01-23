import DATA from "../../constants/data";
import Title from "../common/Title";
import HobbiesItem from "./HobbiesItem";

const Hobbies = () => {
  return (
    <div className="hobbies-sc resume-block">
      <div className="container">
        <div className="hobbies-content dotted-border-left">
          <Title titleText="Hobbies & Interests" />
          <div className="hobbies-list flex items-center flex-wrap">
            {DATA.hobbiesAndInterests.map((hobby) => (
              <HobbiesItem key={hobby.id} item={hobby} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
