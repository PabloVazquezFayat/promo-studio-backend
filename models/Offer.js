const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
    type: {type: String},
    value: {type: String},
    associatedOffer: [{type: mongoose.Schema.Types.ObjectId, ref: 'Offer'}],
});

const Section = mongoose.model('Section', sectionSchema);

module.exports = Section;