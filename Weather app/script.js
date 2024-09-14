const apiKey = 'ed6626129f235153c81e5f1482a20c09';
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
        const weatherIcon = document.querySelector('.weather-icon');
        
        async function checkweather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            if (response.status === 404) {
                document.querySelector('.error-message').style.display = 'block';
                document.querySelector('.weather').style.display = 'none';
                return;
            } else {
                document.querySelector('.error-message').style.display = 'none';
            }
            
            const data = await response.json();
            console.log(data);
            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C"; 
            document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
            document.querySelector('.wind').innerHTML = data.wind.speed + " m/s";

            if (data.weather[0].main === 'Clouds') {
                weatherIcon.src = 'images/clouds.png';
            } else if (data.weather[0].main === 'Clear') {
                weatherIcon.src = 'images/clear.png';
            } else if (data.weather[0].main === 'Rain') {
                weatherIcon.src = 'images/rain.png';
            } else if (data.weather[0].main === 'Drizzle') {
                weatherIcon.src = 'images/drizzle.png';
            } else if (data.weather[0].main === 'Snow') {
                weatherIcon.src = 'images/snow.png';
            } else if (data.weather[0].main === 'Mist') {
                weatherIcon.src = 'images/mist.png';
            }

            document.querySelector('.weather').style.display = 'block';
        }

        function getWeather() {
            const city = document.getElementById('input').value;
            if (city.trim() === '') {
                document.querySelector('.error-message').style.display = 'block';
                return;
            }
            checkweather(city);
        }