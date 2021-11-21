const express = require('express');
const path = require('path');

const checklistRouter = require('./src/routes/checklist');
const rootRouter = require('./src/routes/index');
require('./config/database');

const app = express();

app.use(express.json()); // Ele verifica se no body da requisição tem json da requ.


app.use(express.static(path.join(__dirname,'public')))
app.set('views', path.join(__dirname,'src/views'));
app.set('view engine', 'ejs');

app.use('/',rootRouter);
app.use('/checklists',checklistRouter);


app.listen(3333, ()=>{
  console.log("Server iniciado!")
});