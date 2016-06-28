"use strict"

class WebhookResponseMap {

    constructor(){

    }

    //Region Public Functions
    post(data){
        console.log(data)
        if(Array.isArray(data)) {
            data = data[0]
        }

        let webhookResponse = {
            action: data.action
        }

        return webhookResponse
    }

    //Region Public Functions
}

module.exports = WebhookResponseMap