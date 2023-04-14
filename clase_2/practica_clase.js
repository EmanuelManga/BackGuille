const objetos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2,
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4,
    },
];

let productos = objetos.map((x) => Object.keys(x));
// console.log(productos, "productos Keys");
let newList = [];

productos.forEach((element) => {
    element.forEach((ele) => {
        newList.includes(ele) ? newList : newList.push(ele);
    });
});

console.log(newList, "newList");

let values = objetos.map((x) => Object.values(x));

let soloValues = [];
values.forEach((element) => {
    element.forEach((ele) => {
        soloValues.push(ele);
    });
});

// console.log(soloValues, "soloValues");

let totalProdVendidos = soloValues.reduce((ini, acu) => acu + ini);
console.log("Total", totalProdVendidos);
console.log("object");
