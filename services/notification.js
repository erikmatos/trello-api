"use strict"

//region dependencies


//endregion

class NotificationService {

    constructor(logger) {

    }

    notify(payload) {

        let requestOptions = { proxy: 'http://127.0.0.1:8000', timeout: 5000 };

        //sender
        let sender = new gcm.Sender('AIzaSyASQIxJNtC_lTKIevfzhQCw7FsyHQm6tz4');

        // Prepare a message to be sent
        let message = new gcm.Message({notification: { from: 'Erik', message: 'Hello Dear!' }});

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