const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const marketSchema = new Schema({
    name: {type: String},
    code: {type: String}
});

const Market = mongoose.model('Market', marketSchema);

module.exports = Market;