const express = require('express')

const router = express.Router();

const Checklist = require('../model/checklist')



router.get('/', async (req,res) =>{
  try {
    let checklist = await Checklist.find({});
    res.status(200).render('checklists/index', { checklist:checklist});
  } catch (error){
    res.status(500).render('pages/error;',{error: 'Error ao exibir as listas' })
  }
});

router.get('/new',async (req,res) => {
  try {
    let checklist = new Checklist();
    res.status(200).render('checklists/new',{ checklist:checklist});
  } catch (error) {
    res.status(500).render('pages/error',{error:'Erro ao carregar o formulário.'});
  }
});

router.get('/:id', async (req,res) =>{
  try {
    let checklist = await Checklist.findById(req.params.id);
    res.status(200).render('checklists/show', { checklist:checklist});
  } catch (error) {
    res.status(500).render('pages/error;',{error: 'Error ao exibir as listas de Tarefas' }) 
  }
  console.log(req.params.id);
  res.send(`ID: ${req.params.id}`);
});

router.post('/',async (req,res) =>{
  let { name } = req.body.checklist;
  let checklist = new Checklist({name})
  try{
    await Checklist.save();
    res.redirect('/checklists');
  } catch (error) {
    res.status(422).render('checklist/new;',{checklist: { ...checklist, error}}) 
    
  }
  console.log(name);
  res.status(200).send(req.body);
});

router.put('/:id',async (req,res) =>{
  let { name } = req.body
  try {
    let checklist = await Checklist.findByIdAndUpdate(req.params.id, {name}, {new: true} );
    res.status(200).json(checklist);
  } catch (error) {
    res.status(422).json(error);
    
  }

  console.log(req.params.id);
  res.send(`PUT ID: ${req.params.id}`);
});

router.delete('/:id',async (req,res) =>{
  try {
    let checklist = await Checklist.findByIdAndRemove(req.params.id);
    res.status(200).json(checklist);
  } catch (error) {
    res.status(422).json(error);
  }
});


module.exports = router;
