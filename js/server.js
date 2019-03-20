const http = require('http');
const app = require('./app.js');
const port = process.enc.port || 5000;

http.createServer(app).listen(port);