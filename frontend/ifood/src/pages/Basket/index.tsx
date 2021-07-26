import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Layout from "../../components/Layout";

const mockList = [
  { name: "Produto A", price: 5, id: 1, imageUrl: "" },
  { name: "Produto B", price: 6, id: 2, imageUrl: "" },
];

const Basket = () => {
  const [listData, setListData] = useState<any[]>([]);
  const [subTotal, setSubTotal] = useState(0);
  const history = useHistory();
  const taxaDeEntrega = 5;
  const userId = 1;

  const apiCall = async (link: string) => {
    const res = await fetch(link);
    const data = await res.json();
    setListData(data);
  };

  useEffect(() => {
    //chama api
    apiCall(`http://localhost:5000/cesta/${userId}`);
    //setListaData(resultadoAPI)
  }, []);
  console.log("CESTA ", listData);
  useEffect(() => {
    setSubTotal(listData.reduce((acc, cur) => acc + cur.preco, 0));
  }, [listData]);
  return (
    <Layout>
      <div className="flex flex-col flex-1">
        <h1 className="self-center p-6 text-xl ">Cesta</h1>
        <h2 className="w-screen self-start text-medium text-lg p-6">Itens</h2>
        <section className="w-screen flex flex-col flex-5">
          {listData.map((item: any) => (
            <div key={item.id} className="flex justify-between px-10">
              <div>
                <div className="flex">
                  <span className="px-2">{item.quantidade}x</span>
                  <h2>{item.nome}</h2>
                </div>
                <p className="px-2">
                  R${item.preco.toFixed(2).toString().replace(".", ",")}
                </p>
              </div>
              <div>
                <img alt="produto" src={item.imagem} className="h-10" />
              </div>
            </div>
          ))}
        </section>
        <button
          className="self-center bg-red-400 p-3 m-4"
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
        <button className="self-center bg-red-400 p-3 m-4">
          Finalizar Pedido
        </button>
      </div>
    </Layout>
  );
};

export default Basket;
