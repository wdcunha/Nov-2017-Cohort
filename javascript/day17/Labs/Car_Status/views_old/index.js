const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/home', function (req, res) {
  res.render('./partials/header');
});

app.get('/', function (req, res) {
  res.render('index');
});

var time = new Date();

const DOMAIN = 'localhost';
const PORT = '5656';
app.listen(PORT, DOMAIN, () => {
  console.log(`Updated at  ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} --- Server listenning on http://${DOMAIN}:${PORT}`);
});
