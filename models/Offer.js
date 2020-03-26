const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema({
    name: {type: String, minlength: 3},
    type: {type: String, minlength: 1},
    markets: [String],
    value: {type: String},
    discount: {type: String},
    combinable: {type: Boolean},
    combinableOffers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Offer'}],
    ships: [String],
    destinations: [String],
    depaturePorts: [String],
    visitingPorts: [String],
    promoDates: [
        {
            start: {type: String},
            end: {type: String}
        }
    ],
    sailingDates: [
        {
            start: {type: String},
            end: {type: String}
        }
    ],
    numberOfNights: {type: String},
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;