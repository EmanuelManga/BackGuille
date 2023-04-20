const fs = require("fs");

class ProductManager {
    constructor(path) {
        // this.products = [];
        // porque no haces algo asi
        this.path = path;
        if (fs.existsSync(path)) {
            const productosString = fs.readFileSync(path, "utf-8");
            const products = JSON.parse(productosString);
            this.products = products;
        } else {
            fs.writeFileSync(path, "[]");
            const productosString = fs.readFileSync(path, "utf-8");
            const products = JSON.parse(productosString);
            this.products = products;
        }
    }
    // static producId = 0;

    addProduct(title, description, price, thumbnail, code, stock) {
        let producId = 0;
        let isValid = true;
        let error = null;

        const productosString = fs.readFileSync(this.path, "utf-8");
        const products = JSON.parse(productosString);
        products.forEach((p) => {
            p.producId >= producId ? (producId = p.producId + 1) : producId;
            p.code == code || isValid == false ? ((isValid = false), (error = `Error el codigo: ${code} ya existe.`)) : (isValid = true);
        });

        if ((!title, !description, !price, !thumbnail, !code, !stock)) {
            isValid = false;
            error = `Error "title, description, price, thumbnail, code, stock" son obligatorios`;
        }

        let product = {
            title: title, // (nombre del producto)
            description: description, // (descripción del producto)
            price: price, // (precio)
            thumbnail: thumbnail, // (ruta de imagen)
            code: code, // (código identificador)
            stock: stock, // (número de piezas disponibles)
            producId: producId,
        };

        if (isValid) {
            // console.log(product);
            products.push(product);
            fs.writeFileSync(this.path, JSON.stringify(products));
            // return products.push(product);
        } else {
            return console.log(error);
        }
    }

    getProducts() {
        const productosString = fs.readFileSync(this.path, "utf-8");
        const products = JSON.parse(productosString);
        return products;
    }

    getProductById(id) {
        const productosString = fs.readFileSync(this.path, "utf-8");
        const products = JSON.parse(productosString);
        let producto = products.find((p) => p.producId == id);
        if (producto) {
            return producto;
        } else {
            return "Not found";
        }
    }
}

const producto = new ProductManager("products.json");

producto.addProduct("Counter-Strike: Global Offensive", "es un videojuego de disparos en primera persona desarrollado por Valve Corporation y Hidden Path Entertainment", 15, "https://www.clarin.com/img/2021/11/25/dQJKs5qYm_2000x1500__1.jpg", "CS-GO", 25);
// console.log(producto.getProducts());
producto.addProduct("World of Warcraft", "es un videojuego de rol multijugador masivo en línea desarrollado por Blizzard Entertainment", 60, "static.wikia.nocookie.net/wow/images/7/7d/WoWlogo.png/revision/latest?cb=20090510204154&path-prefix=es", "WoW", 203);

console.log("getProducts:", producto.getProducts());

console.log("getProductsById:", producto.getProductById(1));
