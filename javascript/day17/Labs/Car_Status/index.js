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

app.get('/form', (request, response) => {
  response.render('form');
});

app.post('/form', (request, response) => {
  const body = request.body;
  const fullName = body.fullName;
  const year = body.year;

  response.render('form_thankYou', {fullName: fullName, year: year});
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

const DOMAIN = 'localhost';
const PORT = '3002';
app.listen(PORT, DOMAIN, () => {

  console.log(`ð» Server listenning on http://${DOMAIN}:${PORT}`);
});






// bump
