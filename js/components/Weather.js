const getWeatherToday = () => {
  
  
  const weatherIcon = document.querySelector('.weather-icon');
  const temperature = document.querySelector('.temperature');
  const weatherDescription = document.querySelector('.weather-description');
  const weatherSpeed = document.querySelector('.weather-speed');
  const weatherDirection = document.querySelector('.weather-direction');
  const weatherHumidity = document.querySelector('.weather-humidity');
  const city = document.querySelector('.city');


 

  async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=ru&appid=a47eedd81c12d7d7012d89f8fc8ead22&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    const windDirectionName = null;
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    weatherSpeed.textContent = ` ${data.wind.speed} м/с`;
    weatherDirection.textContent = windDirectionName;
    weatherHumidity.textContent = `${data.main.humidity} %`;
  }
  getWeather();

  function setCity(event) {
    if (event.code === 'Enter') {
      getWeather();
      city.blur();
    }
  }
  city.addEventListener('keypress', setCity);
};
export default getWeatherToday;



