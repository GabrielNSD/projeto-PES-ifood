import React from "react";

import Layout from "../../components/Layout";
import RestaurantTile from "../../components/RestaurantTile";

const mockRestaurants = [
  { name: "Restaurante A", rating: 4.5, deliveryTime: 45, id: 1 },
  { name: "Restaurante B", rating: 4.7, deliveryTime: 35, id: 2 },
  { name: "Restaurante C", rating: 4.2, deliveryTime: 25, id: 3 },
  { name: "Restaurante D", rating: 4.3, deliveryTime: 40, id: 4 },
];

const Home = () => {
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
            />{" "}
            <input
              className="w-4/5 bg-gray-300"
              type="text"
              placeholder="Pesquisar"
            />
          </div>
          <div className="px-4 pb-4">ordenar</div>
          <section className="self-start w-4/5 m-4">
            {mockRestaurants.map((item: any) => (
              <RestaurantTile
                key={item.id}
                name={item.name}
                rating={item.rating}
                deliveryTime={item.deliveryTime}
              />
            ))}
          </section>
        </div>
      </>
    </Layout>
  );
};

export default Home;
