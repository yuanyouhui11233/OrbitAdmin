import React from "react";
import { Link } from "react-router-dom";
import IconComponent from "../common/IconComponent";

const MenuItem = ({ icon, title, path, isActive }) => {
  return (
    <Link to={path} className={`menu-item ${isActive ? "active" : ""}`}>
      <IconComponent icon={icon} className="menu-icon" />
      <span className="menu-title">{title}</span>
    </Link>
  );
};

export default MenuItem;
