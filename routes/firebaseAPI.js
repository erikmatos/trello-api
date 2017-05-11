"use strict";

/**
 * FirebaseAPI.
 * @module Webhook
 */
class FirebaseAPI {

    constructor(server) {

        this.logger = server.log;
        this.service = new FirebaseService();

        server.post('/firebase', (req, res, next)=> {


            this.service.send(req.body);

            res.send(200);

            next();
        });

    }

}

const FirebaseService = require('../services/firebase');

module.exports = FirebaseAPI;
