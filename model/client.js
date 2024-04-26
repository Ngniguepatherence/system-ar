const mongoose = require('mongoose');

const Client = new mongoose.Schema({
    name: { type: String, require: true},
    email: { type: String, require: true},
    password: { type: String, require: true},
    service: {type: String, require: true},
    phone: {type: String, require:true}

});

const client = mongoose.model('Client', Client);

module.exports = client;