/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

require('dotenv').config();

let PORT = process.env.PORT;
let MONGODB_URI = process.env.MONGODB_URI;
if (process.env.NODE_ENV === 'test') {
    MONGODB_URI = process.env.TEST_MONGODB_URI;
}

module.exports = {
    MONGODB_URI,
    PORT
};