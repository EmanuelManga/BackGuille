class ProductManager {
    constructor() {
        this.products = [];
    }
    // static producId = 0;

    addProduct(title, description, price, thumbnail, code, stock) {
        let producId = 0;
        let isValid = true;
        let error = null;
        this.products.forEach((p) => {
            p.producId >= producId ? (producId = p.producId + 1) : producId;
            p.code == code || isValid == false ? ((isValid = false), (error = `Error el codigo: ${code} ya existe.`)) : (isValid = true);
        });

        title ?? ((isValid = false), (error = `Error "title, description, price, thumbnail, code, stock" son obligatorios`));
        description ?? ((isValid = false), (error = `Error "title, description, price, thumbnail, code, stock" son obligatorios`));
        price ?? ((isValid = false), (error = `Error "title, description, price, thumbnail, code, stock" son obligatorios`));
        thumbnail ?? ((isValid = false), (error = `Error "title, description, price, thumbnail, code, stock" son obligatorios`));
        code ?? ((isValid = false), (error = `Error "title, description, price, thumbnail, code, stock" son obligatorios`));
        stock ?? ((isValid = false), (error = `Error "title, description, price, thumbnail, code, stock" son obligatorios`));

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
            return this.products.push(product);
        } else {
            return console.log(error);
        }
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        let producto = this.products.find((p) => p.producId == id);
        if (producto) {
            return producto;
        } else {
            return "Not found";
        }
    }
}

const producto = new ProductManager();

producto.addProduct("Counter-Strike: Global Offensive", "es un videojuego de disparos en primera persona desarrollado por Valve Corporation y Hidden Path Entertainment", 15, "https://www.clarin.com/img/2021/11/25/dQJKs5qYm_2000x1500__1.jpg", "CS-GO", 25);
// console.log(producto.getProducts());
producto.addProduct("World of Warcraft", "es un videojuego de rol multijugador masivo en línea desarrollado por Blizzard Entertainment", 60, "static.wikia.nocookie.net/wow/images/7/7d/WoWlogo.png/revision/latest?cb=20090510204154&path-prefix=es", "WoW", 203);
producto.addProduct("League of Legends,", "es un videojuego multijugador de arena de batalla en línea desarrollado y publicado por Riot Games", 0, "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/CNTWUAMXZRF3BPIYPCNPFHOMJQ.jpg", "lol", 1000);
producto.addProduct("League of Legends,", "es un videojuego multijugador de arena de batalla en línea desarrollado y publicado por Riot Games", 0, "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/CNTWUAMXZRF3BPIYPCNPFHOMJQ.jpg", "lol", 1000);

producto.addProduct();

console.log(producto.getProducts());

console.log(producto.getProductById(1));
