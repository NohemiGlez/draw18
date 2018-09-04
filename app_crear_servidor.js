// ES5 -> ES6

const http = require("http"); // manipular http

// Primera implementación
// function server(request, response){
//   response.writeHead(200, {"Content-Type": "text/html"}); // estatus, tipo de contenido (sino, navegador lo toma como texto)
//   response.write("Hola mundo!!");
//   response.end();
// }

// Segunda implementación
http.createServer((request, response) {
  response.writeHead(200, {
    "Content-Type": "text/html"}); // estatus, tipo de contenido (sino, navegador lo toma como texto)
    response.write("Hola mundo!!");
    response.end();
}).listen(8080);

// Tercera implementación
// http.createServer((request, response) => {
//   response.writeHead(200, {
//     "Content-Type": "text/html"}); // estatus, tipo de contenido (sino, navegador lo toma como texto)
//     response.write("Hola mundo!!");
//     response.end();
// }).listen(8080);
