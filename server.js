"use strict"

let fs = require('fs')
let restify = require('restify')

function watcher(req, res, next) {
    //res.send('hello ' + req.params);

    console.log(req)
    res.send()
    next();
}

let server = restify.createServer()

server.get('/1/trello/webhook', watcher)

server.post('/1/trello/webhook', watcher)


server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url)
});