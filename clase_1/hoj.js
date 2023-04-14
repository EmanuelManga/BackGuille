const mostrarLista = (lista) => {
  if (lista.length == 0) {
    return "lista vacia";
  }
  lista.forEach((element) => {
    console.log(element);
  });
  return `mi lista tiene un largo de: ${lista.length}`;
};

console.log(mostrarLista(["ema", "julieta"]));
console.log(mostrarLista(["ema", "julieta", "carlos"]));
console.log(mostrarLista([]));
