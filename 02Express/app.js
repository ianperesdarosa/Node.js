const express = require('express');

const app = express();

app.get('/', (req, res) => res.status(200).send("A rota esta funcionando!"));

app.listen(8080, console.log("On!"))