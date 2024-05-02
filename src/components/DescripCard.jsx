import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const DescripCard = () => {
  const [jdList, setJdList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.post(
          "https://api.weekday.technology/adhoc/getSampleJdJSON",
          { limit: 100, offset: (currentPage - 1) * 10 },
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
  }, [currentPage]); // Fetch data when currentPage changes

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
  }, []); // Add scroll event listener when component mounts

  return (
    <div>
      <h1>List of Job Details:</h1>
      {jdList.map((item) => (
        <div
          key={item.jdUid}
          className="max-w-sm mx-auto bg-white overflow-hidden"
        >
          <Card
            role={item.jobRole}
            place={item.location}
            minsal={item.minJdSalary}
            maxsal={item.maxJdSalary}
            about={item.jobDetailsFromCompany}
            exp={item.minExp}
          />
        </div>
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default DescripCard;
