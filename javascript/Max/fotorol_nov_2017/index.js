const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// When we require `express`, we get function that we can call
// to create an "instance of" `express` app. We will use methods
// of the app object to build our web server.
const app = express();

// 👇 Configures our application to use `ejs` as the templating engine
// to render our applications HTML pages. The package, ejs, must still
// be installed with npm for this to work.
app.set('view engine', 'ejs');

app.use(morgan('dev'));
// bodyParser.urlencoded middleware will allow our application to parse
// data coming from an HTML form into a JavaScript object that will
// be available as a property of the request object. That property is named
// `body`, `request.body`.
app.use(bodyParser.urlencoded({extended: false}));

/*
app.use((request, response, next) => {
  console.log(`${request.method} - ${request.path} - ${new Date().toString()}`);
  // The `next` argument is a function that when called tells express
  // that the middleware is finished and its time to move to the next
  // one in line. If you forget to call `next`, your client will appear
  // to load forever while it waits for a response.
  next();
});
*/

// The `request` represents a HTTP request. It contains
// information about the request including the verb, the headers
// any data, etc. The `request` is sent by the client usually
// a browser.

// The `response` represents a HTTP response. It's object
// that contains a header & a body of data that our application
// will built to reply to the client's `request`.
app.get('/home', (request, response) => {
  /*
  response.send(`
    Convergence user centered design disrupt pitch.
  `);
  */

  // `response.render` is used instead of `response.send`
  // to serve the contents of a template in a response.
  // It finalizes the response.

  // The first argument to `response.render` is the file path
  // (not the URL path) to the template we want to render
  // beginning from the `/views` subdirectory without the
  // file extension (i.e. no `.ejs`).
  response.render('home');
});

app.get('/contact_us', (request, response) => {
  response.render('contactUs');
});

app.post('/contact_us', (request, response) => {
  const body = request.body;
  const fullName = body.fullName;
  const message = body.message;
  // response.send(body);

  // `response.render` can take an object as a second argument.
  // All properties of this object will act as local variables inside
  // of the template being rendered.
  response.render('thankYou', {fullName: fullName, message: message});
});

const postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);
// This means that all url paths to routes inside of
// the posts router must begin with '/posts'

const DOMAIN = 'localhost';
const PORT = '3002';
app.listen(PORT, DOMAIN, () => {
  // Optionally, `app.listen` can take a third argument that is
  // a callback that will called once and only when the server is ready
  // to handle requests.

  console.log(`💻 Server listenning on http://${DOMAIN}:${PORT}`);
});






// bump
