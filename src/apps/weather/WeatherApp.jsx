import { useState, useEffect } from 'react';
import './weather.css';

export const WeatherApp = () => {
    const [weatherImage, setWeatherImage] = useState(null);
    const [location, setLocation] = useState(null);
    const [country, setCountry] = useState(null);
    const [temperature, setTemperature] = useState(null);
    const [localTime, setLocalTime] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [wind, setWind] = useState(null);
    const [precipitation, setPrecipitation] = useState(null);
    const [inputValue, setInputValue] = useState('Madrid');
    const [backgroundImage, setBackgroundImage] = useState(null);

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const fetchBackgroundImage = (city) => {
        const unsplashApiKey = 'u92vyj55z3w8toSrKkEIa6Ditk4ISysPV4k97_pLGGE';
        const unsplashUrl = `https://api.unsplash.com/search/photos?query=${city}&client_id=${unsplashApiKey}&orientation=landscape&per_page=1`;

        fetch(unsplashUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data.results && data.results.length > 0) {
                    setBackgroundImage(data.results[0].urls.full); 
                }
            })
            .catch((error) => console.error('Error fetching Unsplash image:', error));
    };

    useEffect(() => {
        const apiUrl = `http://api.weatherapi.com/v1/current.json?key=a6d2738a82744a2da7e170151242711&q=${inputValue}`;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setWeatherImage(data.current.condition.icon);
                setLocation(data.location.name);
                setTemperature(data.current.temp_c);
                setLocalTime(data.location.localtime);
                setHumidity(data.current.humidity);
                setWind(data.current.wind_kph);
                setPrecipitation(data.current.precip_mm);
                setCountry(data.location.country);
                fetchBackgroundImage(data.location.name); 
            });
    }, [inputValue]);

    return (
        <>
            <main
                className="weatherMainAppContainer"
              
            >
                <div className="weatherMainAppHeader">
                    <img src={`${weatherImage}`} className="weatherMainAppHeaderImage" alt="Weather" />
                    <h1 className="weatherMainAppHeaderTitle">{location}, {country}</h1>
                </div>
                <div className="weatherMainAppInfo">
                    <div className="weatherMainAppInfoLeft">
                        <h2 className="weatherMainAppInfoLeftTemp">{temperature}ºC</h2>
                        <span className="weatherMainAppInfoLeftTime">{localTime}</span>
                    </div>
                    <div className="weatherMainAppInfoRight">
                        <span className="weatherMainAppInfoRightDetail">Humedad: {humidity}%</span>
                        <span className="weatherMainAppInfoRightDetail">Viento: {wind} km/h</span>
                        <span className="weatherMainAppInfoRightDetail">Precipitación: {precipitation} mm</span>
                    </div>
                    <div className="weatherMainAppSearchBar">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={onInputChange}
                            className="weatherMainAppSearchInput"
                            placeholder="Introduce una ciudad"
                        />
                        <button className="weatherMainAppSearchButton">Buscar</button>
                    </div>
                    
                    <img src={backgroundImage} className="weatherPersoImage" alt="Background" />
                </div>
            </main>
        </>
    );
};
