const app = require("./server");
const request = require("supertest");

describe("Teste de Rota", () => {
  it("Testando get Restaurantes", async () => {
    const res = await request(app).get("/restaurantes");

    expect(res.body.length).toEqual(4);
    expect(res.body[1]).toHaveProperty("name");
  });
});

/* describe("Teste de funcoes", () => {
    it()
}) */
