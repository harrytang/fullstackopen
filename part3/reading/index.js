/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const Note = require('./models/note');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('build'));

/* home */
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

/* list all notes*/
app.get('/notes', (req, res) => {
    Note.find({}).then(notes => {
        res.json(notes);
    });
});

/* get individual note */
app.get('/notes/:id', (req, res, next) => {
    Note.findById(req.params.id)
        .then(note => {
            if (note) {
                res.json(note.toJSON());
            } else {
                res.status(404).end();
            }
        })
        .catch(error => next(error));
});

/* create new note */
app.post('/notes', (req, res, next) => {
    const body = req.body;

    if (body.content === undefined) {
        return res.status(400).json({ error: 'content missing' });
    }

    const note = new Note({
        content: body.content,
        important: body.important || false,
        date: new Date(),
    });

    note.save()
        .then(savedNote => {
            res.json(savedNote.toJSON());
        })
        .catch(error => next(error));
});

/* update note */
app.put('/notes/:id', (req, res, next) => {
    const body = req.body;

    const note = {
        content: body.content,
        important: body.important,
    };

    Note.findByIdAndUpdate(req.params.id, note, { new: true })
        .then(updatedNote => {
            res.json(updatedNote.toJSON());
        })
        .catch(error => next(error));
});


/* delete note */
app.delete('/notes/:id', (req, res, next) => {
    Note.findByIdAndRemove(req.params.id)
        .then(() => {
            res.status(204).end();
        })
        .catch(error => next(error));
});

/* handler of requests with unknown endpoint */
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' });
};
app.use(unknownEndpoint);

/* error handler */
const errorHandler = (error, request, response, next) => {
    console.error(error.message);

    if (error.name === 'CastError' && error.kind === 'ObjectId') {
        return response.status(400).send({ error: 'malformatted id' });
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message });
    }

    next(error);
};
app.use(errorHandler);

// eslint-disable-next-line no-undef
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});