"use strict"

let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let webhookSchema = new Schema({
        action : { id: String, idMemberCreator : String, data : { board : { name : String, id : String } } }
    })

module.exports = mongoose.model('webhookSchema', webhookSchema)