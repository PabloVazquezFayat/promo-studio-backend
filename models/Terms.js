const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const termsSchema = new Schema({
    name: {type: String},
});

const Terms = mongoose.model('Terms', termsSchema);

module.exports = Terms;