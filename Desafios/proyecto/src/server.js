import express from "express";
import { ProductManager, producto } from "./ProductManager.js";
// console.log(express);

const app = express();
const port = 8080;

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
        "Assassin's Creed Valhalla",
        "Un juego de rol de acción en mundo abierto. Encarna a Eivor, un guerrero vikingo, y lidera a tu clan en la conquista de Inglaterra.",
        50,
        "https://i.ytimg.com/vi/SSo_EIwHSd4/maxresdefault.jpg",
        "ACV",
        20
    );
    await producto.addProduct(
        "Grand Theft Auto V",
        "Un juego de acción y aventuras en mundo abierto. Sigue las vidas entrelazadas de tres personajes y lleva a cabo misiones en Los Santos.",
        30,
        "https://static.wikia.nocookie.net/gtawiki/images/2/2b/GTAV.png/revision/latest?cb=20180708115457&path-prefix=es",
        "GTA V",
        15
    );
    await producto.addProduct(
        "Minecraft",
        "Un juego de aventuras y construcción en mundo abierto. Explora y construye en un mundo de bloques.",
        20,
        "https://www.mobygames.com/images/shots/l/915017-minecraft-xbox-one-edition-xbox-one-screenshot-world.jpg",
        "MC",
        50
    );
    await producto.addProduct(
        "Red Dead Redemption 2",
        "Un juego de acción y aventuras en mundo abierto. Encarna a Arthur Morgan, un forajido en el Salvaje Oeste, y sobrevive en un mundo implacable.",
        40,
        "https://images.pushsquare.com/95de703fb3b7c/red-dead-redemption-2-ps4-playstation-4.original.jpg",
        "RDR2",
        10
    );
    await producto.addProduct(
        "Fortnite",
        "Un juego de batalla real en línea y multijugador. Salta en paracaídas a una isla, consigue armas y elimina a tus oponentes para ganar.",
        0,
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/11/fortnite-battle-royale.jpg?itok=9-1cAK-z",
        "Fortnite",
        100
    );
    await producto.addProduct(
        "Among Us",
        "Un juego de deducción y engaño en línea y multijugador. Descubre quién es el impostor entre la tripulación de la nave espacial.",
        5,
        "https://cdn.gamer-network.net/2020/usgamer/among-us-featured-image.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/among-us-featured-image.jpg",
        "AU",
        30
    );
    await producto.addProduct(
        "Overwatch",
        "Un juego de disparos en línea y multijugador. Escoge a un héroe y lucha en equipos de seis para cumplir los objetivos del mapa.",
        25,
        "https://cdn.vox-cdn.com/thumbor/Z0ayAL-AV7zX4_c4tbKj0pkrqxo=/0x0:3840x2160/1200x800/filters:focal(1536x464:2192x1120)/cdn.vox-cdn.com/uploads/chorus_image/image/54632901/overwatch.0.jpg",
        "OW",
        15
    );
    await producto.addProduct(
        "The Legend of Zelda: Breath of the Wild",
        "Un juego de aventuras y acción en mundo abierto. Explora y sobrevive en el reino de Hyrule y derrota a Ganon.",
        45,
        "https://cdn.vox-cdn.com/thumbor/kqBDjjlzWdkS2HTxj0DQNhQOsjA=/0x0:2040x1360/1200x800/filters:focal(860x540:1180x860)/cdn.vox-cdn.com/uploads/chorus_image/image/63711877/botw_review.0.jpg",
        "Zelda BotW",
        8
    );
    await producto.addProduct(
        "Dark Souls III",
        "Un juego de acción y aventuras en tercera persona. Sobrevive en un mundo oscuro y peligroso, lucha contra jefes épicos y consigue almas.",
        20,
        "https://cdn.vox-cdn.com/thumbor/mN7Mny2flBb5o5n5Q5AjLlRkEAs=/0x0:1920x1080/1200x800/filters:focal(811x58:1123x370)/cdn.vox-cdn.com/uploads/chorus_image/image/49303103/darksoulsiii_screen_01_1920.0.jpg",
        "DS III",
        12
    );
    await producto.addProduct(
        "Halo Infinite",
        "Un juego de disparos en primera persona en mundo abierto. Encarna al Jefe Maestro y lucha contra los Banished en el anillo de Zeta Halo.",
        70,
        "https://cdn.vox-cdn.com/thumbor/OMMubz4a4NVLunFLkQOZvHdC9Xk=/0x0:3840x2160/1200x800/filters:focal(1536x463:2192x1119)/cdn.vox-cdn.com/uploads/chorus_image/image/69214020/HaloInfinite_8K_003.0.jpg",
        "Halo Inf.",
        5
    );
    await producto.addProduct("FIFA 22", "Un juego de deportes de fútbol en línea y multijugador. Escoge a tu equipo y juega partidos en línea contra otros jugadores.", 60, "https://i.ytimg.com/vi/n5g5TvH5nFg/maxresdefault.jpg", "FIFA 22", 5);

    let productos = await producto.getProducts();
    res.json(productos);
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
    productos.length == 0 ? productos.push({ error: `No se encuentra ningun producto con el id: ${pid}` }) : null;
    res.json(productos);
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
