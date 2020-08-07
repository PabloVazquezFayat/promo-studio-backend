const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const promoSchema = new Schema({
    name: {type: String, minlength: 3},
    type: {type: String, minlength: 1, enum: ['Monthly', 'Flash']},
    market: {type: String},
    offerValue: {type: String},
    offerDetails: {type: String},
    offers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Offer'}],
    ships: [String],
    destinations: [String],
    depaturePorts: [String],
    visitingPorts: [String],
    promoDate: {
        start: {type: String},
        end: {type: String}
    },
    sailingDate:{
        start: {type: String},
        end: {type: String}
    },
    numberOfNights: {type: String},
});

const Promo = mongoose.model('Promo', promoSchema);

module.exports = Promo;