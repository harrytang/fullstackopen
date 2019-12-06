/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React from 'react';

const Persons = (props) => {
    return (
        <div>
            <h2>Numbers</h2>
            {props.records.map((person, i) => <div key={i}>{person.name} {person.number} <button onClick={()=>{props.deletePersonOf(person.id)}}>delete</button></div>)}
        </div>
    );
};

export default Persons;