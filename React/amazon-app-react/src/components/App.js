import React from 'react';
import {ProductShowPage} from './ProductShowPage';
import {ProductIndexPage} from './ProductIndexPage';
import {ProductNewPage} from './ProductNewPage';
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
        <NavBar />
        <Switch>
          <Route path="/products" exact component={ProductIndexPage} />
          <Route path="/products/new" component={ProductNewPage} />
          <Route path="/products/:id" component={ProductShowPage} />
        </Switch>
        {/* <ProductIndexPage /> */}
        {/* <ProductShowPage /> */}
      </div>
    </Router>
  )
}

export default App;
