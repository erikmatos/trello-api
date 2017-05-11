"use strict"

//region dependencies


//endregion

class FirebaseService {

    constructor() {

        let config = {
            apiKey: "AIzaSyCVPK-NxED8LiXpAmrJ812I4Gs7NusEmhM",
            authDomain: "<PROJECT_ID>.firebaseapp.com",
            databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
            storageBucket: "<BUCKET>.appspot.com",
        };

        firebase.initializeApp(config);
    }

    send(message){

        const messaging = firebase.messaging();

        messaging.requestPermission()
            .then(data => {

                console.log('Notification permission granted.');
                console.log(data);

                // TODO(developer): Retrieve an Instance ID token for use with FCM.
                // ...
            })
            .catch( err => {
                console.log('Unable to get permission to notify.', err);
            });


    }

}

const firebase = require("firebase");

module.exports = FirebaseService;