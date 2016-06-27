var restify = require('restify')
var bunyan = require('bunyan')

// Setting a log to get all activities
var log = bunyan.createLogger({
    name: 'trello-api',
    level: process.env.LOG_LEVEL || 'info',
    stream: process.stdout,
    serializers: bunyan.stdSerializers
})


function watcher(req, res, next) {
    console.log(req.getQuery())

    log.info({params: req.params, query: req.getQuery()});

    res.send()
    next()
}

var server = restify.createServer()

server.name = "trello-api"

server.get('/1/trello/webhook', watcher)

server.post('/1/trello/webhook', watcher)

var port = (process.env.PORT || 5000)

server.listen(port, function()
    {
        console.log('%s listening at %s on port %s', server.name, server.url, port)
    }
)