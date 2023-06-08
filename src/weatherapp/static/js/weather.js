// weather.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("weatherForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Create a new FormData object to store the form data
      const formData = new FormData(form);
  
      // Make a fetch request to the server
      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            const weatherInfo = document.getElementById("weatherInfo");
            const temperature = document.getElementById("temperature");
            const humidity = document.getElementById("humidity");
            const windSpeed = document.getElementById("windSpeed");
            const weatherDescription = document.getElementById("weatherDescription");
            const error = document.getElementById("error");
  
            weatherInfo.classList.remove("hidden");
            error.classList.add("hidden");
            temperature.textContent = "Temperature: " + data.temperature + "°C";
            humidity.textContent = "Humidity: " + data.humidity + "%";
            windSpeed.textContent = "Wind Speed: " + data.wind_speed + " m/s";
            weatherDescription.textContent = "Weather Description: " + data.weather_description;
          } else {
            const error = document.getElementById("error");
  
            error.classList.remove("hidden");
            error.textContent = data.error;
          }
        })
        .catch((error) => {
          console.error(error);
        });
    });
  });
  