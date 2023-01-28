const http = require('http');

http.createServer(function (req, res) {
    res.writeHead("bem vindo ao meu site!");
    res.end();

}).listen(8089);

console.log("Servidor rodando!");