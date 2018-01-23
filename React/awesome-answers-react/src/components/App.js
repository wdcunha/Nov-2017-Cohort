import React from 'react';
// Anywhere you write JSX tags, React must be
// imported, because JSX tags are translated
// to React.createElement(...) calls.
import {QuestionShowPage} from './QuestionShowPage';
import {QuestionIndexPage} from './QuestionIndexPage';
import {QuestionNewPage} from './QuestionNewPage';
import {NavBar} from './NavBar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App () {
  return (
    <Router>
      <div className="App">
        {/* <nav>
          <CurrentDateTime />
          <Link to="/">Home</Link>
          <Link to="/questions">Questions</Link>
        </nav> */}
        {/* <QuestionIndexPage />
          <QuestionShowPage /> */}
          <NavBar />
          <Switch>
            <Route path="/questions" exact component={QuestionIndexPage} />
            <Route path="/questions/new" component={QuestionNewPage} />
            <Route path="/questions/:id" component={QuestionShowPage} />
          </Switch>
      </div>
    </Router>
  )
}


// import App from './App';
// ð will make the value at App available by importing with ð
// in other files.
export default App;
