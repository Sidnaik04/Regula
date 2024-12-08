document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const weatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityName = document.getElementById("city-name");
  const cityTemperature = document.getElementById("temperature");
  const cityDescription = document.getElementById("description");
  const errorMssg = document.getElementById("error-message");

  const API_KEY = //put your own;

  weatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();

    if (!city) return;

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);
    // console.log(typeof response);
    // console.log('response: ', response);

    if (!response.ok) {
      throw new Error("City not found!!!");
    }

    const data = await response.json();
    return data;
  }

  function displayWeatherData(data) {
    // console.log(data);

    const { name, weather, main } = data;

    cityName.textContent = name;
    cityTemperature.textContent = `Temprature: ${main.temp}`;
    cityDescription.textContent = `Weather: ${weather[0].description}`;

    weatherInfo.classList.remove("hidden");
    errorMssg.classList.add("hidden");
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMssg.classList.remove("hidden");
  }
});
