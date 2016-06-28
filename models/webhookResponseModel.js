"use strict"

//region Dependencies

let webhookResponseSchema = require('../schemas/webhookResponseSchema')

//endregion

class WebhookResponseModel{
    constructor(){
    }

    //region Public functions

    get(){
        return webhookResponse.findAsync()
    }

    post(data){

        let webhookResponseSchema = new webhookResponseSchema({
            action: data
        })


        return webhookResponseSchema;
    }

    //endregion
}

module.exports = WebhookResponseModel