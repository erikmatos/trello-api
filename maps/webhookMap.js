"use strict"

class WebhookMap {

    constructor(){

    }

    //Region Public Functions
    get(data){

        if(Array.isArray(data)) {
            data = data[0]
        }

        let _webhookMap = {
            action: data.action,
            model : data.model
        }

        console.log(_webhookMap.action.type)

        return _webhookMap
    }

    //Region Public Functions
}

module.exports = WebhookMap