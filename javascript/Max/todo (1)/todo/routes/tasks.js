const express = require('express');
const router = express.Router();
const knex = require('../db');
const path = require('path');
const multer = require('multer');
const UPLOADS = 'uploads';
const upload = multer({dest: path.join(__dirname, '..', 'public', UPLOADS)});

router.get('/', (req, res) => {
  knex
    .select()
    .from('tasks')
    .then(tasks => res.render('tasks/index',{tasks}))
    .catch(error => res.send(error));
});

router.post('/', upload.single('photo'), (req, res) => {
  const title = req.body.title;
  // if (title && req.file) {
    let photo_path = "";
    if (req.file) {
      const filename = req.file.filename;
      photo_path = `/${path.join(UPLOADS,filename)}`;
    }
    knex
    .insert({title, photo_path})
    .into('tasks')
    .then(() => res.redirect('/tasks'))
    .catch(error => res.send(error));
  // }
});

module.exports = router;
