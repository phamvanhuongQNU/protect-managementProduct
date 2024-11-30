import React from "react";
import { FaFilter } from "react-icons/fa";
import "./Filters.css";
const Filters = () => {
  return (
    <div className="filters">
      <button className="filter-button active">
        <FaFilter /> Filter
      </button>
      <button className="filter-button">Quần Jeans</button>
      <button className="filter-button">Áo Khoác</button>
      <button className="filter-button">Áo Thun</button>
      <button className="filter-button">Quần Sort</button>
    </div>
  );
};

export default Filters;
