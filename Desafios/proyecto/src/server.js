import express from "express";
import { ProductManager, producto } from "./ProductManager.js";
// console.log(express);

const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

app.get("/cargar", async (req, res) => {
    await producto.addProduct(
        "Counter-Strike: Global Offensive",
        "es un videojuego de disparos en primera persona desarrollado por Valve Corporation y Hidden Path Entertainment",
        15,
        "https://www.clarin.com/img/2021/11/25/dQJKs5qYm_2000x1500__1.jpg",
        "CS-GO",
        25
    );
    await producto.addProduct(
        "World of Warcraft",
        "es un videojuego de rol multijugador masivo en línea desarrollado por Blizzard Entertainment",
        60,
        "static.wikia.nocookie.net/wow/images/7/7d/WoWlogo.png/revision/latest?cb=20090510204154&path-prefix=es",
        "WoW",
        203
    );
    await producto.addProduct(
        "League of Legends,",
        "es un videojuego multijugador de arena de batalla en línea desarrollado y publicado por Riot Games",
        0,
        "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/CNTWUAMXZRF3BPIYPCNPFHOMJQ.jpg",
        "lol",
        1000
    );
    await producto.addProduct(
        "League of Legends,",
        "es un videojuego multijugador de arena de batalla en línea desarrollado y publicado por Riot Games",
        0,
        "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/CNTWUAMXZRF3BPIYPCNPFHOMJQ.jpg",
        "lol",
        1000
    );

    res.send("Hola mundo!");
});

app.get("/saluda", (req, res) => {
    res.send("Hola mundo!");
});

app.get("/products", async (req, res) => {
    let limit = req.query.limit;
    let productos = await producto.getProducts();
    // console.log(productos);
    limit ? (productos = productos.slice(0, limit)) : productos;
    res.json(productos);
});

app.get("/products/:pid", async (req, res) => {
    let pid = req.params.pid;
    let productos = await producto.getProducts();
    productos = productos.filter((x) => x.producId == pid);
    res.json(productos);
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
