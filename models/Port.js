const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portSchema = new Schema({
    name: {type: String},
    code: {type: String}
});

const Market = mongoose.model('Ports', portSchema);

module.exports = Market;