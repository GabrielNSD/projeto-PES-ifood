//criar um array de cestas tal qual o de produtos - OK

//listar produtos na cesta - OK

//adicionar produto - OK

//remover produtos

//remover todos os produtos

const fs = require("fs");
const cwd = process.cwd();
const produto = require("../produtos/produtos");

class Cesta {
  constructor(idC, idClient, objarray) {
    this.idCesta = idC;
    this.idCliente = idClient;
    this.produtos = []; //objarray || [];
  }
}
//const cestas = JSON.parse(cestas);
ola = new Cesta(0, 0, produto.getProdutoid(2, 1));
//listcestas = [ola];

const getCesta = (idClient) => {
  let listcestas = require("./cestas.json");

  //console.log(listcestas);

  for (let i = 0; i < listcestas.length; i++) {
    if (listcestas[i].idCliente == idClient) {
      //  console.log(listcestas[i].produtos);
      return listcestas[i].produtos;
    }
  }

  //novaCesta= new cesta(listcestas.lenght,idClient)
  novaCesta = new Cesta(parseFloat(idClient), parseFloat(idClient));
  listcestas.push(novaCesta);
  //console.log(listcestas.length);

  fs.writeFile(
    cwd + "/cesta/cestas.json",
    JSON.stringify(listcestas, null, 4),
    (err) => {
      if (err) {
        console.log("erro ao gravar cestas ", err);
      }
    }
  );

  return listcestas[listcestas.length - 1].produtos;
};

const addProduto = (req, res) => {
  //const { id } = req.params;
  //console.log(req.body);
  const { idClient, idRest, idPro, quantidade } = req.body;
  const cest = getCesta(idClient);
  const prodAdc = produto.getProdutoid(idRest, idPro);
  //console.log("prodadc ", prodAdc);
  //cest.produtos = prodAdc;
  cest.push({
    ...prodAdc,
    quantidade: parseFloat(quantidade),
    preco: prodAdc.preco * parseFloat(quantidade),
  });
  //console.log("cest ", cest);
  //console.log(cest.produtos);

  const cestas = require("./cestas.json");
  //console.log("AAAA ", typeof cestas[0]);
  fs.writeFile(
    cwd + "/cesta/cestas.json",
    JSON.stringify(cestas, null, 4),
    (err) => {
      if (err) {
        console.log("erro ao gravar cestas ", err);
        res.status(400).json("erro ao gravar cestas");
      }
    }
  );
};

/* const addProdutoOld = (idClient, idrest, idPro, quantidade) => {
  const cest = getCesta(idClient);
  const prodAdc = produto.getProdutoid(idrest, idPro);
  //console.log("prodadc ", prodAdc);
  //cest.produtos = prodAdc;
  cest.push({ ...prodAdc, quantidade: parseFloat(quantidade) });
  //console.log("cest ", cest);
  //console.log(cest.produtos);

  const cestas = require("./cestas.json");
  //console.log("AAAA ", typeof cestas[0]);
  fs.writeFile(
    cwd + "/cesta/cestas.json",
    JSON.stringify(cestas, null, 4),
    (err) => {
      if (err) {
        console.log("erro ao gravar cestas ", err);
      }
    }
  );
};
 */
module.exports = {
  getCesta: getCesta,
  addProduto: addProduto,
  //addProdutoOld: addProdutoOld,
};
