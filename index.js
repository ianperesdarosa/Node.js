const express = require('express');
const app = express();
const port = 8080;


app.get('/', (req, res) => {
    res.send("My first application in Express!");
});

app.listen(port, () => {
    console.log("Status == 200")
});
