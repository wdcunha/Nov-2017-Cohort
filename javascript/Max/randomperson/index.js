const Express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = Express();
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.render('home', {winner:null, names: ''});
});

app.post('/', function (req, res) {
  const names = req.body.names;
  const namesArr = names.replace(/\s+/gi, '').split(',');
  let winner = null;
  if (namesArr.length > 0) {
    winner = namesArr[Math.floor(namesArr.length*Math.random())];
  }
  res.render('home', {winner, names});
});

const DOMAIN = 'localhost';
const PORT = '5000';
app.listen(PORT, DOMAIN, () => {
  console.log(`🖥 Server listening on http://${DOMAIN}:${PORT}`);
});
