const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const logger = require('morgan');

app.use(logger('dev'));

app.get('/home', function (req, res) {
  res.send('You are in the home page!');
});

app.get('/', function (req, res) {
  res.render('index');
});

var time = new Date();

const DOMAIN = 'localhost';
const PORT = '4646';
app.listen(PORT, DOMAIN, () => {
  console.log(`Updated at  ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} --- Server listenning on http://${DOMAIN}:${PORT}`);
});
