import React, { useState } from "react";
import "./TableControls.css";

const TableControls = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value); // Send search term to parent (Table)
  };

  return (
    <div className="controls-container">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search Loan No..."
        className="search-bar"
        value={searchQuery}
        onChange={handleSearch}
      />

      {/* Buttons */}
      <div className="buttons-container">
        <button className="btn">Select Columns</button>
        <button className="btn">More Filters</button>
      </div>
    </div>
  );
};

export default TableControls;
