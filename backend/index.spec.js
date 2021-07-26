const request = require("supertest");

const app = require("./server");

const produtos = require("./produtos/produtos");
const cesta = require("./cesta/cesta");

describe("Teste de Rota", () => {
  it("Testando get Restaurantes", async () => {
    const res = await request(app).get("/restaurantes");

    expect(res.body.length).toEqual(4);
    expect(res.body[1]).toHaveProperty("name");
  });

  it("Testando get Produtos", async () => {
    const res = await request(app).get("/produtos/1");

    expect(res.body.length).toEqual(3);

    const res1 = await request(app).get("/produtos/5");

    expect(res1.body).toEqual("Produtos não encontrados");
  });

  it("Testando cestas", async () => {
    await request(app)
      .put("/cesta")
      .send({ idClient: 2, idRest: 1, idPro: 1, quantidade: 3 });

    const res = await request(app).get("/cesta/2");

    expect(res.body.length).toEqual(1);
  });
});

describe("Teste de funcoes", () => {
  it("Testando funcoes de Produtos", () => {
    const res = produtos.getProdutoid(1, 1);

    expect(res).toHaveProperty("nome");
  });
});
