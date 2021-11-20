const express = require('express');

const app = express();

app.use(express.json()); // Ele verifica se no body da requisição tem json da requ.

const log = (req, res, next) => {
  console.log(req.body);
  console.log(`Data: ${Date.now()}`);
}

app.use(log);

app.get('/',(req,res) =>{
  res.send("<h1>Minha Lista de Tarefas :D</h1>");
});

app.get('/json',(req,res) => {
  console.log(req.body);
  res.json({ // Resposta via json
    title: "Tarefa x",
    done: true

  })
});

app.listen(3333, ()=>{
  console.log("Server iniciado!")
})