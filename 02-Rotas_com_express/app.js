const express = require('express');
const app = express();


app.get("/", function(req, res) {
    res.send("Welcome!");
});

app.get("/perfil", function(req, res) {
    res.send("Meu perfil");
});

app.get("/dados", function(req, res) {
    res.send("Meus dados");
});

app.get("/data/:nome/:cargo/:soldo", function(req, res) {
    res.send("<h1>Nome: " + req.params.nome + "</h1>" + "<h1> Cargo: " + req.params.cargo + "</h1>"  +  "<h1>Salario: " + req.params.soldo + "</h1>");

});

app.listen(9001, function() {console.log("on");});