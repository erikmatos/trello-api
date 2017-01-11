"use strict";

/**
 * Storage API.
 * @module Webhook
 */
class WebhookAPI {

    constructor(server) {

        this.logger = server.log;
        this.service = new StorageService();

        server.post('/storage/microsoft', (req, res, next)=> {


            this.service.post('microsoft', req.body);

            res.send(200);

            next();
        });

        server.get('/storage/microsoft', (req, res, next)=> {

            res.send(200);

            next();
        });

        server.post('/storage/oracle', (req, res, next)=> {

            this.service.post('oracle', req.body);

            res.send(200);

            next();
        });

        server.post('/storage/google', (req, res, next)=> {

            this.service.post('google', req.body);

            res.send(200);

            next();
        });


    }

}

const StorageService = require('../services/storageService');

module.exports = WebhookAPI;
