"use strict"

let WebhookService = require('../services/webhookService')
/**
 * Webhook API.
 * @module Webhook
 */
class WebhookAPI {

    constructor(server) {

        server.post('/webhook', (req, res, next)=> {
            let webhookService = new WebhookService()

            webhookService.post(req.body)

            res.send()
            next()
        })
    }
}

module.exports = WebhookAPI