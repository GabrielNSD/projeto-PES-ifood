const express = require("express");
const cors = require("cors");
const cesta = require("./cesta/cesta");
const restaurantes = require("./restaurantes/restaurantes");
const produtos = require("./produtos/produtos");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/restaurantes", (req, res) => {
  //const response = restaurantes.getRestaurantes();
  restaurantes.getRestaurantes(req, res);
  //res.json(response);
});

app.get("/produtos/:id", (req, res) => {
  const { id } = req.params;
  const response = produtos.getProdutos(id);
  return res.send(response);
});

app.get("/cesta/:idcesta", (req, res) => {
  const { idcesta } = req.params;
  const response = cesta.getCesta(idcesta);
  console.log(response);
  return res.send(response);
});

/* app.get("/cesta/add/:idcesta/:idrest/:idprod/:qtd", (req, res) => {
  const { idrest } = req.params;
  const { idprod } = req.params;
  const { idcesta } = req.params;
  const { qtd } = req.params;
  const response = cesta.addProdutoOld(idcesta, idrest, idprod, qtd);
  console.log(response);
  return res.send(response);
}); */

app.put("/cesta", (req, res) => {
  console.log(req.body);
  cesta.addProduto(req, res);
});

/* app.get("/", (req, res) => {
  const response = produtos.getProdutos(2);
  return res.send("get");
});

app.post("/", (req, res) => {
  return res.send("post");
});

app.put("/", (req, res) => {
  return res.send("put");
});

app.delete("/", (req, res) => {
  return res.send("delete");
}); */

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
