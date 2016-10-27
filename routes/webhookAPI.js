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

        server.post('/webhook/:id', (req, res, next)=> {

            let referrer = req.headers['x-forwarded-for'];

            let payload = req.body;

            console.log(referrer);

            console.log(payload);

            //this.logger.info(req.params.id);

            //this.logger.info(remote);
            //this.logger.info("remote address valid [" + this.trello.has(remote) + "" );

            //this.service.post(req.body);

            res.send(200);

            next();
        });

        server.head('/webhook', (req, res, next)=> {
            let remote = req.headers['x-forwarded-for'];

            this.logger.info(remote);

            res.send(200);
            next()
        })

        server.post('/auth/bitbucket/callback', (req, res, next)=> {
            let remote = req.headers['x-forwarded-for'];

            this.logger.info("****" + remote + "****");
            this.logger.info(req.body);
            res.send(200);
            next();

        });

        server.post('/auth/bitbucket/webhook', (req, res, next)=> {
            let remote = req.headers['x-forwarded-for'];

            this.logger.info(req.body);
            res.send(200);
            next()
        })

    }

}

module.exports = WebhookAPI;