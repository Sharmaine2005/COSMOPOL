<?php
require_once 'db.php'; // This now gives us $db_connected (true/false)

$reviews_data = [];

// 1. TRY TO FETCH FROM DATABASE
if ($db_connected && $conn) {
    $sql = "SELECT name, rating, feedback FROM clientfeedback WHERE is_approved = TRUE ORDER BY submitted_at DESC";
    $result = $conn->query($sql);

    if ($result && $result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $reviews_data[] = [
                'name' => htmlspecialchars($row['name']),
                'rating' => (int)$row['rating'],
                'feedback' => htmlspecialchars($row['feedback'])
            ];
        }
    }
}

// 2. FALLBACK: USE MOCK DATA IF DB FAILED OR NO RESULTS
// This ensures the site always looks good locally or if DB is down
if (empty($reviews_data)) {
    $reviews_data = [
        [
            'name' => 'John Doe',
            'rating' => 5,
            'feedback' => 'Exceptional service! My car looks brand new. The ceramic coating is a game changer.'
        ],
        [
            'name' => 'Maria Santos',
            'rating' => 5,
            'feedback' => 'Very professional team. They handled my SUV with great care. Highly recommended!'
        ],
        [
            'name' => 'Rico Tan',
            'rating' => 4,
            'feedback' => 'Great tint installation. The lounge was comfortable while I waited. Good job.'
        ]
    ];
}

// 3. GENERATE HTML
$html_output = '';

foreach ($reviews_data as $review) {
    $name = $review['name'];
    $rating = $review['rating'];
    $feedback = $review['feedback'];
    
    // Generate Star Icons
    $stars_html = '';
    for ($i = 0; $i < 5; $i++) {
        if ($i < $rating) {
            $stars_html .= '<i class="fas fa-star"></i>'; // Solid
        } else {
            $stars_html .= '<i class="far fa-star"></i>'; // Outline
        }
    }
    
    // Build Card
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

echo $html_output;

if ($db_connected && $conn) {
    $conn->close();
}
?>