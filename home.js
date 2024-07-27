// LINKS 
document.getElementById("cadena").addEventListener('click', () => {
    window.location.href = "./links/links.html";
});

// TIME
document.querySelector('.reloj').addEventListener('click', () => {
    window.location.href = "./reloj/reloj.html";
});


// WEATHER
document.querySelector('.weather').addEventListener('click', () => {
    window.location.href = "./meteorología/meteorologia.html";
});


const getCurrentLocationWeather = async () => {
    if (!navigator.geolocation) {
      alert('Geolocalización no está soportada en este navegador.');
      return;
    }
  // para solicitar la posición actual del usuario:
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const apiKey = '4303341329ae4efca0782925241807';
      const weatherUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}&aqi=no&hourly=1`;
  
      try {
        const response = await fetch(weatherUrl);
        if (!response.ok) {
          throw new Error('Error en la solicitud de clima: ' + response.statusText);
        }
        const weather = await response.json();
        displayWeather(weather);
      } catch (error) {
        console.error('Error:', error);
      }
    }, (error) => {
      console.error('Error al obtener la ubicación:', error);
      alert('No se pudo obtener la ubicación actual.');
    });
  };
  
  const displayWeather = ({ current, location, forecast }) => {
    if (!current || !location) {
      console.error('Error: Datos de clima incompletos.');
      return;
    }

    // Mostrar clima actual
    const currentWeatherDiv = document.getElementById('currentWeather');
    // destructuring las propiedades que me interesan de los objetos location y current
    const { name, country } = location; 
    const { condition: { text, icon }, temp_c, humidity, wind_kph, precip_in } = current;
    const currentTemplate = ` 
      <div class="mainInfo">
        <div class="cityandp">
          <h2>${name} / ${country}</h2>
          <p>${text}</p>
        </div>
        <div class="iconandtemp">
          <img class="weather-icon" src="http:${icon}" alt="${text}">
          <div class="celsius">${temp_c}<img src="./assets/icons/termometro.png" id="celsius" alt="grados"></div>
        </div>
      </div>    
      <ul>
        <li>Precipitaciones: ${precip_in}%</li>
        <li>Humedad: ${humidity}%</li>
        <li>Viento: ${wind_kph} Km/h</li>
      </ul>
    `;
    currentWeatherDiv.innerHTML = currentTemplate;
  
    // Mostrar previsión horaria
    const forecastWeather = document.getElementById('forecastWeather');
    forecastWeather.innerHTML = ''; // imp sino acumula
    const forecastDay = forecast.forecastday[0].hour; // Obtener los datos por horas del primer día
    forecastDay.forEach(hour => {
      const { condition: { text, icon }, time, temp_c } = hour;
      const timeFormat = time.split(" ")[1]; // Extraer solo la hora
      const forecastTemplate = `
        <li class="forecast-grades">
          <span>${timeFormat}</span>
          <img class="weather-icon" src="http:${icon}" alt="${text}">
          <p>${temp_c} °C</p>
        </li>
      `;
      forecastWeather.innerHTML += forecastTemplate;
    });
  };
  getCurrentLocationWeather();



  // PASSWORD
  document.getElementById("candado").addEventListener('click', () => {
    window.location.href = "./contraseñas/contraseñas.html";
});

