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

function doPost(req, res, next) {
    log.debug({method: "POST"});

    var trelloServerAddress = req.headers['x-forwarded-for'];

    if ( trelloServerAddress == '107.23.104.115' || trelloServerAddress == '107.23.149.70' || trelloServerAddress == '54.152.166.250' || trelloServerAddress == '54.164.77.56' ) {
        log.info({'valid': 'true', 'origin': trelloServerAddress})
    }

    log.info({"body": req.body});
    doFlush(req, res, next);
}

let server = restify.createServer();

server.use(restify.bodyParser({ mapParams: false }));

server.name = "trello-api";

new Routes(server);

let port = (process.env.PORT || 8000);

server.listen(port, function()
    {
        console.log('%s listening at %s on port %s', server.name, server.url, port)
    }
);

