"use strict";

let WebhookService = require('../services/webhookService');
/**
 * Webhook API.
 * @module Webhook
 */
class WebhookAPI {

    constructor(server) {

        server.post('/webhook', (req, res, next)=> {
            let _webhookService = new WebhookService();

            _webhookService.post(req.body);

            res.send(200);
            next()
        });

        server.head('/webhook', (req, res, next)=> {
            res.send(200);
            next()
        })
    }
}

module.exports = WebhookAPI;