import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Layout from "../../components/Layout";

const mockList = [
  { name: "Produto A", price: 5, id: 1, imageUrl: "" },
  { name: "Produto B", price: 6, id: 2, imageUrl: "" },
];

const Basket = () => {
  const [listData, setListData] = useState(mockList);
  const [subTotal, setSubTotal] = useState(0);
  const history = useHistory();
  const taxaDeEntrega = 5;

  useEffect(() => {
    setSubTotal(mockList.reduce((acc, cur) => acc + cur.price, 0));
  }, [listData]);
  return (
    <Layout>
      <div className="flex flex-col flex-1">
        <div>Cesta</div>
        <h2 className="w-screen self-start">Itens</h2>
        <section className="w-screen border-2 border-black flex flex-col flex-5">
          {mockList.map((item: any) => (
            <div key={item.id} className="flex justify-between px-10">
              <div>
                <h2>{item.name}</h2>
                <p>{item.price}</p>
              </div>
              <div>Image</div>
            </div>
          ))}
        </section>
        <button
          className="self-center"
          onClick={() => {
            history.goBack();
          }}
        >
          Adicionar mais produtos
        </button>
        <section>
          <div className="flex justify-between px-10">
            <span>Sub-total</span>
            <span>R$ {subTotal.toFixed(2).toString().replace(".", ",")}</span>
          </div>
          <div className="flex justify-between px-10">
            <span>Taxa de entrega</span>
            <span>
              R$ {taxaDeEntrega.toFixed(2).toString().replace(".", ",")}
            </span>
          </div>
          <div className="flex justify-between px-10">
            <span>Total</span>
            <span>
              R${" "}
              {(subTotal + taxaDeEntrega)
                .toFixed(2)
                .toString()
                .replace(".", ",")}
            </span>
          </div>
        </section>
        <button>Finalizar Pedido</button>
      </div>
    </Layout>
  );
};

export default Basket;
