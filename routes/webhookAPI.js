"use strict";

let WebhookService = require('../services/webhookService');
let _ = require('lodash');
/**
 * Webhook API.
 * @module Webhook
 */
class WebhookAPI {

    constructor(server) {

        this.logger = server.log;
        this.trello = new Set(_.split("107.23.104.115,107.23.149.70,54.152.166.250,54.164.77.56", ","));
        //this.trello = new Set(_.split("127.0.0.1", ","));
        this.service = new WebhookService();

        server.post('/trello/webhook', (req, res, next)=> {
            let remote = req.headers['x-forwarded-for'];

            if ( this.trello.has(remote) ) {
                this.service.post(req.body);

                this.logger.info(req.body);

                res.send(200);
            } else {
                res.send(401);
            }

            next();
        });

        server.head('/trello/webhook', (req, res, next)=> {
            let remote = req.headers['x-forwarded-for'];

            if ( this.trello.has(remote) ) {
                res.send(200);
            } else {
                res.send(401);
            }

            next();
        });
    }

}

module.exports = WebhookAPI;