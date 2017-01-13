"use strict";
//https://developers.trello.com/apis/webhooks
let fs = require('fs');
let restify = require('restify');
let bunyan = require('bunyan');

let Routes = require('./routes');

// Setting a log to get all activities
let log = bunyan.createLogger({
    name: 'trello-integration',
    level: process.env.LOG_LEVEL || 'info',
    stream: process.stdout,
    serializers: bunyan.stdSerializers
});

let options = {
    name: 'integration-proof-of-concept',
    log: log
}

let server = restify.createServer(options);

server.use(restify.bodyParser({ mapParams: false }));

server.get('/', function indexHTML(req, res, next) {

    fs.readFile(__dirname + '/views/index.html', function (err, data) {
        if (err) {
            next(err);
            return;
        }

        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end(data);
        next();
    });
});

server.get('/callback', function indexHTML(req, res, next) {

    fs.readFile(__dirname + '/views/index.html', function (err, data) {
        if (err) {
            next(err);
            return;
        }

        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end(data);
        next();
    });
});

new Routes(server);

let port = (process.env.PORT || 8000);

server.listen( port, function() {
        console.log('%s listening at %s on port %s', server.name, server.url, port)
    }
);

