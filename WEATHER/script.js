const container = document.querySelector('.container');
const searchBox = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.weather-box .not-found');
const cityInput = document.querySelector('.search-box input');

// Create images directory if it doesn't exist
function loadWeatherApp() {
    // Add event listener for search button
    searchBox.addEventListener('click', () => {
        getWeatherData();
    });

    // Add event listener for Enter key
    cityInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            getWeatherData();
        }
    });
}

function getWeatherData() {
    const APIKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const city = cityInput.value.trim();

    if (city === '') {
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            if (json.cod === '404') {
                showError();
                return;
            }

            showWeatherData(json);
        })
        .catch(() => {
            showError();
        });
}

function showError() {
    container.style.height = '600px';
    weatherBox.classList.remove('fade-in');
    weatherDetails.classList.remove('fade-in');
    
    error404.style.display = 'block';
    weatherBox.classList.add('fade-in');
    
    const weatherElements = document.querySelectorAll('.weather-box > div:not(.not-found)');
    weatherElements.forEach(element => {
        element.style.display = 'none';
    });
}

function showWeatherData(json) {
    error404.style.display = 'none';
    
    const image = document.querySelector('.weather-box img');
    const temperature = document.querySelector('.weather-box .temperature');
    const description = document.querySelector('.weather-box .description');
    const humidity = document.querySelector('.weather-details .humidity span');
    const wind = document.querySelector('.weather-details .wind span');

    // Update weather icon based on weather condition
    switch (json.weather[0].main) {
        case 'Clear':
            image.src = 'images/clear.png';
            break;
        case 'Rain':
            image.src = 'images/rain.png';
            break;
        case 'Snow':
            image.src = 'images/snow.png';
            break;
        case 'Clouds':
            image.src = 'images/cloud.png';
            break;
        case 'Mist':
        case 'Haze':
            image.src = 'images/mist.png';
            break;
        default:
            image.src = 'images/cloud.png';
    }

    // Update weather information
    temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
    description.innerHTML = `${json.weather[0].description}`;
    humidity.innerHTML = `${json.main.humidity}%`;
    wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

    // Show weather information with animation
    weatherBox.classList.add('fade-in');
    weatherDetails.classList.add('fade-in');
    container.style.height = '600px';
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadWeatherApp);

// Note: You'll need to create an 'images' folder with weather icons:
// - clear.png (sunny icon)
// - rain.png (rainy icon)
// - snow.png (snowy icon)
// - cloud.png (cloudy icon)
// - mist.png (misty/foggy icon)
// - 404.png (error icon)
