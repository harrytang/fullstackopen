/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

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

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
};