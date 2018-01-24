const API_KEY = '8decfc9788d811245e78ff02f8df28e2cffabeb060a2ad8ab1ab55da57138892';
const BASE_URL = 'http://localhost:3000';

// HTTP REQUESTS

// export {Product}
// ð is like ð
// You export any variable, function or class as you
// declare them.
export const Product = {
  all () {
    return fetch(
      `${BASE_URL}/api/v1/products`,
      {
        headers: {
          'Authorization': API_KEY
        }
      }
    )
      .then(res => res.json())
  },
  get (id) {
    return fetch(
      `${BASE_URL}/api/v1/products/${id}`,
      {
        headers: {
          'Authorization': API_KEY
        }
      }
    )
      .then(res => res.json())
  },
  create (params) {
    // params should be an object containing
    // attributes to create the product.
    // {title: 'Where are you?', body: 'Canada, US, UK, etc.'}
    return fetch(
      `${BASE_URL}/api/v1/products`,
      {
        method: 'POST',
        headers: {
          'Authorization': API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }
    )
    .then(res => res.json());
  }
}

// window.Product = Product;
// it's possible to use Product.all() for example
