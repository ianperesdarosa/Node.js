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

app.listen(9001, function() {
    console.log("on");
});
