function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
}

const id = getParam("id");
const container = document.getElementById("product-details");

if (!id || !PRODUCTS[id]) {
    container.innerHTML = "<p>Product not found.</p>";
} else {
    const p = PRODUCTS[id];
    container.innerHTML = `
        <div class="ds-product-img-wrap">
            <img src="${p.image}" alt="${p.name}" class="ds-product-img">
        </div>
        <div class="ds-product-info">
            <h2 class="ds-product-name">${p.name}</h2>
            <p class="ds-product-desc">${p.description}</p>
            <div class="ds-product-meta">
                <span>Category: ${p.category}</span>
                <span>ID: ${id}</span>
            </div>
            <div class="ds-product-price">${p.price.toLocaleString()} Credits</div>
            <a href="checkout.html?id=${id}" class="ds-btn ds-btn-primary">Buy Now</a>
        </div>
    `;
}
