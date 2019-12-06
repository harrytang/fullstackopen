/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

import React, {useState, useEffect} from 'react';
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/person";
import Notification from "./components/Notification";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [search, setSearch] = useState('');
    const [notificationMessage, setNotificationMessage] = useState({message: null, type: null});

    // load person from server
    useEffect(() => {
        personService.getAll().then(
            data=> {
                setPersons(data)
            }
        );
    }, []);


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
        const idx=persons.findIndex(person => person.name === newName);
        if (idx>-1) {
            if (window.confirm(`${newName} is already added to the phonebook, replace the old number with the new one?`)) {
                personService.update(persons[idx].id, {name: newName, number: newNumber})
                    .then(data=>{
                        setPersons(persons.map(per=>per.id!==data.id?per:data));
                    })
            }

        } else {
            personService.create({name: newName, number: newNumber})
                .then(person=>{
                    setNotificationMessage({
                            message: 'person added successfully',
                            type: 'success'
                        }
                    );

                    setTimeout(() => {
                        setNotificationMessage({message: null})
                    }, 5000);

                    setPersons(persons.concat(person));
                    setNewName('');
                    setNewNumber('');
                })
                .catch(error=>{
                    setNotificationMessage({
                            message: error.response.data.error,
                            type: 'error'
                        }
                    );

                    setTimeout(() => {
                        setNotificationMessage({message: null})
                    }, 5000)
                });
        }


    };

    const deletePersonOf = (id)=>{
        if (window.confirm("Do you really want to delete this?")) {
            personService.remove(id)
                .then(_=>{
                    setPersons(persons.filter(per=>per.id!==id));
                })
                .catch(error=>{
                    setPersons(persons.filter(per=>per.id!==id));
                    setNotificationMessage({
                            message: `person already removed from the server`,
                            type: 'error'
                        }
                    );

                    setTimeout(() => {
                        setNotificationMessage({message: null})
                    }, 5000);


                })
        }

    };

    // search
    const records = search === ''
        ? persons
        : persons.filter(person => person.name.search(new RegExp(search, "i")) > -1);

    return (
        <div>
            <h1>Phonebook</h1>

            <Notification message={notificationMessage} />

            <Filter search={search} handlerSearch={handlerSearch}/>

            <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber}
                        handlerNameChange={handlerNameChange} handlerNumberChange={handlerNumberChange}/>

            <Persons records={records} deletePersonOf={deletePersonOf}/>
        </div>
    )
};

export default App