const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shipSchema = new Schema({
    name: {type: String},
    code: {type: String}
});

const Ship = mongoose.model('Ship', shipSchema);

module.exports = Ship;