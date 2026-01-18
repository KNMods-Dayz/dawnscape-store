const grid = document.getElementById("product-grid");
const tabs = document.querySelectorAll(".ds-category-tabs button");

function renderProducts(category = "all") {
    grid.innerHTML = "";
    Object.keys(PRODUCTS).forEach(id => {
        const p = PRODUCTS[id];
        if (category !== "all" && p.category !== category) return;

        const card = document.createElement("div");
        card.className = "ds-card";
        card.innerHTML = `
            <div class="ds-card-img-wrap">
                <img src="${p.image}" alt="${p.name}" class="ds-card-img">
            </div>
            <h3 class="ds-card-title">${p.name}</h3>
            <div class="ds-card-category">${p.category}</div>
            <div class="ds-card-price">${p.price.toLocaleString()} Credits</div>
            <div class="ds-card-actions">
                <a href="product.html?id=${id}" class="ds-card-view">View</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

tabs.forEach(btn => {
    btn.addEventListener("click", () => {
        tabs.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderProducts(btn.dataset.category);
    });
});

renderProducts("all");
