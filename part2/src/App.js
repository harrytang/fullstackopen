/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React, {useState} from 'react'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-123456'},
        {name: 'Ada Lovelace', number: '39-44-5323523'},
        {name: 'Dan Abramov', number: '12-43-234345'},
        {name: 'Mary Poppendieck', number: '39-23-6423122'},
        {name: 'Harry Tang', 'number': '330-551-3148'}

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
    const records = search === ''
        ? persons
        : persons.filter(person => person.name.search(new RegExp(search, "i")) > -1);

    return (
        <div>
            <h1>Phonebook</h1>

            <Filter search={search} handlerSearch={handlerSearch}/>

            <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber}
                        handlerNameChange={handlerNameChange} handlerNumberChange={handlerNumberChange}/>

            <Persons records={records}/>
        </div>
    )
};

export default App