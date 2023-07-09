const http = require('http');

http.createServer((req, res ) =>  {
  res.write("Aprendendo Node.js!!");
  res.end();  
}).listen(3020);