const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Forms = new Schema( {
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    info: {
        type: String
    },
    skill: {
        type: String
    },
});

module.exports = mongoose.model('Forms', Forms);