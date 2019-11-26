/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Result from "./components/Result";


const App = () => {
    const [search, setSearch] = useState('');
    const [countries, setCountries] = useState([]);
    const [showing, setShowing] = useState('');


    // load person from server
    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data)
            })
    }, []);

    const showCountryHandler = (e) => {
        setShowing(e.target.value)
    };


    const handlerSearch = (e) => {
        setSearch(e.target.value);
    };

    const list = search === '' ? [] : countries.filter(country => country.name.search(new RegExp(search, "i")) > -1);

    return (
        <div>
            find countries: <input value={search} onChange={handlerSearch}/>
            <Result list={list} showCountryHandler={showCountryHandler} showing={showing}/>
        </div>
    )
};

export default App