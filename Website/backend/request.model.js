//send info to backend algo

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Forms = new Schema( {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    info: {type: String, required: false },
    skill: { type: [] }
});

module.exports = mongoose.model('Forms', Forms);
