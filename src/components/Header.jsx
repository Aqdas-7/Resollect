import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Pre Sarfaesi",
    "NPA",
    "13(3) Responses",
    "Symbolic Possession",
    "DM Order",
    "Physical Possessions",
    "Auctions",
  ];

  return (
    <div className="header-container">
      <h2 className="header-title">Portfolio</h2>
      <div className="filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={activeFilter === filter ? "filter-btn active" : "filter-btn"}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
