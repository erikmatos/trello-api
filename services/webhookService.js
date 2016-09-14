"use strict"

//region dependencies

let WebhookMap = require('../maps/webhookMap');

//endregion

class WebhookService {

    constructor() {

    }

    post(data) {
        let _webhookMap = new WebhookMap();
        return _webhookMap.get(data);
    }

}

module.exports = WebhookService;