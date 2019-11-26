/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React from 'react';

const Result = (props) => {

    if (props.list.length === 1) {
        return (
            <div>
                <h2>{props.list[0].name}</h2>
                <div>capital {props.list[0].capital}</div>
                <div>population {props.list[0].population}</div>
                <h2>languages</h2>
                <ul>
                    {
                        props.list[0].languages.map(
                            lang => <li key={lang.iso639_1}>
                                {lang.name}
                            </li>
                        )
                    }
                </ul>
                <div><img src={props.list[0].flag} alt={props.list[0].name} width="150"/></div>
            </div>
        )
    }

    return (
        <div>

            {
                props.list.length > 10 ?
                    <div>too many countries, try another filter</div> :
                    props.list.map(country => <div key={country.alpha3Code}>{country.name}</div>)
            }

        </div>
    );
};

export default Result;