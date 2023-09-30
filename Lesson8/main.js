const productList = document.getElementById('product-list');

const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  products.forEach((product) => {
    // Tao the div co class product-item
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    // Tao the img va dat link anh
    const productImage = document.createElement('img');
    productImage.src = product.image;
    // Tao the span va dat ten san pham
    const productName = document.createElement('span');
    productName.textContent = product.title;
    // Tao the span va dat gia san pham
    const productPrice = document.createElement('span');
    productPrice.textContent = `${product.price}$`;
    // Them 3 the ben tren vao trong product-item
    productItem.appendChild(productImage);
    productItem.appendChild(productName);
    productItem.appendChild(productPrice);

    productList.appendChild(productItem);
  });
}

getProducts();