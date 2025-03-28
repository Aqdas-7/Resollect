import React from "react";
import { FaHome, FaBell, FaFileAlt, FaGavel, FaUpload, FaUser, FaKey, FaTh } from "react-icons/fa";
import "./Sidebar.css"; // Import the CSS file

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">🟦 Resollect</div>

      <ul className="nav-list">
        <li>
          <FaTh className="icon" />
          <span>Dashboard</span>
        </li>
        <li className="active">
          <FaHome className="icon" />
          <span>Portfolio</span>
        </li>
        <li>
          <FaBell className="icon" />
          <span>Notifications</span>
        </li>
        <li>
          <FaFileAlt className="icon" />
          <span>Notices</span>
        </li>
        <li>
          <FaGavel className="icon" />
          <span>Auction</span>
        </li>
        <li>
          <FaUpload className="icon" />
          <span>Data Upload</span>
        </li>
        <li>
          <FaTh className="icon" />
          <span>Control Panel</span>
        </li>
        <li>
          <FaUser className="icon" />
          <span>User Management</span>
        </li>
        <li>
          <FaKey className="icon" />
          <span>Permissions</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
