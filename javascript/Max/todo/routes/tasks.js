const express = require('express');
const router = express.Router();
const knex = require('../db');

router.get('/', (req, res) => {
  knex
    .select()
    .from('tasks')
    .then(tasks => res.render('tasks/index',{tasks}))
    .catch(error => res.send(error));
});

router.post('/', (req, res) => {
  const title = req.body.title;
  knex
    .insert({title})
    .into('tasks')
    .then(() => res.redirect('/tasks'))
    .catch(error => res.send(error));
});

module.exports = router;
