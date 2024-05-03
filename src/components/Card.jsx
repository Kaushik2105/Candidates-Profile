import { useState } from "react";
import "./card.css";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 300; // Maximum number of characters to show initially

  const toggleExpanded = () => {
    setExpanded(!expanded); //Helps to expand or shrink the paragraph
  };

  return (
    <div className="card">
      <div className="poster">⏳ Posted 10 days ago</div>
      <div className="middle-card">
        <h3 className="role">{props.role}</h3>
        <p className="location">{props.place}</p>
        <p className="salary">
          Estimated Salary: ₹{props.minsal} - ₹{props.maxsal} LPA✅
        </p>
      </div>
      <div className="about">
        <h4>About Company:</h4>
        <p>
          {expanded ? props.about : props.about.slice(0, maxLength)}
          {props.about.length > maxLength && (
            <>
              {!expanded ? (
                <>
                  <span>...</span>
                  <button className="view" onClick={toggleExpanded}>
                    View more
                  </button>
                </>
              ) : (
                <button className="view" onClick={toggleExpanded}>
                  View less
                </button>
              )}
            </>
          )}
        </p>
      </div>
      <div className="exp">
        <p className="min-exp">Minimum Experience</p>
        <p className="year">{props.exp} years</p>
      </div>
      <div className="both-button">
        <button className="button1">Easy Apply</button>
        <button className="button2">Unlock referral asks</button>
      </div>
    </div>
  );
};

export default Card;
