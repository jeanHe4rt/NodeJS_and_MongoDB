const express = require('express');
const checklistRouter = require('./src/routes/checklist');
require('./config/database');

const app = express();

app.use(express.json()); // Ele verifica se no body da requisição tem json da requ.

app.use('/checklists',checklistRouter);


app.listen(3333, ()=>{
  console.log("Server iniciado!")
});