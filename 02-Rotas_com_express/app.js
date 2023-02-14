const express = require('express');
const app = express();


app.get("/", (req, res) => {
    res.send("Welcome!");
});

app.get("/perfil", (req, res) => {
    res.send("Meu perfil");
});

app.get("/dados", (req, res) => {
    res.send("Meus dados");
});

app.get("/data/:nome/:cargo/:soldo", (req, res) => {
    res.send("<h1>Nome: " + req.params.nome + "</h1>" + "<h1> Cargo: " + req.params.cargo + "</h1>"  +  "<h1>Salario: " + req.params.soldo + "</h1>");

});

app.listen(9001, () => {console.log("on");});