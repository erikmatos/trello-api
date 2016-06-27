var restify = require('restify')

function watcher(req, res, next) {
    console.log(req.getQuery())
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