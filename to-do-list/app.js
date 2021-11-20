const express = require('express');

const app = express();

app.get('/',(req,res) =>{
  res.send("<h1>Minha Lista de Tarefas :D</h1>");
});

app.get('/json',(req,res) => {
  res.json({ // Resposta via json
    title: "Tarefa x",
    done: true

  })
});

app.listen(3333, ()=>{
  console.log("Server iniciado!")
})