// ES6 asdas
const http = require("http");

// Primera Implementacion

function server(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Mundo!");
  response.end();
}

http.createServer(server).listen(8080);

// Segunda Implementacion (Funcion Anonima)

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Mundo!");
  response.end();
}).listen(8080);

// Tercera Implementacion (Funcion Flecha)

http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Mundo!");
  response.end();
}).listen(8080);
