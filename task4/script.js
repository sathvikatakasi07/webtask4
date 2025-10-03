const products = [
  { id: 1, name: "Smartphone", category: "electronics", price: 299, rating: 4.5 },
  { id: 2, name: "T-shirt", category: "clothing", price: 25, rating: 4.1 },
  { id: 3, name: "Laptop", category: "electronics", price: 899, rating: 4.7 },
  { id: 4, name: "Novel", category: "books", price: 15, rating: 4.0 },
  { id: 5, name: "Jeans", category: "clothing", price: 40, rating: 4.2 },
  { id: 6, name: "Headphones", category: "electronics", price: 59, rating: 4.3 },
  { id: 7, name: "Notebook", category: "books", price: 8, rating: 3.9 },
];

const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const sortOption = document.getElementById("sortOption");

function displayProducts(items) {
  productList.innerHTML = "";
  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p class="price">$${product.price}</p>
      <p>Rating: ${product.rating}⭐</p>
    `;
    productList.appendChild(card);
  });
}

function filterAndSort() {
  let filtered = [...products];
  const category = categoryFilter.value;
  const sortBy = sortOption.value;

  // Filter by category
  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  // Sort
  if (sortBy === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating-desc") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

categoryFilter.addEventListener("change", filterAndSort);
sortOption.addEventListener("change", filterAndSort);

// Initial render
displayProducts(products);