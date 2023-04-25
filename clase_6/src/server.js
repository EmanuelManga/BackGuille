// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("hola mundo");
// });

// server.listen(8080, () => {
//   console.log(`Server is running on http://localhost:8080`);
// });

import express from "express";
// console.log(express);

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/saluda", (req, res) => {
  res.send("Hola mundo!");
});

app.get("/ditto", (req, res) => {
  res.json({ id: 3, nombre: "ditto", poder: "copia" });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
