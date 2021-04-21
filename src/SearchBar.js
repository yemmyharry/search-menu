import React, { useState, useEffect } from "react";

const people = [
  "Siri",
  "Alexa",
  "Google",
  "Facebook",
  "Twitter",
  "Linkedin",
  "Sinkedin",
];
export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchDay, setSearchDay] = useState([]);
  const [searchNight, setSearchNight] = useState([]);


  const dayHandler = () => {
    const results = people.filter((person) =>
    person.toLowerCase().includes("si")
  );
  return setSearchDay(results);
  }

  useEffect(() => {
    const results = people.filter((person) =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  
  return (
    <div>
    <button onClick={dayHandler}>day</button>
    <button>night</button>
      <ul>
        {searchDay.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
