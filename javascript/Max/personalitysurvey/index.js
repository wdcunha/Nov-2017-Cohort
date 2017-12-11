const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.render('survey');
});

app.post('/results', function (req, res) {
  const options = {
    deadline: {
      rational: {
        ideas: "Rational",
        facts: "Guardian"
      },
      compassionate: {
        ideas: "Idealist",
        facts: "Guardian"
      }
    },
    withoutDeadline: {
      rational: {
        ideas: "Rational",
        facts: "Artisan"
      },
      compassionate: {
        ideas: "Idealist",
        facts: "Artisan"
      }
    }
  }

  const deadline = req.body.deadline;
  const rational = req.body.rational;
  const ideas = req.body.ideas;

  res.render('result',{result: options[deadline][rational][ideas]});
});

const DOMAIN = 'localhost';
const PORT = '5050';
app.listen(PORT, DOMAIN, () => {
  console.log(`🖥 Server listening on http://${DOMAIN}:${PORT}`);
});
