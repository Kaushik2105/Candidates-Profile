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

  return (
    <>
      <div className="inputs">
        <div>
          <input
            list="roles"
            placeholder="Roles"
            className="dropin"
            value={role}
            onChange={handleRole}
          />

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
        </div>
        <div>
          <input
            list="exp"
            placeholder="Experience"
            className="dropin"
            value={experience}
            onChange={handleExp}
          />

          <datalist id="exp">
            <select>
              {Experience.map((option, index) => (
                <option key={index} value={option}></option>
              ))}
            </select>
          </datalist>
        </div>
        <div>
          <input
            list="salary"
            placeholder="Minimum Base Pay Salary"
            className="dropin"
            value={sala}
            onChange={handleSal}
          />
        </div>
      </div>
      <DescripCard role={role} expi={experience} salary={sala} />
    </>
  );
};

export default Selectors;
