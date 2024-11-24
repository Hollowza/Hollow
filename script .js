let currentPage = 1;

const products = [
  { name: 'Basic T-Shirt', price: '$25.00' },
  { name: 'Graphic Hoodie', price: '$50.00' },
  { name: 'Black Jeans', price: '$40.00' },
  { name: 'Leather Jacket', price: '$120.00' },
  // More products can be added here
];

function renderPage(page) {
  const productContainer = document.querySelector('.product-container');
  productContainer.innerHTML = ''; // Clear current products
  
  const start = (page - 1) * 4;
  const end = page * 4;
  const pageProducts = products.slice(start, end);
  
  pageProducts.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
      <h2>${product.name}</h2>
      <p>${product.price}</p>
    `;
    productContainer.appendChild(productDiv);
  });
}

function changePage(direction) {
  if (direction === 'next') {
    currentPage++;
  } else if (direction === 'prev' && currentPage > 1) {
    currentPage--;
  }
  
  renderPage(currentPage);
}

window.onload = () => {
  renderPage(currentPage);
};


