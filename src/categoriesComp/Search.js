import React, { useState, useEffect } from "react";


export default function Search({searcher}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };


  useEffect(()=>{
    searcher(searchTerm)
  },[searchTerm])
  
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}
