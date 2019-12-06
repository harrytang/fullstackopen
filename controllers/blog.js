/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

const router = require('express').Router();
const Blog = require('../models/blog');

router.get('/', (request, response) => {
    Blog.find({}).then(blogs => {
        response.json(blogs.map(blog => blog.toJSON()));
    });
});

router.get('/:id', (request, response, next) => {
    Blog.findById(request.params.id)
        .then(blog => {
            if (blog) {
                response.json(blog.toJSON());
            } else {
                response.status(404).end();
            }
        })
        .catch(error => next(error));
});

router.post('/', (request, response, next) => {
    const body = request.body;

    const blog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes
    });

    blog.save()
        .then(savedBlog => {
            response.json(savedBlog.toJSON());
        })
        .catch(error => next(error));
});

router.delete('/:id', (request, response, next) => {
    Blog.findByIdAndRemove(request.params.id)
        .then(() => {
            response.status(204).end();
        })
        .catch(error => next(error));
});

router.put('/:id', (request, response, next) => {
    const body = request.body;

    const blog = {
        title: body.content,
        author: body.author,
        url: body.url,
        likes: body.likes
    };

    Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
        .then(updatedBlog => {
            response.json(updatedBlog.toJSON());
        })
        .catch(error => next(error));
});

module.exports = router;