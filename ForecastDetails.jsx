import React from 'react';
import './ForecastDetails.scss';

const forecastData = [
  { day: 'Mon', icon: '🌞', temp: '36°', backgroundImage: "sunny.jpg" },
  { day: 'Tue', icon: '⛅', temp: '35°', backgroundImage: "cloudy.jpg" },
  { day: 'Wed', icon: '🌦️', temp: '34°', backgroundImage: "haze.webp" },
  { day: 'Thu', icon: '☀️', temp: '36°', backgroundImage: "sunny.jpg" },
  { day: 'Fri', icon: '🌧️', temp: '33°', backgroundImage: "cloudy.jpg" },
];

const ForecastDetails = () => {
  return (
    <div className="forecast-details">
      <h2 className="location-title">Chennai</h2>

      <div className="seven-day">
        {forecastData.map((day, idx) => (
          <div
            className="day-card"
            key={idx}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/pic/${day.backgroundImage})`,
            }}
          >
            <p className="day">{day.day}</p>
            <p className="icon">{day.icon}</p>
            <p className="temp">{day.temp}</p>
          </div>
        ))}
      </div>

      <div className="info-cards">
        <div className="info-card">
          <p>Air Quality Index</p>
          <h3>42 – Good</h3>
        </div>
        <div className="info-card">
          <p>Sunrise</p>
          <h3>6:12 AM</h3>
        </div>
        <div className="info-card">
          <p>UV Index</p>
          <h3>3 – Moderate</h3>
        </div>
      </div>
    </div>
  );
};

export default ForecastDetails;
