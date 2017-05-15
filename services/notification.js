"use strict"

//region dependencies


//endregion

class NotificationService {

    constructor(logger) {

    }

    notify(payload) {

        //sender
        let sender = new gcm.Sender('AIzaSyAASEsaRIz8KT2Z-rK__1fJP4rglhe7jJM');

        // Prepare a message to be sent
        let message = new gcm.Message({notification: { from: 'Erik', message: 'Hello Dear!' }});

        // Specify which registration IDs to deliver the message to
        let regTokens = ['APA91bGamkoBIanpM3Otb58mEsMsU06dh-DYkKJIQprCmwbajotRX7wGk63sGe_lZsQ1LvyyMZOOGoWCPRasVu0IybIKUFc9ly5TLdZZbBJPHcMB5oDBY-dLnGgbfIiVFhmW5mupp6g4'];

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