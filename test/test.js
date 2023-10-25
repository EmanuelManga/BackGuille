let array = { cartId: "87f7dc26-fafa-4871-b880-8aac76e95c57", products: [{ productId: "797d10e3-3a0b-4eae-a340-1274c66a7154", quantity: 4 }] };

let productId = "ef6d8831-c4b7-4bf1-8fe7-5e348420a192";
// let productId = "797d10e3-3a0b-4eae-a340-1274c66a7154";

let aProduct = array.products;
console.log(aProduct);

let existeProd = aProduct.filter((x) => x.productId == productId);

console.log(existeProd);
