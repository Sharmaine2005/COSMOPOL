<?php
require_once 'db.php';
if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

$sql = "SELECT name, rating, feedback FROM clientfeedback WHERE is_approved = TRUE ORDER BY submitted_at DESC";
$result = $conn->query($sql);

$html_output = '';

if ($result && $result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $name = htmlspecialchars($row['name']);
        $rating = (int)$row['rating'];
        $review_text = htmlspecialchars($row['feedback']);
        
        //Stars Rating
        $stars_html = '';
        for ($i = 0; $i < 5; $i++) {
            if ($i < $rating) {
                //Solid Star (fas)
                $stars_html .= '<i class="fas fa-star"></i>';
            } else {
                // Empty Star (far - regular/outline)
                $stars_html .= '<i class="far fa-star"></i>'; 
            }
        }
        
        //HTML Card Structure
        $html_output .= '
        <div class="card">
            <div class="card-body text-center" style="padding: 15px;">
                <div style="color: #ffc107; margin-bottom: 5px; font-size: 0.9rem;">
                    ' . $stars_html . '
                </div>
                <p style="font-style: italic; margin-bottom: 10px; font-size: 0.85rem; line-height: 1.4;">"' . $feedback . '"</p>
                <h4 style="margin-bottom: 0; color: var(--primary); font-size: 1rem;">' . $name . '</h4>
            </div>
        </div>';
    }
} else {
    //If No Reviews Found
    $html_output = '<p class="text-center" style="grid-column: 1 / -1;">No client feedback available yet. Be the first!</p>';
}

$conn->close();

//Output HTML Content
echo $html_output;
?>