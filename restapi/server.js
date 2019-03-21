const http = require('http');
const app = require('./apiApp');
const port = process.env.port || 5000;

http.createServer(app).listen(port);