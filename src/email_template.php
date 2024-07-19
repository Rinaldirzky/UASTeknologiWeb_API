<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hasil Cuaca</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; }
        h1 { color: #333; }
        .weather-info { background-color: #f9f9f9; padding: 15px; border-radius: 8px; }
        .footer { margin-top: 20px; color: #777; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Hasil Cuaca</h1>
        <div class="weather-info">
            <p><strong>Lokasi:</strong> <?php echo htmlspecialchars($_POST['location']); ?></p>
            <p><strong>Deskripsi:</strong> <?php echo htmlspecialchars($_POST['weatherDescription']); ?></p>
            <p><strong>Suhu:</strong> <?php echo htmlspecialchars($_POST['temperature']); ?>°C</p>
            <p><strong>Kelembapan:</strong> <?php echo htmlspecialchars($_POST['humidity']); ?>%</p>
            <p><strong>Kecepatan Angin:</strong> <?php echo htmlspecialchars($_POST['windSpeed']); ?> m/s</p>
        </div>
        <div class="footer">
            <p>Terima kasih telah menggunakan layanan kami.</p>
        </div>
    </div>
</body>
</html>
