<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit;
}

$player   = trim($_POST['player']);
$product  = intval($_POST['product']);
$quantity = intval($_POST['quantity']);

if ($player === '' || $product <= 0 || $quantity <= 0) {
    http_response_code(400);
    exit;
}

// DB CREDS — replace with yours
$host = "143.95.234.5";
$user = "neardeso_donate";
$pass = "DavidRandom111";
$db   = "neardeso_donate";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    http_response_code(500);
    exit;
}

// Fetch product info from products table
$stmt = $conn->prepare("SELECT item_name, item_price FROM products WHERE item_id = ?");
$stmt->bind_param("i", $product);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows === 0) {
    http_response_code(404);
    exit;
}

$stmt->bind_result($itemName, $itemPrice);
$stmt->fetch();
$stmt->close();

// Insert into payments table
$stmt = $conn->prepare("
    INSERT INTO payments (player_name, item_number, item_name, amount, quantity, claimed)
    VALUES (?, ?, ?, ?, ?, 0)
");
$stmt->bind_param("sisdi", $player, $product, $itemName, $itemPrice, $quantity);
$stmt->execute();

$stmt->close();
$conn->close();

echo "success";
