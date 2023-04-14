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

let list = [];

objetos.forEach((element) => {
  Object.keys(element).forEach((ele) => {
    // list.push(ele)
    list.includes(ele) ? list : (list = [...list, ele]);
    // list.includes(ele) ? list : list.push(ele);
  });
});

console.log(list);
