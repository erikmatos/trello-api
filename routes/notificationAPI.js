"use strict";

/**
 * FirebaseAPI.
 * @module Webhook
 */
class NotificationAPI {

    constructor(server) {

        this.logger = server.log;
        this.service = new NotificationService(this.logger);

        server.post('/notification', (req, res, next)=> {


            this.service.notify(req.body);

            res.send(200);

            next();
        });

    }

}

const NotificationService = require('../services/notification');

module.exports = NotificationAPI;
