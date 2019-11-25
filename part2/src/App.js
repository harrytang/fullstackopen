/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React, {useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '04412345678'}
    ]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');


    const handlerNameChange = (e) => {
        setNewName(e.target.value);
    };

    const handlerNumberChange = (e) => {
        setNewNumber(e.target.value);
    };

    const addPerson = (e) => {
        e.preventDefault();
        if(persons.find(person=> person.name===newName)){
            alert(`${newName} is already exist!`);
        }
        else {
            setPersons(persons.concat({name: newName, number: newNumber}));
            setNewName('');
            setNewNumber('');
        }


    };


    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handlerNameChange}/>
                </div>
                <div>
                    number: <input value={newNumber} onChange={handlerNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map((person, i) => <div key={i}>{person.name} {person.number}</div>)}
        </div>
    )
};

export default App