"use strict"

//region dependencies


//endregion

class FirebaseService {

    constructor(logger) {

        let serviceAccount = {
            "project_id": "vescence-edce3",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCgGsY1iQMGBtPl\nw8moDVBfG7XqTSXLHxyjVLe6z6cfUWtmVQrXSMgq4ny+XKsiJU4Z+NfoXGv04fDZ\nptdBP7HmhN+dvwUKPIRqhsrVTxyyCKFvwvfOy93wckb2OWaH8H80THpbmn4M9CW1\nKvS0y2I858f5fOGz/K9a5aYB8c77IS3vqlaNYfaxG4qZCNl/iRuOBn29oy8mVwfw\nfZM2Asc0TQ+ueSqFpKCjAGCKLvh32JJvRECxgX4OU/Xh+1ocQLb+7VM2ptQ/Bzub\n+vuGM2GSz9fpxqljqeSCBwS6u+Pzguqnvg7sQsaa1HHixP833Ionh4e+w2dAiie9\nQNBexWpRAgMBAAECggEAWQsrC6E89kAb36DJadalyY+e2EW57ENMaSZ33MUanJdq\n1QodMmi/MuKuIC1n3GDFFDrK0ed8/0Ad9N8OvrJPHfbua0xO4EeSGbEH5CTQv89/\nAap8qh3GPLFB+DUqahZ+mLakIohE7K1ov165pEetRlReaspiuPijCjnI3zH+PLpw\nDGP0Apq2fU338cLxgI9NG51oPStiuGyddrnvxaHQAMn5+b0K856gKb3BI5U84+Ij\nsRVVZIVMMa5NBlpkfqGpejLxUxoGeSV5klzndskZkkfk9iZp73KY6rkuvk4SreGJ\nfvzN5CURawzhPkhEKMMDKSsR3vneor3mAV6JeQWLNQKBgQDfSPhyg8aGviEcubg0\nM+PnGH4YoOuys/eGk8nhubJu52R62yHF+iVSxGxq1tP57MAKfpGbBxG9YAiXAs8m\nL5ab+ksFV3XUMSZH3Sc8TUgrJtaxmTWKGtVwKnLg+VE04xWLk4KISE6JP9AUWi+3\nZYtXIo2mP/l6MyOoUKsEr27uywKBgQC3kAQViQsx3HUoAudpGbdwtuPVyU0Wc+F5\n6GPGukycaQRKbzwxX7ybXw9FvPmaW+7HevoArzqO/yVG8fGOvQJDjwzpECSQhtLv\nZ/Fk+O4+hjPp57lqXedaJ/yVQlPbh8TsggA6Ls8mzV1hGa9wpibyRoLIafrcjMEE\nv+a4vt+r0wKBgHPwwgFEZ5ujsjHmRb3li9t9nkxPktOyGz9oEhYBhKONx2D71Cem\n4iZ+FAXOEzfdNUK9wgGLxCxfZ1ZygPnFECFh7/6QEYDjHIuITE1Fm8m8WxLRCTnz\nAQ1DHW+wRfh+Sbu2FruJQC6IUhWfVtOWCKpwKLlA0twfHc7SRFskdSfNAoGBAIqq\nBRvLiaRh2DKgdvVDEvrXfabKySvz39k6ftzpcOQaxL4B52OY4Z4xIhVZWuiLGAai\n1GZd+It7HErKi+J6z1H/pw4MPsLaxk9JouXW0gpzUJYakUtTomfNmxWZpEVK+6x5\ny/gn0h6Ktkaao5giO3t7XmJNBM9EmK6g1Ias0cQ3AoGAXQU36ran1HJGOiWWZRIt\nxFfyaq0WkZj2IPgp5LZIbgVBfkMlegTkZk+R0gz0PUfUQI2e13AckfA1iNCQWdD4\nMHE89IL7Dz+GqkJR0HqlrcwrRm0fCnX+s+pSF/SIu8XXuLeT+sZO3rTW1IMifh4n\nZJjFxzsj0AGGRzX7TIM+7w8=\n-----END PRIVATE KEY-----\n",
            "client_email": "firebase-adminsdk-uoux3@vescence-edce3.iam.gserviceaccount.com"
        };

        let credential = firebase.credential.cert({projectId: serviceAccount.project_id, clientEmail: serviceAccount.client_email, privateKey: serviceAccount.private_key});

        let application = firebase.initializeApp({credential: credential, databaseURL: "https://vescence-edce3.firebaseio.com"});

        logger.info("Google Application Loaded");

        console.log(application.name);
    }

    send(message){

        const messaging = firebase.messaging();

        Promise.resolve(
            messaging.requestPermission()
            .then(data => {

                console.log('Notification permission granted.');
                console.log(data);

                // TODO(developer): Retrieve an Instance ID token for use with FCM.
                // ...
            })
            .catch( err => {
                console.log('Unable to get permission to notify.', err);
            })
        )


    }

}

const firebase = require("firebase-admin");
const Promise = require("bluebird");

module.exports = FirebaseService;