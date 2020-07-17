const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema({
    type: {type: String},
    value: {type: String},
    associatedPromos: [{type: mongoose.Schema.Types.ObjectId, ref: 'Promo'}],
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;