<?php
require_once 'db.php'; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name = $conn->real_escape_string($_POST['name']);
    $email = $conn->real_escape_string($_POST['email']);
    $service = $conn->real_escape_string($_POST['service']);
    $message = $conn->real_escape_string($_POST['message']);

    $sql = "INSERT INTO inquiries (name, email, service, message) VALUES ('$name', '$email', '$service', '$message')";

    if ($conn->query($sql) === TRUE) {
        // THIS IS THE LINE THAT REMOVES THE POPUP
        header("Location: thankYou.html"); 
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
$conn->close();
?>