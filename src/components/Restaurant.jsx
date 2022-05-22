import React from "react";
import Restaurants from "./Restaurants";



const Restaurant = (props) => {
  return (
    <div className="container divider">
      <div className="cards">
        {props.restaurant.map((restaurant) => {
          return <Restaurants key={restaurant.id} restaurant={restaurant} />
        })}
      </div>
    </div>
  );
};

export default Restaurant;
