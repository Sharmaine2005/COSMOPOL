<?php
$host = "localhost";
$dbname = "cosmopol_db";    //COSMOPOL Database Name
$username = "root";         //MySQL username (default for XAMPP)
$password = "";             //MySQL password (default empty for XAMPP)
$port = 3307;               //Default MySQL port (change if using different port)

// Create connection
try {
    $conn = new mysqli($host, $username, $password, $dbname, $port);
    
    // Check connection
    if ($conn->connect_error) {
        throw new Exception("Connection failed: " . $conn->connect_error);
    }
    // Set charset to utf8mb4 for proper Unicode support
    $conn->set_charset("utf8mb4");
} catch (Exception $e) {
    // Log the error securely
    error_log($e->getMessage());
    
    // Display user-friendly error message
    die("We're experiencing technical difficulties. Please try again later. (Error: DB_CONNECT_FAIL)");
}
?>