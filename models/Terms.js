const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const termsSchema = new Schema({
    name: {type: String},
    dateCreated: {type: String},
    sailingDate: {type: String},
    bookingDate: {type: String},
    offerDetails: {type: String},
    sections: [{type: mongoose.Schema.Types.ObjectId, ref: 'Section'}],
    market: {type: mongoose.Schema.Types.ObjectId, ref: 'Market'},
});

const Terms = mongoose.model('Terms', termsSchema);

module.exports = Terms;