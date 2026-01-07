fetch("http://localhost:5000/api/products")
  .then(res => res.json())
  .then(products => {
    const grid = document.querySelector(".product-grid");
    grid.innerHTML = "";
    products.forEach(p => {
      grid.innerHTML += `
        <div class="product-card">
          <img src="${p.image}" />
          <h3>${p.name}</h3>
          <p class="price">₹${p.price}</p>
          <a href="pages/product.html?id=${p._id}">
            <button>View Details</button>
          </a>
        </div>
      `;
    });
  });
