const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false}));

app.get('/home', (request, response) => {
  response.render('home');
});

app.get('/pick_random', (request, response) => {
  response.render('pick_random');
});

app.post('/pick_random', (request, response) => {
  const body = request.body;
  const names = body.names;
  let arr = names.split(',');
  let result = arr[Math.floor(Math.random() * arr.length)];

  response.render('result_pick_random', {result: result});
});

app.get('/contact_us', (request, response) => {
  response.render('contactUs');
});

app.post('/contact_us', (request, response) => {
  const body = request.body;
  const fullName = body.fullName;
  const message = body.message;

  response.render('thankYou', {fullName: fullName, message: message});
});

var time = new Date();

const DOMAIN = 'localhost';
const PORT = '3002';
app.listen(PORT, DOMAIN, () => {

  console.log(`Updated at: ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ---» Server Person Random listenning on http://${DOMAIN}:${PORT}`);
});






// bump
