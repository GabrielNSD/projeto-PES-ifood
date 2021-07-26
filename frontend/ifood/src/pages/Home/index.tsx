import React, { useEffect, useState } from "react";

import Layout from "../../components/Layout";
//import RestaurantTile from "../../components/RestaurantTile";
import TileList from "../../components/TileList";

interface RestaurantData {
  name: string;
  rating: number;
  deliveryTime: number;
  id: number;
}

const mockRestaurants = [
  { name: "Restaurante J", rating: 1, deliveryTime: 45, id: 1 },
  { name: "Restaurante K", rating: 2, deliveryTime: 35, id: 2 },
  { name: "Restaurante L", rating: 3, deliveryTime: 25, id: 3 },
  { name: "Restaurante M", rating: 4, deliveryTime: 40, id: 4 },
];

const Home = () => {
  const [restaurants, setRestaurants] =
    useState<RestaurantData[]>(mockRestaurants);
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  const [selection, setSelection] = useState("");
  const [searchField, setSearchField] = useState("");

  const apiCall = async (link: string) => {
    const res = await fetch(link);
    const data = await res.json();
    setRestaurants(data);
  };

  useEffect(() => {
    setFilteredRestaurants(
      restaurants.filter((restaurant: RestaurantData) => {
        return restaurant.name
          .toLowerCase()
          .includes(searchField.toLowerCase());
      })
    );
  }, [searchField, restaurants]);

  useEffect(() => {
    //console.log(selection);
    const tempArray = filteredRestaurants;
    if (selection === "temp") {
      setFilteredRestaurants(mockRestaurants);
      setFilteredRestaurants(
        tempArray.sort((a: any, b: any) => b.rating - a.rating)
      );
    } else if (selection === "class") {
      setFilteredRestaurants((filteredRestaurants) =>
        filteredRestaurants.sort(
          (a: any, b: any) => b.deliveryTime - a.deliveryTime
        )
      );
    } else {
      setFilteredRestaurants((filteredRestaurants) =>
        filteredRestaurants.sort((a, b) => a.name.localeCompare(b.name))
      );
    }
  }, [filteredRestaurants, selection]);

  useEffect(() => {
    apiCall("http://localhost:5000/restaurantes");
  }, []);

  console.log(filteredRestaurants);
  return (
    <Layout>
      <>
        <div className="flex flex-col w-screen items-center">
          <h1 className="pt-4 text-xl">Restaurantes</h1>
          <div className="flex bg-gray-300 m-4 w-4/5 items-center pl-4 p-1 rounded-3xl">
            <img
              alt="pesquisar"
              src="/images/search.png"
              className="h-5 pr-2"
            />
            <input
              className="w-4/5 bg-gray-300"
              type="text"
              placeholder="Pesquisar"
              onChange={(e) => {
                setSearchField(e.target.value);
              }}
            />
          </div>
          <select
            className="px-4 pb-4"
            onChange={(e) => setSelection(e.target.value)}
          >
            <option>Ordenar</option>
            <option value="class">Classificação</option>
            <option value="temp">Temp. médio de entrega</option>
          </select>
          <section className="self-start w-4/5 m-4">
            {/* {filteredRestaurants.map((item: any) => (
              <RestaurantTile
                key={item.id}
                name={item.name}
                rating={item.rating}
                deliveryTime={item.deliveryTime}
                id={item.id}
              />
            ))} */}
            <TileList data={filteredRestaurants} />
          </section>
        </div>
      </>
    </Layout>
  );
};

export default Home;
