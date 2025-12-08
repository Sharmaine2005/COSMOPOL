<?php
//Database Connection
require_once 'db.php';
if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {   
    $name = trim($_POST['name']);
    $rating = filter_var($_POST['rating'], FILTER_VALIDATE_INT, array("options" => array("min_range" => 1, "max_range" => 5)));
    $feedback = trim($_POST['feedback']);

    //Validation check for rating
    if ($rating === false || empty($name) || empty($review_text)) {
        header("Location: index.php?status=error&message=Invalid input data.");
        exit();
    }

    $sql = "INSERT INTO clientfeedback (name, rating, feedback) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);

    if ($stmt === false) {
        echo "Error preparing statement: " . $conn->error;
        $conn->close(); //Close connection
    } else { 
    //Bind Parameters
        $stmt->bind_param("sis", $name, $rating, $feedback);
    //Execute
        $stmt->execute();
        $stmt->close();
        header("Location: index.php?status=success&message=Thank you for your feedback! It will be posted after review."); 
        exit();
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