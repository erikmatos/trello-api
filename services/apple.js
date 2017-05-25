"use strict"

//region dependencies


//endregion

class AppleService {

    constructor(logger) {
        let options = { production: false, cert: '_cert/cert.pem', key: '_cert/key.pem' };
        this.apnProvider = new apn.Provider(options);
    }

    send(){

        let deviceToken = "54f9c30a5292d5dc6900083f3788b1528e98cee88b8c59570204219d32887cda";

        var notification = new apn.Notification();

        notification.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
        notification.sound = "ping.aiff";
        //notification.alert = "\uD83D\uDCE7 \u2709 You have a new message";
        notification.topic = "com.vescence.mobile";

        notification.title = "New card created!";
        notification.body = "Erik Alves de Matos has created a new card at Travel deck";

        this.apnProvider.send(notification, deviceToken)
            .then( result => {
                console.log(result);
            });

    }

}

const Promise = require("bluebird");
const apn = require('apn');

module.exports = AppleService;