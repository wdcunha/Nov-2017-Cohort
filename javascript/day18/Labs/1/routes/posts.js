const express = require('express');
const router = express.Router();
const knex = require('../db'); // In node if you require
// a file named index in a directory, you can omit the
// filname, 'index', from the require.
// const knex = require('../db/index');

// PATH: /posts/new VERB: GET Serves form for creating posts
router.get('/new', (request, response) => {
  // response.send('TEST POSTS NEW')
  response.render('posts/new');
});

// localhost:3002/posts/:id
router.get('/:id', (request, response) => {
  const id = request.params.id;
  knex
    .first()
    .from('posts')
    .where({id})  //{id} === {id: id}
    .then(post => {
      response.render('posts/show',{post});
    })
    .catch(error => response.send(error));
});

// PATH: /posts VERB: POST Creating new posts
router.post('/', (request, response) => {
  const username = request.body.username;
  const title = request.body.title;
  const notes = request.body.notes;

  knex
    .insert({username, title, notes})
    .into('posts')
    .returning('id')
    // .then(result => response.send(result))
    .then(result => response.redirect('/posts'))
    .catch(error => response.send(error));
});

// PATH: /posts VERB: GET List all the posts
router.get('/', (request, response) => {
  knex
    .select()
    .from('posts')
    .orderBy('created_at', 'DESC')
    .then(posts => {
      response.render('posts/index', {posts: posts});
    });
})

module.exports = router;
