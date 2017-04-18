"use strict";

let _ = require('lodash');

class WebhookAPI {

    constructor(server) {

        this.logger = server.log;
        this.trello = new Set(_.split("107.23.104.115,107.23.149.70,54.152.166.250,54.164.77.56", ","));
        //this.trello = new Set(_.split("127.0.0.1", ","));

        server.post('/webhook/:id', (req, res, next)=> {

            let referrer = req.headers['x-forwarded-for'];

            let payload = req.body;

            this.logger.info(payload);
            this.logger.info(req.params.id);
            this.logger.info(referrer);
            this.logger.info('POST');

            res.send(200);

            next();
        });

        server.get('/webhook/:id', (req, res, next)=> {

            let referrer = req.headers['x-forwarded-for'];

            let payload = req.body;

            this.logger.info(payload);
            this.logger.info(req.params.id);
            this.logger.info(referrer);
            this.logger.info('GET');

            res.send(200);

            next();
        });

        server.head('/webhook/:id', (req, res, next)=> {

            let remote = req.headers['x-forwarded-for'];

            this.logger.info(remote);
            this.logger.info('HEAD');

            res.send(200);
            next()
        })


    }

}

module.exports = WebhookAPI;