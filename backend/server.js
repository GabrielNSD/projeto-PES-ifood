const express = require("express");

const app = express();

app.get("/", (req, res) => {
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
