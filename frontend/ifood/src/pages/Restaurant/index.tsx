import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Layout from "../../components/Layout";
import ProductTile from "../../components/ProductTile";

const url =
  "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.paellacreativa.com.ar%2Fwp-content%2Fuploads%2F2012%2F07%2Flogos_creativos_restaurantes_1.gif&f=1&nofb=1";

const Restaurant = (props: any) => {
  const marketData = useSelector((state: any) => state.market);
  const history = useHistory();
  const { id } = props.match.params;
  console.log(id);
  console.log(marketData);

  return (
    <>
      <Layout>
        <div
          className="bg-cover w-full bg-center h-20 bg-no-repeat items-center flex"
          style={{ backgroundImage: `url(${url})` }}
        >
          <button
            onClick={() => {
              history.goBack();
            }}
          >
            <img alt="voltar" src="/images/backButton.png" className="ml-4" />
          </button>
        </div>

        <div className="p-4 w-full">
          <h2 className="text-lg font-bold">{marketData.name}</h2>
          <div className="flex justify-between w-full">
            <div className="flex items-center">
              <img alt="rating" src="/images/star.png" className="h-3 m-2" />
              {marketData.rating}
            </div>
            <div className="p-2 text-sm">
              Tempo médio de entrega: {marketData.deliveryTime} min
            </div>
          </div>
        </div>
        <section className="p-4">
          <ProductTile />
          <ProductTile />
          <ProductTile />
          <ProductTile />
        </section>
      </Layout>
    </>
  );
};

export default Restaurant;
