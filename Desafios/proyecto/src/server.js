import express from "express";
import { ProductManager, producto } from "./ProductManager.js";
// console.log(express);

const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

app.get("/saluda", (req, res) => {
    res.send("Hola mundo!");
});

app.get("/products", async (req, res) => {
    let productos = await producto.getProducts();
    // console.log(productos);
    res.json(productos);
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
