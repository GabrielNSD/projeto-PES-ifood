const Produtos = [
  {
    nome: "Produto 1",
    descricao: "Lorem ipsum",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flearn.compactappliance.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fhamburger.png&f=1&nofb=1",
    preco: 5,
    id: 1,
    quantidade: 10,
    idRestaurante: 1,
  },
  {
    nome: "Produto 2",
    descricao: "Lorem ipsum",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flearn.compactappliance.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fhamburger.png&f=1&nofb=1",
    preco: 5,
    id: 2,
    quantidade: 10,
    idRestaurante: 1,
  },
  {
    nome: "Produto 3",
    descricao: "Lorem ipsum",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flearn.compactappliance.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fhamburger.png&f=1&nofb=1",
    preco: 5,
    id: 3,
    quantidade: 10,
    idRestaurante: 1,
  },
  {
    nome: "Produto 4",
    descricao: "Lorem ipsum",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flearn.compactappliance.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fhamburger.png&f=1&nofb=1",
    preco: 5,
    id: 4,
    quantidade: 10,
    idRestaurante: 1,
  },

  {
    nome: "Produto 1 res 2",
    descricao: "Lorem ipsum",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flearn.compactappliance.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fhamburger.png&f=1&nofb=1",
    preco: 5,
    id: 1,
    quantidade: 10,
    idRestaurante: 2,
  },
  {
    nome: "Produto 2 res 2",
    descricao: "Lorem ipsum",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flearn.compactappliance.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fhamburger.png&f=1&nofb=1",
    preco: 5,
    id: 2,
    quantidade: 10,
    idRestaurante: 2,
  },
  {
    nome: "Produto 3 res 2",
    descricao: "Lorem ipsum",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flearn.compactappliance.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fhamburger.png&f=1&nofb=1",
    preco: 5,
    id: 3,
    quantidade: 10,
    idRestaurante: 2,
  },
  {
    nome: "Produto 4 res 2",
    descricao: "Lorem ipsum",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flearn.compactappliance.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fhamburger.png&f=1&nofb=1",
    preco: 5,
    id: 4,
    quantidade: 10,
    idRestaurante: 2,
  },
];

const getProdutos = (id) => {
  const floatId = parseFloat(id);
  const teste = Produtos.filter((item) => item.idRestaurante === floatId);
  //console.log(teste);
  return teste;
};

const getProdutoid = (id,idpro) => {
       const result=getProdutos(id);
       const floatId = parseFloat(idpro);
       const teste = result.filter((item) => item.id === floatId);
       //console.log(teste);
       return teste;
     };

module.exports = {
  getProdutos: getProdutos,
  getProdutoid: getProdutoid,
};
