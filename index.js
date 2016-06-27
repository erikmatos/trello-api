var restify = require('restify')
var bunyan = require('bunyan')
var crypto = require('crypto')


// Setting a log to get all activities
var log = bunyan.createLogger({
    name: 'trello-api',
    level: process.env.LOG_LEVEL || 'info',
    stream: process.stdout,
    serializers: bunyan.stdSerializers
})

var base64Digest = function (content) {
    return crypto.createHmac('sha1', 'f464c9fadd96fe7faea26f2198a156f760f0ec2a57d9741cafb754f333454046').update(content).digest('base64');
}

function verifyTrelloWebhookRequest(request, secret, callbackURL) {
    // Double-HMAC to blind any timing channel attacks
    // https://www.isecpartners.com/blog/2011/february/double-hmac-verification.asp
    var base64Digest = function (s) {
        return crypto.createHmac('sha1', secret).update(s).digest('base64');
    }
    var content = request.body + callbackURL;
    var doubleHash = base64Digest(base64Digest(content));
    var headerHash = base64Digest(request.headers['x-trello-webhook']);



    return doubleHash == headerHash;
}

function watcher(req, res, next) {
    log.info("call");
    var isValid = verifyTrelloWebhookRequest(req, "f464c9fadd96fe7faea26f2198a156f760f0ec2a57d9741cafb754f333454046", "https://kyra-consulting.herokuapp.com/1/trello/webhook");
    log.info({trello_content: req.headers['x-trello-webhook'], valid: isValid})

    res.send()
    next()
}

var server = restify.createServer()

server.name = "trello-api"

server.head('/1/trello/webhook', watcher)

var port = (process.env.PORT || 5000)

server.listen(port, function()
    {
        console.log('%s listening at %s on port %s', server.name, server.url, port)
    }
)