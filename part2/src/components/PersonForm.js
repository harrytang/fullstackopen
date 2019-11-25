/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React from 'react';

const PersonForm = (props) => {
    return (
        <div>
            <h2>Add new</h2>

            <form onSubmit={props.addPerson}>
                <div>
                    name: <input value={props.newName} onChange={props.handlerNameChange}/>
                </div>
                <div>
                    number: <input value={props.newNumber} onChange={props.handlerNumberChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    );
};

export default PersonForm;