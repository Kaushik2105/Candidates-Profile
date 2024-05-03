import { useState } from "react";
import "./card.css";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 300; // Maximum number of characters to show initially

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="card">
      <div className="poster space-x-0">⏳ Posted 10 days ago</div>
      <div className="mt-4">
        <h3 className="role">{props.role}</h3>
        <p className="text-zinc-950">{props.place}</p>
        <p className="salary">
          Estimated Salary: ₹{props.minsal} - ₹{props.maxsal} LPA✅
        </p>
      </div>
      <div className="mt-4">
        <h4 className="text-zinc-700 font-semibold">About Company:</h4>
        <p className="text-zinc-600 text-sm">
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
      <div className="mt-4">
        <p className="text-zinc-600 ">Minimum Experience</p>
        <p className="text-zinc-900 ">{props.exp} years</p>
      </div>
      <div className="mt-6 flex flex-col">
        <button className="bg-green-500 dark:bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600">
          Easy Apply
        </button>
        <button className="bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 mt-2">
          Unlock referral asks
        </button>
      </div>
    </div>
  );
};

export default Card;
