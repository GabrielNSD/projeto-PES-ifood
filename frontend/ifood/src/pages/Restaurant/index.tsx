import React from "react";
import { useSelector } from "react-redux";

import Layout from "../../components/Layout";
import ProductTile from "../../components/ProductTile";

const Restaurant = (props: any) => {
  const marketData = useSelector((state: any) => state.market);
  const { id } = props.match.params;
  console.log(id);
  console.log(marketData);

  return (
    <>
      <Layout>
        <div>Header</div>
        <div>Informacoes do Restaurante</div>
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
      </Layout>
    </>
  );
};

export default Restaurant;
