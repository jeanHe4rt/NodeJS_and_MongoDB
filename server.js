const http = require('http')

const server = http.createServer((req,res)=>{
  console.log(req.method);
  console.log(req.url);

  res.statusCode = 404;
  res.end('<h1> Hello WOrld!</h1>')
});

server.listen(3333,() =>{
  console.log("Servidor ativo!");
})