
const grid = document.getElementById("product-grid");

Object.keys(PRODUCTS).forEach(id => {
    const p = PRODUCTS[id];

    const card = `
        <div class="product-card">
            <img src="${p.image}">
            <h3>${p.name}</h3>
            <p>${p.price} Credits</p>
            <a href="product.html?id=${id}" class="btn">View</a>
        </div>
    `;

    grid.innerHTML += card;
});
