import React from 'react';
import './HourlyForecast.scss';

const hourlyData = [
  { time: '10 AM', icon: '☀️', temp: '22°' },
  { time: '11 AM', icon: '🌤️', temp: '24°' },
  { time: '12 PM', icon: '🌤️', temp: '25°' },
  { time: '1 PM', icon: '⛅', temp: '26°' },
  { time: '2 PM', icon: '☁️', temp: '24°' },
  { time: '3 PM', icon: '🌧️', temp: '23°' },
];

const HourlyForecast = () => {
  return (
    <div className="hourly-forecast">
      {hourlyData.map((hour, index) => (
        <div className="hour-card" key={index}>
          <div>{hour.time}</div>
          <div>{hour.icon}</div>
          <div>{hour.temp}</div>
        </div>
      ))}
    </div>
  );
};

export default HourlyForecast;
