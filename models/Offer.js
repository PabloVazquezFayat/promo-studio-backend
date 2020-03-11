const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema({
    name: {type: String},
    type: {type: String},
    market: {type: String},
    value: {type: String},
    combinable: {type: Boolean},
    combinableOffers: [String],
    ships: [String],
    destinations: [String],
    depaturePorts: [String],
    visitingPorts: [String],
    promoDates: [
        {
            start: {type: Date},
            end: {type: Date}
        }
    ],
    sailingDates: [
        {
            start: {type: Date},
            end: {type: Date}
        }
    ],
    numberOfNights: {type: Number},
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;