/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React from 'react';

const Country = ({country}) => {
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
        </div>
    );
};

export default Country;