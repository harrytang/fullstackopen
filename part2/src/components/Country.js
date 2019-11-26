/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React, {useEffect, useState} from 'react';
import axios from "axios";

const Country = ({country}) => {

    const [weather, setWeather] = useState({});

    useEffect(() => {
        const url = `http://api.weatherstack.com/current?access_key=YOUR_API_KEY&query=${country.capital}`;
        axios
            .get(url)
            .then(response => {
                setWeather(response.data.current);
            })
    }, []);



    return (


        <div>
            <h2>{country.name}</h2>
            <div>capital {country.capital}</div>
            <div>population {country.population}</div>
            <h2>languages</h2>
            <ul>
                {
                    country.languages.map(
                        lang => <li key={lang.iso639_1}>
                            {lang.name}
                        </li>
                    )
                }
            </ul>
            <div><img src={country.flag} alt={country.name} width="150"/></div>
            <h2>weather in {country.capital}</h2>
            <div>temperature: {weather.temperature} Celsius</div>
            <div><img src={weather.weather_icons} width="80" alt={weather.weather_descriptions}/></div>
            <div>wind: {weather.wind_speed} kph direction {weather.wind_dir}</div>

        </div>
    );
};

export default Country;