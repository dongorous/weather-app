import { useState } from 'react';
import WeatherSearch from './components/WeatherSearch';
import WeatherDisplay from './components/WeatherDisplay';

import './App.css';

const App = () => {
  const [, setCity] = useState<string>('');

  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch onSearch={setCity} />
      <WeatherDisplay />
    </div>
  );
};

export default App;
