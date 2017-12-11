const Express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = Express();
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.render('home', {arrays:null, names: ''});
});

app.post('/', function (req, res) {
  const names = req.body.names;
  const namesArr = names.replace(/\s+/gi, '').split(',');
  // let winner = null;
  // if (namesArr.length > 0) {
  //   winner = namesArr[Math.floor(namesArr.length*Math.random())];
  // }

  // var array = ['jim','jake','jimes','rob','paps','richie','joe'];
  // jim,jake,jimes,rob,paps,richie,joe,paul,john,robert,carl,sand,patrickson,aranda,sam,beverly
  function shuffleArray(array) {

      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * i);
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      return array;
  }

  function distributePlayers(names, numberOfTeams) {
      var ret = {};
      var teamCounter = 0;

      for (var i = 0; i < names.length; ++i) {
          if (!ret["Team" + (teamCounter + 1)]) {
              ret["Team" + (teamCounter + 1)] = [];
          }
          ret["Team" + (teamCounter + 1)].push(names[i]);
          if (++teamCounter == numberOfTeams) {
              teamCounter = 0;
          }
      }
      return ret;
  }

  var newarray =(shuffleArray(namesArr));
  var arrays = distributePlayers(newarray, 3);
  console.log(arrays);



  res.render('home', {arrays, names});
});

const DOMAIN = 'localhost';
const PORT = '5000';
app.listen(PORT, DOMAIN, () => {
  console.log(`🖥 Server listening on http://${DOMAIN}:${PORT}`);
});
