import React, { useState } from "react";

/* const mockProduct = {
  name: "Produto A",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, ipsam non? Rem suscipit exercitationem, ipsum aspernatur possimus",
  price: 10.99,
  imageUrl:
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flearn.compactappliance.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fhamburger.png&f=1&nofb=1",
  productId: 1,
  restaurantId: 1,
}; */

const ProductTile = (props: any) => {
  const [cont, setCont] = useState(1);
  const product = props.data;
  console.log(product);

  const addOneButtonHandler = () => {
    setCont((prevState) => prevState + 1);
  };

  const removeOneButtonHandler = () => {
    setCont((prevState) => prevState - 1);
  };

  const addProductHandler = () => {
    const productToAdd = {
      title: product.name,
      quantity: cont,
    };
    //api call to add product to basket (use restaurant id and productID)
    apiCall();
    console.log(productToAdd);
  };

  const apiCall = () => {
    fetch("http://localhost:5000/cesta", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        idClient: 1,
        idRest: props.idRest,
        idPro: product.id,
        quantidade: cont,
      }),
    });
  };

  console.log(cont);

  return (
    <div className="flex w-full mb-4">
      <div className="  w-2/5 m-2 self-center">
        <img src={product.imagem} alt="imagem" className="h-15 w-15" />
      </div>
      <div>
        <h1>{product.nome}</h1>
        <p className="text-xs">{product.descricao}</p>
        <div className="flex justify-between">
          <p className="text-sm">R${product.preco}</p>
          <div className="flex items-center">
            <button
              className="bg-red-400 self-center px-1"
              disabled={cont === 1 ? true : false}
              onClick={removeOneButtonHandler}
            >
              -
            </button>
            <p className="px-2">{cont}</p>
            <button
              className="bg-red-400 self-center px-1"
              onClick={addOneButtonHandler}
            >
              +
            </button>
            <button
              className="bg-red-400 self-center p-1 mx-2"
              onClick={addProductHandler}
            >
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
