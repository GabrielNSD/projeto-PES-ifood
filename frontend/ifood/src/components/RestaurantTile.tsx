import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import * as marketFunctions from "../store/actions/market";

interface RestaurantTileProps {
  name: string;
  rating: number;
  deliveryTime: number;
  id: number;
}

const RestaurantTile = (props: RestaurantTileProps) => {
  const { name, rating, deliveryTime } = props;
  const histoy = useHistory();
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(marketFunctions.chooseMarket(props));
    histoy.push(`/restaurante/${props.id}`);
    
  };

  return (
    <div className="m-4 my-6 flex w-full" onClick={clickHandler}>
      <div className="m-2 h-10 w-12 rounded-full bg-gray-300"></div>
      <div className="flex flex-col w-full">
        <div>{name}</div>
        <div className="flex justify-between w-3/5">
          <div className="flex items-center">
            <img alt="rating" src="/images/star.png" className="h-3 m-2" />
            {rating}
          </div>
          <div className="p-2 text-sm">{deliveryTime} min</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantTile;
