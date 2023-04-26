import fs from "fs";

export class ProductManager {
    constructor(path) {
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

    async addProduct(title, description, price, thumbnail, code, stock) {
        let producId = 0;
        let isValid = true;
        let error = null;

        let products = await this.#leerArchivo();
        console.log("products", products);
        products.forEach((p) => {
            p.producId >= producId ? (producId = p.producId + 1) : producId;
            p.code == code || isValid == false ? ((isValid = false), (error = `Error el codigo: ${code} ya existe.`)) : (isValid = true);
        });

        if ((!title, !description, !price, !thumbnail, !code, !stock)) {
            isValid = false;
            error = `Error "title, description, price, thumbnail, code, stock" son obligatorios`;
        }

        let product = {
            title, // (nombre del producto)
            description, // (descripción del producto)
            price, // (precio)
            thumbnail, // (ruta de imagen)
            code, // (código identificador)
            stock, // (número de piezas disponibles)
            producId,
        };

        if (isValid) {
            products.push(product);
            await fs.writeFileSync(this.path, JSON.stringify(products));
        } else {
            return console.log(error);
        }
    }

    async getProducts() {
        return await this.#leerArchivo();
    }

    async getProductById(id) {
        let products = await this.#leerArchivo();
        let producto = products.find((p) => p.producId == id);
        if (producto) {
            return producto;
        } else {
            return "Not found";
        }
    }

    async updateProduct(id, upDate) {
        const products = await this.#leerArchivo();
        let producto = products.find((x) => x.producId == id);
        let filtrado = products.filter((x) => x.producId != id);
        if (producto) {
            producto.producId == undefined ? (producto = await this.#mergeSinId(producto, upDate)) : (producto = await this.#mergeConId(producto, upDate));
            filtrado.push(producto);
            // return filtrado;
            await this.#write(filtrado);
        } else {
            return "not found";
        }
    }

    async deleteProduct(id) {
        const products = await this.#leerArchivo();
        let existe = products.find((x) => x.producId == id);
        if (existe) {
            let newArray = products.filter((x) => x.producId != id);
            await this.#write(newArray);
            return `Se elemino de la lista de productos: ${existe.title} ID ${existe.producId}`;
        } else {
            return `No Existe un producto con ID: ${id}`;
        }
    }

    #leerArchivo = async () => {
        const productosString = await fs.promises.readFile(this.path, "utf-8");
        let products = [];
        try {
            products = JSON.parse(productosString);
        } catch (error) {}
        return products;
    };

    #mergeConId = async (original, upDate) => {
        delete upDate.producId;
        return await this.#mergeSinId(original, upDate);
    };

    #mergeSinId = (original, upDate) => {
        return { ...original, ...upDate };
    };

    #write = async (array) => {
        await fs.promises.writeFile(this.path, JSON.stringify(array));
    };
}

export const producto = new ProductManager("products.json");
