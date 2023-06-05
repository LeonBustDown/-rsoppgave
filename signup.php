

<?php


$servername = "localhost"; 
$username = "root";
$password = ""; 
$dbname = "brukerdatabase";

// Oppretter en forbindelse
$conn = new mysqli($servername, $username, $password, $dbname);

// Sjekker forbindelsen
if ($conn->connect_error) {
    die("Kunne ikke tilkoble: " . $conn->connect_error);
}
?>

<?php
// Hent data fra skjemaet
$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];

$sql = "INSERT INTO brukere (brukernavn, passord, email) VALUES ('$username', '$password', '$email')";

if ($conn->query($sql) === TRUE) {
    echo "Registrering vellykket!";
} else {
    echo "Feil ved registrering: " . $conn->error;
}

$conn->close();
?>


