import React from "react";
import "../App.css";
import Payment from "./Payment";

const Filters = ({ filters, currentFilterBy, updateFilter }) => {
  return (
    <div className="container restaurants">
      <h1>50 restaurants</h1>
      <div className="restaurant-options">
        <div className="filters">
          {Object.entries(filters).map(([key, value]) => {
            return (
              <div
              key={key}
              className="restaurant-option"
              onClick={() => updateFilter(key)}
              >
                {value}
              </div>
            );
          })}
        </div>
        <div className="select">
          <Payment />
          </div>
      </div>
    </div>
  );
};

export default Filters;
