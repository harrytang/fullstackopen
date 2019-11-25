/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React, {useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-123456'},
        {name: 'Ada Lovelace', number: '39-44-5323523'},
        {name: 'Dan Abramov', number: '12-43-234345'},
        {name: 'Mary Poppendieck', number: '39-23-6423122'}
    ]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [search, setSearch] = useState('');


    const handlerNameChange = (e) => {
        setNewName(e.target.value);
    };

    const handlerNumberChange = (e) => {
        setNewNumber(e.target.value);
    };

    const handlerSearch = (e) => {
        setSearch(e.target.value);
    };

    const addPerson = (e) => {
        e.preventDefault();
        if (persons.find(person => person.name === newName)) {
            alert(`${newName} is already exist!`);
        } else {
            setPersons(persons.concat({name: newName, number: newNumber}));
            setNewName('');
            setNewNumber('');
        }


    };

    // search
    const records = search ===''
        ? persons
        : persons.filter(person=>person.name.search(new RegExp(search,"i"))>-1);

    return (
        <div>
            <h1>Phonebook</h1>

            <div>
                search name: <input value={search} onChange={handlerSearch}/>
            </div>

            <h2>Add new</h2>

            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handlerNameChange}/>
                </div>
                <div>
                    number: <input value={newNumber} onChange={handlerNumberChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {records.map((person, i) => <div key={i}>{person.name} {person.number}</div>)}
        </div>
    )
};

export default App