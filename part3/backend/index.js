/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

const express = require('express');
const app = express();

let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    }
];

app.get('/api/persons', (req, res) => {
    res.json(persons)
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});