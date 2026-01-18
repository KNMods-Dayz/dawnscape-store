<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit;
}

$player   = isset($_POST['player']) ? trim($_POST['player']) : '';
$product  = isset($_POST['product']) ? intval($_POST['product']) : 0;
$quantity = isset($_POST['quantity']) ? intval($_POST['quantity']) : 1;

if ($player === '' || $product <= 0 || $quantity <= 0) {
    http_response_code(400);
    exit;
}

// TODO: replace with your actual DB credentials
$host = "YOUR_DB_HOST";
$user = "YOUR_DB_USER";
$pass = "YOUR_DB_PASS";
$db   = "YOUR_DB_NAME";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    http_response_code(500);
    exit;
}

$stmt = $conn->prepare("INSERT INTO payments (player_name, item_number, amount, quantity, claimed) VALUES (?, ?, 1, ?, 0)");
$stmt->bind_param("sii", $player, $product, $quantity);
$stmt->execute();

$stmt->close();
$conn->close();

echo "success";
