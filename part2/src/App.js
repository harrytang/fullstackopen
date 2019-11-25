/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React, {useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas'}
    ]);
    const [newName, setNewName] = useState('');

    const handlerNameChange = (e) => {
        setNewName(e.target.value);
    };

    const addPerson = (e) => {
        e.preventDefault();
        setPersons(persons.concat({name: newName}));
        setNewName('');
    };


    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handlerNameChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map((person, i) => <div key={i}>{person.name}</div>)}
        </div>
    )
};

export default App