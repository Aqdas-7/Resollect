import React, { useState } from "react";
import { UserButton, useUser } from "@clerk/clerk-react";
import "./Header.css";

const Header = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const { user, isLoaded } = useUser();

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
      <div className="header-top">
        <h2 className="header-title">Portfolio</h2>
        
        <div className="auth-container">
          {isLoaded && user && (
            <div className="user-info">
              <UserButton />
              <span className="user-name">{user.fullName || user.primaryEmailAddress?.emailAddress}</span>
            </div>
          )}
        </div>
      </div>
      
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