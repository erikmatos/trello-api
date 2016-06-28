"use strict"

//region Dependencies

let WebhookSchema = require('../schemas/webhookSchema')

//endregion

class WebhookModel {

    constructor(){
    }

    //region Public functions

    get(){
        return new WebhookSchema();
    }

    post(data){

        let _webhookSchema = new WebhookSchema({
            action: data.action
        })

        return _webhookSchema;
    }

    //endregion
}

module.exports = WebhookModel