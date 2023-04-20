const fs = require("fs");

// Borra el archivo
// fs.unlinkSync("productos.json")

if (!fs.existsSync("productos.json")) {
  fs.writeFileSync("productos.json", "Inicio");
} else {
  //   console.log("no")
  let contenido = fs.readFileSync("productos.json", "utf-8");
  contenido += " = Ema";
  fs.writeFileSync("productos.json", contenido);
  //   fs.appendFileSync("prodctos.json", "le agregamos algo al archivo");
}
