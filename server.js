var express = require('express');
var path = require('path');
var server = express();


server.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/app/index.html'))
});

server.use(express.static(path.join(__dirname)));
console.log('Polymer listening on port: 3000');
server.listen(3000);