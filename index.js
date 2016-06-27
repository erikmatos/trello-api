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

    var trelloServerAddress = req.headers['x-forwarded-for'];

    if ( trelloServerAddress == '107.23.104.115' || trelloServerAddress == '107.23.149.70' || trelloServerAddress == '54.152.166.250' || trelloServerAddress == '54.164.77.56' ) {
        log.info({'valid': 'true'})
    }

    log.info({"origin": trelloServerAddress})

    //log.info({"body": req.body})
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