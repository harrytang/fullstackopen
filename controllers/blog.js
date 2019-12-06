/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

const router = require('express').Router();
const Blog = require('../models/blog');

/**
 * get all blogs
 */
router.get('/', async (request, response) => {
    const blogs = await Blog.find({});
    response.json(blogs.map(blog => blog.toJSON()));
});

/**
 * get individual blog
 */
router.get('/:id', async (request, response, next) => {
    try {
        const blog = await Blog.findById(request.params.id);
        if (blog) {
            response.json(blog.toJSON());
        } else {
            response.status(404).end();
        }
    } catch (e) {
        next(e);
    }
});

/**
 * create new blog
 */
router.post('/', async (request, response, next) => {
    const body = request.body;

    const blog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes
    });

    try {
        const savedBlog = await blog.save();
        response.json(savedBlog.toJSON());
    } catch (e) {
        next(e);
    }
});

/**
 * delete a blog
 */
router.delete('/:id', async (request, response, next) => {
    try {
        await Blog.findByIdAndRemove(request.params.id);
        response.status(204).end();
    } catch (e) {
        next(e);
    }
});

/**
 * update a blog
 */
router.put('/:id', async (request, response, next) => {
    const body = request.body;

    const blog = {
        title: body.content,
        author: body.author,
        url: body.url,
        likes: body.likes
    };

    try {
        const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true });
        response.json(updatedBlog.toJSON());
    } catch (e) {
        next(e);
    }

});

module.exports = router;