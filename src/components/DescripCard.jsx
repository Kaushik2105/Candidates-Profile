import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import "./descripcard.css";

const DescripCard = (props) => {
  const [jdList, setJdList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.post(
          "https://api.weekday.technology/adhoc/getSampleJdJSON",
          { limit: 500, offset: (currentPage - 1) * 10 },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
        setJdList((prevJdList) => [...prevJdList, ...response.data.jdList]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      setCurrentPage((prevPage) => prevPage + 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="page">
      <div className="container">
        {jdList
          .filter((item) => item.minExp >= props.expi)
          .filter((item) => item.minJdSalary >= props.salary)
          .filter((item) => item.jobRole.includes(props.role))

          .map((item) => (
            <Card
              className="card"
              key={item._id}
              role={item.jobRole}
              place={item.location}
              minsal={item.minJdSalary}
              maxsal={item.maxJdSalary}
              about={item.jobDetailsFromCompany}
              exp={item.minExp}
            />
          ))}
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default DescripCard;
