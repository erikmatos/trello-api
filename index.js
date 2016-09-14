"use strict";
//https://developers.trello.com/apis/webhooks
let fs = require('fs');
let restify = require('restify');
let bunyan = require('bunyan');

let Routes = require('./routes');

// Setting a log to get all activities
let log = bunyan.createLogger({
    name: 'trello-api',
    level: process.env.LOG_LEVEL || 'info',
    stream: process.stdout,
    serializers: bunyan.stdSerializers
});

let options = {
    name: 'vescence-trello-api',
    log: log
}

let server = restify.createServer(options);

server.use(restify.bodyParser({ mapParams: false }));

new Routes(server);

let port = (process.env.PORT || 8000);

server.listen( port, function() {
        console.log('%s listening at %s on port %s', server.name, server.url, port)
    }
);

