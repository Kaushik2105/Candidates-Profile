import { useState } from "react";
import DescripCard from "./DescripCard";
import "./selector.css";

const Selectors = () => {
  const options = [
    "Frontend",
    "Backend",
    "Fullstack",
    "iOS",
    "Flutter",
    "React Native",
    "Android",
    "Tech Lead",
    "DevOps",
  ];

  const [role, setRole] = useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <>
      <div>
        <input
          list="roles"
          placeholder="Roles"
          className="w-44 sm:w-80 rounded-md border-2 border-black"
          value={role}
          onChange={handleChange}
        />
        <datalist id="roles">
          {options.map((option, index) => (
            <select key={index}>
              <optgroup label="ENGINEERING">
                <option value={option}></option>
              </optgroup>
              <optgroup label="SALES">
                <option value="Sales Development  Representative"></option>
              </optgroup>
            </select>
          ))}
        </datalist>
      </div>
      <DescripCard role={role} />
    </>
  );
};

export default Selectors;
