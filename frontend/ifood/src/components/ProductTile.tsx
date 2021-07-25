import React, { useState } from "react";

const mockProduct = {
  name: "Produto A",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, ipsam non? Rem suscipit exercitationem, ipsum aspernatur possimus",
  price: 10.99,
  imageUrl:
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flearn.compactappliance.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fhamburger.png&f=1&nofb=1",
};

const ProductTile = (props: any) => {
  const [cont, setCont] = useState(1);

  const addOneButtonHandler = () => {
    setCont((prevState) => prevState + 1);
  };

  const removeOneButtonHandler = () => {
    setCont((prevState) => prevState - 1);
  };

  console.log(cont);

  return (
    <div className="flex border-2 border-black w-full mb-4">
      <div className="border-2 border-red-200 w-2/5 m-2 self-center">
        <img src={mockProduct.imageUrl} alt="imagem" className="h-15 w-15" />
      </div>
      <div>
        <h1>Product Title</h1>
        <p className="text-xs">{mockProduct.description}</p>
        <div className="flex justify-between">
          <p className="text-sm">R${mockProduct.price}</p>
          <div className="flex items-center">
            <button
              className="border-2 bg-red-400 self-center"
              disabled={cont === 1 ? true : false}
              onClick={removeOneButtonHandler}
            >
              -
            </button>
            <p>{cont}</p>
            <button
              className="border-2 bg-red-400 self-center"
              onClick={addOneButtonHandler}
            >
              +
            </button>
            <button>Adicionar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
