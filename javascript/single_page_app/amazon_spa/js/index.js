const API_KEY = '8decfc9788d811245e78ff02f8df28e2cffabeb060a2ad8ab1ab55da57138892'
const BASE_URL = 'http://localhost:3000';

// HTTP REQUESTS

const Product = {
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
  }
}

// HELPERS
function qS (query, node) {
  return (node || document).querySelector(query);
}

function qSA (query, node) {
  return (node || document).querySelectorAll(query);
}

function H (tagName, htmlAttrs = {}, ...elements) {
  const newElement = document.createElement(tagName);

// Iterate over all the html attributes in the `htmlAttrs`
// object and set them on the element with `.setAttribute()`
for (let attribute in htmlAttrs) {
  newElement.setAttribute(attribute, htmlAttrs[attribute])
}

newElement.append(...elements);

return newElement;
}


// DOM MANIPULATION

function renderProducts (products) {
  return products.map(product => {
    return H('div', null,
      H(
        'a',
        {'class': 'ProductLink', 'href': `#product/${product.id}`, 'data-id': product.id},
        product.title
      )
    );
  })
}

function renderProductDetails (product) {
  return H('div', {class: 'ProductDetails'},
    H('h2', null, product.title),
    H('p', null, product.body),
    H('p', null, `By ${product.author.full_name}`),
    H('p', null, `Created at: ${product.created_at}`),
    // H('h3', null, `Reviews`),
    // renderReviewList(product.reviews)
  );
}

function navigateTo (query) {
  // This function will iterate over all nodes
  // with the 'page' class. In the process, it will
  // hide all of them except for the one that matches
  // the css query obtained from the arguments.
  qSA('.page').forEach(node => {
    if (node.matches(query)) {
      node.classList.remove('hidden');
    } else {
      node.classList.add('hidden');
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  const productIndexDiv = qS('#ProductIndex');
  const productShowDiv = qS('#ProductShow');
  const productForm = qS('#ProductForm');

  function reloadProductIndex () {
    Product.all()
      .then(products => {
        productIndexDiv.innerHTML = '';
        productIndexDiv.append(...renderProducts(products));
      })
  }
  reloadProductIndex();


  // Handle navigation to ProductShow page
  productIndexDiv.addEventListener('click', event => {
    const target = event.target;

    if (target.matches('.ProductLink')) {
      event.preventDefault();
      const productId = target.getAttribute('data-id');
      Product
        .get(productId)
        .then(product => {
          productShowDiv.innerHTML = '';
          productShowDiv.append(renderProductDetails(product));
          navigateTo('#ProductShow');
        });
    }
  });

});













// bump
