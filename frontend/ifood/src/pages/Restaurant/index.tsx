import React from "react";

import Layout from "../../components/Layout";

const Restaurant = (props:any) => {
  const {id} = props.match.params
  console.log(id)
  return (
    <>
      <Layout>
        <div>Restaurante</div>
      </Layout>
    </>
  );
};

export default Restaurant;
