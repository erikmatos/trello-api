"use strict"

//region dependencies


//endregion

class FirebaseService {

    constructor(logger) {

        let serviceAccount = {
            "project_id": "notification-server-a0225",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCSv/okOBMls95V\nkRrV+imzksLoPX5fTZrTiqDPqv12rGXW9nBVrlmCt937r9lu9vCtqNeckYoPV6nE\nMa1I3zO83m2zGmoaVHoy01+VygIh2oQpJIFTu45UQPG/xRHs6gHW4eQoIAFot3Vx\nYj3Q9H24xdpbdkzZvobeafhyYsCujoIMF0zs7bC6FVNYVo7P+/HRS1W8tBHSt4a+\nQ1GfvRjaaalAOwlW2onIR5fMKVvgP/sTBpx4DjhVkKkd4yHJrVlu6d3AAB/mT0do\nDNe2au9lDoMk1NlpWchwjDjKyBu+tTA3OFhgfzh2SUCj4+gzEg6llbeMXye6/EvF\nhvs/kXL7AgMBAAECggEAAUx5pkBoyvigixlRp3sjS1eNKgkBSU6ihCTB75SP0bEM\n5a4gqGF2oVWHPWb9AaJl1uObpOMU2bXo5reZ1P9EsfM1/VPKhJkiy7hbLDQxeKM6\ncDLGgjsys0Qv34aa9gHMKl6taj1+RbL58xrveR3wzuXRXOXbIEIzZ1yAumJtWh4d\nUdNsCWGCDXZURJUyN38jMJ713jxEsb/DuifTOABmqYG2rFoIMOY67soVLezqVMeF\nWSzWJ7Tb/phHgcIwtGEEIh3+/OsvxhgrBH3aUwLSnBDZaPVKC8tUCgxxw+Y3mTXd\nRRwSIdOc+WUihmzuQhKaZleMA1MTrN7WHpU8PZufoQKBgQDH/IAWsuYA6RKutGA+\nkuBN5izsqcAaOV4GUVZY2bOO7t4tbItd4dR77/xoMf+vwFPiXKLZ1GZoKVvpRcIS\nLjaG816pvwTf6+r3+3WiWGMSOpEJOUpCeOVge03AHpUSlnWZ/gAQkz8uhI7RM5nW\nFun3VF57wFaV7QZfkO3se166NwKBgQC72kw87zJPKuIZpRTbaKXuLUJjP+nYsd1D\njOcRkT1UHNBCazWcCgYg0MiNK8awrFielaVhS9CNUu0zeArJnjxVg253ko8/aaUk\nwreCqzUNU1X7xUYsh6693FA1bmn9DR62dKfXvJcUF6OE0aILfOFDCbxfmwAu9XV8\nWfViQZwbXQKBgHN8tyNkkDo6XlWRSHsaKnoR0COjK5J5Snjvg6OvpGeIPbmRkzHV\n9fTUc7hgFz2RHV/9CvYsGC9SowclB5ukIEzyQdpYuyHshTZLenUUAbJHK/ZdpSqZ\n0ixTSGUHxCKFzMfuzG7F+ZiNaEQbPl1JwjbX+/AO9HGD/Ug2047a96slAoGAIBg6\n4EpJwSblfFYtCxOFDf1jk0tvK5uv3wOq0uCKpt1JY5+niCJaS68AJMZu6u53MZkF\nqWrnlc2uQxXmWe4UBtQuwnUizkXBdldiPQv9Q2qSjTJ2O9Nusnd6qLZVm2trbObf\nakeJVGB5io66bdYHMonuSjNUQ7GiQf2opAHrpu0CgYEAlgHycrQCFvGLGy1cKNCG\nzMQRlHb8vBHloEpDfB6ktvodMbt3d/a226ouxW1sVpNUhXYORXejzvOpWygrHAx5\ntQrryl7KwLrPYTDMLhs9AtZ/RaBHfrw2dkl4l3ujF82Sr5aaGxmHX+lVnE+LbHdq\nwHs8tODFaiLut7iEUeo+rFc=\n-----END PRIVATE KEY-----\n",
            "client_email": "notification-server-a0225@appspot.gserviceaccount.com"
        };

        let credential = firebase.credential.cert({projectId: serviceAccount.project_id, clientEmail: serviceAccount.client_email, privateKey: serviceAccount.private_key});

        let application = firebase.initializeApp({credential: credential, databaseURL: "https://vescence-edce3.firebaseio.com"});

        this.messaging = firebase.messaging();

        logger.info("Google Application Loaded");

        console.log(application.name);
    }

    send(data){



        let registrationTokens = [];

        registrationTokens.push(data.token);

        let payload = {
            notification: {
                title: data.title,
                text: data.text
            }
        };

        Promise.resolve(
            this.messaging.sendToDevice(registrationTokens, payload)
                .then(data =>{
                    if ( data ) {
                        let hasError = data.failureCount > 0 ? true : false;
                        if ( hasError ) {
                            if ( data.results && data.results.length > 0 ) {
                                data.results.forEach(item =>{

                                    if ( item.error ) {
                                        console.log(item.error.message);
                                    }
                                })
                            }
                        }
                    }
                })
        )


    }

}

const firebase = require("firebase-admin");
const Promise = require("bluebird");

module.exports = FirebaseService;