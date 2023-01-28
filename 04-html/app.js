const express = require('express');
const app = express();


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/sobre", function(req, res) {
    res.sendFile(__dirname + "/sobre.html");
});

app.get("/data/:nome/:cargo/:soldo", function(req, res) {
    res.send("<h1>Nome: " + req.params.nome + "</h1>" + "<h1> Cargo: " + req.params.cargo + "</h1>"  +  "<h1>Salario: " + req.params.soldo + "</h1>");

});

app.listen(9002, function() {console.log("on");});