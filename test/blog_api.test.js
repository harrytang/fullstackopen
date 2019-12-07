/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

const supertest = require('supertest');
const mongoose = require('mongoose');

const app = require('../app');
//const Blog = require('../models/blog');
const User = require('../models/user');
const helper = require('./test_helper');

const api = supertest(app);

describe('Testing Blog API', () => {
    let root={};
    beforeEach(async () => {
        // add some user
        await User.deleteMany({});
        const user = new User({ username: 'someuser', password: 'password' });
        await user.save();
        root=user;
    });

    test('creation succeeds with a new blog', async () => {
        const newBlog = {
            title: 'Blog title',
            author: 'Harry Tang',
            url: 'https://harrytang.xyz',
            user: root._id
        };

        await api
            .post('/api/blogs')
            .send(newBlog)
            .expect(200)
            .expect('Content-Type', /application\/json/);

        const blogsAtEnd = await helper.blogsInDb();
        expect(blogsAtEnd.length).toBe(1);

    });
});

afterAll(() => {
    mongoose.connection.close();
});