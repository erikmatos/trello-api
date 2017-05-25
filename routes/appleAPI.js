"use strict";

/**
 * FirebaseAPI.
 * @module Webhook
 */
class AppleAPI {

    constructor(server) {

        this.logger = server.log;
        this.service = new AppleService(this.logger);

        server.post('/apple', (req, res, next)=> {


            this.service.send(req.body);

            res.send(200);

            next();
        });

    }

}

const AppleService = require('../services/apple');

module.exports = AppleAPI;