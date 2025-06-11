import React, { useEffect, useState } from 'react';
import './CurrentWeather.scss';

function CurrentWeather({ onNext }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiKey = "e94852da41ea01f7022d962708f3b9aa";

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=${apiKey}&units=metric`)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="weather-screen">Loading weather for Chennai...</div>;
  if (!weather || weather.cod !== 200) return <div className="weather-screen">Error loading weather</div>;

  const icon = weather.weather[0].main === "Clouds" ? "🌥️" :
               weather.weather[0].main === "Clear" ? "☀️" :
               weather.weather[0].main === "Rain" ? "🌧️" : "🌤️";

  return (
    <div className="weather-screen">
    
      <div className="weather-card glass">
       <img src="/images/6.avif" alt="" />
       

        <div className="weather-icon">{icon}</div>
        <h1>{Math.round(weather.main.temp)}°</h1>
        <p>{weather.weather[0].description}</p>
        <p>Max: {Math.round(weather.main.temp_max)}° | Min: {Math.round(weather.main.temp_min)}°</p>
        <p className="location">📍 {weather.name}</p>
        <button className="next-btn" onClick={onNext}>View Forecast</button>
      </div>
      <img
        src="https://i.ibb.co/hK7BCvh/house-sky.png"
        alt="Weather background"
        className="bottom-img"
      />
    </div>
  );
}

export default CurrentWeather;
