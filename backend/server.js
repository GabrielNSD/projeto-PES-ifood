const express = require("express");
const cors = require("cors");
const cesta = require("./cesta/cesta");
const restaurantes = require("./restaurantes/restaurantes");
const produtos = require("./produtos/produtos");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/restaurantes", (req, res) => {
  restaurantes.getRestaurantes(req, res);
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

app.put("/cesta", (req, res) => {
  console.log(req.body);
  cesta.addProduto(req, res);
});

module.exports = app;
