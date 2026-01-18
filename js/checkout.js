
document.getElementById("buy-btn").onclick = () => {
    const player = document.getElementById("username").value;

    fetch("api/purchase.php", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: `player=${player}&product=${PRODUCT_ID}&quantity=1`
    })
    .then(res => res.text())
    .then(data => {
        if (data === "success") {
            alert("Purchase complete! Log in to DawnScape to claim your reward.");
        }
    });
};
