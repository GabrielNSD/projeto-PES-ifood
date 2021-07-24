const express = require("express");
const cesta = require("./cesta/cesta");
const restaurantes = require("./restaurantes/restaurantes");
const produtos = require("./produtos/produtos");

const app = express();

app.get("/restaurantes", (req, res) => {
  const response = restaurantes.getRestaurantes();
  return res.send(response);
});

app.get("/produtos/:id", (req, res) => {
  const { id } = req.params;
  const response = produtos.getProdutos(id);
  return res.send(response);
});

app.get("/", (req, res) => {
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
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
