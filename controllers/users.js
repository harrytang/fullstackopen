/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

const bcrypt = require('bcrypt');
const router = require('express').Router();
const User = require('../models/user');


router.get('/', async (request, response) => {
    const users = await User.find({}).populate('notes', { content: 1, date: 1 });
    response.json(users.map(u => u.toJSON()));
});


router.post('/', async (request, response, next) => {
    try {
        const body = request.body;

        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(body.password, saltRounds);

        const user = new User({
            username: body.username,
            name: body.name,
            passwordHash,
        });

        const savedUser = await user.save();

        response.json(savedUser);
    } catch (exception) {
        next(exception);
    }
});

module.exports = router;