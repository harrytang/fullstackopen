/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React from 'react';
import Country from "./Country";


const Result = (props) => {

    if (props.list.length === 1) {
        return (
            <Country country={props.list[0]}/>
        )
    }

    return (
        <div>

            {
                props.list.length > 10 ?
                    <div>too many countries, try another filter</div> :
                    props.list.map(country =>
                        <div key={country.alpha3Code}>
                            {country.name} <button onClick={props.showCountryHandler} value={country.alpha3Code}>show</button>
                            {props.showing===country.alpha3Code?<Country country={country}/>:null}
                        </div>)
            }

        </div>
    );
};

export default Result;