const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send('Working');
});

const tasksRouter = require('./routes/tasks');
app.use('/tasks',tasksRouter);

app.listen(3002,'localhost',()=>{
  console.log('listening on localhost:3002');
});
