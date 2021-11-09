import React from 'react';
import axios from 'axios';

function Locations() {

    const getCurrentLocation = async () => {
        await axios.get('https://geolocation-db.com/json/')
            .then((res) => {
                axios.get("http://api.openweathermap.org/data/2.5/weather?lat="+res.data.latitude+"&lon="+res.data.longitude+"&APPID=5b6d7711e2a98068bef12e795b6c97f5")
                .then((res) => {
                    console.log(res.data);
                })
            });
    }

    const handleCurrent = () => {
        getCurrentLocation();
    }

    const handleLondon = () => {
        alert('xxx');
    }

    const handleParis = () => {
        alert('xxx');
    }

    const handleTokio = () => {
        alert('xxx');
    }

    const handleMilan = () => {
        alert('xxx');
    }

    const handleMoscow = () => {
        alert('xxx');
    }

    return (
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
    );
}

export default Locations;