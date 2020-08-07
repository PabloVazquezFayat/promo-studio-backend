const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema({
    type: {type: String, minlength: 1, enum: ['Base', 'KSF', 'KICKER']},
    value: {type: String},
    associatedPromos: [{type: mongoose.Schema.Types.ObjectId, ref: 'Promo'}],
    combinable: {type: Boolean},
    combinableWith: [{type: mongoose.Schema.Types.ObjectId, ref: 'Offer'}]
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;