/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

require('dotenv').config();

// eslint-disable-next-line no-undef
let PORT = process.env.PORT;
// eslint-disable-next-line no-undef
let MONGODB_URI = process.env.MONGODB_URI;

module.exports = {
    MONGODB_URI,
    PORT
};