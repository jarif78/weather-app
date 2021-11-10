import React, { useState } from 'react';
import Current from './components/Current';
import Forecast from './components/Forecast';
import UserContext from './context/UserContext';
import axios from 'axios';

function App() {
  const [location, setLocation] = useState({
    city: 'buenos aires',
    country: 'ar'
  });

  const getCurrentLocation = async () => {
    await axios.get('https://geolocation-db.com/json/')
        .then((res) => {
          setLocation({
            city: res.data.city,
            country: res.data.country_code
          });
        });
  }

  const handleCurrent = () => {
      getCurrentLocation();
  }

  const handleLondon = () => {
    setLocation({
      city: 'london',
      country: 'uk'
    })
  }

  const handleParis = () => {
    setLocation({
      city: 'paris',
      country: 'fr'
    })
  }

  const handleTokio = () => {
    setLocation({
      city: 'tokio',
      country: 'jp'
    })
  }

  const handleMilan = () => {
    setLocation({
      city: 'milan',
      country: 'it'
    })
  }

  const handleMoscow = () => {
    setLocation({
      city: 'moscow',
      country: 'ru'
    })
  }

  return (
    <UserContext.Provider value = { location }>
      <div className="container mx-auto lg:w-1/2">
        <h1 className="my-10 text-center text-white font-bold text-5xl">WEATHER-APP</h1>
        <div className="grid grid-cols-2 gap-8">
          <Current />
          
          <div className="box-border w-full p-8 rounded-md shadow-lg bg-gray-500 bg-opacity-25 text-white text-2xl">
            <ul className="text-center">
              <li className="cursor-pointer" onClick={handleCurrent}>Current location</li>
              <li className="cursor-pointer" onClick={handleLondon}>Londres</li>
              <li className="cursor-pointer" onClick={handleParis}>París</li>
              <li className="cursor-pointer" onClick={handleTokio}>Tokio</li>
              <li className="cursor-pointer" onClick={handleMilan}>Milán</li>
              <li className="cursor-pointer" onClick={handleMoscow}>Moscú</li>
            </ul>
          </div>

          <Forecast />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
