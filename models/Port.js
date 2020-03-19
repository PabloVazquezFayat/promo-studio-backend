const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portSchema = new Schema({
    name: {type: String},
    code: {type: String}
});

const Port = mongoose.model('Port', portSchema);

module.exports = Port;