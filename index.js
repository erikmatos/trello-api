/*
let fs = require('fs')
let restify = require('restify')

function watcher(req, res, next) {
    console.log(req)
    res.send()
    next()
}

let server = restify.createServer()

server.get('/1/trello/webhook', watcher)

server.post('/1/trello/webhook', watcher)

let port = process.env.PORT || 5000

server.listen(port, function() {
    console.log('%s listening at %s on port %s', server.name, server.url, port)
});

*/
var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
    response.send('Hello World!')
})

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
})