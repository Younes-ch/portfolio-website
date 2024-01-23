import DATA from "../../constants/data";
import Title from "../common/Title";
import ActivitiesItem from "./ActivitiesItem";

const Activities = () => {
  return (
    <div className="activities-sc resume-block">
      <div className="container">
        <div className="activities-content dotted-border-left">
          <Title titleText="Activities & Leadership" />
          <div className="activities-list grid">
            {DATA.activitiesAndLeadership.map((activity) => (
              <ActivitiesItem key={activity.id} item={activity} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
