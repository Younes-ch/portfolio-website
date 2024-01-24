import { Link } from "react-router-dom";
import Button from "../common/Button";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <div className="not-found-content">
          <h1 className="not-found-title">Page not Found</h1>
          <p className="not-found-text">
            Oops! The page you are looking for does not exist.
          </p>
          <Link to="/">
            <Button text="Back to Home" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
