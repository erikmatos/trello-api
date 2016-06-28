"use strict"

let WebhookService = require('../services/webhookService')

class WebhookAPI {

    constructor(server) {

        server.post('/webhook', (req, res, next)=> {
            let webhookService = new WebhookService()

            webhookService.webhookService(req.body)
                .then(data => {
                    res.send(200, data)
                })
                .catch(err => {
                    res.send(400, err)
                })
            next()
        })
    }
}