import { useState } from "react";
import DescripCard from "./DescripCard";
import "./selector.css";

const Selectors = () => {
  const Roles = [
    "frontend",
    "backend",
    "fullstack",
    "ios",
    "flutter",
    "React Native",
    "android",
    "tech lead",
    "devops",
  ];
  const Experience = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const Salaries = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  const [role, setRole] = useState("");
  const [experience, setExperience] = useState(null);
  const [sala, setSala] = useState(null);

  const handleRole = (event) => {
    setRole(event.target.value);
  };

  const handleExp = (event) => {
    setExperience(event.target.value);
  };

  const handleSal = (event) => {
    setSala(event.target.value);
  };

  const handleCancelRole = () => {
    setRole("");
  };

  const handleCancelExp = () => {
    setExperience(null);
  };

  const handleCancelSal = () => {
    setSala(null);
  };

  return (
    <>
      <div className="inputs">
        <div className={`input-container ${role && "selected"}`}>
          <input
            list="roles"
            placeholder="Roles"
            className="dropin"
            value={role}
            onChange={handleRole}
          />
          {role && (
            <button onClick={handleCancelRole} className="cancel-button">
              &times;
            </button>
          )}
        </div>
        <datalist id="roles">
          <select>
            {Roles.map((option, index) => (
              <optgroup key={index} label="ENGINEERING">
                <option value={option}></option>
              </optgroup>
            ))}
            <optgroup label="SALES">
              <option value="Sales Development  Representative"></option>
              <option value="Account Executive"></option>
            </optgroup>
          </select>
        </datalist>

        <div className={`input-container ${experience && "selected"}`}>
          <input
            list="exp"
            placeholder="Experience"
            className="dropin"
            value={experience || ""}
            onChange={handleExp}
          />
          {experience && (
            <button onClick={handleCancelExp} className="cancel-button">
              &times;
            </button>
          )}
        </div>
        <datalist id="exp">
          <select>
            {Experience.map((option, index) => (
              <option key={index} value={option}></option>
            ))}
          </select>
        </datalist>

        <div className={`input-container ${sala && "selected"}`}>
          <input
            list="salary"
            placeholder="Minimum Base Pay Salary"
            className="dropin"
            value={sala || ""}
            onChange={handleSal}
          />
          {sala && (
            <button onClick={handleCancelSal} className="cancel-button">
              &times;
            </button>
          )}
        </div>
        <datalist id="salary">
          <select>
            {Salaries.map((option, index) => {
              <option key={index} value={option}></option>;
            })}
          </select>
        </datalist>
      </div>
      <DescripCard role={role} expi={experience} salary={sala} />
    </>
  );
};

export default Selectors;
