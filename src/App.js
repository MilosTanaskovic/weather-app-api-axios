import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState('');
  useEffect(() => {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=London`)
    .then(data => {
      setWeather(data.data);
      console.log(data.data);
    })
    .catch(err => console.log(err))
  }, [])
  // input search
  const weatherInput = (e) => {
    setInput(e.target.value);
  }
  // button
  const searchWeather = () => {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${input}`)
    .then(data => {
      setWeather(data.data);
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="App">
       {weather && (
        <div>
        <div className="search">
          <input onChange={weatherInput} type="text" name="" id=""/>
          <button onClick={searchWeather}>Search</button>
        </div>
        <div className="weather-info">
          <h1>{weather.location.name}</h1>
          <h2>{weather.location.region}</h2>
          <div className="condition">
            <h3>{weather.current.condition.text}</h3>
            <img src={weather.current.condition.icon} alt=""/>
            <h3>{weather.current.temp_c} Celisuis</h3>
          </div>
        </div>
        </div>
       )}
      
    </div>
  );
}

export default App;
