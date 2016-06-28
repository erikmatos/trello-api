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
            action: data.action
        }

        console.log(_webhookMap.action.id)

        console.log(_webhookMap.action.data.board.name)

        return _webhookMap
    }

    //Region Public Functions
}

module.exports = WebhookMap