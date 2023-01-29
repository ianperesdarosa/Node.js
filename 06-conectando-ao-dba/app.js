const Squelize = require('sequelize');
const sequelize = new Squelize('app', 'root', '8554', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!");
}).catch(function(err) {
    console.log("Sem sucesso ao se concectar!" + err);
});