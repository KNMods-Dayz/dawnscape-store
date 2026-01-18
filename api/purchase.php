
<?php
$player = $_POST['player'];
$product = $_POST['product'];
$quantity = $_POST['quantity'];

$conn = new mysqli("YOUR_HOST", "YOUR_USER", "YOUR_PASS", "YOUR_DB");

$stmt = $conn->prepare("INSERT INTO payments (player_name, item_number, amount, quantity, claimed)
VALUES (?, ?, 1, ?, 0)");
$stmt->bind_param("sii", $player, $product, $quantity);
$stmt->execute();

echo "success";
?>
