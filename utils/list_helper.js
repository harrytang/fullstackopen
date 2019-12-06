/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

const _ = require('lodash');

const dummy = (blogs) => {
    if(blogs)
    {
        return 1;
    }
    else {
        return 1;
    }

};

const totalLikes = (blogs) => {
    const result = blogs.reduce((accumulator, currentValue) => {
        accumulator.likes+=currentValue.likes;
        return accumulator;
    });
    return result.likes;
};

const favoriteBlog = (blogs) => {
    return blogs.reduce((accumulator, currentValue) => {
        return accumulator.likes > currentValue.likes ? accumulator : currentValue;
    });
};

const mostBlog = (blogs) => {
    const authors =[];
    blogs.forEach(blog => {
        const idx = authors.findIndex(author => {
            return author.author===blog.author;
        });
        if(idx===-1){
            authors.push({
                author: blog.author,
                blogs: 1
            });
        }
        else {
            authors[idx].blogs++;
        }
    });
    return authors.reduce((accumulator, currentValue) => {
        return accumulator.blogs > currentValue.blogs ? accumulator : currentValue;
    });
};

const mostLikes = (blogs) => {
    const authors =[];
    blogs.forEach(blog => {
        const idx = authors.findIndex(author => {
            return author.author===blog.author;
        });
        if(idx===-1){
            authors.push({
                author: blog.author,
                likes: blog.likes
            });
        }
        else {
            authors[idx].likes+=blog.likes;
        }
    });
    return authors.reduce((accumulator, currentValue) => {
        return accumulator.likes > currentValue.likes ? accumulator : currentValue;
    });
};

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlog,
    mostLikes
};