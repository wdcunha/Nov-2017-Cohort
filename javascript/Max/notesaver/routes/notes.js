const express = require('express');
const router = express.Router();
const knex = require('../db');

router.get('/', (req, res) => {
  knex
    .select()
    .from('notes')
    .then(notes => res.render('notes/index', {notes}));
});

router.get('/new', (req, res) => {
  res.render('notes/new.ejs');
});

router.post('/', (req, res) => {
  const title = req.body.title;
  const body = req.body.body;

  knex
    .insert({title,body})
    .into('notes')
    .returning('id')
    .then(id => res.redirect('/notes'))
    .catch(error => res.send(error));
});

module.exports = router;
