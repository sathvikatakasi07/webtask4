const products = [
  { name: "Notebooks", category: "books", price: 199, rating: 4.5, image: "images/product1.jpg" },
  { name: "Headphones", category: "electronics", price: 799, rating: 4.8, image: "images/product2.jpg" },
  { name: "Jeans", category: "cloths", price: 500, rating: 4.7, image: "images/product3.jpg" },
  { name: "T-shirts", category: "cloths", price: 300, rating: 4.6, image: "images/product4.jpg" },
  { name: "Laptop", category: "electronics", price: 50000, rating: 4.7, image: "images/product5.jpg" },
  // { name: "Novel", category: "books", price: 500, rating: 4.7, image: "images/product6.jpg" },
];

function renderProducts(list = products) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";
  list.forEach(product => {
    container.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}" />
        <h4>${product.name}</h4>
        <p>Price: ₹${product.price}</p>
        <p>Rating: ${product.rating}</p>
      </div>
    `;
  });
}

function applyFilters() {
  const cat = document.getElementById("categoryFilter").value;
  const sort = document.getElementById("sortOption").value;
  let filtered = [...products];

  if (cat !== "all") {
    filtered = filtered.filter(p => p.category === cat);
  }

  if (sort === "price") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  renderProducts(filtered);
}

document.getElementById("categoryFilter").addEventListener("change", applyFilters);
document.getElementById("sortOption").addEventListener("change", applyFilters);

window.onload = () => renderProducts();