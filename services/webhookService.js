"use strict"

//region Dependencies

let WebhookResponseMap = require('../maps/WebhookResponseMap')

//endregion

class webhookServices {

    constructor() {

    }

    post(data) {
        console.log(data)
        let webhookResponseMap = new WebhookResponseMap()

        webhookResponseMap.post(data)
    }

}
    