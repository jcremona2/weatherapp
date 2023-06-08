document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("weatherForm");
    const fetchButton = document.getElementById("fetchButton");
  
    fetchButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default button click behavior
  
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
            //console.log(data)
            const weatherInfo = document.getElementById("weatherInfo");
            const temperature = document.getElementById("temperature");
            const humidity = document.getElementById("humidity");
            const windSpeed = document.getElementById("windSpeed");
            const weatherDescription = document.getElementById("weatherDescription");
            const error = document.getElementById("error");
            const weatherIcon = document.getElementById("weatherIcon");
    
            weatherIcon.src = data.weather_icon;
  
            weatherInfo.classList.remove("hidden");
            error.classList.add("hidden");
            temperature.textContent = "Temperature: " + data.temperature + "°C";
            humidity.textContent = "Humidity: " + data.humidity + "%";
            windSpeed.textContent = "Wind Speed: " + data.wind_speed + " m/s";
            weatherDescription.textContent = "Weather Description: " + data.weather_description;

            // background color based on time and timezone
            const currentTime = new Date();
            const timezoneOffset = data.timezone;
            const localTime = new Date(currentTime.getTime() + timezoneOffset * 1000);
            const hours = localTime.getHours();

            // time ranges
            const timeRanges = [
                { start: 0, end: 5, color: "#000000" },     // Midnight to 5 AM - Black
                { start: 6, end: 11, color: "#FEDCBA" },    // 6 AM to 11 AM - Light color
                { start: 12, end: 17, color: "#ABCDEF" },   // 12 PM to 5 PM - Another color
                { start: 18, end: 23, color: "#123456" }    // 6 PM to 11 PM - Dark color
            ];

            let backgroundColor = "#FFFFFF"; // Default

            for (const range of timeRanges) {
                if (hours >= range.start && hours <= range.end) {
                    backgroundColor = range.color;
                    break;
                }
            }

            document.body.style.backgroundColor = backgroundColor;

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
  