const fs = require("fs");

class ProductManager {
    constructor(path) {
        // this.products = [];
        // porque no haces algo asi
        this.path = path;
        if (fs.existsSync(path)) {
            let products = this.#leerArchivo();
            this.products = products;
        } else {
            fs.writeFileSync(path, "[]");
            let products = this.#leerArchivo();
            this.products = products;
        }
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        let producId = 0;
        let isValid = true;
        let error = null;

        let products = this.#leerArchivo();
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
            products.push(product);
            fs.writeFileSync(this.path, JSON.stringify(products));
        } else {
            return console.log(error);
        }
    }

    getProducts() {
        return this.#leerArchivo();
    }

    getProductById(id) {
        let products = this.#leerArchivo();
        let producto = products.find((p) => p.producId == id);
        if (producto) {
            return producto;
        } else {
            return "Not found";
        }
    }

    updateProduct(id, upDate) {
        const products = this.#leerArchivo();
        let producto = products.find((x) => x.producId == id);
        let filtrado = products.filter((x) => x.producId != id);
        if (producto) {
            producto.producId == undefined ? (producto = this.#mergeSinId(producto, upDate)) : (producto = this.#mergeConId(producto, upDate));
            filtrado.push(producto);
            // return filtrado;
            this.#write(filtrado);
        } else {
            return "not found";
        }
    }

    #leerArchivo = () => {
        const productosString = fs.readFileSync(this.path, "utf-8");
        let products = [];
        try {
            products = JSON.parse(productosString);
        } catch (error) {
            const products = [];
        }
        return products;
    };

    #mergeConId = (original, upDate) => {
        delete upDate.producId;
        return this.#mergeSinId(original, upDate);
    };

    #mergeSinId = (original, upDate) => {
        return { ...original, ...upDate };
    };

    #write = (array) => {
        fs.writeFileSync(this.path, JSON.stringify(array));
    };
}

const producto = new ProductManager("products.json");

producto.addProduct("Counter-Strike: Global Offensive", "es un videojuego de disparos en primera persona desarrollado por Valve Corporation y Hidden Path Entertainment", 15, "https://www.clarin.com/img/2021/11/25/dQJKs5qYm_2000x1500__1.jpg", "CS-GO", 25);
// console.log(producto.getProducts());
producto.addProduct("World of Warcraft", "es un videojuego de rol multijugador masivo en línea desarrollado por Blizzard Entertainment", 60, "static.wikia.nocookie.net/wow/images/7/7d/WoWlogo.png/revision/latest?cb=20090510204154&path-prefix=es", "WoW", 203);

// console.log("getProductsById:", producto.getProductById(1));

// console.log("updateProduct", producto.updateProduct(0, { title: "CS-GO", producId: 10 }));

console.log("getProducts:", producto.getProducts());
