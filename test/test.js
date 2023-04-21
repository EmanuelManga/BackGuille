const array = [
    {
        title: "World of Warcraft",
        description: "es un videojuego de rol multijugador masivo en línea desarrollado por Blizzard Entertainment",
        price: 60,
        thumbnail: "static.wikia.nocookie.net/wow/images/7/7d/WoWlogo.png/revision/latest?cb=20090510204154&path-prefix=es",
        code: "WoW",
        stock: 203,
        producId: 1,
    },
    {
        title: "awdawdaw",
        description: "es un videojuego de disparos en primera persona desarrollado por Valve Corporation y Hidden Path Entertainment",
        price: 15,
        thumbnail: "https://www.clarin.com/img/2021/11/25/dQJKs5qYm_2000x1500__1.jpg",
        code: "CS-GO",
        stock: 25,
        producId: 0,
    },
    {
        title: "League of Legends,",
        description: "es un videojuego multijugador de arena de batalla en línea desarrollado y publicado por Riot Games",
        price: 0,
        thumbnail: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/CNTWUAMXZRF3BPIYPCNPFHOMJQ.jpg",
        code: "lol",
        stock: 1000,
        producId: 2,
    },
];

// let existe = array.find((x) => x.producId == 10);
// let newArray = array.filter((x) => x.producId != 10);

const borrar = (id) => {
    if (array.find((x) => x.producId == id)) {
        return (newArray = array.filter((x) => x.producId != id));
    } else {
        return `No Existe un producto con ID: ${id}`;
    }
};

const returnTernario = (mensaje) => {
    return mensaje;
};

// console.log("existe", existe);
// console.log("newArray", newArray);

console.log(borrar(1));
