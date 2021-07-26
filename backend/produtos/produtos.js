const Produtos = [
  {
    nome: "Produto 1",
    descricao:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, ipsam non? Rem suscipit exercitationem, ipsum aspernatur possimus",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flearn.compactappliance.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fhamburger.png&f=1&nofb=1",
    preco: 5,
    id: 1,
    quantidade: 10,
    idRestaurante: 1,
  },
  {
    nome: "Produto 2",
    descricao:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, ipsam non? Rem suscipit exercitationem, ipsum aspernatur possimus",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flearn.compactappliance.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fhamburger.png&f=1&nofb=1",
    preco: 6,
    id: 2,
    quantidade: 10,
    idRestaurante: 1,
  },
  {
    nome: "Produto 3",
    descricao:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, ipsam non? Rem suscipit exercitationem, ipsum aspernatur possimus",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flearn.compactappliance.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fhamburger.png&f=1&nofb=1",
    preco: 7,
    id: 3,
    quantidade: 10,
    idRestaurante: 1,
  },

  {
    nome: "Produto 1 res 2",
    descricao:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, ipsam non? Rem suscipit exercitationem, ipsum aspernatur possimus",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flearn.compactappliance.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fhamburger.png&f=1&nofb=1",
    preco: 4,
    id: 1,
    quantidade: 10,
    idRestaurante: 2,
  },
  {
    nome: "Produto 2 res 2",
    descricao:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, ipsam non? Rem suscipit exercitationem, ipsum aspernatur possimus",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flearn.compactappliance.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fhamburger.png&f=1&nofb=1",
    preco: 3,
    id: 2,
    quantidade: 10,
    idRestaurante: 2,
  },
  {
    nome: "Produto 3 res 2",
    descricao:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, ipsam non? Rem suscipit exercitationem, ipsum aspernatur possimus",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flearn.compactappliance.com%2Fwp-content%2Fuploads%2F2015%2F06%2Fhamburger.png&f=1&nofb=1",
    preco: 2,
    id: 3,
    quantidade: 10,
    idRestaurante: 2,
  },
];

//const Produtos = require("./produtos.json");

const getProdutosInner = (idRest) => {
  //retorna todos os produtos de um restaurante
  const floatId = parseFloat(idRest);
  const result = Produtos.filter((item) => item.idRestaurante === floatId);
  return result;
};

const getProdutos = (req, res) => {
  const { id } = req.params;

  const result = getProdutosInner(id);

  if (result.length === 0) {
    res.status(404).json("Produtos não encontrados");
  }

  res.json(result);
};

const getProdutoid = (idRest, idPro) => {
  const result = getProdutosInner(idRest);
  const floatId = parseFloat(idPro);
  const response = result.filter((item) => item.id === floatId);
  return response[0];
};

module.exports = {
  getProdutos: getProdutos,
  getProdutoid: getProdutoid,
};
