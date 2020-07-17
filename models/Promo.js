const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const promoSchema = new Schema({
    name: {type: String, minlength: 3},
    type: {type: String, minlength: 1, enum: ['Monthly', 'Flash']},
    markets: {type: String},
    value: {type: String},
    combinable: {type: Boolean},
    combinablePromos: [{type: mongoose.Schema.Types.ObjectId, ref: 'Promo'}],
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

const Promo = mongoose.model('Promo', promoSchema);

module.exports = Promo;