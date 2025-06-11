import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import CurrentWeather from './components/CurrentWeather';
import ForecastDetails from './components/ForecastDetails';

function App() {
  const [step, setStep] = useState(1); // 1: splash, 2: weather, 3: details

  const handleNext = () => setStep((prev) => prev + 1);

  return (
    <div>
      {step === 1 && <SplashScreen onStart={handleNext} />}
      {step === 2 && <CurrentWeather onNext={handleNext} />}
      {step === 3 && <ForecastDetails />}
    </div>
  );
}

export default App;
