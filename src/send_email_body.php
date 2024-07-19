<?php
require '../vendor/autoload.php';  // Pastikan path ini benar

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';  // Ganti dengan host SMTP Anda
    $mail->SMTPAuth = true;
    $mail->Username = 'xxxx xxxx xxxx';  // Ganti dengan email Anda
    $mail->Password = 'xxxx xxxx xxxx';  // Ganti dengan password email Anda
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;  // Atau PHPMailer::ENCRYPTION_SMTPS
    $mail->Port = 587;  // Port SMTP (587 untuk TLS, 465 untuk SSL)

    //Recipients
    $mail->setFrom('xxxx xxxx xxxx', 'Rinaldi Rizqi Mulya');  // Ganti dengan email dan nama Anda
    $mail->addAddress($_POST['email']);  // Email penerima dari form

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'Hasil Cuaca';

    // Include email template
    ob_start();
    include 'email_template.php';  // Path relatif ke email_template.php
    $mail->Body = ob_get_clean();

    $mail->send();
    header("Location: success.php");  // Redirect ke halaman sukses setelah mengirim
    exit();
} catch (Exception $e) {
    header("Location: error.php?error=" . urlencode($mail->ErrorInfo));  // Redirect ke halaman error
    exit();
}
?>
