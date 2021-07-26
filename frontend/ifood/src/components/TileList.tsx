import React from "react";

import RestaurantTile from "./RestaurantTile";

const TileList = (props: any) => {
  return (
    <>
      {props.data.map((item: any) => (
        <RestaurantTile
          key={item.id}
          name={item.name}
          rating={item.rating}
          deliveryTime={item.deliveryTime}
          id={item.id}
        />
      ))}
    </>
  );
};

export default TileList;
