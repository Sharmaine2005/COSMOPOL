<?php

//Database Connection
require_once 'db.php';
if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {   
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $service = isset($_POST['service']) && !empty($_POST['service']) ? trim($_POST['service']) : null;
    $message = trim($_POST['message']);

    $sql = "INSERT INTO inquiries (name, email, service, message) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);

    if ($stmt === false) {
        echo "Error preparing statement: " . $conn->error;
        $conn->close(); //Close connection
    } else { 
    //Bind Parameters
        $stmt->bind_param("ssss", $name, $email, $service, $message); 
    //Execute
        $stmt->execute();
        $stmt->close();
        header("Location: thankYou.html"); 
        exit();
        
        if ($stmt->execute() === FALSE) {
            // ERROR
            $error_message = "Error executing statement: " . $stmt->error . 
                             "<br>SQL: " . $sql . 
                             "<br>Data: Name: " . $name . ", Email: " . $email;
            die("<h2>Database Insertion Failed</h2>" . $error_message);
        }
    }
} else {
    //Handle Direct Access
    http_response_code(405);
    echo "This page is for processing form submissions only. Method Not Allowed.";
    if (isset($conn)) {
        $conn->close();
    }
}
?>