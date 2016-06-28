"use strict"

let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let webhook = new Schema({
        action :
        {
            id: String,
            idMemberCreator : String,
            type : String,
            date : Date,
            data : {
                board : { shortLink : String, name : String, id : String },
                list : { name : String, id : String },
                card : { link : String, idShort : Number, name : String, id : String},
                text : String
           }
        },
        model : {
            id: String,
            name : String,
            closed : Boolean
       }
    })

module.exports = mongoose.model('webhook', webhook)