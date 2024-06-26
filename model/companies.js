const mongoose = require('mongoose');

const Company = new mongoose.Schema({
    name: { type: String, require: true},
    email: { type: String, require: true},
    password: { type: String, require: true},
    phone: { type: String, require: true},
    address: { type: String, require: true},
    country: { type: String, require: true},
    website: { type: String, require: true},
    logo: { type: String, require: true},
    owner: {type: String, require: true},
    sector: {type: String, require: true}
});

const company = mongoose.model('companies', Company);

module.exports = company;