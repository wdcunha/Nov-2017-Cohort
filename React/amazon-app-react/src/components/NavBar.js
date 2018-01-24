import React from 'react';
import {Link} from 'react-router-dom';

function NavBar (props) {
  return (
    <nav
      style={{
        padding: '10px',
        display: 'flex',
      }}
    >
      <Link style={{marginRight: '20px'}} to="/">Home</Link>
      <Link style={{marginRight: '20px'}} to="/products/new">New Product</Link>
      <Link to="/products">Products</Link>
    </nav>
  );
}

export {NavBar};
