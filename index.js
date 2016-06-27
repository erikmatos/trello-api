var restify = require('restify')
var bunyan = require('bunyan')

// Setting a log to get all activities
var log = bunyan.createLogger({
    name: 'trello-api',
    level: process.env.LOG_LEVEL || 'info',
    stream: process.stdout,
    serializers: bunyan.stdSerializers
})

//

function doHead(req, res, next) {
    log.debug({method: "HEAD"})
    doFlush(req, res, next);
}

function doPost(req, res, next) {
    log.debug({method: "POST"})
    log.info({"body": req.body});
    doFlush(req, res, next);
}

function doFlush(req, res, next){
    res.send()
    next()
}

var server = restify.createServer()

server.use(restify.bodyParser({ mapParams: false }))

server.name = "trello-api"

server.head('/1/trello/webhook', doHead)

server.post('/1/trello/webhook', doPost)

var port = (process.env.PORT || 5000)

server.listen(port, function()
    {
        console.log('%s listening at %s on port %s', server.name, server.url, port)
    }
)