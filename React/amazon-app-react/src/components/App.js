import React from 'react';
import {ProductShowPage} from './ProductShowPage';
import {ProductIndexPage} from './ProductIndexPage';
import {ProductNewPage} from './ProductNewPage';
import {SignInPage} from './SignInPage';
import {NavBar} from './NavBar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import jwtDecode from 'jwt-decode';

//
// import {Token} from '../requests/tokens';

// function App () {
class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      user: null
    };
    this.signIn = this.signIn.bind(this);
  }

  signIn () {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      const payload = jwtDecode(jwt);
      this.setState({user: payload});
    }
  }

  componentDidMount () {
    this.signIn();
  }

  isAuth () {
    return !!this.state.user
  }

  render () {
    const {user} = this.state;
    return (
      <Router>
        <div className="App">
          {/* <NavBar /> */}
          <NavBar user={user} />
          <Switch>
            <Route path="/sign_in" render={props => {
              return <SignInPage {...props} onSignIn={this.signIn} />
            }} />
            <AuthRoute
              isAuthenticated={this.isAuth()}
              path="/products" exact component={ProductIndexPage}
            />
            <AuthRoute
              isAuthenticated={this.isAuth()}
              path="/products/new"
              component={ProductNewPage}
            />
            <AuthRoute
              isAuthenticated={this.isAuth()}
              path="/products/:id"
              component={ProductShowPage}
            />
          </Switch>
          {/* <ProductIndexPage /> */}
          {/* <ProductShowPage /> */}
        </div>
      </Router>
    );
  }
}

export default App;





//
