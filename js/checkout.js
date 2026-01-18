function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
}

const id = getParam("id");
const container = document.getElementById("checkout-container");

if (!id || !PRODUCTS[id]) {
    container.innerHTML = "<p>Product not found.</p>";
} else {
    const p = PRODUCTS[id];

    container.innerHTML = `
        <h2>Checkout: ${p.name}</h2>
        <p><strong>${p.price.toLocaleString()} Credits</strong></p>
        <p>${p.description}</p>
        <div class="ds-input-group">
            <label>In-game username</label>
            <input type="text" id="username" class="ds-input" placeholder="Exact in-game name">
        </div>
        <div class="ds-input-group">
            <label>Quantity</label>
            <input type="number" id="quantity" class="ds-input" value="1" min="1">
        </div>
        <button id="buy-btn" class="ds-btn ds-btn-primary">Confirm Purchase</button>
        <p class="ds-note">After purchase, log in to DawnScape to claim your reward via the in-game claim system.</p>
    `;

    document.getElementById("buy-btn").onclick = () => {
        const player = document.getElementById("username").value.trim();
        const quantity = parseInt(document.getElementById("quantity").value, 10) || 1;

        if (!player) {
            alert("Please enter your in-game username.");
            return;
        }

        fetch("api/purchase.php", {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: `player=${encodeURIComponent(player)}&product=${encodeURIComponent(id)}&quantity=${encodeURIComponent(quantity)}`
        })
        .then(res => res.text())
        .then(data => {
            if (data === "success") {
                alert("Purchase complete! Log in to DawnScape to claim your reward.");
            } else {
                alert("There was a problem processing your purchase.");
            }
        })
        .catch(() => alert("Network error."));
    };
}
