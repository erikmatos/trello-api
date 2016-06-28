"use strict"

let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let webhookResponseSchema = new Schema({
    action : String
})

module.exports = mongoose.model('webhookResponseSchema', webhookResponseSchema)