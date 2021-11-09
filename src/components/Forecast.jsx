import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import { API_KEY } from '../key';

function Forecast() {
  const [current, setCurrent] = useState([]);
  const data = useContext(AppContext);

  const city = data.city;
  const country = data.country;

  const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country},&APPID=${API_KEY}&cnt=5&units=metric`;

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        setCurrent(data);
      })
      .catch(error => console.log(error));
  }, []);

  if (!current.list) {
    return(
      <div className="col-span-2 box-border py-8 w-full rounded-md shadow-lg bg-gray-500 bg-opacity-25 text-white text-center">
        <p>No se pudo recuperar datos del clima</p>
      </div>
    );
  }

  return(
    <div className="col-span-2 box-border py-8 w-full rounded-md shadow-lg bg-gray-500 bg-opacity-25 text-white">
      <div className="flex">

      {current.list.map(item => {
          return(
            <div className="flex-auto text-center" key={item.dt.toString()}>
              <p>{item.dt_txt}</p>
              <i className={"wi wi-owm-"+item.weather[0].id+" text-white text-6xl my-4"}></i>
              <p>{item.weather[0].description}</p>
              <p>{item.main.temp} °C</p>
              <p>{item.main.pressure} hPa</p>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default Forecast;