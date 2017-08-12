const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    login: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    messages,
})

module.exports = mongoose.model('User', schema);