import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import { API_KEY } from '../key';

function Current() {
  const [current, setCurrent] = useState([]);
  const data = useContext(AppContext);

  const city = data.city;
  const country = data.country;

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country},&APPID=${API_KEY}&units=metric`;

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setCurrent({
          icon: "wi-owm-" + data.weather[0].id,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          wind: data.wind.speed,
          preasure: data.main.pressure,
          city: data.name,
          country: data.sys.country,
          error: null
        });
      })
      .catch(error => console.log(error));
  }, []);

  if (!current) {
    return(
      <div className="box-border w-full p-8 rounded-md shadow-lg bg-gray-500 bg-opacity-25 text-white text-xl text-center">
        <p>No se pudo recuperar datos del clima</p>
      </div>
    );
  }

  return (
      <div className="box-border w-full p-8 rounded-md shadow-lg bg-gray-500 bg-opacity-25 text-white text-2xl">
        <p className="text-center text-2xl font-bold uppercase">{current.city}, {current.country}</p>
        <div className="flex mt-8">
          <div className="flex-auto text-center">
            <i className={"wi " + current.icon + " text-white text-9xl"}></i>
          </div>
          <div className="flex-auto text-center">
            <p className="text-xl uppercase">today</p>
            <p className="text-xl capitalize">{current.description}</p>
            <p className="text-xl">{current.temperature} °C</p>
            <p className="text-xl">{current.preasure} hPa</p>
          </div>
        </div>
      </div>
  );
}

export default Current;