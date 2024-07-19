const apiKey = 'xxxxxxxxxxxxxxx';  // Ganti dengan API key dari OpenWeatherMap

const locations = {
    'Jakarta': { lat: -6.2088, lon: 106.8456 },
    'Surabaya': { lat: -7.2575, lon: 112.7521 },
    'Bandung': { lat: -6.9175, lon: 107.6191 },
    'Medan': { lat: 3.5952, lon: 98.6722 },
    'Makassar': { lat: -5.1477, lon: 119.4327 },
    'Bali': { lat: -8.4095, lon: 115.1889 },
    'Yogyakarta': { lat: -7.7956, lon: 110.3695 },
    'Semarang': { lat: -6.9934, lon: 110.4216 },
    'Palembang': { lat: -2.9916, lon: 104.7564 },
    'Batam': { lat: 1.0904, lon: 104.0554 },
    'Pontianak': { lat: -0.0354, lon: 109.3312 },
    'Kupang': { lat: -10.1772, lon: 123.6086 },
    'Cirebon': { lat: -6.7161, lon: 108.5493 },
    'Mataram': { lat: -8.5833, lon: 116.1167 },
    'Jambi': { lat: -1.6071, lon: 103.6143 },
    'Ambon': { lat: -3.6953, lon: 128.1824 },
    'Manado': { lat: 1.4967, lon: 124.8454 }
};
function getWeather() {
    const location = document.getElementById('locationSelect').value;
    if (!location) {
        alert('Silakan pilih lokasi terlebih dahulu.');
        return;
    }
    const { lat, lon } = locations[location];
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=id&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherResult = document.getElementById('weatherResult');
            const temp = data.main.temp;
            let icon = '';

            // Menentukan ikon berdasarkan suhu
            if (temp > 30) {
                icon = '<i class="fas fa-sun weather-icon" title="Panas"></i>';
            } else if (temp < 15) {
                icon = '<i class="fas fa-snowflake weather-icon" title="Dingin"></i>';
            } else {
                icon = '<i class="fas fa-cloud-sun weather-icon" title="Sedang"></i>';
            }

            weatherResult.style.display = 'block';
            weatherResult.innerHTML = `
                <h3>Cuaca di ${location}</h3>
                ${icon}
                <p>${data.weather[0].description}</p>
                <p>Suhu: ${temp}°C</p>
                <p>Kelembapan: ${data.main.humidity}%</p>
                <p>Kecepatan Angin: ${data.wind.speed} m/s</p>
            `;

            // Isi data cuaca ke input tersembunyi
            document.getElementById('location').value = location;
            document.getElementById('weatherDescription').value = data.weather[0].description;
            document.getElementById('temperature').value = temp;
            document.getElementById('humidity').value = data.main.humidity;
            document.getElementById('windSpeed').value = data.wind.speed;
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Gagal mengambil data cuaca. Silakan coba lagi.');
        });
}
