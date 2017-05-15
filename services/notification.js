"use strict"

//region dependencies


//endregion

class NotificationService {

    constructor(logger) {

    }

    notify(payload) {

        //sender
        let sender = new gcm.Sender('AIzaSyD8RliMyxFtzawGM2iZwpYYS5glxnDaiWc');

        // Prepare a message to be sent
        let message = new gcm.Message({data: { key1: 'msg1' }});

        // Specify which registration IDs to deliver the message to
        let regTokens = ['dbZimjABRyY:APA91bGamkoBIanpM3Otb58mEsMsU06dh-DYkKJIQprCmwbajotRX7wGk63sGe_lZsQ1LvyyMZOOGoWCPRasVu0IybIKUFc9ly5TLdZZbBJPHcMB5oDBY-dLnGgbfIiVFhmW5mupp6g4'];

        // Actually send the message
        sender.send(message, { registrationTokens: regTokens }, function (err, response) {

            if (err) {

                console.error(err);

            } else {

                console.log(response);

            }

        });

    }

}

module.exports = NotificationService;

const gcm = require('node-gcm');