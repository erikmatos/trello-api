"use strict";

let WebhookService = require('../services/webhookService');
/**
 * Webhook API.
 * @module Webhook
 */
class WebhookAPI {

    constructor(server) {

        this.logger = server.log;

        server.post('/webhook', (req, res, next)=> {


            this.validate(req, res, next);

            let _webhookService = new WebhookService();

            this.logger.info("/webhook");
            _webhookService.post(req.body);

            res.send(200);
            next()
        });

        server.post('/webhook/zapier', (req, res, next)=> {
            let _webhookService = new WebhookService();

            this.logger.info("/webhook/zapier");
            _webhookService.post(req.body);

            res.send(200);
            next()
        });

        server.head('/webhook', (req, res, next)=> {
            res.send(200);
            next()
        })
    }

    validate(req, res, next) {

        let trelloServerAddress = req.headers['x-forwarded-for'];

        if ( trelloServerAddress == '107.23.104.115' || trelloServerAddress == '107.23.149.70' || trelloServerAddress == '54.152.166.250' || trelloServerAddress == '54.164.77.56' ) {
            this.logger.info({'valid': 'true', 'origin': trelloServerAddress})
        }

        console.log("origin [%s]", trelloServerAddress);
        console.log(req.headers);

    }
}

module.exports = WebhookAPI;