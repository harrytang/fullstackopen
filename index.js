/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2019 Power Kernel
 */

const app = require('./app');
const http = require('http');
const config = require('./utils/config');

const server = http.createServer(app);

server.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
});